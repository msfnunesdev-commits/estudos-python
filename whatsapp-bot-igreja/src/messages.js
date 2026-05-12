// Arquivo central de mensagens.
// Edite este arquivo sempre que quiser mudar textos sem mexer na lógica do bot.

const MENU_PRINCIPAL = `Paz do Senhor! 🙏
Seja bem-vindo ao WhatsApp da nossa igreja.

Digite o número da opção desejada:

1 - Horários dos cultos
2 - Endereço da igreja
3 - Pedido de oração
4 - Pedido de visita
5 - Falar com alguém
6 - Eventos da semana
0 - Voltar ao menu inicial`;

const VOLTAR_MENU = '\n\nDigite 0 para voltar ao menu inicial.';

module.exports = {
  MENU_PRINCIPAL,
  VOLTAR_MENU,

  horariosCultos: `Nossos cultos acontecem nos seguintes horários:

Quarta-feira: 19h30
Domingo: 9h e 18h

Esperamos você! 🙏`,

  enderecoIgreja: `Nossa igreja fica no seguinte endereço:

Av Humberto de Alencar castelo Branco, 2915.

Você também pode abrir no mapa:

https://share.google/HLYvYOEIhndN0ZMQH`,

  eventosSemana: `Eventos da semana:

[COLOCAR EVENTOS AQUI]`,

  opcaoInvalida: `Não entendi sua opção. 🙏
Por favor, digite um número do menu.

Digite 0 para ver o menu inicial.`,

  pedirNomeOracao: 'Claro 🙏 Qual é o seu nome?',
  pedirTextoOracao: 'Agora escreva seu pedido de oração.',

  pedirNomeVisita: 'Claro 🙏 Qual é o seu nome?',
  pedirMotivoVisita: 'Qual o motivo da visita?',
  pedirHorarioVisita: 'Qual melhor dia ou horário para entrarmos em contato?',

  falarComAlguem: `Certo 🙏
Sua mensagem será encaminhada para uma pessoa da equipe.

Por favor, escreva sua dúvida ou mensagem abaixo.
Assim que possível, alguém responderá.`
};
