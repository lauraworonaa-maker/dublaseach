import test from "node:test";
import assert from "node:assert/strict";
import { createAppServer } from "./server.mjs";
import { validateEvaluation } from "./voice-evaluation-provider.mjs";

const criterio = { score: 75, classification: "adequate", feedback: "Boa correspondência para o perfil." };
const avaliacaoValida = {
  status: "success", overallScore: 78, classification: "within_target", summary: "Interpretação clara.",
  criteria: { tone: criterio, intensity: criterio, emotion: criterio, rhythm: criterio, diction: criterio, fidelity: criterio },
  strengths: ["Boa clareza"], improvements: ["Trabalhar as pausas"], exercises: ["Repetir com pausas naturais"], timestamps: []
};

test("valida avaliação estruturada e normaliza o contrato", () => {
  const result = validateEvaluation(avaliacaoValida);
  assert.equal(result.status, "success");
  assert.equal(result.criteria.fidelity.score, 75);
});

test("permite resultado inconclusivo sem inventar nota", () => {
  assert.deepEqual(validateEvaluation({ status: "inconclusive", message: "Não há fala compreensível." }), {
    status: "inconclusive", message: "Não há fala compreensível."
  });
});

test("rejeita nota fora da faixa e critérios incompletos", () => {
  assert.throws(() => validateEvaluation({ ...avaliacaoValida, overallScore: 140 }));
  assert.throws(() => validateEvaluation({ ...avaliacaoValida, criteria: {} }));
});

test("serve biblioteca e informa quando a chave de IA não está configurada", async t => {
  const previousKey = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  const server = createAppServer();
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  t.after(() => {
    server.close();
    if (previousKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = previousKey;
  });
  const base = `http://127.0.0.1:${server.address().port}`;
  const page = await fetch(`${base}/biblioteca.html`);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /Biblioteca de Vozes/);
  const health = await fetch(`${base}/api/health`).then(response => response.json());
  assert.equal(health.aiConfigured, false);
  const blocked = await fetch(`${base}/api/voice-evaluation`, { method: "POST", headers: { "X-Voice-Consent": "granted", "Content-Type": "multipart/form-data; boundary=none" }, body: "" });
  assert.equal(blocked.status, 503);
});
