// Controle de estado em memória por número de telefone.
// Importante: se o bot reiniciar, os dados deste Map serão perdidos.

const conversationStates = new Map();

const STATES = {
  MENU: 'MENU',
  ORACAO_NOME: 'ORACAO_NOME',
  ORACAO_PEDIDO: 'ORACAO_PEDIDO',
  VISITA_NOME: 'VISITA_NOME',
  VISITA_MOTIVO: 'VISITA_MOTIVO',
  VISITA_HORARIO: 'VISITA_HORARIO',
  HUMANO: 'HUMANO'
};

function getUserState(userId) {
  if (!conversationStates.has(userId)) {
    // Estado inicial padrão para quem nunca falou com o bot.
    conversationStates.set(userId, {
      step: STATES.MENU,
      data: {}
    });
  }

  return conversationStates.get(userId);
}

function setUserState(userId, step, data = {}) {
  conversationStates.set(userId, { step, data });
}

function updateUserData(userId, newData) {
  const current = getUserState(userId);
  conversationStates.set(userId, {
    step: current.step,
    data: {
      ...current.data,
      ...newData
    }
  });
}

function resetUserState(userId) {
  setUserState(userId, STATES.MENU, {});
}

module.exports = {
  STATES,
  getUserState,
  setUserState,
  updateUserData,
  resetUserState
};
