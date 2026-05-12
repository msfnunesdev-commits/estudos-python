const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const messages = require('./messages');
const {
  STATES,
  getUserState,
  setUserState,
  updateUserData,
  resetUserState
} = require('./state');

// LocalAuth guarda a sessão localmente para evitar escanear QR toda vez.
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  console.log('QR Code gerado! Escaneie com o WhatsApp do celular:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot conectado e pronto para responder mensagens!');
});

client.on('message', async (message) => {
  // Ignora grupos para manter foco no atendimento individual.
  if (message.from.includes('@g.us')) {
    return;
  }

  const userId = message.from;
  const incomingText = message.body.trim();
  const text = incomingText.toLowerCase();
  const userState = getUserState(userId);

  // Opção global: digitou 0 em qualquer momento -> volta ao menu.
  if (text === '0') {
    resetUserState(userId);
    await message.reply(messages.MENU_PRINCIPAL);
    return;
  }

  // Fluxos que estão no meio de coleta de dados.
  if (userState.step === STATES.ORACAO_NOME) {
    updateUserData(userId, { nome: incomingText });
    setUserState(userId, STATES.ORACAO_PEDIDO, getUserState(userId).data);
    await message.reply(messages.pedirTextoOracao);
    return;
  }

  if (userState.step === STATES.ORACAO_PEDIDO) {
    updateUserData(userId, { pedido: incomingText });
    const { nome } = getUserState(userId).data;

    // Aqui é um bom ponto futuro para salvar em Google Sheets/banco de dados.
    await message.reply(
      `Recebemos seu pedido de oração, ${nome}. 🙏\nA equipe da igreja estará orando por você.${messages.VOLTAR_MENU}`
    );

    resetUserState(userId);
    return;
  }

  if (userState.step === STATES.VISITA_NOME) {
    updateUserData(userId, { nome: incomingText });
    setUserState(userId, STATES.VISITA_MOTIVO, getUserState(userId).data);
    await message.reply(messages.pedirMotivoVisita);
    return;
  }

  if (userState.step === STATES.VISITA_MOTIVO) {
    updateUserData(userId, { motivo: incomingText });
    setUserState(userId, STATES.VISITA_HORARIO, getUserState(userId).data);
    await message.reply(messages.pedirHorarioVisita);
    return;
  }

  if (userState.step === STATES.VISITA_HORARIO) {
    updateUserData(userId, { horario: incomingText });
    const { nome } = getUserState(userId).data;

    // Aqui também pode salvar os dados futuramente.
    await message.reply(
      `Recebemos seu pedido de visita, ${nome}. 🙏\nAlguém da equipe entrará em contato assim que possível.${messages.VOLTAR_MENU}`
    );

    resetUserState(userId);
    return;
  }

  // Se foi encaminhado para atendimento humano, o bot para de responder automaticamente.
  if (userState.step === STATES.HUMANO) {
    return;
  }

  // Saudação simples ou primeira mensagem: mostra menu.
  const saudacoes = ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite'];
  const pareceSaudacao = saudacoes.some((s) => text.includes(s));

  if (pareceSaudacao) {
    await message.reply(messages.MENU_PRINCIPAL);
    return;
  }

  // Menu numérico fixo.
  switch (text) {
    case '1':
      await message.reply(`${messages.horariosCultos}${messages.VOLTAR_MENU}`);
      break;

    case '2':
      await message.reply(`${messages.enderecoIgreja}${messages.VOLTAR_MENU}`);
      break;

    case '3':
      setUserState(userId, STATES.ORACAO_NOME, {});
      await message.reply(messages.pedirNomeOracao);
      break;

    case '4':
      setUserState(userId, STATES.VISITA_NOME, {});
      await message.reply(messages.pedirNomeVisita);
      break;

    case '5':
      setUserState(userId, STATES.HUMANO, {});
      await message.reply(messages.falarComAlguem);
      break;

    case '6':
      await message.reply(`${messages.eventosSemana}${messages.VOLTAR_MENU}`);
      break;

    default:
      await message.reply(messages.opcaoInvalida);
      break;
  }
});

client.initialize();
