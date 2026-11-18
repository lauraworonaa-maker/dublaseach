import test from "node:test";
import assert from "node:assert/strict";
import { quizRecords, validateQuizRecord, buildQuizQuestion, shuffleQuizRecords } from "./dubbing-quiz-data.mjs";
import { createAppServer } from "./server.mjs";

test("base tem apenas registros completos e créditos distintos por pergunta", () => {
  assert.equal(quizRecords.length, 10);
  assert.ok(quizRecords.every(validateQuizRecord));
  for (const item of quizRecords) {
    const question = buildQuizQuestion(item, () => 0.42);
    assert.equal(question.options.length, 3);
    assert.equal(new Set(question.options.map(name => name.toLocaleLowerCase("pt-BR"))).size, 3);
    assert.equal(question.options[question.correctIndex], item.correct);
    assert.match(item.source, /^https:\/\//);
  }
});

test("embaralha as dez perguntas sem alterar registros nem repetir personagens", () => {
  const originalIds = quizRecords.map(item => item.id);
  const originalCharacters = quizRecords.map(item => item.character.toLocaleLowerCase("pt-BR"));
  const firstDeck = shuffleQuizRecords(quizRecords, () => 0.15);
  const secondDeck = shuffleQuizRecords(quizRecords, () => 0.85);
  assert.equal(firstDeck.length, 10);
  assert.equal(new Set(firstDeck.map(item => item.id)).size, 10);
  assert.equal(new Set(firstDeck.map(item => item.character.toLocaleLowerCase("pt-BR"))).size, 10);
  assert.deepEqual(new Set(firstDeck.map(item => item.id)), new Set(originalIds));
  assert.deepEqual(new Set(originalCharacters).size, 10);
  assert.notDeepEqual(firstDeck.map(item => item.id), secondDeck.map(item => item.id));
});

test("rejeita pergunta incompleta e alternativas repetidas", () => {
  assert.equal(validateQuizRecord({ ...quizRecords[0], distractors: ["Manolo Rey", "manolo rey"] }), false);
  assert.throws(() => buildQuizQuestion({ ...quizRecords[0], work: "" }));
});

test("serve página do novo jogo e permite API de imagem sob CSP", async t => {
  const server = createAppServer();
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  const page = await fetch(`${base}/quem-dubla-quiz.html`);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /Quem Dubla Esse Personagem\?/);
  const appScript = await fetch(`${base}/quem-dubla-quiz.mjs`);
  assert.equal(appScript.status, 200);
  const homepage = await fetch(`${base}/index.html`);
  assert.match(await homepage.text(), /Jogar agora/);
  assert.match(homepage.headers.get("content-security-policy"), /https:\/\/pt\.wikipedia\.org/);
});
