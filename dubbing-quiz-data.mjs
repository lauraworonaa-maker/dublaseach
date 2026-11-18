// Curated, work-specific credits. Images are loaded from the corresponding
// Wikipedia article summary and carry their file attribution when available.
export const professionals = [
  { id: "wendel-bezerra", name: "Wendel Bezerra" },
  { id: "manolo-rey", name: "Manolo Rey" },
  { id: "cadu-paschoal", name: "Cadu Paschoal" },
  { id: "guilherme-briggs", name: "Guilherme Briggs" },
  { id: "maira-goes", name: "Maíra Góes" },
  { id: "luiz-feier-motta", name: "Luiz Feier Motta" },
  { id: "taryn-szpilman", name: "Taryn Szpilman" },
  { id: "fabio-porchat", name: "Fábio Porchat" },
  { id: "erika-menezes", name: "Erika Menezes" }
];

const professionalById = new Map(professionals.map(professional => [professional.id, professional]));
const quizCredits = [
  {
    id: "spongebob-series", character: "Bob Esponja", work: "Bob Esponja (série animada)",
    correctVoiceId: "wendel-bezerra", source: "https://dublagem.fandom.com/wiki/Bob_Esponja_Cal%C3%A7a_Quadrada",
    imagePage: "Bob Esponja Calça Quadrada", imageSource: "https://pt.wikipedia.org/wiki/Bob_Esponja",
    distractorVoiceIds: ["manolo-rey", "guilherme-briggs"],
    fact: "Wendel Bezerra mantém a voz brasileira do personagem desde o início da série, segundo a fonte de créditos."
  },
  {
    id: "spiderman-2002", character: "Peter Parker / Homem-Aranha", work: "Homem-Aranha (filme de 2002)",
    correctVoiceId: "manolo-rey", source: "https://dublagem.fandom.com/wiki/Homem-Aranha_(2002)",
    imagePage: "Homem-Aranha", imageSource: "https://pt.wikipedia.org/wiki/Homem-Aranha",
    distractorVoiceIds: ["wendel-bezerra", "guilherme-briggs"],
    fact: "Manolo Rey dublou Peter Parker nesta versão cinematográfica de 2002."
  },
  {
    id: "spiderman-across-miles", character: "Miles Morales / Homem-Aranha", work: "Homem-Aranha: Através do Aranhaverso (2023)",
    correctVoiceId: "cadu-paschoal", source: "https://dublagem.fandom.com/wiki/Homem-Aranha:_Atrav%C3%A9s_do_Aranhaverso",
    imagePage: "Miles Morales", imageSource: "https://pt.wikipedia.org/wiki/Miles_Morales",
    distractorVoiceIds: ["wendel-bezerra", "guilherme-briggs"],
    fact: "A pergunta especifica o filme de 2023, já que a franquia Homem-Aranha tem várias versões e elencos."
  },
  {
    id: "toy-story-buzz-1995", character: "Buzz Lightyear", work: "Toy Story (filme de 1995)",
    correctVoiceId: "guilherme-briggs", source: "https://dublagem.fandom.com/wiki/Toy_Story",
    imagePage: "Buzz Lightyear", imageSource: "https://pt.wikipedia.org/wiki/Buzz_Lightyear",
    distractorVoiceIds: ["wendel-bezerra", "manolo-rey"],
    fact: "O crédito se refere ao filme original de 1995 e não presume que todo título da franquia tenha o mesmo elenco."
  },
  {
    id: "finding-nemo-dory-2003", character: "Dory", work: "Procurando Nemo (dublagem original de 2003)",
    correctVoiceId: "maira-goes", source: "https://dublagem.fandom.com/wiki/Procurando_Nemo",
    imagePage: "Procurando Nemo", imageSource: "https://pt.wikipedia.org/wiki/Procurando_Nemo",
    distractorVoiceIds: ["taryn-szpilman", "wendel-bezerra"],
    fact: "A página de créditos também registra uma redublagem de 2012; esta pergunta se refere à versão original de 2003."
  },
  {
    id: "incredibles-mr-incredible-2009", character: "Beto Pêra / Sr. Incrível", work: "Os Incríveis (redublagem de 2009)",
    correctVoiceId: "luiz-feier-motta", source: "https://dublagem.fandom.com/wiki/Os_Incr%C3%ADveis",
    imagePage: "Os Incríveis", imageSource: "https://pt.wikipedia.org/wiki/Os_Incr%C3%ADveis",
    distractorVoiceIds: ["maira-goes", "cadu-paschoal"],
    fact: "A dublagem de 2009 substituiu a versão de cinema de 2004; a pergunta especifica qual delas vale."
  },
  {
    id: "frozen-elsa-2013", character: "Elsa", work: "Frozen: Uma Aventura Congelante (2013)",
    correctVoiceId: "taryn-szpilman", source: "https://dublagem.fandom.com/wiki/Frozen:_Uma_Aventura_Congelante",
    imagePage: "Elsa (Disney)", imageSource: "https://pt.wikipedia.org/wiki/Elsa_(Disney)",
    distractorVoiceIds: ["maira-goes", "cadu-paschoal"],
    fact: "O crédito de Elsa nesta versão é diferente de outros personagens e vozes da franquia."
  },
  {
    id: "frozen-olaf-2013", character: "Olaf", work: "Frozen: Uma Aventura Congelante (2013)",
    correctVoiceId: "fabio-porchat", source: "https://dublagem.fandom.com/wiki/Frozen:_Uma_Aventura_Congelante",
    imagePage: "Olaf (Disney)", imageSource: "https://pt.wikipedia.org/wiki/Olaf_(Disney)",
    distractorVoiceIds: ["maira-goes", "wendel-bezerra"],
    fact: "O primeiro elenco de Frozen teve diferenças de voz em relação à continuação Frozen II."
  },
  {
    id: "frozen-anna-2013", character: "Anna", work: "Frozen: Uma Aventura Congelante (2013, diálogos)",
    correctVoiceId: "erika-menezes", source: "https://dublagem.fandom.com/wiki/Frozen:_Uma_Aventura_Congelante",
    imagePage: "Anna (Disney)", imageSource: "https://pt.wikipedia.org/wiki/Anna_(Disney)",
    distractorVoiceIds: ["cadu-paschoal", "luiz-feier-motta"],
    fact: "As canções de Anna na versão brasileira são creditadas separadamente a Gabi Porto."
  },
  {
    id: "dragon-ball-z-goku-series", character: "Son Goku", work: "Dragon Ball Z (série, versão brasileira da Álamo)",
    correctVoiceId: "wendel-bezerra", source: "https://dublagem.fandom.com/wiki/Dragon_Ball_Z",
    imagePage: "Son Goku", imageSource: "https://pt.wikipedia.org/wiki/Son_Goku",
    distractorVoiceIds: ["cadu-paschoal", "erika-menezes"],
    fact: "A voz de Goku variou entre adaptações e fases da franquia; este crédito é da série Dragon Ball Z."
  }
];

// Credit relations point to a single professional record; names are stored once.
export const quizRecords = quizCredits.map(credit => ({
  ...credit,
  correct: professionalById.get(credit.correctVoiceId)?.name,
  distractors: credit.distractorVoiceIds.map(id => professionalById.get(id)?.name)
}));

// The quiz excludes incomplete rows and duplicate options before display.
export function validateQuizRecord(record) {
  if (!record || !record.id || !record.character || !record.work || !record.correct || !record.source || !record.imageSource) return false;
  if (!Array.isArray(record.distractors) || record.distractors.length !== 2) return false;
  const names = [record.correct, ...record.distractors].map(name => String(name).trim().toLocaleLowerCase("pt-BR"));
  return names.every(Boolean) && new Set(names).size === 3;
}

export function buildQuizQuestion(record, random = Math.random) {
  if (!validateQuizRecord(record)) throw new Error("Crédito incompleto ou alternativas inválidas.");
  const options = [record.correct, ...record.distractors];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return { ...record, options, correctIndex: options.indexOf(record.correct) };
}

export function shuffleQuizRecords(records, random = Math.random) {
  const shuffled = [...records];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}
