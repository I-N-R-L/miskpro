/*
, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

const ezio = require("../lib/perfix");
const fs = require('fs');
const path = require('path');

ezio.inrl(
  {
    pattern: ["mtest"],
    dontAddCommandList: true,
    sucReact: "🎟",
  },
  async (message, client) => {
    const caption = ` WhatsApp Groups `;
    const Message = {
      linkPreview: {
        "canonical-url": "i.bot.com",
        "matched-text": "inrl.com",
        title: "Subhadra Poshi",
        description: "This isive",
        jpegThumbnail: ezio.config.image.url.D_E_DPC,
      },
      text: caption,
    };
    await client.sendMessage(
      message.from,
      Message
    );
 });
