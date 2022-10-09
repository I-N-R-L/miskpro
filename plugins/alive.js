const  { inrl , config }= require('../lib/')
const Config = require("../config");

inrl(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
             try {
		const start = new Date().getTime()
		await client.sendMessage( message.from, { text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*' }, { quoted: message })
		const end = new Date().getTime()
		await client.sendMessage( message.from, { text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*' }, { quoted: message })
		global.catchError = false;
                } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
                }
	 }
);
const InRl = require('../lib/Store');


inrl({ pattern: ['del'], desc: "to create to delete unwanted grp msg by admins",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

                if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a group content"},{ quoted: message })
                let { chat, fromMe, id } = message.quoted
                client.sendMessage(message.from, { delete: { remoteJid: message.chat, fromMe: message.quoted.fromMe, id: message.quoted.id, participant: message.quoted.sender }})
            }
);

inrl(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
const Message = {
      image: { url: config.image.url.D_E_TMB },
      caption: `╭═══〘${Config.ALIVETXT}〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴏᴡɴᴇʀ :${Config.BOT_INFO.split(",")[1]}
┃☯︎│ ᴜꜱᴇʀ : ${message.client.pushName}
┃☯︎│ ᴍᴏᴅᴇ : ${Config.WORKTYPE}
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
┃☯︎│  ꧁--☠︎︎--㋛︎---༒︎---㋛︎--☠︎︎--꧂
┃☯︎│              ${Config.BOT_INFO.split(",")[0]}
┃☯︎│  ꧁--☠︎︎--㋛︎---༒︎---㋛︎--☠︎︎--꧂
┃☯︎│ 
┃☯︎╰───────────────
╰═════════════════⊷`
    };
    await client.sendMessage(message.from, Message, { quoted: message });
});
inrl(
	   {
		pattern: ['jid'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
const hehe = message.key.remoteJid || mmessage.from;
return await client.sendErrorMessage( message.from, { text : hehe },{ quoted: message } );
                }
);
