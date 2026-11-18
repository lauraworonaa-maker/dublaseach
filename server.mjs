import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateVoice } from "./voice-evaluation-provider.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
try { process.loadEnvFile(path.join(ROOT, ".env")); } catch (error) { if (error.code !== "ENOENT") throw error; }
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimits = new Map();
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml" };

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
  response.end(JSON.stringify(data));
}

function checkRateLimit(ip) {
  const now = Date.now();
  const recent = (rateLimits.get(ip) || []).filter(time => now - time < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) return false;
  recent.push(now);
  rateLimits.set(ip, recent);
  return true;
}

async function readLimitedBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_UPLOAD_BYTES + 32_000) {
      const erro = new Error("O envio excede o limite de 8 MB.");
      erro.statusCode = 413;
      throw erro;
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function insideRoot(filename) {
  const relative = path.relative(ROOT, filename);
  return relative && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

async function serveStatic(request, response, pathname) {
  let requested = decodeURIComponent(pathname === "/" ? "/index.html" : pathname);
  const filename = path.resolve(ROOT, `.${requested}`);
  if (!insideRoot(filename) || path.basename(filename).startsWith(".") || ["server.mjs", "voice-evaluation-provider.mjs", "package.json", "package-lock.json", "BIBLIOTECA.md"].includes(path.basename(filename))) {
    response.writeHead(404); response.end("Not found"); return;
  }
  try {
    const content = await readFile(filename);
    response.writeHead(200, {
      "Content-Type": TYPES[path.extname(filename)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy": "default-src 'self' https://cdn.jsdelivr.net; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https://upload.wikimedia.org https://static.wixstatic.com https://pbs.twimg.com https://conteudo.imguol.com.br https://entretetizei.com.br https://static-1.ivoox.com https://i0.wp.com https://ccxp-production-files.s3.amazonaws.com https://br.web.img3.acsta.net https://feira.tangerina.news https://s2-gshow.glbimg.com https://a-memoria-da-dublagem.weebly.com https://www.film.ru https://ogimg.infoglobo.com.br; media-src 'self' blob:; connect-src 'self' https://pt.wikipedia.org; object-src 'none'; base-uri 'self'; frame-ancestors 'self'"
    });
    response.end(content);
  } catch {
    response.writeHead(404); response.end("Not found");
  }
}

async function analyze(request, response) {
  if (request.headers["x-voice-consent"] !== "granted") return sendJson(response, 400, { error: "Confirme o consentimento antes de enviar o áudio." });
  if (!process.env.OPENAI_API_KEY) {
    request.resume();
    return sendJson(response, 503, { error: "A avaliação real por IA ainda não está configurada. Consulte BIBLIOTECA.md." });
  }
  if (!checkRateLimit(request.socket.remoteAddress || "unknown")) {
    request.resume();
    return sendJson(response, 429, { error: "Limite de avaliações atingido. Tente novamente em alguns minutos." });
  }
  const contentType = request.headers["content-type"] || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data;")) return sendJson(response, 415, { error: "Envie a gravação em um formulário multipart." });
  const declaredLength = Number(request.headers["content-length"] || 0);
  if (declaredLength > MAX_UPLOAD_BYTES + 32_000) {
    request.resume();
    return sendJson(response, 413, { error: "O envio excede o limite de 8 MB." });
  }
  try {
    const buffer = await readLimitedBody(request);
    const form = await new Request("http://localhost", { method: "POST", headers: { "Content-Type": contentType }, body: buffer }).formData();
    const audio = form.get("audio");
    const profileText = form.get("profile");
    const duration = Number(form.get("duration"));
    if (!audio || typeof audio.arrayBuffer !== "function" || audio.size < 44 || audio.size > MAX_UPLOAD_BYTES) return sendJson(response, 400, { error: "A gravação está vazia ou excede 8 MB." });
    if (!audio.type.includes("wav")) return sendJson(response, 415, { error: "Formato de áudio incompatível. Grave novamente em um navegador compatível." });
    const audioBytes = Buffer.from(await audio.arrayBuffer());
    if (audioBytes.toString("ascii", 0, 4) !== "RIFF" || audioBytes.toString("ascii", 8, 12) !== "WAVE") return sendJson(response, 415, { error: "O arquivo enviado não é um WAV válido." });
    if (!Number.isFinite(duration) || duration < 1 || duration > 45) return sendJson(response, 400, { error: "A gravação deve ter entre 1 e 45 segundos." });
    if (typeof profileText !== "string" || profileText.length > 4_000) return sendJson(response, 400, { error: "Os critérios do perfil estão ausentes ou são inválidos." });
    let profile;
    try { profile = JSON.parse(profileText); } catch { return sendJson(response, 400, { error: "Os critérios do perfil não são JSON válido." }); }
    for (const key of ["name", "emotion", "style", "direction", "phrase"]) {
      if (typeof profile[key] !== "string" || !profile[key].trim() || profile[key].length > 600) return sendJson(response, 400, { error: "O perfil de interpretação está incompleto." });
    }
    const result = await evaluateVoice({ audio: audioBytes, profile, duration });
    sendJson(response, 200, result);
  } catch (error) {
    console.error("voice-evaluation error:", error.message);
    sendJson(response, error.statusCode || 502, { error: error.statusCode === 503 ? error.message : "Não foi possível concluir a avaliação. Nenhuma nota foi criada; tente novamente mais tarde." });
  }
}

export function createAppServer() {
  return createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://localhost");
    if (url.pathname === "/api/health" && request.method === "GET") return sendJson(response, 200, { aiConfigured: Boolean(process.env.OPENAI_API_KEY) });
    if (url.pathname === "/api/voice-evaluation" && request.method === "POST") return analyze(request, response);
    if (url.pathname.startsWith("/api/")) return sendJson(response, 404, { error: "Rota não encontrada." });
    if (request.method !== "GET" && request.method !== "HEAD") { response.writeHead(405); response.end(); return; }
    return serveStatic(request, response, url.pathname);
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = createAppServer();
  const port = Number(process.env.PORT || 3000);
  server.listen(port, () => console.log(`DublaSeach disponível em http://localhost:${port}`));
}
