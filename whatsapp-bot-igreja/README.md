# Bot de WhatsApp para Igreja (menu numérico)

Projeto didático para iniciantes: um bot simples de atendimento no WhatsApp, sem IA, com fluxo fixo por números.

## ✅ O que este bot faz

- Mostra um menu principal quando recebe saudação (ex: `oi`, `olá`, `bom dia`) ou primeira interação.
- Responde opções numéricas:
  - `1` Horários dos cultos
  - `2` Endereço da igreja
  - `3` Pedido de oração (com coleta de nome + pedido)
  - `4` Pedido de visita (com coleta de nome + motivo + melhor horário)
  - `5` Falar com alguém (pausa resposta automática para atendimento humano)
  - `6` Eventos da semana
  - `0` Voltar ao menu inicial
- Controla estado por número de telefone usando `Map` em memória.

> Observação importante: como os dados ficam em memória, **se o bot reiniciar os estados e pedidos temporários serão perdidos**.

---

## Estrutura de pastas

```bash
whatsapp-bot-igreja/
├── package.json
├── README.md
└── src/
    ├── index.js      # arquivo principal: conexão e lógica de mensagens
    ├── messages.js   # textos prontos e menu (fácil de editar)
    └── state.js      # controle de estado por telefone
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior.
- WhatsApp instalado no celular e conta ativa.

---

## Como instalar

1. Entre na pasta do projeto:

```bash
cd whatsapp-bot-igreja
```

2. Instale as dependências:

```bash
npm install
```

---

## Como rodar o bot

1. Inicie o projeto:

```bash
npm start
```

2. No terminal, será exibido um QR Code.
3. Abra o WhatsApp no celular:
   - Android: menu `⋮` > **Aparelhos conectados**
   - iPhone: **Configurações** > **Aparelhos conectados**
4. Toque em **Conectar um aparelho** e escaneie o QR Code.
5. Após conectar, o terminal mostrará:

```text
✅ Bot conectado e pronto para responder mensagens!
```

---

## Como funciona o fluxo (explicação simples)

### 1) Menu principal
Quando a pessoa envia uma saudação, o bot manda o menu.

### 2) Estado por usuário
Cada número de telefone tem um "estado" salvo no `Map`:

- `MENU`
- `ORACAO_NOME`
- `ORACAO_PEDIDO`
- `VISITA_NOME`
- `VISITA_MOTIVO`
- `VISITA_HORARIO`
- `HUMANO`

Isso permite que o bot saiba "em que etapa" cada pessoa está, mesmo com várias conversas ao mesmo tempo.

### 3) Fluxo de oração (opção 3)
- pergunta nome
- pergunta pedido
- confirma recebimento
- orienta digitar `0` para voltar

### 4) Fluxo de visita (opção 4)
- pergunta nome
- pergunta motivo
- pergunta melhor dia/horário
- confirma recebimento
- orienta digitar `0` para voltar

### 5) Falar com alguém (opção 5)
O bot envia mensagem de encaminhamento e entra no estado `HUMANO`, parando respostas automáticas para não atrapalhar a equipe.

---

## Onde editar mensagens

Para alterar textos sem mexer na lógica, edite:

- `src/messages.js`

Exemplo: trocar endereço, horários, eventos e texto do menu.

---

## Próximos passos sugeridos

1. **Salvar pedidos em Google Sheets**
   - Adicionar integração para gravar nome, pedido, data e telefone.

2. **Notificar responsável automaticamente**
   - Exemplo: enviar e-mail/Telegram para líder quando chegar pedido de oração ou visita.

3. **Hospedar em servidor**
   - Rodar em VPS (Ubuntu) com `pm2` para manter ligado 24h.

4. **Criar painel simples**
   - Um painel web básico para equipe visualizar pedidos pendentes.

5. **Persistir dados em banco**
   - Futuramente trocar o `Map` por SQLite, PostgreSQL ou Firebase.

---

## Observação sobre aprendizado

Este projeto foi feito para ser simples e didático.
A ideia é você entender bem:
- eventos (`client.on('message')`),
- condições (`if`, `switch`),
- estados de conversa,
- separação de arquivos.

Depois disso, você poderá evoluir com segurança para integrações maiores.
