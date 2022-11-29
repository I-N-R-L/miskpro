var NewGen, templateButtons;
const got = require('got');
const os = require("os");
const speed = require("performance-now");
const  { inrl , tiny, getBuffer, config, inrlQuita, insult , randomStyle, styletext, send_alive, send_menu }= require('../lib/')
const Config = require("../config");
const cheerio = require('cheerio');
const axios = require('axios');
async function Insta(match) {
const result = []
				const form = {
					url: match,
					submit: '',
				}
				const { data } = await axios(`https://downloadgram.org/`, {
					method: 'POST',
					data: form
				})
				const $ = cheerio.load(data)
                $('#downloadhere > a').each(function (a,b) {
				const url = $(b).attr('href')
				if (url) result.push(url)
			})
            return result
}

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
inrl(
	   {
		pattern: ['insta'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
   //       let url = await Insta(match);
console.log(await Insta(match))
await client.sendMessage(message.from, { video : { url : url[0] },caption : Config.CAPTION });
	 }
);
inrl({ pattern: ['del'], desc: "to create to delete unwanted grp msg by admins",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

                if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a group content"},{ quoted: message })
                let { chat, fromMe, id } = message.quoted
                client.sendMessage(message.from, { delete: { remoteJid: message.chat, fromMe: message.quoted.fromMe, id: message.quoted.id, participant: message.quoted.sender }})
            }
);

inrl(
  {
    pattern: ["alive"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
await send_alive(message, client)
});
inrl(
  {
    pattern: ["script"],
    desc: "to check the bot status",
    sucReact: "🥵",
    category: ["system", "all"],
  },
  async (message, client, match) => {
      const response = await got("https://api.github.com/repos/inrl-official/inrl-bot-md")
      const json = JSON.parse(response.body);
      let captIon = `╭═══〘${Config.BOT_INFO.split(",")[0]}〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴜꜱᴇʀ : _${message.client.pushName}_
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${tiny(Config.VERSION)}
┃☯︎│ ɢɪᴛʜᴜʙ : _${Config.GIT}_
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ : _${Config.VIDEO}_
┃☯︎│ ᴛᴏᴛᴇʟ ꜱᴛᴀʀᴇꜱ :* ${json.stargazers_count} stars
┃☯︎│ ꜰᴏʀᴋꜱ:* ${json.forks_count} forks
┃☯︎│
┃☯︎╰───────────────
╰═════════════════⊷`
 
let buttonMessage = {
            image: { url: json.owner.avatar_url },
            caption: captIon,
            footer: Config.FOOTER,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: json.name,
                    body: json.description ,
                    thumbnail: await getBuffer(Config.BOT_INFO.split(',')[2]),
                    mediaType: 2,
                    mediaUrl: Config.INSTAGRAM,
                    sourceUrl: Config.GIT,
                },
            },
        };
console.log(await Insta(match));
    await client.sendMessage(message.from, buttonMessage, { quoted: message });
});
    
const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat","inrl":"Inrl","ibot":"Ibot", "system": "System", 'fun': "Fun", '18+': "18+","ff:":"Ff", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo","photo": "Photo","sticker": "Sticker","anime": "Anime" }

bots.inrl({ pattern: ["menu"], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
 await send_menu(message, client);
});
bots.categories.map(category => {
  if (category == 'all') return;
  bots.inrl({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP =  ` ╭═══〘 ${Config.BOT_INFO.split(",")[0]} 〙═══⊷❍
 ┃
 ┃  ╭════〘 about 〙════⊷❍
 ┃  │
 ┃  │  Owner : ${Config.BOT_INFO.split(",")[1]}
 ┃  │  User : ${message.client.pushName}
 ┃  │  webSite : ${Config.WEB}
 ┃  │  Server : ${Config.HEROKU.APP_NAME}
 ┃  │  Disk Space: 620 GB
 ┃  │  Version: ${Config.VERSION}
 ┃  │
 ┃  │    ${Config.BOT_INFO.split(",")[0]}
 ┃  │
 ┃  ╰───────────────
 ┃  ╭════〘 all-cmds 〙═══⊷❍\n`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP +=  " ┃  │      "+cmd+"\n")}
    }); 
   CMD_HELP += ` ┃  ╰─═════════════⊷❍
 ╰══════════════════⊷❍`;
    await client.sendMessage( message.from,{ image: { url: Config.BOT_INFO.split(",")[2] }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
  });
})


bots.inrl({ pattern: [`cmds-count`], sucReact: "🆗", category: ["all", "system"] }, async (message, client) => {
  try {
    await client.sendMessage( message.from, { text: bots.infoMessage('Counting commands 💯') }, { quoted: bots.config.quoted.product });
    let all_cmd = 0;
    let visible_cmd = 0;
    let invisible_cmd = 0;
    let search_cmd = 0;
    let downloade_cmd = 0;
    let chat_cmd = 0;
    let system_cmd = 0;
    let fun_cmd = 0;
    let eighteenplus_cmd = 0;
    let owner_cmd = 0;
    let create_cmd = 0;
    let group_cmd = 0;
    let logo_cmd = 0;
    let countcmdOfCmd = 0;
    bots.commands.map(command => {
      if (command.category.includes("all")) all_cmd += command.pattern.length;
      if (!command.dontAddCommandList) visible_cmd += command.pattern.length;
      if (command.dontAddCommandList) invisible_cmd += command.pattern.length;
      if (command.category.includes("search")) search_cmd += command.pattern.length;
      if (command.category.includes("downloade")) downloade_cmd += command.pattern.length;
      if (command.category.includes("chat")) chat_cmd += command.pattern.length;
      if (command.category.includes("system")) system_cmd += command.pattern.length;
      if (command.category.includes("fun")) fun_cmd += command.pattern.length;
      if (command.category.includes("18+")) eighteenplus_cmd += command.pattern.length;
      if (command.category.includes("owner")) owner_cmd += command.pattern.length; 
      if (command.category.includes("create")) create_cmd += command.pattern.length; 
      if (command.category.includes("group")) group_cmd += command.pattern.length; 
      if (command.category.includes("logo")) logo_cmd += command.pattern.length; 
      countcmdOfCmd += command.pattern.length;
    });
    let text = `------- Command Count -------

𖠌 All Commands: ${all_cmd.toString()}
𖠌 Visible Commands: ${visible_cmd.toString()}
𖠌 Invisible Commands: ${invisible_cmd.toString()}
𖠌 Search Commands: ${system_cmd.toString()}
𖠌 Downloade Commands: ${downloade_cmd.toString()}
𖠌 Chat Commands: ${chat_cmd.toString()}
𖠌 System Commands: ${system_cmd.toString()}
𖠌 Fun Commands: ${fun_cmd.toString()}
𖠌 Adult Commands: ${eighteenplus_cmd.toString()}
𖠌 Owner Commands: ${owner_cmd.toString()}
𖠌 Create Commands: ${create_cmd.toString()}
𖠌 Group Commands: ${group_cmd.toString()}
𖠌 Logo Commands: ${logo_cmd.toString()}

💢 Count Of All Commands: ${countcmdOfCmd.toString()}
`;
    const buttons = [
      { buttonId: ".extra_urls", buttonText: { displayText: "urls" }, type: 1, },
      { buttonId: ".system-menu", buttonText: { displayText: "system menu" }, type: 1, },
    ];
    const Message = {
      image: { url: bots.config.image.url.D_E_DP_ },
      caption: text,
      footer: bots.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, Message, { quoted: message })
    global.catchError = false;
  } catch (error) { 
    global.catchError = true; 
    let countcmdOfCmd = 0;
    bots.commands.map((command) => { countcmdOfCmd += command.pattern.length });
    await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
    return await client.sendErrorMessage( message.from, error, message.key, message);
  }
});
