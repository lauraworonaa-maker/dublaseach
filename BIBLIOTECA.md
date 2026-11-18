# Configurar a avaliação de voz

A página da Biblioteca grava o áudio no navegador e o envia ao servidor local somente depois do consentimento. Para gerar a avaliação real, configure uma chave da API da OpenAI no backend.

## Uso local

1. Copie `.env.example` para `.env` na pasta do projeto.
2. Abra `.env` e preencha `OPENAI_API_KEY` com uma chave válida da API. Não coloque a chave no HTML ou no JavaScript do navegador e não compartilhe o arquivo `.env`.
3. No terminal, dentro desta pasta, execute `npm start`.
4. Abra `http://localhost:3000/biblioteca.html`.

O modelo configurado em `.env.example` recebe áudio e retorna texto com a avaliação. Se a chave estiver ausente ou inválida, a página mostrará o erro do serviço em vez de inventar uma nota.

## Como funciona o retorno

A avaliação considera a frase esperada, a fidelidade do que foi falado, o tom vocal, a intensidade, a emoção, o ritmo e a dicção. Ela inclui pontos fortes, sugestões concretas de melhoria e exercícios. As notas são estimativas, não medidas objetivas de talento.

Ao avaliar o mesmo perfil outra vez, a página compara as notas com a tentativa anterior daquela sessão. Guarda somente essas notas e por critério na memória da página; fechar ou recarregar a aba apaga a comparação. O arquivo de áudio não fica salvo no servidor.
