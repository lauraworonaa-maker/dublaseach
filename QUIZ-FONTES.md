# Fontes do quiz “Quem Dubla Esse Personagem?”

O projeto não tem banco de dados de personagens, obras ou créditos de dublagem. A partida usa quatro registros locais, identificados por personagem e adaptação, curados para esta implementação:

| Personagem e versão | Crédito brasileiro | Fonte do crédito |
| --- | --- | --- |
| Bob Esponja, série animada | Wendel Bezerra | [Dublapédia: Bob Esponja Calça Quadrada](https://dublagem.fandom.com/wiki/Bob_Esponja_Cal%C3%A7a_Quadrada) |
| Peter Parker, Homem-Aranha (2002) | Manolo Rey | [Dublapédia: Homem-Aranha (2002)](https://dublagem.fandom.com/wiki/Homem-Aranha_(2002)) |
| Miles Morales, Homem-Aranha: Através do Aranhaverso (2023) | Cadu Paschoal | [Dublapédia: Através do Aranhaverso](https://dublagem.fandom.com/wiki/Homem-Aranha:_Atrav%C3%A9s_do_Aranhaverso) |
| Buzz Lightyear, Toy Story (1995) | Guilherme Briggs | [Dublapédia: Toy Story](https://dublagem.fandom.com/wiki/Toy_Story) |
| Dory, Procurando Nemo (dublagem original de 2003) | Maíra Góes | [Dublapédia: Procurando Nemo](https://dublagem.fandom.com/wiki/Procurando_Nemo) |
| Beto Pêra / Sr. Incrível, Os Incríveis (redublagem de 2009) | Luiz Feier Motta | [Dublapédia: Os Incríveis](https://dublagem.fandom.com/wiki/Os_Incr%C3%ADveis) |
| Elsa, Frozen: Uma Aventura Congelante (2013) | Taryn Szpilman | [Dublapédia: Frozen](https://dublagem.fandom.com/wiki/Frozen:_Uma_Aventura_Congelante) |
| Olaf, Frozen: Uma Aventura Congelante (2013) | Fábio Porchat | [Dublapédia: Frozen](https://dublagem.fandom.com/wiki/Frozen:_Uma_Aventura_Congelante) |
| Anna, Frozen: Uma Aventura Congelante (2013, diálogos) | Erika Menezes | [Dublapédia: Frozen](https://dublagem.fandom.com/wiki/Frozen:_Uma_Aventura_Congelante) |
| Son Goku, Dragon Ball Z (série, versão brasileira da Álamo) | Wendel Bezerra | [Dublapédia: Dragon Ball Z](https://dublagem.fandom.com/wiki/Dragon_Ball_Z) |

A fonte de crédito é uma enciclopédia comunitária especializada, não um banco oficial dos estúdios. Os links são mantidos ao lado de cada registro e no jogo. Cada registro explicita o título/adaptação da pergunta para separar vozes que variam entre versões. Os distratores foram escolhidos entre nomes de profissionais reais associados a outros créditos documentados no mesmo conjunto curado; não são registrados como parte da obra perguntada.

As imagens são buscadas em tempo de execução pela API de resumo da Wikipédia em português, usando o artigo correspondente ao personagem. O artigo de origem é vinculado sob a imagem. A disponibilidade e licença variam por arquivo; a Wikipédia pode usar material sob exceções locais de direito autoral, portanto os arquivos devem ter licença verificada antes de redistribuir ou empacotar imagens localmente. Se o serviço falhar, a rodada continua com estado de imagem indisponível. Não há chave ou credencial necessária; a conectividade com `pt.wikipedia.org` e `upload.wikimedia.org` é necessária para imagens.

O conteúdo atual fornece **10 personagens válidos** e usa dez rodadas por partida. A lista de perguntas é embaralhada a cada partida com Fisher–Yates; o gabarito viaja junto ao registro e a montagem de alternativas embaralha apenas a apresentação, sem mudar o índice da resposta correta. Cada partida usa uma cópia da lista, sem reposição. Não há autenticação nem persistência de pontuação no projeto.
