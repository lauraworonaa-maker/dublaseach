const perfisDeVoz = [
  { id: "vilao-calculista", nome: "Estrategista das sombras", categoria: "Vilões", emocao: "Ameaça e confiança", estilo: "Grave e controlado", descricao: "Uma mente paciente que raramente precisa elevar a voz.", orientacao: "Transmita autoridade com firmeza, sem gritar. Sustente as palavras importantes e deixe as pausas criarem tensão.", frase: "Você ainda não percebeu que cada escolha sua abriu o caminho que eu precisava?" },
  { id: "heroina-guardia", nome: "Guardiã da última cidade", categoria: "Heróis", emocao: "Coragem e esperança", estilo: "Firme e caloroso", descricao: "Líder que protege seu povo mesmo quando também sente medo.", orientacao: "Comece com serenidade e cresça em determinação, mantendo a fala acolhedora.", frase: "Enquanto houver alguém precisando de ajuda, esta cidade ainda não caiu." },
  { id: "inventor-cartoon", nome: "Inventor de bolso", categoria: "Animação e desenhos", emocao: "Entusiasmo e curiosidade", estilo: "Agudo e energético", descricao: "Pequeno inventor que transforma qualquer problema em experimento.", orientacao: "Use ritmo vivo, articule bem e deixe a curiosidade aparecer sem atropelar as palavras.", frase: "Se essa fumaça ficou azul, significa que deu certo... quase com certeza!" },
  { id: "anime-rival", nome: "Rival do torneio", categoria: "Anime", emocao: "Orgulho e ansiedade", estilo: "Jovem e intenso", descricao: "Competidor talentoso tentando esconder o quanto se importa com a disputa.", orientacao: "Alterne confiança e vulnerabilidade; evite manter a mesma intensidade em toda a frase.", frase: "Treinei para este momento, mas não imaginei que você chegaria tão longe." },
  { id: "pilota-games", nome: "Pilota em missão", categoria: "Games", emocao: "Urgência e foco", estilo: "Médio e projetado", descricao: "Comandante de uma equipe diante de uma decisão em poucos segundos.", orientacao: "Projete a voz com clareza e urgência, preservando o fôlego e a compreensão.", frase: "Desviem para o corredor leste; eu seguro a passagem até vocês alcançarem a nave." },
  { id: "detetive-noir", nome: "Detetive da madrugada", categoria: "Cinema e séries", emocao: "Desconfiança e cansaço", estilo: "Rouco e contido", descricao: "Investigador experiente que percebe detalhes que os outros ignoram.", orientacao: "Fale com economia, use pausas intencionais e faça a suspeita surgir sem exagero.", frase: "A janela estava aberta, mas a poeira no chão conta uma história diferente." },
  { id: "comediante", nome: "Mestre de cerimônias", categoria: "Comédia", emocao: "Alegria e ironia", estilo: "Rítmico e expressivo", descricao: "Apresentador que improvisa quando o espetáculo sai do controle.", orientacao: "Brinque com o tempo da frase e reserve uma pequena pausa antes da surpresa.", frase: "A apresentação foi um sucesso: até o alarme pediu bis." },
  { id: "drama-irma", nome: "A despedida na estação", categoria: "Drama e emoção", emocao: "Saudade e contenção", estilo: "Suave e vulnerável", descricao: "Alguém tentando se despedir sem deixar a emoção interromper as palavras.", orientacao: "Segure a emoção no início e permita que ela apareça aos poucos, com naturalidade.", frase: "Guardei seu lugar na mesa, mesmo depois de aprender a jantar sozinha." },
  { id: "narrador", nome: "Cronista das marés", categoria: "Narração", emocao: "Admiração e mistério", estilo: "Grave e cadenciado", descricao: "Narrador que conduz o público até uma descoberta antiga.", orientacao: "Mantenha dicção precisa, ritmo estável e destaque as imagens principais do texto.", frase: "Quando a maré baixou, revelou uma estrada que nenhum mapa ousava registrar." },
  { id: "comercial", nome: "Anúncio de aventura", categoria: "Vozes comerciais", emocao: "Entusiasmo e convite", estilo: "Claro e sorridente", descricao: "Voz promocional para convidar o público a experimentar algo novo.", orientacao: "Soar próximo e convincente; evite uma energia artificial ou apressada.", frase: "Sua próxima grande aventura começa com uma porta e a coragem de abri-la." },
  { id: "vilao-cansado", nome: "Antagonista arrependido", categoria: "Vilões", emocao: "Culpa e hesitação", estilo: "Baixo e quebrado", descricao: "Alguém que venceu muitas batalhas, mas já não sabe se escolheu o lado certo.", orientacao: "Deixe pequenas quebras de confiança aparecerem sem perder a clareza da fala.", frase: "Eu consegui tudo o que queria. Só não sei mais por que isso parecia importante." },
  { id: "mascote", nome: "Criatura curiosa", categoria: "Animação e desenhos", emocao: "Encanto e surpresa", estilo: "Leve e musical", descricao: "Uma criatura recém-chegada ao mundo humano, maravilhada com coisas simples.", orientacao: "Experimente uma melodia natural na voz, com reações espontâneas e palavras bem articuladas.", frase: "Esse botão faz cócegas na luz! Podemos apertar mais uma vez?" }
];

const $ = seletor => document.querySelector(seletor);
const voiceGrid = $("#voiceGrid");
const voiceFilters = $("#voiceFilters");
const voiceStudio = $("#voiceStudio");
const recordingStatus = $("#recordingStatus");
const recordingPlayback = $("#recordingPlayback");
const historyElement = $("#recordingHistory");
let vozSelecionada = null;
let fluxoMicrofone = null;
let gravador = null;
let partesGravacao = [];
let gravacaoAtual = null;
let urlGravacao = "";
let inicioGravacao = 0;
let relogioIntervalo = null;
let duracaoGravacao = 0;
let urlsHistorico = [];
const LIMITE_SEGUNDOS = 45;
const MAX_BYTES = 8 * 1024 * 1024;
const DB_NAME = "dublaseach-gravacoes";
const DB_VERSION = 1;

function escapar(valor = "") {
  return String(valor).replace(/[&<>"']/g, caractere => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[caractere]);
}

function abrirBanco() {
  return new Promise((resolve, reject) => {
    const pedido = indexedDB.open(DB_NAME, DB_VERSION);
    pedido.onupgradeneeded = () => pedido.result.createObjectStore("gravacoes", { keyPath: "id", autoIncrement: true });
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => reject(pedido.error);
  });
}

async function listarGravacoes() {
  const banco = await abrirBanco();
  return new Promise((resolve, reject) => {
    const pedido = banco.transaction("gravacoes", "readonly").objectStore("gravacoes").getAll();
    pedido.onsuccess = () => { banco.close(); resolve(pedido.result.sort((a, b) => b.criadaEm - a.criadaEm)); };
    pedido.onerror = () => { banco.close(); reject(pedido.error); };
  });
}

async function salvarGravacao(blob) {
  const banco = await abrirBanco();
  return new Promise((resolve, reject) => {
    const pedido = banco.transaction("gravacoes", "readwrite").objectStore("gravacoes").add({
      perfil: vozSelecionada?.nome || "Gravação livre", duracao: duracaoGravacao, criadaEm: Date.now(), tipo: blob.type, audio: blob
    });
    pedido.onsuccess = () => { banco.close(); resolve(); };
    pedido.onerror = () => { banco.close(); reject(pedido.error); };
  });
}

async function excluirGravacao(id) {
  const banco = await abrirBanco();
  return new Promise((resolve, reject) => {
    const pedido = banco.transaction("gravacoes", "readwrite").objectStore("gravacoes").delete(Number(id));
    pedido.onsuccess = () => { banco.close(); resolve(); };
    pedido.onerror = () => { banco.close(); reject(pedido.error); };
  });
}

async function renderizarHistorico() {
  urlsHistorico.forEach(URL.revokeObjectURL);
  urlsHistorico = [];
  try {
    const gravacoes = await listarGravacoes();
    historyElement.innerHTML = gravacoes.length ? gravacoes.map(item => {
      const url = URL.createObjectURL(item.audio);
      urlsHistorico.push(url);
      const data = new Date(item.criadaEm).toLocaleString("pt-BR");
      return `<article class="recording-history-item"><div class="recording-history-info"><strong>${escapar(item.perfil)}</strong><span>${escapar(data)} · ${formatarTempo(item.duracao)}</span></div><audio controls preload="none" src="${url}" aria-label="Gravação de ${escapar(item.perfil)}"></audio><button class="btn btn-outline-danger" type="button" data-delete-recording="${item.id}" aria-label="Excluir gravação de ${escapar(item.perfil)}" title="Excluir gravação">🗑</button></article>`;
    }).join("") : `<p class="recording-history-empty">Nenhuma gravação salva ainda. Grave uma interpretação para começar seu histórico.</p>`;
  } catch {
    historyElement.innerHTML = `<p class="recording-history-empty">Não foi possível carregar o histórico neste navegador.</p>`;
  }
}

function popularFiltros() {
  const filtros = [
    ["#categoryFilter", [...new Set(perfisDeVoz.map(perfil => perfil.categoria))]],
    ["#emotionFilter", [...new Set(perfisDeVoz.map(perfil => perfil.emocao))]],
    ["#styleFilter", [...new Set(perfisDeVoz.map(perfil => perfil.estilo))]]
  ];
  filtros.forEach(([seletor, opcoes]) => opcoes.sort().forEach(opcao => {
    const item = document.createElement("option"); item.value = opcao; item.textContent = opcao; $(seletor).append(item);
  }));
}

function renderizarPerfis() {
  const busca = $("#voiceSearch").value.trim().toLocaleLowerCase("pt-BR");
  const categoria = $("#categoryFilter").value;
  const emocao = $("#emotionFilter").value;
  const estilo = $("#styleFilter").value;
  const resultados = perfisDeVoz.filter(perfil => {
    const texto = [perfil.nome, perfil.categoria, perfil.emocao, perfil.estilo, perfil.descricao, perfil.frase].join(" ").toLocaleLowerCase("pt-BR");
    return texto.includes(busca) && (!categoria || perfil.categoria === categoria) && (!emocao || perfil.emocao === emocao) && (!estilo || perfil.estilo === estilo);
  });
  $("#voiceCount").textContent = `${resultados.length} ${resultados.length === 1 ? "perfil" : "perfis"}`;
  voiceGrid.innerHTML = resultados.length ? resultados.map(perfil => `
    <article class="voice-card"><div class="voice-card-top"><span class="voice-category">${escapar(perfil.categoria)}</span><span class="voice-emotion">${escapar(perfil.emocao)}</span></div>
      <h3>${escapar(perfil.nome)}</h3><p>${escapar(perfil.descricao)}</p><p class="voice-style"><strong>Estilo vocal:</strong> ${escapar(perfil.estilo)}</p>
      <blockquote>“${escapar(perfil.frase)}”</blockquote><button type="button" class="btn btn-primary" data-test-voice="${escapar(perfil.id)}">Testar esta voz</button></article>`).join("") : `<div class="voice-empty"><h3>Nenhum perfil encontrado</h3><p>Tente mudar a busca ou os filtros.</p></div>`;
}

function selecionarVoz(id) {
  vozSelecionada = perfisDeVoz.find(perfil => perfil.id === id);
  if (!vozSelecionada) return;
  limparGravacao();
  $("#selectedVoice").innerHTML = `<span class="voice-category">${escapar(vozSelecionada.categoria)}</span><h3>${escapar(vozSelecionada.nome)}</h3><p>${escapar(vozSelecionada.descricao)}</p><p><strong>Emoção:</strong> ${escapar(vozSelecionada.emocao)} · <strong>Estilo:</strong> ${escapar(vozSelecionada.estilo)}</p><p><strong>Orientação:</strong> ${escapar(vozSelecionada.orientacao)}</p><blockquote>“${escapar(vozSelecionada.frase)}”</blockquote>`;
  voiceStudio.hidden = false;
  voiceStudio.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatarTempo(segundos) {
  return `${String(Math.floor(segundos / 60)).padStart(2, "0")}:${String(segundos % 60).padStart(2, "0")}`;
}

async function iniciarGravacao() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") { recordingStatus.textContent = "Este navegador não oferece suporte à gravação de áudio."; return; }
  if (!window.isSecureContext) { recordingStatus.textContent = "O navegador só permite acesso ao microfone em HTTPS ou localhost."; return; }
  try {
    fluxoMicrofone = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    const tipos = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"];
    const mimeType = tipos.find(tipo => MediaRecorder.isTypeSupported(tipo));
    gravador = mimeType ? new MediaRecorder(fluxoMicrofone, { mimeType }) : new MediaRecorder(fluxoMicrofone);
    partesGravacao = [];
    gravador.addEventListener("dataavailable", evento => { if (evento.data.size) partesGravacao.push(evento.data); });
    gravador.addEventListener("stop", finalizarGravacao, { once: true });
    gravador.start(250);
    inicioGravacao = Date.now();
    $("#recordingClock").textContent = "00:00";
    recordingStatus.innerHTML = `<span class="recording-live-dot"></span> Microfone ativo. Grave sua interpretação.`;
    $("#startRecording").disabled = true;
    $("#stopRecording").disabled = false;
    $("#redoRecording").disabled = true;
    relogioIntervalo = window.setInterval(() => {
      duracaoGravacao = Math.min(LIMITE_SEGUNDOS, Math.floor((Date.now() - inicioGravacao) / 1000));
      $("#recordingClock").textContent = formatarTempo(duracaoGravacao);
      if (duracaoGravacao >= LIMITE_SEGUNDOS) encerrarGravacao();
    }, 250);
  } catch (erro) {
    const mensagens = { NotAllowedError: "Permissão do microfone negada. Autorize o acesso nas configurações do navegador.", NotFoundError: "Nenhum microfone foi encontrado neste dispositivo.", NotReadableError: "O microfone está sendo usado por outro aplicativo.", SecurityError: "Use HTTPS ou localhost para acessar o microfone." };
    recordingStatus.textContent = mensagens[erro.name] || "Não foi possível iniciar o microfone. Verifique as permissões.";
    liberarMicrofone();
  }
}

function encerrarGravacao() {
  if (gravador && gravador.state !== "inactive") gravador.stop();
  if (relogioIntervalo) window.clearInterval(relogioIntervalo);
  relogioIntervalo = null;
  $("#stopRecording").disabled = true;
  $("#startRecording").disabled = false;
  liberarMicrofone();
}

function liberarMicrofone() {
  fluxoMicrofone?.getTracks().forEach(track => track.stop());
  fluxoMicrofone = null;
}

async function finalizarGravacao() {
  duracaoGravacao = Math.max(1, Math.min(LIMITE_SEGUNDOS, Math.round((Date.now() - inicioGravacao) / 1000)));
  gravacaoAtual = new Blob(partesGravacao, { type: gravador.mimeType || "audio/webm" });
  if (gravacaoAtual.size > MAX_BYTES) {
    recordingStatus.textContent = "A gravação passou do limite de 8 MB. Tente uma gravação mais curta.";
    $("#redoRecording").disabled = false;
    return;
  }
  if (urlGravacao) URL.revokeObjectURL(urlGravacao);
  urlGravacao = URL.createObjectURL(gravacaoAtual);
  recordingPlayback.src = urlGravacao;
  recordingPlayback.hidden = false;
  $("#recordingClock").textContent = formatarTempo(duracaoGravacao);
  try {
    await salvarGravacao(gravacaoAtual);
    recordingStatus.textContent = "Gravação salva no histórico. Você pode ouvi-la aqui ou no histórico.";
    await renderizarHistorico();
  } catch {
    recordingStatus.textContent = "Gravação pronta, mas não foi possível salvá-la no histórico deste navegador.";
  }
  $("#redoRecording").disabled = false;
}

function limparGravacao() {
  if (relogioIntervalo) window.clearInterval(relogioIntervalo);
  relogioIntervalo = null;
  liberarMicrofone();
  if (gravador && gravador.state !== "inactive") gravador.stop();
  partesGravacao = [];
  gravacaoAtual = null;
  duracaoGravacao = 0;
  if (urlGravacao) URL.revokeObjectURL(urlGravacao);
  urlGravacao = "";
  recordingPlayback.pause();
  recordingPlayback.removeAttribute("src");
  recordingPlayback.hidden = true;
  $("#recordingClock").textContent = "00:00";
  $("#startRecording").disabled = false;
  $("#stopRecording").disabled = true;
  $("#redoRecording").disabled = true;
}

function fecharEstudio() {
  limparGravacao();
  voiceStudio.hidden = true;
}

voiceFilters.addEventListener("submit", evento => evento.preventDefault());
voiceFilters.addEventListener("input", renderizarPerfis);
voiceFilters.addEventListener("change", renderizarPerfis);
voiceGrid.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-test-voice]");
  if (botao) selecionarVoz(botao.dataset.testVoice);
});
historyElement.addEventListener("click", async evento => {
  const botao = evento.target.closest("[data-delete-recording]");
  if (!botao) return;
  botao.disabled = true;
  try { await excluirGravacao(botao.dataset.deleteRecording); await renderizarHistorico(); }
  catch { botao.disabled = false; recordingStatus.textContent = "Não foi possível excluir esta gravação."; }
});
$("#startRecording").addEventListener("click", iniciarGravacao);
$("#stopRecording").addEventListener("click", encerrarGravacao);
$("#redoRecording").addEventListener("click", () => { limparGravacao(); recordingStatus.textContent = "Gravação apagada do estúdio. O histórico continua salvo."; });
$("#closeStudio").addEventListener("click", fecharEstudio);
window.addEventListener("beforeunload", () => {
  liberarMicrofone();
  if (urlGravacao) URL.revokeObjectURL(urlGravacao);
  urlsHistorico.forEach(URL.revokeObjectURL);
});

popularFiltros();
renderizarPerfis();
renderizarHistorico();
