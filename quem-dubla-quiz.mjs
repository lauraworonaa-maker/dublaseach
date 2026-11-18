import { quizRecords, buildQuizQuestion, validateQuizRecord, shuffleQuizRecords } from "./dubbing-quiz-data.mjs";

const $ = id => document.getElementById(id);
const state = { pool: [], current: null, index: 0, score: 0, correct: 0, wrong: 0, answered: false };
const validRecords = quizRecords.filter(validateQuizRecord);
const sections = ["quizLoading", "quizError", "quizIntro", "quizGame", "quizResults"];
const show = id => { for (const section of sections) $(section).hidden = section !== id; };
async function imageFor(record) {
  const title = encodeURIComponent(record.imagePage.replaceAll(" ", "_"));
  const response = await fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${title}`, { signal: AbortSignal.timeout(7000) });
  if (!response.ok) throw new Error("Imagem indisponível");
  const summary = await response.json();
  if (!summary.thumbnail?.source) throw new Error("Imagem indisponível");
  return { src: summary.thumbnail.source, credit: summary.title || record.imagePage };
}

function updateScoreline() {
  $("scoreText").textContent = `⭐ ${state.score} ${state.score === 1 ? "ponto" : "pontos"}`;
  $("correctCount").textContent = `✓ ${state.correct} ${state.correct === 1 ? "acerto" : "acertos"}`;
  $("wrongCount").textContent = `✕ ${state.wrong} ${state.wrong === 1 ? "erro" : "erros"}`;
}

async function renderQuestion() {
  state.current = buildQuizQuestion(state.pool[state.index]);
  state.answered = false;
  const question = state.current;
  $("roundText").textContent = `Rodada ${state.index + 1} de ${state.pool.length}`;
  const progress = $("gameProgress");
  progress.style.width = `${((state.index + 1) / state.pool.length) * 100}%`;
  progress.parentElement.setAttribute("aria-valuemax", String(state.pool.length));
  progress.parentElement.setAttribute("aria-valuenow", String(state.index + 1));
  $("questionText").textContent = `Quem é o dublador brasileiro de ${question.character}?`;
  $("workText").textContent = question.work;
  $("options").replaceChildren();
  $("answerFeedback").textContent = "";
  $("nextQuestion").hidden = true;
  $("creditSource").innerHTML = `Crédito consultado: <a href="${question.source}" target="_blank" rel="noopener noreferrer">fonte do elenco</a>`;
  const image = $("characterImage");
  image.onerror = () => {
    image.removeAttribute("src");
    image.alt = `Imagem indisponível para ${question.character}`;
    $("imageCredit").textContent = "Imagem temporariamente indisponível.";
  };
  image.alt = `Imagem relacionada a ${question.character}`;
  image.src = "";
  $("imageCredit").textContent = "Imagem ilustrativa; créditos do arquivo na página de origem.";
  imageFor(question).then(result => {
    if (state.current?.id === question.id) {
      image.src = result.src;
      $("imageCredit").innerHTML = `Imagem: <a href="${question.imageSource}" target="_blank" rel="noopener noreferrer">${result.credit} (Wikipédia)</a>`;
    }
  }).catch(() => {
    // A question remains playable when a third-party image service is unavailable.
    if (state.current?.id !== question.id) return;
    image.removeAttribute("src");
    image.alt = `Imagem indisponível para ${question.character}`;
    $("imageCredit").textContent = "Imagem temporariamente indisponível.";
  });
  for (const [index, name] of question.options.entries()) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${name}`;
    button.addEventListener("click", () => answer(index));
    $("options").append(button);
  }
  updateScoreline();
}

function answer(index) {
  if (state.answered) return;
  state.answered = true;
  const right = index === state.current.correctIndex;
  if (right) { state.correct++; state.score++; }
  else state.wrong++;
  [...$("options").children].forEach((button, optionIndex) => {
    button.disabled = true;
    if (optionIndex === state.current.correctIndex) button.classList.add("answer-correct");
    if (optionIndex === index && !right) button.classList.add("answer-wrong");
  });
  const icon = right ? "✓" : "✕";
  const message = right ? "Resposta correta!" : "Não foi dessa vez!";
  $("answerFeedback").innerHTML = `<strong>${icon} ${message}</strong><span>A resposta é ${state.current.correct}.</span><span>${state.current.fact}</span>`;
  updateScoreline();
  $("nextQuestion").textContent = state.index === state.pool.length - 1 ? "Ver resultado" : "Próximo personagem";
  $("nextQuestion").hidden = false;
  $("nextQuestion").focus();
}

function performance() {
  const ratio = state.correct / state.pool.length;
  if (ratio === 1) return "Mestre das vozes! Você conhece muito bem os dubladores brasileiros!";
  if (ratio >= .7) return "Você entende bastante de dublagem!";
  if (ratio >= .4) return "Você já reconhece algumas vozes brasileiras!";
  return "Você está começando a conhecer o universo da dublagem!";
}

function finish() {
  const percent = Math.round(state.correct / state.pool.length * 100);
  $("quizResults").innerHTML = `<span class="quiz-kicker">PARTIDA CONCLUÍDA</span><h1>Seu resultado</h1><div class="results-score">${state.score}<small>/${state.pool.length} pontos</small></div><p><strong>${state.correct}</strong> acertos · <strong>${state.wrong}</strong> erros · <strong>${percent}%</strong> de acertos</p><p>${performance()}</p><div class="results-actions"><button class="btn btn-primary btn-lg" id="playAgain" type="button">Jogar novamente</button><a class="btn btn-outline-primary btn-lg" href="./index.html#jogos">Voltar para Jogos</a></div>`;
  $("quizResults").querySelector("#playAgain").addEventListener("click", startGame);
  show("quizResults");
}

async function startGame() {
  state.pool = shuffleQuizRecords(validRecords).slice(0, Math.min(10, validRecords.length));
  state.index = state.score = state.correct = state.wrong = 0;
  state.answered = false;
  show("quizGame");
  await renderQuestion();
  $("options").querySelector("button")?.focus();
}

$("availableRounds").textContent = String(validRecords.length);
if (validRecords.length < 3) {
  show("quizError");
  $("quizError").textContent = "Ainda não há créditos suficientes para montar perguntas seguras. São necessários registros completos com três nomes distintos.";
} else {
  show("quizIntro");
  $("startGame").addEventListener("click", startGame);
  $("nextQuestion").addEventListener("click", async () => {
    if (!state.answered) return;
    if (state.index + 1 >= state.pool.length) { finish(); return; }
    state.index++;
    await renderQuestion();
    $("options").querySelector("button")?.focus();
  });
}
