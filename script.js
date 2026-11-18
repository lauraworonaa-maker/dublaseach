const profissionais = [
  { nome: "Wendel Bezerra", area: "Animações • Animes • Filmes", emoji: "🎙️", desc: "Ator, dublador e diretor de dublagem. Entre seus papéis conhecidos estão Goku em Dragon Ball e Bob Esponja.", creditos: ["Goku — Dragon Ball", "Bob Esponja — Bob Esponja Calça Quadrada"], fontes: [{ titulo: "UniDub — sobre o estúdio", url: "https://unidub.com.br/sobre-nos/" }, { titulo: "Canal oficial de Wendel Bezerra", url: "https://www.youtube.com/watch?v=ZZe9AE_5hXQ" }] },
  { nome: "Úrsula Bezerra", area: "Animes • Animações", emoji: "🎙️", desc: "Dubladora e diretora de dublagem, conhecida por interpretar Naruto Uzumaki e Goku criança.", creditos: ["Naruto Uzumaki — Naruto", "Goku criança — Dragon Ball", "Rini/ChibiUsa — Sailor Moon Eternal"], fontes: [{ titulo: "GeekBlast — entrevista com Úrsula Bezerra", url: "https://www.geekblast.com.br/2021/11/dragon-fest-entrevista-dubladora-ursula-bezerra.html" }, { titulo: "CCXP — homenagem à dubladora", url: "https://new.ccxp.com.br/imprensa/imprensa-105/" }] },
  { nome: "Francisco Júnior", area: "Animes • Séries • Filmes", emoji: "🎙️", desc: "Ator, dublador e diretor. A Crunchyroll o credita como Yami em Black Clover e Sukuna em Jujutsu Kaisen.", creditos: ["Yami — Black Clover", "Ryomen Sukuna — Jujutsu Kaisen"], fontes: [{ titulo: "Crunchyroll — elenco brasileiro de Black Clover", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }] },
  { nome: "Guilherme Briggs", area: "Animações • Animes • Filmes", emoji: "🎙️", desc: "Ator, dublador, locutor e tradutor. É conhecido por personagens como Superman, Buzz Lightyear e Julius em Black Clover.", creditos: ["Superman — filmes e séries", "Buzz Lightyear — Toy Story", "Julius adulto — Black Clover"], fontes: [{ titulo: "UOL — perfil do dublador", url: "https://www.uol.com.br/splash/noticias/2022/04/26/guilherme-briggs-rjtv.htm" }, { titulo: "Crunchyroll — elenco brasileiro de Black Clover", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }] },
  { nome: "Agatha Paulita", area: "Animações • Animes • Filmes", emoji: "🎙️", desc: "Atriz e dubladora. Fez a voz original de Mônica em Turma da Mônica Jovem e dubla Usagi/Sailor Moon e Tony Tony Chopper.", creditos: ["Mônica (voz original) — Turma da Mônica Jovem", "Usagi/Sailor Moon — Sailor Moon Eternal", "Tony Tony Chopper — One Piece"], fontes: [{ titulo: "UOL — Turma da Mônica Jovem", url: "https://entretenimento.uol.com.br/noticias/redacao/2018/12/09/irmas-dubladoras-estrelam-animacao-inedita-turma-da-monica-jovem.amp.htm" }, { titulo: "JBox — elenco de Sailor Moon Eternal", url: "https://www.jbox.com.br/2021/06/05/jbox-live-conversa-ao-vivo-com-o-elenco-de-sailor-moon-eternal/" }, { titulo: "JBox — perfil e créditos de Agatha Paulita", url: "https://www.jbox.com.br/j-pedia/perfis/agatha-paulita/" }] },
  { nome: "Luiz Sérgio Vieira", area: "Animações • Animes • Séries", emoji: "🎙️", desc: "Ator e dublador. Um de seus papéis conhecidos é Timmy Turner em Os Padrinhos Mágicos.", creditos: ["Timmy Turner — Os Padrinhos Mágicos"], fontes: [{ titulo: "Museu Brasileiro de Rádio e Televisão — biografia", url: "https://www.museudatv.com.br/biografia/luiz-sergio-vieira/" }, { titulo: "DB — Dublagem Brasileira: Os Padrinhos Mágicos", url: "https://dublagembrasileira.com.br/?p=35404" }] },
  { nome: "Fred Mascarenhas", area: "Animações • Filmes • Jogos", emoji: "🎙️", desc: "Ator, dublador e comediante. Interpretou Ned Leeds nos filmes do Homem-Aranha e Samuel no jogo Enigma do Medo.", creditos: ["Ned Leeds — Homem-Aranha: De Volta ao Lar", "Samuel — Enigma do Medo"], fontes: [{ titulo: "UOL — personagens dublados por Fred Mascarenhas", url: "https://www.uol.com.br/splash/noticias/2021/11/20/os-personagens-da-dublagem-que-moram-no-coracao-de-fred-mascarenhas.amp.htm" }, { titulo: "Apple Podcasts — Enigma do Medo", url: "https://podcasts.apple.com/br/podcast/ordemcast-ep-91-dublando-enigma-do-medo-com-fred-mascarenhas/id1540646525?i=1000614785106" }] },
  { nome: "Fábio Lucindo", area: "Animes • Animações • Filmes", emoji: "🎙️", desc: "Ator, dublador e diretor de dublagem. Foi a voz brasileira de Ash Ketchum por 18 temporadas de Pokémon.", creditos: ["Ash Ketchum — Pokémon", "Ichigo Kurosaki — Bleach", "Kuririn — Dragon Ball"], fontes: [{ titulo: "R7 — perfil de Fábio Lucindo", url: "https://entretenimento.r7.com/prisma/do-meu-tempo/pokemon-conheca-fabio-lucindo-o-primeiro-dublador-de-ash-no-brasil-30052025/" }, { titulo: "JBox — entrevista sobre Pokémon", url: "https://www.jbox.com.br/j-pedia/entrevistas/fabio-lucindo-pokemon-20-anos-2019/" }] },
  { nome: "Marcos Souza", area: "Animações • Séries • Filmes", emoji: "🎙️", desc: "Ator, dublador e diretor de dublagem. Seus créditos incluem Tucker Foley em Danny Phantom e Jagged Stone em Miraculous.", creditos: ["Tucker Foley — Danny Phantom", "Jagged Stone — Miraculous: As Aventuras de Ladybug"], fontes: [{ titulo: "Dublapédia — Marcos Souza", url: "https://dublagem.fandom.com/wiki/Marcos_Souza" }] },
  { nome: "Feh Dubs (Feh Dantas)", area: "Animes • Animações", emoji: "🎙️", desc: "Atriz, dubladora e criadora de conteúdo. Entre seus trabalhos estão Shijima Mei em Hanako-kun e Ururu Fleur em The Wrong Way to Use Healing Magic.", creditos: ["Shijima Mei — Hanako-kun", "Ururu Fleur — The Wrong Way to Use Healing Magic"], fontes: [{ titulo: "Bon Odori Salvador — perfil de Feh Dubs", url: "https://sitenew.bonodorisalvador.com.br/programacao/palco-haru" }] },
  { nome: "Carol Valença", area: "Animes • Animações • Jogos", emoji: "🎙️", desc: "Atriz, cantora e dubladora. Entre seus papéis estão Monkey D. Luffy em One Piece e Abby no jogo The Last of Us Part II.", creditos: ["Monkey D. Luffy — One Piece", "Abby — The Last of Us Part II", "Vanica — Black Clover"], fontes: [{ titulo: "Gshow — personagens dublados por Carol Valença", url: "https://gshow.globo.com/cultura-pop/noticia/personagem-de-sophie-charlotte-em-passaporte-para-liberdade-tem-a-mesma-voz-da-supergirl-entenda.ghtml" }, { titulo: "Crunchyroll — elenco brasileiro de Black Clover", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }] },
  { nome: "Léo Rabelo", area: "Animes • Animações • Jogos", emoji: "🎙️", desc: "Ator, dublador e diretor de dublagem. Entre seus papéis estão Satoru Gojo em Jujutsu Kaisen e Shazam nos filmes do personagem.", creditos: ["Satoru Gojo — Jujutsu Kaisen", "Shazam — Shazam!", "Nozel Silva — Black Clover"], fontes: [{ titulo: "Crunchyroll — melhores performances de voz", url: "https://www.crunchyroll.com/pt-br/news/features/2024/2/27/especial-de-categorias-do-anime-awards-2024-melhor-performance-de-voz-portugues-brasileiro" }] },
  { nome: "Fabrício Vila Verde", area: "Animes • Animações • Séries", emoji: "🎙️", desc: "Ator, dublador e diretor de dublagem. É conhecido como Meliodas em Nanatsu no Taizai e Jughead em Riverdale.", creditos: ["Meliodas — Nanatsu no Taizai", "Jughead Jones — Riverdale", "Adrien Agreste/Cat Noir — Miraculous"], fontes: [{ titulo: "Jornal da Barra — entrevista com Fabrício Vila Verde", url: "https://www.jornaldabarra.com.br/cultura-e-lazer/23-entrevistas/1571-fabricio-vila-verde-nao-me-vejo-morando-em-outro-lugar-do-rio" }, { titulo: "Diário de Uberlândia — elenco de Miraculous", url: "https://diariodeuberlandia.com.br/arquivos/assinaturas/1019/08-08.pdf" }] },
  { nome: "Mckeidy Lisita", area: "Animações • Filmes • Séries", emoji: "🎙️", desc: "Ator, dublador e locutor. Entre seus trabalhos estão Rocket Raccoon, Johnny de Hotel Transilvânia e Salsicha em produções de Scooby-Doo.", creditos: ["Rocket Raccoon — Guardiões da Galáxia", "Johnny — Hotel Transilvânia", "Salsicha — Scooby-Doo! Mistério S/A"], fontes: [{ titulo: "Desfoque Podcast — entrevista com Mckeidy Lisita", url: "https://www.youtube.com/watch?v=JBJuLgXt8jk" }, { titulo: "Dublapédia — Mckeidy Lisita", url: "https://dublagem.fandom.com/wiki/Mckeidy_Lisita" }] },
  { nome: "Ítalo Luiz", area: "Animações • Filme • Séries • Animes • Games", emoji: "🎙️", desc: "é um ator, dublador, cantor e locutor brasileiro. É conhecido por seus papeis dublando Ryder (em Patrulha Canina), Clay Jensen (em 13 Reasons Why), Peter Kavinsky (em Para Todos os Garotos que Já Amei) e Shigeo Mob Kageyama (em Mob Psycho 100)", creditos: ["Ryder — Patrulha Canina", "Clay Jensen — 13 Reasons Why", "Peter Kavinsky — Para Todos Garotos que eu Já Amei", "Shigeo kageyama (Mob) — Mob Psycho 100."], fontes: [{ titulo: "Crunchyroll (YouTube) — bastidores da dublagem de Mob Psycho 100 com Ítalo Luiz", url: "https://www.youtube.com/watch?v=anH3opGF13k"   }, { titulo: "Dublapédia — Ítalo Luiz", url: "https://dublagem.fandom.com/wiki/%C3%8Dtalo_Luiz" }] },
  { nome: "Sérgio Cantú", area: "Animes • Séries • Filmes", emoji: "🎙️", desc: "Dublador, diretor de dublagem e tradutor. Interpretou Aki Hayakawa em Chainsaw Man e William Vangeance em Black Clover.", creditos: ["Aki Hayakawa — Chainsaw Man", "William Vangeance — Black Clover"], fontes: [{ titulo: "Crunchyroll — elenco brasileiro de Chainsaw Man", url: "https://www.crunchyroll.com/pt-br/news/latest/2022/10/18/conhea-o-elenco-brasileiro-e-data-da-estreia-da-dublagem-de-chainsaw-man" }, { titulo: "Crunchyroll — elenco brasileiro de Black Clover", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }] }
];

// Créditos adicionais consultados em entrevistas e perfis de referência.
profissionais.push(
  {
    nome: "M\u00E1rcio Seixas", area: "Anima\u00E7\u00F5es - Filmes - S\u00E9ries", emoji: "\uD83C\uDF99\uFE0F",
    desc: "Ator e dublador brasileiro, conhecido por trabalhos em anima\u00E7\u00F5es, filmes e s\u00E9ries.",
    creditos: ["Batman - Liga da Justi\u00E7a", "Spock - Star Trek", "James Bond - filmes com Sean Connery"],
    fontes: [{ titulo: "Entrevista com M\u00E1rcio Seixas - Beta Reda\u00E7\u00E3o", url: "https://www.betaredacao.com.br/a-voz-do-batman-do-007-e-de-geracoes-com-o-dublador-marcio-seixas/" }, { titulo: "Entrevista com M\u00E1rcio Seixas - Engenharia do Cinema", url: "https://engenhariadocinema.com.br/2019/10/04/entrevista-com-o-dublador-marcio-seixas-voz-do-batman-spock-james-bond/" }]
  },
  {
    nome: "Garcia J\u00FAnior", area: "Anima\u00E7\u00F5es - Filmes", emoji: "\uD83C\uDF99\uFE0F",
    desc: "Ator, dublador, diretor e tradutor brasileiro, com trabalhos em anima\u00E7\u00F5es e filmes.",
    creditos: ["He-Man - He-Man e os Mestres do Universo", "Simba - O Rei Le\u00E3o", "Pica-Pau - Pica-Pau", "Arnold Schwarzenegger - filmes"],
    fontes: [{ titulo: "Garcia J\u00FAnior - entrevista da UniLaSalle", url: "https://www.unilasalle.edu.br/canoas/noticias/dublador-garcia-jr-e-um-dos-convidados-da-comiccon-rs-que-acontece-nesse-fim-de-semana" }, { titulo: "Entrevista com Garcia J\u00FAnior - Dublagem Brasileira", url: "https://dublagembrasileira.com.br/?p=751" }]
  },
  {
    nome: "Selma Lopes", area: "Anima\u00E7\u00F5es - Filmes", emoji: "\uD83C\uDF99\uFE0F",
    desc: "Atriz e dubladora brasileira, com trabalhos em anima\u00E7\u00F5es e filmes.",
    creditos: ["Marge Simpson - Os Simpsons", "Vov\u00F3 Willow - Pocahontas", "Whoopi Goldberg - filmes"],
    fontes: [{ titulo: "Gshow - perfil e personagens de Selma Lopes", url: "https://gshow.globo.com/cultura-pop/filmes/noticia/conheca-selma-lopes-dubladora-aos-94-anos-ex-mulher-de-zacarias-e-considerada-rainha-da-profissao.ghtml" }]
  },
  {
    nome: "Marco Ribeiro", area: "Anima\u00E7\u00F5es - Animes - Filmes", emoji: "\uD83C\uDF99\uFE0F",
    desc: "Ator, dublador e diretor de dublagem brasileiro.",
    creditos: ["Tony Stark/Homem de Ferro - Universo Cinematogr\u00E1fico Marvel", "Yusuke Urameshi - Yu Yu Hakusho", "Woody - Toy Story"],
    fontes: [{ titulo: "Entrevista com Marco Ribeiro - Expresso Nerd", url: "https://www.expressonerd.com.br/entrevistamos-marco-ribeiro-dublador-do-homem-de-ferro-no-cinema/" }, { titulo: "Entrevista sobre Yu Yu Hakusho - JBox", url: "https://www.jbox.com.br/j-pedia/entrevistas/marco-ribeiro-yu-yu-hakusho-2024/" }]
  },
  {
    nome: "Manolo Rey", area: "Anima\u00E7\u00F5es - Filmes - Jogos", emoji: "\uD83C\uDF99\uFE0F",
    desc: "Ator, dublador, diretor e tradutor brasileiro.",
    creditos: ["Sonic - franquia Sonic", "Peter Parker/Homem-Aranha - trilogia de Sam Raimi", "Will Smith - Um Maluco no Peda\u00E7o", "Robin - Jovens Tit\u00E3s"],
    fontes: [{ titulo: "Manolo Rey - entrevista da Tangerina/UOL", url: "https://tangerina.uol.com.br/filmes-series/sonic-2-manolo-rey-dublador-entrevista/" }, { titulo: "Manolo Rey - entrevista do Di\u00E1rio do Nordeste", url: "https://diariodonordeste.verdesmares.com.br/verso/sonic-2-chega-aos-cinemas-e-conversamos-com-manolo-rey-dublador-oficial-do-heroi-1.3213621" }]
  }
);

profissionais[0].foto = "https://upload.wikimedia.org/wikipedia/commons/7/78/Wendel_Bezerra.JPG";
profissionais[0].fontes.push({
  titulo: "Foto: Victor de Andrade Lopes / Wikimedia Commons (CC BY-SA 3.0)",
  url: "https://commons.wikimedia.org/wiki/File:Wendel_Bezerra.JPG"
});

// Fotos exibidas na aba de perfil. Cada entrada aponta para a imagem e sua fonte.
const fotosProfissionais = [
  null,
  { url: "https://static.wixstatic.com/media/6a1bed_d344c0a426294b89b042a8ab8e0f356e~mv2.jpg/v1/fill/w_1080%2Ch_720%2Cal_c/6a1bed_d344c0a426294b89b042a8ab8e0f356e~mv2.jpg", titulo: "Foto: GGCON", fonte: "https://www.ggcon.org/post/ursula-bezerra-ggcon24" },
  { url: "https://pbs.twimg.com/media/E7E4oy8XIAEI2Dg?format=jpg&name=large", titulo: "Foto: Personagens Com os Mesmos Dubladores", fonte: "https://twitter.com/mesmosdubsbr/status/1418977759704064006" },
  { url: "https://conteudo.imguol.com.br/c/entretenimento/ff/2023/06/06/guilherme-briggs-dubla-o-personagem-optimus-prime-em-transformers-1686086498507_v2_4x3.jpg", titulo: "Foto: UOL", fonte: "https://www.uol.com.br/splash/noticias/2023/06/12/transformers.htm" },
  { url: "https://entretetizei.com.br/wp-content/uploads/2023/07/unnamed-3.jpg", titulo: "Foto: Entretetizei", fonte: "https://entretetizei.com.br/giovanna-lancellotti-e-agatha-paulita-falam-sobre-a-experiencia-de-dublar/" },
  { url: "https://static-1.ivoox.com/audios/c/1/d/2/c1d2cde1c98d330d20d2d75d3d85988c_XXL.jpg", titulo: "Foto: Desfoque Podcast", fonte: "https://www.ivoox.com/podcast-desfoque-podcast_sq_f11651829_1.html" },
  { url: "https://pbs.twimg.com/profile_images/1178530000515031040/h7_o4UdX_400x400.jpg", titulo: "Foto: perfil de Fred Mascarenhas", fonte: "https://x.com/FreMascarenhas" },
  { url: "https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2022/05/jpedia-entrevista-fabiolucindo.jpg?quality=99&ssl=1&strip=all&w=774", titulo: "Foto: JBox", fonte: "https://www.jbox.com.br/j-pedia/entrevistas/fabio-lucindo-neon-genesis-evangelion-2019/" },
  { url: "https://pbs.twimg.com/media/FBmFyWRUUAETPAs.jpg", titulo: "Foto: Personagens Com os Mesmos Dubladores", fonte: "https://x.com/mesmosdubsbr/status/1448335857954349056" },
  { url: "https://pbs.twimg.com/media/GwfdUCLWoAAgT5h.jpg", titulo: "Foto: perfil de Feh Dubs", fonte: "https://x.com/fehdubs/status/1947768702633709739" },
  { url: "https://ccxp-production-files.s3.amazonaws.com/Carol_Valenca_painel_One_Piece_Carol_Valenca_e15b748bee.jpg", titulo: "Foto: CCXP", fonte: "https://www.ccxp.com.br/lineup/1357/carol-valenca/" },
  { url: "https://pbs.twimg.com/media/E5d89moVUAETo97.jpg", titulo: "Foto: Personagens Com os Mesmos Dubladores", fonte: "https://x.com/mesmosdubsbr/status/1411734409095516160" },
  { url: "https://br.web.img3.acsta.net/pictures/21/04/08/19/11/5456034.jpg", titulo: "Foto: AdoroCinema", fonte: "https://www.adorocinema.com/personalidades/personalidade-815197/" },
  { url: "https://feira.tangerina.news/wp-content/uploads/2022/10/mckeidy-lisita-foto-divulgacao-globo.jpg", titulo: "Foto: Camila Maia/Globo", fonte: "https://tangerina.uol.com.br/mix/dublador-marvel-power-rangers-globo/" },
  { url: "https://br.web.img3.acsta.net/c_310_420/pictures/19/06/17/17/25/1981019.jpg", titulo: "Foto: AdoroCinema — Ítalo Luiz Siqueira", fonte: "https://www.adorocinema.com/personalidades/personalidade-755801/" },
  { url: "https://ccxp-production-files.s3.amazonaws.com/SERGIO_CANTU_9f1049b7ad.jpg", titulo: "Foto: CCXP", fonte: "https://www.ccxp.com.br/en/lineup/2274/sergio-cantu-en/" },
  { url: "https://a-memoria-da-dublagem.weebly.com/uploads/1/1/6/3/116355283/m-rcio-seixas_orig.jpg", titulo: "Foto: A Memoria da Dublagem", fonte: "https://a-memoria-da-dublagem.weebly.com/vozes-marcio-seixas.html" },
  { url: "https://www.film.ru/sites/default/files/people/4893270-846395.jpg", titulo: "Foto: Film.ru", fonte: "https://www.film.ru/person/garcia-junior" },
  { url: "https://ogimg.infoglobo.com.br/in/24330470-e91-951/FT1086A/760/87478379_EL-Rio-de-Janeiro-RJ-12-03-2020Perfil-da-dubladora-Selma-Lopes-93-anos.-Foto-Leo-Mar.jpg", titulo: "Foto: Leo Mar / O Globo", fonte: "https://oglobo.globo.com/ela/gente/dubladora-de-marge-simpson-whoopi-goldberg-selma-lopes-continua-com-gas-total-nos-estudios-aos-91-anos-24330458" },
  { url: "https://static.wixstatic.com/media/368834_004fab5ed27e48528a5e1161b2000e5a~mv2.jpg/v1/fill/w_1024%2Ch_682%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/368834_004fab5ed27e48528a5e1161b2000e5a~mv2.jpg", titulo: "Foto: Deu Bom Brasilia", fonte: "https://www.deubombrasilia.com.br/post/marco-ribeiro-dubla-robert-downey-jr-na-pele-de-quatro-personagens-diferentes-em-o-simpatizante" },
  { url: "https://ccxp-production-files.s3.amazonaws.com/Manolo_Rey_c3fa55cb65.jpg", titulo: "Foto: CCXP", fonte: "https://www.ccxp.com.br/lineup/2247/manolo-rey/" }
];

fotosProfissionais.forEach((foto, indice) => {
  if (!foto || !profissionais[indice]) return;
  profissionais[indice].foto = foto.url;
  profissionais[indice].fontes.push({ titulo: foto.titulo, url: foto.fonte });
});

const creditosAdicionais = {
  "Wendel Bezerra": {
    creditos: ["Sanji — One Piece", "Jackie Chan — As Aventuras de Jackie Chan"],
    fontes: [{ titulo: "Dublapédia — créditos de Wendel Bezerra", url: "https://dublapedia.com/wiki/Wendel_Bezerra" }]
  },
  "Ãšrsula Bezerra": {
    creditos: ["Chuckie Finster — Rugrats: Os Anjinhos", "Pequeno Urso — O Pequeno Urso"],
    fontes: [{ titulo: "GeekBlast — entrevista com Úrsula Bezerra", url: "https://www.geekblast.com.br/2021/11/dragon-fest-entrevista-dubladora-ursula-bezerra.html" }]
  },
  "Francisco JÃºnior": {
    creditos: ["Dio Brando — JoJo’s Bizarre Adventure"],
    fontes: [{ titulo: "Francisco Júnior — filmografia", url: "https://pt.wikipedia.org/wiki/Francisco_J%C3%BAnior_(dublador)" }]
  },
  "Guilherme Briggs": {
    creditos: ["Cosmo — Os Padrinhos Mágicos", "Rei Julien — Madagascar", "Brook — One Piece"],
    fontes: [{ titulo: "Dublapédia — créditos de Guilherme Briggs", url: "https://dublapedia.com/wiki/Guilherme_Briggs" }]
  },
  "Agatha Paulita": {
    creditos: ["Retsuko — Aggretsuko"],
    fontes: [{ titulo: "JBox — perfil e créditos de Agatha Paulita", url: "https://www.jbox.com.br/j-pedia/perfis/agatha-paulita/" }]
  },
  "Fred Mascarenhas": {
    creditos: ["Donatello — Tartarugas Ninja", "Geninho — Os Smurfs", "Tim Goodman — Pokémon: Detetive Pikachu", "Thunk — Os Croods"],
    fontes: [{ titulo: "UOL — personagens dublados por Fred Mascarenhas", url: "https://www.uol.com.br/splash/noticias/2021/11/20/os-personagens-da-dublagem-que-moram-no-coracao-de-fred-mascarenhas.htm" }, { titulo: "Dublapédia — créditos de Fred Mascarenhas", url: "https://dublagem.fandom.com/wiki/Fred_Mascarenhas" }]
  },
  "FÃ¡bio Lucindo": {
    creditos: ["Kiba Inuzuka — Naruto", "Shinji Ikari — Neon Genesis Evangelion", "Killua Zoldyck — Hunter × Hunter"],
    fontes: [{ titulo: "R7 — outros personagens dublados por Fábio Lucindo", url: "https://entretenimento.r7.com/prisma/do-meu-tempo/pokemon-conheca-fabio-lucindo-o-primeiro-dublador-de-ash-no-brasil-30052025/" }]
  },
  "Carol ValenÃ§a": {
    creditos: ["22 — Soul", "Ayo — Pantera Negra", "Supergirl — Supergirl"],
    fontes: [{ titulo: "Gshow — personagens dublados por Carol Valença", url: "https://gshow.globo.com/cultura-pop/noticia/personagem-de-sophie-charlotte-em-passaporte-para-liberdade-tem-a-mesma-voz-da-supergirl-entenda.ghtml" }]
  },
  "LÃ©o Rabelo": {
    creditos: ["Pequeno — O Incrível Mundo de Gumball", "Ohma Tokita — Kengan Ashura", "Chris Redfield — Resident Evil"],
    fontes: [{ titulo: "Dublapédia — créditos de Léo Rabelo", url: "https://dublagem.fandom.com/wiki/L%C3%A9o_Rabelo" }]
  },
  "FabrÃ­cio Vila Verde": {
    creditos: ["Robin — Justiça Jovem", "Danny Rand — Punho de Ferro", "V — Cyberpunk 2077"],
    fontes: [{ titulo: "Wiki Miraculous — perfil de Fabrício Vila Verde", url: "https://miraculousladybug.fandom.com/pt-br/wiki/Fabr%C3%ADcio_Vila_Verde" }]
  },
  "Marcos Souza": {
    creditos: ["Jaime Reyes/Besouro Azul — Batman: Os Bravos e Destemidos", "Dudley Puppy — T.U.F.F. Puppy", "Alejandro — Drama Total"],
    fontes: [{ titulo: "Dublapédia — créditos de Marcos Souza", url: "https://dublagem.fandom.com/wiki/Marcos_Souza" }]
  },
  "Mckeidy Lisita": {
    creditos: ["General Hux — Star Wars", "Bailey — Procurando Dory", "Zora Ideale — Black Clover", "Pablo Rodríguez — Festa no Céu"],
    fontes: [{ titulo: "Desfoque Podcast — entrevista com Mckeidy Lisita", url: "https://music.amazon.com/es-co/podcasts/f21eacbd-e4a9-4ac3-8ce3-7d91b526610a/episodes/8d3d4a09-c2d4-437b-936b-3fd674f9c1a5/desfoque-podcast-107-mckeidy-lisita-dublador-do-rocket-em-guardi%C3%B5es-da-gal%C3%A1xia---desfoque-podcast" }]
  },
  "SÃ©rgio CantÃº": {
    creditos: ["L — Death Note", "Sheldon Cooper — The Big Bang Theory", "Peter Parker — O Espetacular Homem-Aranha"],
    fontes: [{ titulo: "Sérgio Cantú — filmografia", url: "https://pt.wikipedia.org/wiki/S%C3%A9rgio_Cant%C3%BA" }]
  }
};

const indicesCreditosAdicionais = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 6: 5, 7: 6, 8: 10, 10: 7, 11: 8, 12: 9, 13: 11, 15: 12 };
const creditosAdicionaisLista = Object.values(creditosAdicionais);
profissionais.forEach((profissional, indice) => {
  const indiceAdicional = indicesCreditosAdicionais[indice];
  const adicionais = indiceAdicional === undefined ? null : creditosAdicionaisLista[indiceAdicional];
  if (!adicionais) return;
  profissional.creditos.push(...adicionais.creditos);
  profissional.fontes.push(...adicionais.fontes);
});

// Estúdios associados a créditos publicados nos perfis. Isso não significa vínculo empregatício.
const estudiosPorIndice = {
  0: [{ nome: "Dublapedia", url: "https://dublagem.fandom.com/wiki/Wendel_Bezerra" }],
  1: [{ nome: "Dubalpedia", url: "https://dublagem.fandom.com/wiki/Ursula_Bezerra" }],
  2: [{ nome: "Crunchyroll", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }],
  3: [{ nome: "Crunchyroll", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }],
  4: [{ nome: "JBOX", url: "https://www.jbox.com.br/2021/06/03/especial-sailor-moon-eternal-entrevista-com-diretora-e-dubladora-de-usagi-exclusivo/" }],
  6: [{ nome: "Dublapedia", url: "https://dublagem.fandom.com/wiki/Fred_Mascarenhas" }],
  10: [{ nome: "Crunchyroll", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }],
  12: [{ nome: "Crunchyroll", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }],
  15: [{ nome: "Crunchyroll", url: "https://www.crunchyroll.com/pt-br/news/announcements/2023/8/3/conheca-os-dubladores-brasileiros-de-black-clover" }],
  20: [{ nome: "Wikipedia", url: "https://pt.wikipedia.org/wiki/Homem-Aranha_no_cinema" }]
};

const fandubs = [
  { titulo: "Cena dramática — Fandub", user: "@voz_da_lua", obra: "Animação", likes: 124 },
  { titulo: "Vilão — Teste de voz", user: "@rafa_fandub", obra: "Projeto autoral", likes: 98 },
  { titulo: "Cena de comédia", user: "@clara_voz", obra: "Série", likes: 76 }
];

const dadosRoteiros = {
  arquetipos: ["Mago Sombrio Ancestral", "Guerreiro Orc Enfurecido", "Inteligência Artificial Corrompida", "Gatuno Sarcástico", "Mascote / Criatura Mística", "General Cyberpunk", "Criança Escolhida da Profecia", "Infectado / Mutante Consciente", "Pirata Espacial Renegado", "Caçador de Recompensas Frio", "Deidade Caída", "Piloto de Meca Nervoso", "Capitã de uma nave à deriva", "Curandeiro que perdeu a fé", "Detetive em uma cidade futurista", "Dragão disfarçado de humano", "Cientista obcecado por portais", "Assassina que quer abandonar a guilda", "Rei recém-coroado", "Fantasma guardião de uma ruína", "Robô aprendendo a sentir", "Mercadora que sabe todos os segredos", "Cavaleira juramentada", "Vilão tentando se redimir", "Explorador perdido no deserto", "Aprendiz de feiticeira", "Líder de uma resistência", "Caçadora de monstros aposentada", "Clonagem que descobriu ser uma cópia", "Narrador misterioso de uma missão"],
  tons: ["Sombrio e Sussurrado", "Épico e Espetaculoso", "Frio, Monótono e Calculista", "Irônico e Debochado", "Desesperado e Ofegante", "Imponente e Ameaçador", "Heróico e Motivacional", "Insano com Risadas Esporádicas", "Melancólico e Cansado", "Doce, mas com uma ameaça escondida", "Jovem e cheio de energia", "Grave e protetor", "Rouco e exausto", "Elegante e persuasivo", "Tímido e hesitante", "Acelerado e empolgado", "Calmo demais para a situação", "Sarcástico e impaciente", "Trêmulo, tentando esconder o medo", "Acolhedor e maternal", "Arrogante e teatral", "Sério, com humor involuntário", "Voz baixa e misteriosa", "Alegre e contagiante", "Firme, com emoção contida", "Confuso e maravilhado", "Frágil, quase sem fôlego", "Autoritário e disciplinado", "Nostálgico e distante", "Sussurrado, como se alguém estivesse ouvindo"],
  contextos: ["Segundos antes de trair permanentemente o protagonista.", "Lançando uma magia proibida que drena sua força vital.", "Tentando consertar o reator de uma nave prestes a explodir em órbita.", "Discursando para um exército de rebeldes sob uma chuva torrencial.", "Encontrando um artefato alienígena proibido em uma ruína abandonada.", "Sendo derrotado pelo vilão principal após uma batalha exaustiva.", "Explicando as regras do universo em um tutorial totalmente entediado.", "Rendendo um guarda em uma missão furtiva noturna."],
  direcoes: ["Aumente a projeção no meio da frase, sinta o peso dramático do momento.", "Comece quase inaudível e termine com um tom sutilmente ameaçador.", "Fale de forma pausada, como se cada palavra consumisse seu último suspiro.", "Coloque um sorriso irônico na voz; você está gostando do caos.", "Adicione pequenos ruídos de esforço ou cansaço entre as pausas de fala.", "Mantenha a voz firme, mas deixe transparecer um leve tremor de pânico."],
  falas: ["Eles acharam que meras paredes de pedra nos manteriam do lado de fora... Tolos. O fogo não conhece barreiras!", "Reiniciando sistemas centrais. Erro crítico detectado no meu protocolo de misericórdia humana. Adeus.", "Olhe para este lugar... Se a gente sair vivo desse planeta, você vai ficar me devendo a maior bebida da galáxia.", "A escuridão não é um monstro escondido debaixo da sua cama. A escuridão absoluta... sou eu.", "Não quebre esse selo! Se a runa se partir agora, nem os deuses antigos poderão nos salvar do que vem a seguir.", "Mais um passo e eu garanto que a sua jornada de herói termina exatamente aqui, enterrada na poeira.", "Hum... então você é a lenda de quem todos estão falando? Sinceramente, eu esperava alguém... bem mais alto.", "O tempo acabou para nós dois. Só me resta garantir que você caia junto comigo neste abismo.", "Eu não vim até aqui para voltar de mãos vazias. Abra o portal!", "Escuta... se aquela coisa perguntar por mim, você nunca me viu, combinado?", "A cidade inteira está dormindo. Então por que tem alguém batendo do lado de dentro da parede?", "Você pode ficar com a coroa. Eu só quero saber quem colocou meu nome na profecia.", "Não sou um herói. Só fui a única pessoa tola o bastante para voltar por vocês.", "Com todo respeito, comandante: seu plano tem três etapas e nenhuma delas envolve sobreviver.", "Eu me lembro deste lugar... mas, na minha memória, o céu não gritava.", "Último aviso: abaixe a arma e talvez eu deixe você escolher como vai contar essa história.", "A poção está funcionando! Quer dizer... acho que está. Por que minhas mãos estão brilhando?", "Você ouviu isso? Não responda. Se ela souber que estamos aqui, já era.", "Passei cem anos protegendo esta porta. Hoje, pela primeira vez, vou abri-la.", "Fica atrás de mim. Eu prometi que ninguém mais se machucaria nesta equipe.", "O mapa está de cabeça para baixo? Ah. Então estamos caminhando para o lado errado desde ontem.", "Não desligue o núcleo! Tem alguém falando comigo lá de dentro.", "Se esta for nossa última noite, quero que você saiba que eu ainda não perdoei aquela aposta.", "Eu poderia explicar o plano... mas seria mais rápido se você confiasse em mim por uns cinco minutos.", "A guerra terminou há muito tempo. Só esqueceram de avisar os fantasmas.", "Você tem duas escolhas: correr comigo ou descobrir por que todos estão correndo.", "Não toque no tesouro. Ele está respirando.", "Eu não perdi o controle. O controle é que parou de me obedecer.", "Prometa que, quando encontrar a saída, vai contar que tentamos.", "Finalmente, um desafio à altura! Só uma dúvida: por que ele tem tantos dentes?", "Toda lenda começa com alguém dizendo que isso é uma péssima ideia.", "Meu nome verdadeiro? Se eu contar, você vai esquecer... e eu também.", "O sinal está fraco. Se eu não voltar, diga à minha irmã que escondi o presente no lugar de sempre.", "Você salvou o reino. Agora, por favor, salve a gente desta reunião interminável.", "A porta não estava trancada. Ela estava esperando por você.", "Eu reconheço esse símbolo. É o mesmo que apareceu no meu sonho... antes de tudo desaparecer."]
};

// Opções adicionais originais para ampliar a variedade dos desafios.
dadosRoteiros.arquetipos.push(
  "Bibliotecária de grimórios proibidos", "Ferreiro que fabrica armas encantadas", "Embaixador de uma espécie desconhecida",
  "Jovem rainha em fuga", "Monge que protege uma biblioteca viva", "Contrabandista de relíquias espaciais",
  "Guarda-costas de um príncipe disfarçado", "Cozinheira de uma tripulação pirata", "Cartógrafo de terras que mudam de lugar",
  "Médica de campo em uma colônia distante", "Engenheira que conversa com máquinas", "Juiz de um torneio intergaláctico",
  "Mensageiro que atravessa dimensões", "Guardião de sementes de outro planeta", "Músico que acalma criaturas selvagens",
  "Espadachim que evita conflitos", "Arqueóloga presa em uma tumba móvel", "Aprendiz de alquimista atrapalhado",
  "Diplomata tentando impedir uma guerra", "Pescador de estrelas cadentes"
);

dadosRoteiros.tons.push(
  "Solenemente cerimonial", "Brincalhão, com ritmo de conversa", "Sussurrado e cheio de curiosidade", "Cortante e sem paciência",
  "Vibrante, como quem anuncia uma grande descoberta", "Suave e reconfortante", "Rápido, tropeçando nas próprias palavras",
  "Lento e cheio de pausas dramáticas", "Confiante, com charme de vendedor", "Cansado, mas ainda esperançoso",
  "Como uma transmissão de rádio com interferência", "Cantado, quase como uma cantiga", "Contido, segurando o choro",
  "Rígido e protocolar", "Surpreso, tentando manter a compostura", "Divertido, disfarçando preocupação",
  "Enigmático, escolhendo cada palavra", "Entusiasmado como um comentarista", "Gentil e cheio de admiração",
  "Furioso, mas falando baixo"
);

dadosRoteiros.falas.push(
  "A bússola aponta para baixo. Acho que encontramos uma cidade suspensa sob o oceano.",
  "Guarde esse mapa com cuidado: ele muda sempre que alguém conta uma mentira.",
  "A nave não está quebrada; ela só não gosta de receber ordens de estranhos.",
  "Quando as luzes ficarem verdes, atravesse. Se ficarem azuis, atravesse correndo.",
  "Trouxe chá para a reunião de paz. Também trouxe um plano de fuga, por precaução.",
  "O dragão aceitou negociar, mas exige que a gente pare de chamar a montanha de covil.",
  "Tem uma segunda lua no céu hoje. Alguém sabe se isso estava no calendário?",
  "A fechadura reconheceu sua voz. O problema é que você nunca esteve aqui antes.",
  "Não é uma estátua; ela acabou de piscar para mim.",
  "Se encontrar meu diário, não leia a página marcada com um desenho de cenoura.",
  "O elevador só desce quando alguém conta uma história engraçada. Comece você.",
  "Recebi uma carta escrita amanhã. Ela diz para não embarcarmos neste trem.",
  "A ponte está intacta. O rio é que decidiu passar por outro caminho.",
  "Temos combustível para uma tentativa e sobremesa para duas. Vamos calcular bem.",
  "A floresta está quieta demais; até os grilos parecem estar esperando uma deixa.",
  "Não acione o sino dourado, a menos que queira acordar o castelo inteiro.",
  "Meu uniforme diz que sou o capitão. O papagaio discorda desde terça-feira.",
  "A chave abre qualquer porta, mas sempre escolhe a mais inconveniente.",
  "O conselho quer uma resposta até o amanhecer. O amanhecer está adiantado hoje.",
  "Encontrei pegadas na neve. Elas começam no meio do caminho e terminam no teto.",
  "A máquina prevê o futuro com precisão. Pena que só responde em charadas.",
  "Fiz amizade com o guardião. Agora ele quer conhecer toda a nossa família.",
  "Se esta ilha se mover de novo, alguém precisa segurar meu café.",
  "Não estamos perdidos; estamos descobrindo uma rota que ninguém mapeou ainda.",
  "A cerimônia começa em cinco minutos e minha capa está presa na armadura.",
  "Ouvi uma voz no cristal. Ela pediu para ninguém contar ao rei que está acordada.",
  "O mercado fecha ao pôr do sol, e só aceita pagamento em histórias verdadeiras.",
  "Você trouxe as ferramentas? Ótimo. Eu trouxe a ideia e uma quantidade saudável de dúvida.",
  "O portal abriu no lugar certo, mas parece que chegamos em uma terça-feira diferente.",
  "Prometi entregar a encomenda intacta. Ninguém falou nada sobre ela cantar.",
  "A criatura não quer lutar. Ela está tentando nos mostrar alguma coisa.",
  "Registrem esta descoberta: a parede é feita de gelo e está crescendo para dentro.",
  "Se a luz no corredor apagar, siga o som da minha voz e não o eco.",
  "O inventor jurou que o botão vermelho era decorativo. Eu devia ter perguntado mais.",
  "A cidade inteira está comemorando, e ninguém sabe quem venceu a corrida.",
  "Posso explicar por que há um cavalo no laboratório, mas preciso de alguns minutos.",
  "O céu está cheio de lanternas. Uma delas acabou de responder ao nosso sinal.",
  "Você pode ficar com o mapa. Eu já decorei o caminho de volta.",
  "A porta abriu sozinha. Vamos agradecer e sair antes que ela mude de ideia.",
  "Meu rádio captou uma mensagem antiga usando a minha própria voz.",
  "Não mexa nas peças: este quebra-cabeça está tentando terminar a si mesmo."
);

const pecasDeCena = {
  lugares: ["observatório abandonado", "mercado subterrâneo", "ponte suspensa", "estação de pesquisa", "templo coberto de raízes", "ponte de comando", "vila cercada por neblina", "arquivo real", "porto entre dimensões", "arena vazia"],
  objetivos: ["encontrar a pessoa desaparecida", "entregar uma mensagem antes do amanhecer", "impedir que o mecanismo seja ativado", "recuperar uma lembrança roubada", "descobrir quem sabotou a expedição", "proteger a última passagem", "convencer o conselho a mudar de ideia", "escapar sem alertar os guardas", "devolver o objeto ao seu dono", "descobrir por que o mapa está mudando"],
  complicacoes: ["as luzes começam a piscar", "o rádio transmite uma voz desconhecida", "alguém reconhece o símbolo na sua mão", "o chão treme sob seus pés", "uma testemunha muda a versão da história", "o relógio para de repente", "a porta se fecha atrás da equipe", "um aliado admite que escondeu um detalhe", "o alarme toca do outro lado", "o caminho de volta desaparece"],
  decisoes: ["confiar no aliado improvável", "contar a verdade para todos", "seguir o sinal até a origem", "deixar o objeto para trás", "pedir ajuda a quem foi expulso", "esperar por uma nova oportunidade", "dividir a equipe em dois grupos", "arriscar uma negociação", "revelar o segredo guardado", "procurar outra saída"],
  reacoes: ["Isso não fazia parte do plano.", "Então era esse o detalhe que faltava.", "Eu sabia que ainda havia algo escondido.", "Temos pouco tempo para decidir.", "Talvez seja melhor ouvir antes de agir.", "Não vou deixar ninguém enfrentar isso sozinho.", "Agora entendo por que você voltou.", "Certo. Mas desta vez, fazemos juntos.", "Se existe uma saída, vamos encontrá-la.", "Eu estava esperando você dizer isso."],
  acoes: ["Olha ao redor com cautela", "Recua um passo, surpreso", "Aponta para o perigo ao longe", "Fala em voz baixa, mantendo a calma", "Examina o objeto com atenção", "Interrompe a conversa ao ouvir um ruído", "Respira fundo antes de responder", "Se aproxima da saída", "Tenta esconder a preocupação", "Faz um sinal para o aliado esperar"]
};

let paginasRoteiro = [];
let paginaAtual = 0;
let ultimoPapel = "";
let contextoRoteiro = "";
let roteiroLongoAtual = false;
let proximoRoteiroLongo = false;
let objetivoRoteiro = "";
let lugarRoteiro = "";

function sortearPapelDiferente(excluir = []) {
  const opcoes = dadosRoteiros.arquetipos.filter(papel => !excluir.includes(papel));
  return sortear(opcoes.length ? opcoes : dadosRoteiros.arquetipos);
}

function criarCena(papel, contexto, longa, etapa = 0) {
  const objetivo = objetivoRoteiro;
  const complicacao = sortear(pecasDeCena.complicacoes);
  const decisao = sortear(pecasDeCena.decisoes);
  const resposta = sortear(pecasDeCena.reacoes);
  const personagemExtra = sortearPapelDiferente([papel, ultimoPapel]);
  if (longa && etapa === 1) {
    return [
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Conseguimos avançar até ${lugarRoteiro}, mas ${complicacao}. Ainda precisamos ${objetivo}.` },
      { personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `${resposta} Não podemos perder o que já conquistamos.` },
      { personagem: personagemExtra, acao: sortear(pecasDeCena.acoes), fala: `Conheço um caminho para chegar mais perto do objetivo, mas ele passa por uma área perigosa.` },
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Então vamos por esse caminho. Não chegamos tão longe para desistir agora.` },
      { personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `${complicacao}. Parece que alguém está tentando nos atrasar.` },
      { personagem: personagemExtra, acao: sortear(pecasDeCena.acoes), fala: `Eu posso resolver isso, mas vocês precisam confiar em mim.` },
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Está bem. Vamos juntos, mas fique perto: ainda não acabou.` }
    ];
  }
  if (longa && etapa === 2) {
    return [
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Chegou a hora de concluir nossa missão: precisamos ${objetivo}.` },
      { personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `${complicacao}. Se vamos agir, tem que ser agora.` },
      { personagem: personagemExtra, acao: sortear(pecasDeCena.acoes), fala: `Eu distraio quem estiver no caminho. Essa é a minha chance de consertar tudo.` },
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Ninguém vai fazer isso sozinho. Vamos seguir o plano e proteger uns aos outros.` },
      { personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `Conseguimos! O caminho está livre e a missão está cumprida.` },
      { personagem: personagemExtra, acao: sortear(pecasDeCena.acoes), fala: `Então valeu a pena ter acreditado em vocês.` },
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `A missão terminou, mas desta vez ninguém ficou para trás. Vamos para casa.` }
    ];
  }
  const falas = [
    { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `${contexto} Agora, aqui em ${lugarRoteiro}, precisamos ${objetivo}.` },
    { personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `${complicacao}. ${resposta}` },
    { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Então vamos ${decisao}. Se der errado, improvisamos.` }
  ];
  if (longa) {
    falas.push(
      { personagem: personagemExtra, acao: sortear(pecasDeCena.acoes), fala: `Vocês não vão chegar a ${objetivo} sem ouvir o que eu sei.` },
      { personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `E por que deveríamos acreditar em você agora?` },
      { personagem: personagemExtra, acao: sortear(pecasDeCena.acoes), fala: `${complicacao}. Eu também quero impedir que isso piore.` },
      { personagem: papel, acao: sortear(pecasDeCena.acoes), fala: `Está bem. Vamos juntos, mas ninguém esconde mais nada.` }
    );
  } else {
    falas.push({ personagem: "Aliado", acao: sortear(pecasDeCena.acoes), fala: `Combinado. Dessa vez, eu vou confiar em você.` });
  }
  return falas;
}

function criarPagina(papel, tom, contexto, longa, etapa = 0) {
  return { papel, tom, contexto, longa, etapa, falas: criarCena(papel, contexto, longa, etapa) };
}

function renderizarPaginaAtual() {
  const paginaAtualDados = paginasRoteiro[paginaAtual];
  if (!paginaAtualDados) return;
  const { papel, tom, contexto, longa, etapa, falas } = paginaAtualDados;
  const tamanhosAtos = longa ? [] : [1, 2, 1];
  const nomesAtos = ["Início", "Meio", "Fim"];
  let indiceFala = 0;
  const atos = longa
    ? `<h5 class="script-act-title">${nomesAtos[etapa]}</h5>` + falas.map(item =>
        `<div class="scene-beat"><p class="scene-action">(${escaparHtml(item.acao)}.)</p><p class="scene-dialogue"><strong>${escaparHtml(item.personagem)} diz:</strong> “${escaparHtml(item.fala)}”</p></div>`
      ).join("")
    : tamanhosAtos.map((tamanho, indiceAto) => {
    const falasDoAto = falas.slice(indiceFala, indiceFala + tamanho);
    indiceFala += tamanho;
    return `<section class="script-act"><h5 class="script-act-title">${nomesAtos[indiceAto]}</h5>` +
      falasDoAto.map(item =>
        `<div class="scene-beat"><p class="scene-action">(${escaparHtml(item.acao)}.)</p><p class="scene-dialogue"><strong>${escaparHtml(item.personagem)} diz:</strong> “${escaparHtml(item.fala)}”</p></div>`
      ).join("") + "</section>";
    }).join("");
  const pagina = `<section class="script-page"><h4 class="script-page-title">Roteiro ${longa ? "longo" : "curto"} · Página ${paginaAtual + 1}</h4>` +
    `<p class="scene-prompt"><strong>Contexto:</strong> ${escaparHtml(contexto)}<br><strong>Tom de voz:</strong> ${escaparHtml(tom)}<br><strong>Interpretação:</strong> ${escaparHtml(papel)}.</p>` +
    atos + "</section>";
  document.getElementById("txt-roteiro").innerHTML = pagina;
  document.getElementById("btn-pagina-anterior").disabled = paginaAtual === 0;
  document.getElementById("btn-proxima-pagina").disabled = !roteiroLongoAtual || (paginaAtual === 2 && paginasRoteiro.length >= 3);
  ultimoPapel = papel;
}

function sortear(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function executarGerador() {
  const papel = sortear(dadosRoteiros.arquetipos);
  const tom = sortear(dadosRoteiros.tons);
  contextoRoteiro = sortear(dadosRoteiros.contextos);
  roteiroLongoAtual = proximoRoteiroLongo;
  proximoRoteiroLongo = !proximoRoteiroLongo;
  objetivoRoteiro = sortear(pecasDeCena.objetivos);
  lugarRoteiro = sortear(pecasDeCena.lugares);
  paginasRoteiro = [];
  paginaAtual = 0;
  ultimoPapel = "";
  paginasRoteiro.push(criarPagina(papel, tom, contextoRoteiro, roteiroLongoAtual, 0));
  renderizarPaginaAtual();
  document.getElementById("card-roteiro").hidden = false;
}

function adicionarProximaPagina() {
  if (!roteiroLongoAtual) return;
  if (paginaAtual < paginasRoteiro.length - 1) {
    paginaAtual++;
    renderizarPaginaAtual();
    return;
  }
  if (paginasRoteiro.length >= 3) return;
  const papel = sortearPapelDiferente([ultimoPapel]);
  const tom = sortear(dadosRoteiros.tons);
  const etapa = paginasRoteiro.length;
  paginasRoteiro.push(criarPagina(papel, tom, contextoRoteiro, true, etapa));
  paginaAtual = paginasRoteiro.length - 1;
  renderizarPaginaAtual();
}

function exibirPaginaAnterior() {
  if (paginaAtual === 0) return;
  paginaAtual--;
  renderizarPaginaAtual();
}

// O projeto ainda não possui uma lista de personagens ou perfis individuais.
const personagens = [];
let toastTimeout;

function normalizarTexto(valor = "") {
  return String(valor)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
}

function escaparHtml(valor = "") {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[caractere]);
}

function montarIndiceBusca() {
  return [
    ...profissionais.map(item => ({
      tipo: "profissional", titulo: item.nome, categoria: item.area,
      descricao: item.desc, emoji: item.emoji, dados: item
    })),
    ...fandubs.map(item => ({
      tipo: "fandub", titulo: item.titulo, categoria: "Fandub",
      descricao: `${item.user} • ${item.obra}`, emoji: "▶️", dados: item
    })),
    ...personagens.map(item => ({
      tipo: "personagem", titulo: item.nome, categoria: item.categoria || "Personagem",
      descricao: [item.obra, item.dublador, item.descricao].filter(Boolean).join(" • "), emoji: item.emoji || "🎭", dados: item
    }))
  ];
}

function renderCards() {
  document.getElementById("professionalCards").innerHTML = profissionais.map((p, indice) => `
    <div class="col-md-4"><div class="card-dubla">${p.foto ? `<img class="avatar avatar-photo" src="${escaparHtml(p.foto)}" alt="Foto de ${escaparHtml(p.nome)}" loading="lazy" decoding="async">` : `<div class="avatar" aria-hidden="true">${escaparHtml(p.emoji)}</div>`}<div class="card-body">
      <h4>${escaparHtml(p.nome)}</h4>
      ${(estudiosPorIndice[indice] || []).length ? `<div class="profile-section"><h5>Estúdios com trabalhos creditados</h5><ul>${estudiosPorIndice[indice].map(estudio => `<li><a href="${escaparHtml(estudio.url)}" target="_blank" rel="noopener noreferrer">${escaparHtml(estudio.nome)}</a></li>`).join("")}</ul></div>` : ""}
      <button class="btn btn-outline-primary btn-sm" type="button" data-profile-index="${profissionais.indexOf(p)}">Ver perfil</button>
    </div></div></div>`).join("");

  document.getElementById("fandubCards").innerHTML = fandubs.map(f => `
    <div class="col-md-4"><div class="fandub"><div class="play">▶️</div><span class="tag">${escaparHtml(f.obra)}</span><h5 class="mt-3">${escaparHtml(f.titulo)}</h5><p class="mb-2">${escaparHtml(f.user)}</p><small>❤️ ${f.likes} curtidas</small></div></div>`).join("");
}

function criarCardResultado(resultado) {
  const cardClass = resultado.tipo === "fandub" ? "fandub" : "card-dubla";
  const acao = resultado.tipo === "profissional"
    ? `<button class="btn btn-outline-primary btn-sm mt-3" type="button" data-profile-index="${profissionais.indexOf(resultado.dados)}">Ver perfil</button>`
    : "";
  const avatarResultado = resultado.tipo === "profissional" && resultado.dados.foto
    ? `<img class="avatar search-result-avatar avatar-photo" src="${escaparHtml(resultado.dados.foto)}" alt="Foto de ${escaparHtml(resultado.dados.nome)}" loading="lazy" decoding="async">`
    : `<div class="avatar search-result-avatar" aria-hidden="true">${escaparHtml(resultado.emoji)}</div>`;

  return `<div class="col-md-4"><article class="${cardClass} search-result-card">
    ${avatarResultado}
    <div class="card-body"><span class="tag">${escaparHtml(resultado.categoria)}</span>
      <h3 class="h5 mt-3">${escaparHtml(resultado.titulo)}</h3>
      <p>${escaparHtml(resultado.descricao)}</p>${acao}
    </div></article></div>`;
}

function mostrarResultados(resultados, termo) {
  const area = document.getElementById("searchResults");
  const titulo = document.getElementById("searchResultsTitle");
  const quantidade = document.getElementById("searchResultsCount");
  const grade = document.getElementById("searchResultsGrid");

  area.hidden = false;
  titulo.textContent = resultados.length ? `Resultados para “${termo}”` : "🔎 Nenhum resultado encontrado";
  quantidade.textContent = resultados.length
    ? `${resultados.length} ${resultados.length === 1 ? "resultado encontrado" : "resultados encontrados"}.`
    : "Tente outro termo, como o nome de um dublador, uma área ou uma obra.";
  grade.innerHTML = resultados.length
    ? resultados.map(criarCardResultado).join("")
    : `<div class="col-12"><div class="resultado-vazio"><div class="resultado-icone">🔎</div><p>Tente outro termo para encontrar profissionais ou fandubs.</p></div></div>`;
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buscar() {
  const campo = document.getElementById("mainSearch");
  const termo = campo.value.trim();

  if (!termo) {
    avisar("Digite algo para pesquisar.");
    campo.focus();
    return;
  }

  const consulta = normalizarTexto(termo);
  const resultados = montarIndiceBusca().filter(item => {
    const conteudo = normalizarTexto([item.titulo, item.categoria, item.descricao].join(" "));
    return conteudo.includes(consulta);
  });
  mostrarResultados(resultados, termo);
}

function abrirPerfil(nome) {
  const profissional = typeof nome === "number" ? profissionais[nome] : profissionais.find(item => normalizarTexto(item.nome) === normalizarTexto(nome));
  if (!profissional) return;
  const modalElement = document.getElementById("profileModal");
  const conteudo = document.getElementById("profileModalContent");
  if (!modalElement || !conteudo || !window.bootstrap?.Modal) return;
  const creditos = (profissional.creditos || []).map(credito => `<li>${escaparHtml(credito)}</li>`).join("");
  const fontes = (profissional.fontes || []).map(fonte => `<li><a href="${escaparHtml(fonte.url)}" target="_blank" rel="noopener noreferrer">${escaparHtml(fonte.titulo)}</a></li>`).join("");
  const imagem = profissional.foto ? `<img class="profile-photo" src="${escaparHtml(profissional.foto)}" alt="Foto de ${escaparHtml(profissional.nome)}">` : `<div class="profile-avatar" aria-hidden="true">${escaparHtml(profissional.emoji || "🎙️")}</div>`;
  conteudo.innerHTML = `${imagem}<div class="profile-content"><p class="eyebrow">PERFIL DO PROFISSIONAL</p><h2>${escaparHtml(profissional.nome)}</h2><div class="profile-demo-notice" role="note"><strong>Informações com fontes.</strong> Esta seleção reúne créditos publicados e não representa uma filmografia completa.</div>${profissional.area ? `<section class="profile-section"><h3>Áreas de atuação</h3><p>${escaparHtml(profissional.area)}</p></section>` : ""}${profissional.desc ? `<section class="profile-section"><h3>Sobre</h3><p>${escaparHtml(profissional.desc)}</p></section>` : ""}${creditos ? `<section class="profile-section"><h3>Créditos selecionados</h3><ul>${creditos}</ul></section>` : ""}${fontes ? `<section class="profile-section"><h3>Fontes</h3><ul>${fontes}</ul></section>` : ""}</div>`;
  window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
}
function enter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buscar();
  }
}

function filtrarVozes() {
  document.getElementById("iniciantes").scrollIntoView({ behavior: "smooth" });
  avisar("Filtros de voz: demonstração iniciada!");
}

function responderQuiz(ok, resultadoId) {
  const resultado = document.getElementById(resultadoId);
  if (!resultado) return;
  resultado.textContent = ok ? "✅ Acertou!" : "❌ Tente novamente!";
}

const perguntasQuiz = [
  { pergunta: "Qual é a principal função de um dublador?", opcoes: ["Traduzir livros", "Interpretar personagens usando a voz", "Editar os efeitos visuais", "Criar trilhas sonoras"], correta: 1, explicacao: "O dublador interpreta personagens, transmitindo emoções e personalidade por meio da voz." },
  { pergunta: "O que é sincronização labial?", opcoes: ["Aumentar o volume do áudio", "Imitar o sotaque de alguém", "Ajustar a fala ao movimento da boca do personagem", "Gravar vários personagens ao mesmo tempo"], correta: 2, explicacao: "A sincronização labial busca combinar a fala dublada com os movimentos da boca do personagem." },
  { pergunta: "O que é um teste de voz para dublagem?", opcoes: ["Uma avaliação para verificar a interpretação e as habilidades vocais", "Uma competição de canto obrigatória", "Um teste para editar vídeos", "Uma prova de conhecimentos gerais"], correta: 0, explicacao: "O teste de voz pode avaliar interpretação, dicção, expressividade e outras habilidades." },
  { pergunta: "O que significa ter boa dicção?", opcoes: ["Falar sempre muito alto", "Falar o mais rápido possível", "Usar apenas uma emoção", "Pronunciar as palavras com clareza"], correta: 3, explicacao: "A boa dicção ajuda o público a compreender as falas com clareza." },
  { pergunta: "O que um dublador deve fazer ao interpretar uma cena triste?", opcoes: ["Usar sempre a mesma voz", "Compreender o contexto e transmitir a emoção da cena", "Gritar todas as falas", "Ignorar as intenções do personagem"], correta: 1, explicacao: "É importante compreender o contexto e transmitir a emoção de forma convincente." },
  { pergunta: "Para que serve o roteiro de dublagem?", opcoes: ["Escolher os equipamentos do estúdio", "Definir a iluminação da sala", "Orientar as falas e a interpretação dos personagens", "Substituir a direção de dublagem"], correta: 2, explicacao: "O roteiro orienta as falas e pode incluir indicações de tempo, personagens e interpretação." },
  { pergunta: "O que é uma fandub?", opcoes: ["Uma dublagem feita por fãs, geralmente em projetos não oficiais", "Uma técnica exclusiva de cinema profissional", "Um programa de edição de áudio", "Uma aula de canto"], correta: 0, explicacao: "Fandub é uma dublagem realizada por fãs, muitas vezes como prática ou projeto colaborativo." },
  { pergunta: "Qual atitude ajuda um iniciante a evoluir na dublagem?", opcoes: ["Evitar ouvir as próprias gravações", "Falar sem praticar", "Copiar todas as vozes sem compreender a cena", "Praticar interpretação e avaliar as próprias gravações"], correta: 3, explicacao: "A prática constante e a análise das gravações ajudam a identificar pontos fortes e aspectos a melhorar." },
  { pergunta: "Para que serve a respiração na interpretação vocal?", opcoes: ["Somente para aumentar o volume", "Para apoiar a fala e ajudar no controle das frases", "Para deixar toda voz igual", "Para eliminar a necessidade de ensaiar"], correta: 1, explicacao: "O controle da respiração contribui para a sustentação das frases e uma fala mais estável." },
  { pergunta: "O que é direção de dublagem?", opcoes: ["A escolha do figurino dos personagens", "A criação dos desenhos da animação", "A orientação dos atores para alcançar a interpretação desejada", "A publicação de vídeos nas redes sociais"], correta: 2, explicacao: "A direção orienta a interpretação, o ritmo e as intenções das falas." }
];

let quizIndice = 0;
let quizRespostas = Array(perguntasQuiz.length).fill(null);

function renderizarPerguntaQuiz() {
  const pergunta = perguntasQuiz[quizIndice];
  const opcoes = document.getElementById("quizOptions");
  const progresso = document.querySelector(".quiz-progress");
  document.getElementById("quizTitle").textContent = pergunta.pergunta;
  document.getElementById("quizProgressText").textContent = `Pergunta ${quizIndice + 1} de ${perguntasQuiz.length}`;
  document.getElementById("quizProgressBar").style.width = `${((quizIndice + 1) / perguntasQuiz.length) * 100}%`;
  progresso.setAttribute("aria-valuenow", String(quizIndice + 1));
  opcoes.innerHTML = `<legend class="visually-hidden">Escolha uma alternativa</legend>${pergunta.opcoes.map((opcao, indice) => `<label class="quiz-choice${quizRespostas[quizIndice] === indice ? " selected" : ""}"><input type="radio" name="quizAnswer" value="${indice}" ${quizRespostas[quizIndice] === indice ? "checked" : ""}><span class="quiz-letter">${String.fromCharCode(65 + indice)}</span><span>${escaparHtml(opcao)}</span></label>`).join("")}`;
  document.getElementById("quizNotice").textContent = "";
  document.getElementById("quizPrevious").disabled = quizIndice === 0;
  document.getElementById("quizNext").hidden = quizIndice === perguntasQuiz.length - 1;
  document.getElementById("quizFinish").hidden = quizIndice !== perguntasQuiz.length - 1;
}

function finalizarQuiz() {
  const faltantes = quizRespostas.filter(resposta => resposta === null).length;
  if (faltantes) {
    document.getElementById("quizNotice").textContent = `Responda às ${faltantes} pergunta(s) restante(s) antes de finalizar.`;
    const primeira = quizRespostas.findIndex(resposta => resposta === null);
    if (primeira !== -1) { quizIndice = primeira; renderizarPerguntaQuiz(); document.getElementById("quizNotice").textContent = `Responda às ${faltantes} pergunta(s) restante(s) antes de finalizar.`; }
    return;
  }
  const acertos = perguntasQuiz.reduce((total, pergunta, indice) => total + (quizRespostas[indice] === pergunta.correta ? 1 : 0), 0);
  const pontos = acertos * 10;
  const desempenho = acertos === 10 ? "Excelente! Você domina os fundamentos da dublagem." : acertos >= 7 ? "Muito bem! Você já conhece bastante sobre dublagem." : acertos >= 4 ? "Bom começo! Continue praticando e aprendendo." : "Continue estudando: cada prática ajuda sua voz a evoluir.";
  const resultado = document.getElementById("quizResult");
  resultado.innerHTML = `<div class="quiz-score"><span class="quiz-score-value">${pontos}</span><span>de 100 pontos</span></div><h3>Resultado: ${acertos} acerto(s) e ${perguntasQuiz.length - acertos} erro(s)</h3><p class="quiz-performance">${desempenho}</p><div class="quiz-review">${perguntasQuiz.map((pergunta, indice) => { const correta = quizRespostas[indice] === pergunta.correta; return `<article class="quiz-review-item ${correta ? "is-correct" : "is-wrong"}"><h4>Pergunta ${indice + 1}: ${correta ? "Acerto!" : `Erro — resposta correta: ${escaparHtml(pergunta.opcoes[pergunta.correta])}`}</h4><p class="quiz-review-answer">Sua resposta: ${escaparHtml(pergunta.opcoes[quizRespostas[indice]])}</p><p>${escaparHtml(pergunta.explicacao)}</p></article>`; }).join("")}</div><button type="button" class="btn btn-primary" id="quizRetry">Refazer quiz</button>`;
  document.getElementById("quizPlay").hidden = true;
  resultado.hidden = false;
  document.getElementById("quizProgressText").textContent = "Quiz concluído";
  document.getElementById("quizProgressBar").style.width = "100%";
  document.querySelector(".quiz-progress").setAttribute("aria-valuenow", "10");
}

function reiniciarQuiz() {
  quizIndice = 0;
  quizRespostas = Array(perguntasQuiz.length).fill(null);
  document.getElementById("quizResult").hidden = true;
  document.getElementById("quizPlay").hidden = false;
  renderizarPerguntaQuiz();
  document.getElementById("quizTitle").focus();
}

function avisar(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.display = "block";
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { toast.style.display = "none"; }, 2500);
}

document.getElementById("mainSearch").addEventListener("keydown", enter);
document.getElementById("btn-gerar").addEventListener("click", executarGerador);
document.getElementById("btn-trocar-roteiro").addEventListener("click", executarGerador);
document.getElementById("btn-proxima-pagina").addEventListener("click", adicionarProximaPagina);
document.getElementById("btn-pagina-anterior").addEventListener("click", exibirPaginaAnterior);
document.addEventListener("click", event => { const button = event.target.closest("[data-profile-index]"); if (button) abrirPerfil(Number(button.dataset.profileIndex)); });
document.getElementById("quizOptions").addEventListener("change", event => {
  if (event.target.matches('input[name="quizAnswer"]')) {
    quizRespostas[quizIndice] = Number(event.target.value);
    document.querySelectorAll(".quiz-choice").forEach(opcao => opcao.classList.toggle("selected", opcao.contains(event.target)));
  }
});
document.getElementById("quizPrevious").addEventListener("click", () => { if (quizIndice > 0) { quizIndice--; renderizarPerguntaQuiz(); document.getElementById("quizTitle").focus(); } });
document.getElementById("quizNext").addEventListener("click", () => {
  quizIndice++;
  renderizarPerguntaQuiz();
  document.getElementById("quizTitle").focus();
});
document.getElementById("quizFinish").addEventListener("click", finalizarQuiz);
document.getElementById("quizResult").addEventListener("click", event => { if (event.target.closest("#quizRetry")) reiniciarQuiz(); });
document.getElementById("quizTitle").setAttribute("tabindex", "-1");
renderizarPerguntaQuiz();
renderCards();
