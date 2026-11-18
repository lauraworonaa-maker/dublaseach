const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const CRITERIA = ["tone", "intensity", "emotion", "rhythm", "diction", "fidelity"];

function score(value) {
  return Number.isInteger(value) && value >= 0 && value <= 100;
}

function cleanString(value, maxLength = 700) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function validateEvaluation(value) {
  if (!value || typeof value !== "object") throw new Error("Resposta de avaliação inválida.");
  if (value.status === "inconclusive") {
    return {
      status: "inconclusive",
      message: cleanString(value.message || value.summary || "O áudio não forneceu evidências suficientes para uma avaliação confiável.")
    };
  }
  if (value.status !== "success" || !score(value.overallScore)) throw new Error("A resposta do serviço não contém uma nota válida.");
  if (!value.criteria || typeof value.criteria !== "object") throw new Error("A resposta do serviço não contém os critérios de avaliação.");
  const criteria = {};
  for (const key of CRITERIA) {
    const item = value.criteria[key];
    if (!item || !score(item.score) || typeof item.feedback !== "string") throw new Error(`Critério de avaliação inválido: ${key}.`);
    criteria[key] = {
      score: item.score,
      classification: cleanString(item.classification, 48) || "inconclusive",
      feedback: cleanString(item.feedback, 500)
    };
  }
  const classification = ["below_target", "within_target", "above_target"].includes(value.classification) ? value.classification : "within_target";
  const list = field => Array.isArray(value[field]) ? value[field].filter(item => typeof item === "string").slice(0, 6).map(item => cleanString(item, 250)) : [];
  return {
    status: "success",
    overallScore: value.overallScore,
    classification,
    classificationLabel: cleanString(value.classificationLabel, 80),
    summary: cleanString(value.summary),
    criteria,
    strengths: list("strengths"),
    improvements: list("improvements"),
    exercises: list("exercises"),
    timestamps: Array.isArray(value.timestamps) ? value.timestamps.filter(item => Number.isFinite(item?.seconds) && item.seconds >= 0 && typeof item.note === "string").slice(0, 6).map(item => ({ seconds: Math.round(item.seconds), note: cleanString(item.note, 250) })) : [],
    transcript: cleanString(value.transcript, 700)
  };
}

export async function evaluateVoice({ audio, profile, duration }, env = process.env) {
  if ((env.VOICE_AI_PROVIDER || "openai") !== "openai") throw new Error("Provedor de avaliação não suportado.");
  if (!env.OPENAI_API_KEY) {
    const erro = new Error("A avaliação por IA ainda não está configurada. Defina OPENAI_API_KEY no ambiente do servidor.");
    erro.statusCode = 503;
    throw erro;
  }

  const prompt = `Você avalia exercícios de interpretação vocal para dublagem. Escute o áudio enviado; não avalie com base apenas no texto esperado. Compare o que foi realmente falado com a frase-alvo e com a orientação de interpretação.\n\nDê retorno prático e específico: diga o que funcionou e o que precisa melhorar. Para cada ponto de melhoria, explique uma ação que a pessoa possa tentar na próxima gravação. No tom vocal, julgue se a voz combina com o estilo indicado (por exemplo, controlado, firme, suave ou energético); não considere a voz grave ou aguda, por si só, um defeito. Avalie também intensidade/projeção, emoção, ritmo/entonação, dicção e fidelidade à frase. Aponte palavras omitidas, trocadas ou acrescentadas somente quando conseguir ouvi-las com clareza. Trate gosto artístico como subjetivo e use linguagem respeitosa.\n\nNão compare com tentativas anteriores: avalie somente este áudio. Não identifique nem imite pessoas reais. Se o áudio estiver silencioso, incompreensível, muito curto ou não contiver fala suficiente para julgar, retorne status inconclusive e não dê notas. Não invente palavras, problemas ou timestamps. Só inclua timestamps quando conseguir localizar claramente um trecho.\n\nPerfil vocal e frase esperada: ${JSON.stringify(profile)}\nDuração: ${duration} segundos.\n\nResponda somente com um objeto JSON neste formato: {"status":"success|inconclusive","overallScore":0,"classification":"below_target|within_target|above_target","classificationLabel":"...","summary":"resumo simples do desempenho","criteria":{"tone":{"score":0,"classification":"adequate|needs_improvement|too_high|inconclusive","feedback":"observação concreta sobre adequação do tom e como ajustar"},"intensity":{"score":0,"classification":"adequate|needs_improvement|too_high|inconclusive","feedback":"..."},"emotion":{"score":0,"classification":"adequate|needs_improvement|too_high|inconclusive","feedback":"..."},"rhythm":{"score":0,"classification":"adequate|needs_improvement|too_high|inconclusive","feedback":"..."},"diction":{"score":0,"classification":"adequate|needs_improvement|too_high|inconclusive","feedback":"..."},"fidelity":{"score":0,"classification":"adequate|needs_improvement|too_high|inconclusive","feedback":"compare fala ouvida com a frase-alvo"}},"strengths":["pontos fortes realmente audíveis"],"improvements":["o que melhorar e como fazer"],"exercises":["exercícios curtos e aplicáveis"],"timestamps":[{"seconds":0,"note":"..."}],"transcript":"transcrição do que foi entendido"}. Se inconclusivo, responda apenas {"status":"inconclusive","message":"explique por que não há evidência suficiente"}.`;

  const response = await fetch(OPENAI_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    signal: AbortSignal.timeout(60_000),
    body: JSON.stringify({
      model: env.OPENAI_AUDIO_MODEL || "gpt-audio-1.5",
      modalities: ["text", "audio"],
      audio: { voice: "alloy", format: "wav" },
      store: false,
      messages: [{ role: "user", content: [
        { type: "text", text: prompt },
        { type: "input_audio", input_audio: { data: audio.toString("base64"), format: "wav" } }
      ] }]
    })
  });
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const erro = new Error(body?.error?.message || "O provedor de IA não conseguiu analisar o áudio.");
    erro.statusCode = response.status === 429 ? 503 : 502;
    throw erro;
  }
  const content = body?.choices?.[0]?.message?.content;
  if (typeof content !== "string") throw new Error("O provedor não retornou uma avaliação em texto.");
  let resultado;
  try {
    resultado = JSON.parse(content.replace(/^```(?:json)?\s*|\s*```$/g, ""));
  } catch {
    throw new Error("O provedor retornou uma avaliação que não pôde ser validada.");
  }
  return validateEvaluation(resultado);
}
