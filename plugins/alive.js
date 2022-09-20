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
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ', url: Config.INSTAGRAM}},
]

const templateMessage = {
    image: { url: Config.ALIVE },
    caption: `╭═══〘`+Config.profile.botName +`〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴏᴡɴᴇʀ :`+Config.profile.ownerName+`
┃☯︎│ ᴜꜱᴇʀ : ${message.client.pushName}
┃☯︎│ ᴍᴏᴅᴇ : `+ Config.WORKTYPE +`
┃☯︎│ ꜱᴇʀᴠᴇʀ : ʜᴇʀᴏᴋᴜ
┃☯︎│ ᴛᴏᴛᴇʟ ʀᴀᴍ : 16.93 
┃☯︎│ ᴀᴠᴀʟɪʙʟᴇ ʀᴀᴍ : 0.95
┃☯︎│ ᴛᴏᴛᴇʟ ꜱᴩᴀᴄᴇ : 512ᴍʙ
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${Config.VERSION}
┃☯︎│ ɢɪᴛʜᴜʙ :`+Config.GIT+`
┃☯︎│ ᴡᴇʙꜱɪᴛᴇ :`+Config.WEB+`
┃☯︎│ ᴅᴀᴛᴀʙᴀꜱᴇ : ɪ-ʙᴏᴛ-ꜱᴇʀᴠᴇʀ
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ :`+Config.VIDEO+`
┃☯︎│ yᴏᴜᴛᴜʙᴇ :`+Config.YT+`
┃☯︎│
┃☯︎│  --------------------
┃☯︎│      `+Config.PACKNAME+`  
┃☯︎│  --------------------
┃☯︎│ 
┃☯︎╰───────────────
╰═════════════════⊷`,
    footer: Config.FOOTER,
    templateButtons: templateButtons
}
await client.sendMessage(message.from, templateMessage, { quoted: message });
});
