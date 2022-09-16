const bots = require("../lib/perfix");
const Config = require("../config");
bots.inrl(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
const Message = {
      image: { url: bots.config.image.url.D_E_TMB },
      caption:`╭───────────────────
┃☞︎︎︎│ *ɪᴀᴍ ᴀʟɪᴠᴇ ʙʀᴏ*
┃∞│ ─━━━━━━━━━━━━━─
┃☞︎︎︎│ *➪ ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ* 
┃ɢɪᴛ :`+Config.GIT+`
┃ꜱᴜᴩᴩᴏʀᴛ ɢʀᴩ: `+Config.WAGRP+`
┃ᴡᴇʙ :`+Config.WEB+`
┃∞│ ─━━━━━━━━━━━━━─
╰───────────────────`
    };
    await client.sendMessage(message.from, Message, { quoted: message });
});
