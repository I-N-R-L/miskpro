const bots = require("../lib/prefix");
const fs = require('fs');
const path = require('path');
/*
bots.inrl(
  {
    pattern: ["mendan"],
    dontAddCommandList: true,
    sucReact: "💨",
  },
  async (message, client) => {
    const caption = `
    const Message = {
      linkPreview: {
        "canonical-url": "https://abu-md-deployer.vercel.app/",
        "matched-text": "https://abu-md-deployer.vercel.app/",
        title: "ᴀʙᴜ-ᴍᴅ",
        description: "ᴀʙᴜ sᴇʀ ᴛʏʀ 😹🤍",
        jpegThumbnail: bots.config.image.encd.D_E_ADEC,
      },
      text: caption,
    };
    const Message2 = {
      text: caption,
      contextInfo: {
        externalAdReply: {
          title: 'global.botname}',
          body: ` 𝑨𝒃𝒖 𝒔𝒆𝒓 𝑻𝒚𝒊𝒓`,
          previewType: "PHOTO",
          thumbnailUrl: ``,
          thumbnail: bots.config.image.encd.D_E_TMB,
          sourceUrl: "https://i.imgur.com/bjlbGCZ.jpg",
        },
      },
    };
    await client.sendMessage(
      message.from,
      Message,
      {
        quoted: bots.config.quoted.product,
      }
    );
    await client.sendMessage(
      message.from,
      Message2,
      {
        quoted: bots.config.quoted.product,
      }
    );
    global.catchError = false;
  }
);
*/
