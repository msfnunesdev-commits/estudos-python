# Bot de WhatsApp para Igreja (uso real)

Projeto simples e direto para substituir ferramentas pagas de atendimento no WhatsApp da igreja, com menu numérico (sem IA).

## O que o bot já resolve

- Atendimento inicial automático com menu por números.
- Resposta rápida para dúvidas mais comuns:
  - Horários dos cultos
  - Endereço
  - Eventos da semana
- Coleta organizada de:
  - Pedido de oração
  - Pedido de visita
- Encaminhamento para atendimento humano quando necessário.

## Fluxo disponível

Menu principal:

1 - Horários dos cultos  
2 - Endereço da igreja  
3 - Pedido de oração  
4 - Pedido de visita  
5 - Falar com alguém  
6 - Eventos da semana  
0 - Voltar ao menu inicial

## Estrutura do projeto

```bash
whatsapp-bot-igreja/
├── package.json
├── README.md
└── src/
    ├── index.js      # conexão WhatsApp + regras do menu
    ├── messages.js   # todas as mensagens editáveis
    └── state.js      # estado por telefone (em memória)
```

## Pré-requisitos

- Node.js 18+
- Conta WhatsApp ativa no celular

## Instalação

```bash
cd whatsapp-bot-igreja
npm install
```

## Executar

```bash
npm start
```

Depois:
1. O terminal vai mostrar o QR Code.
2. No celular, abra **Aparelhos conectados**.
3. Escaneie o QR.
4. Ao conectar, o terminal mostrará que o bot está pronto.

## Edição rápida de mensagens

Edite apenas este arquivo quando quiser trocar textos:

- `src/messages.js`

Você pode alterar facilmente:
- horários,
- endereço,
- eventos,
- mensagens de confirmação.

## Como o estado funciona

O bot salva o andamento da conversa por número de telefone usando `Map` em memória.

Estados usados:
- `MENU`
- `ORACAO_NOME`
- `ORACAO_PEDIDO`
- `VISITA_NOME`
- `VISITA_MOTIVO`
- `VISITA_HORARIO`
- `HUMANO`

> Importante: se o processo reiniciar, os dados temporários em memória são perdidos.

## Recomendação para uso contínuo (24h)

Para manter rodando com reinício automático em servidor Linux:

```bash
npm install -g pm2
pm2 start src/index.js --name bot-igreja
pm2 save
pm2 startup
```

## Próximos passos (quando quiser evoluir)

1. Salvar pedidos de oração/visita em Google Sheets.
2. Disparar alerta para responsável (e-mail/Telegram).
3. Hospedar em VPS para ficar online o tempo todo.
4. Criar painel simples para equipe acompanhar pedidos.

## Observações de operação

- O bot foi feito para fluxo fixo e previsível (sem IA).
- Menu numérico ajuda pessoas idosas e reduz erro de uso.
- Opção **5** pausa respostas automáticas para não atrapalhar atendimento humano.
