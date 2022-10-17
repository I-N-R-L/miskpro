var NewGen, templateButtons;
const os = require("os");
const speed = require("performance-now");
const  { inrl , config, inrlQuita, insult }= require('../lib/')
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

//testing automasion

const _0xc741c8=_0x362a;(function(_0x3e6837,_0x44b717){const _0x185b1e=_0x362a,_0xfd2404=_0x3e6837();while(!![]){try{const _0x2e29fe=-parseInt(_0x185b1e(0x13e))/0x1+-parseInt(_0x185b1e(0x141))/0x2+parseInt(_0x185b1e(0x145))/0x3+-parseInt(_0x185b1e(0x136))/0x4+parseInt(_0x185b1e(0x13c))/0x5+-parseInt(_0x185b1e(0x134))/0x6+-parseInt(_0x185b1e(0x13f))/0x7*(-parseInt(_0x185b1e(0x12b))/0x8);if(_0x2e29fe===_0x44b717)break;else _0xfd2404['push'](_0xfd2404['shift']());}catch(_0x350875){_0xfd2404['push'](_0xfd2404['shift']());}}}(_0x4caa,0x7722c));const Quita=await inrlQuita(),Insult=await insult(),Sender=message[_0xc741c8(0x13b)]['pushName'],Hits=global[_0xc741c8(0x13d)][_0xc741c8(0x133)];let myUsers=global[_0xc741c8(0x13d)][_0xc741c8(0x12f)][_0xc741c8(0x139)],date=new Date()[_0xc741c8(0x138)]('EN',{'timeZone':_0xc741c8(0x130)});;let host=os[_0xc741c8(0x12e)]();const aliveData=Config[_0xc741c8(0x149)];if(aliveData['includes'](';')){var split=aliveData[_0xc741c8(0x147)](';');aliveImgUrl=split[0x0],aliveTxt=split[0x1],aliveButton1=split[0x2],aliveButton2=split[0x3];}NewGen=aliveTxt;NewGen['includes'](_0xc741c8(0x144))&&(NewGen=NewGen[_0xc741c8(0x142)](_0xc741c8(0x144),''+Quita));function _0x4caa(){const _0x2e8beb=['250640fVKpTW','exif','toLocaleString','length','#Insult','client','3387670iHNbNA','mydb','338636ycpjLR','2674nIFIdH','#Sender','1105890FJMGoI','replace','#host','#Quita','557574blARTo','.jpg','split','#myUsers','ALIVE_DATA','includes','#date','22864sbDxRz','footer','#Hits','hostname','users','Asia/kolkata','.mp4','endsWith','hits','3077562jYkiZE','.jpeg'];_0x4caa=function(){return _0x2e8beb;};return _0x4caa();}NewGen['includes'](_0xc741c8(0x13a))&&(NewGen=NewGen[_0xc741c8(0x142)](_0xc741c8(0x13a),''+Insult));NewGen[_0xc741c8(0x14a)](_0xc741c8(0x140))&&(NewGen=NewGen[_0xc741c8(0x142)](_0xc741c8(0x140),''+Sender));NewGen['includes'](_0xc741c8(0x148))&&(NewGen=NewGen[_0xc741c8(0x142)](_0xc741c8(0x148),''+myUsers));function _0x362a(_0x5acd95,_0x1b91c7){const _0x4caacb=_0x4caa();return _0x362a=function(_0x362aa5,_0x58d290){_0x362aa5=_0x362aa5-0x12a;let _0x2e1251=_0x4caacb[_0x362aa5];return _0x2e1251;},_0x362a(_0x5acd95,_0x1b91c7);}NewGen[_0xc741c8(0x14a)](_0xc741c8(0x12d))&&(NewGen=NewGen[_0xc741c8(0x142)](_0xc741c8(0x148),''+myUsers));NewGen[_0xc741c8(0x14a)](_0xc741c8(0x143))&&(NewGen=NewGen['replace'](_0xc741c8(0x143),''+host));NewGen[_0xc741c8(0x14a)]('#date')&&(NewGen=NewGen[_0xc741c8(0x142)](_0xc741c8(0x12a),''+date));let alievTxtNew=''+NewGen;const buttons=[{'buttonId':'1','buttonText':{'displayText':aliveButton1},'type':0x1},{'buttonId':'2','buttonText':{'displayText':aliveButton2},'type':0x1}];if(aliveImgUrl[_0xc741c8(0x132)](_0xc741c8(0x131)))templateButtons={'video':{'url':aliveImgUrl},'caption':''+alievTxtNew,'footer':config[_0xc741c8(0x137)][_0xc741c8(0x12c)],'buttons':buttons};else{if(aliveImgUrl[_0xc741c8(0x132)](_0xc741c8(0x146)))templateButtons={'image':{'url':aliveImgUrl},'caption':''+alievTxtNew,'footer':config[_0xc741c8(0x137)][_0xc741c8(0x12c)],'buttons':buttons};else aliveImgUrl[_0xc741c8(0x132)](_0xc741c8(0x135))&&(templateButtons={'image':{'url':aliveImgUrl},'caption':''+alievTxtNew,'footer':config[_0xc741c8(0x137)][_0xc741c8(0x12c)],'buttons':buttons});}

//ending automation

    await client.sendMessage(message.from, templateButtons, { quoted: message });
});

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:'+Config.PACKNAME+'\n' // full name
            + 'ORG:'+Config.FOOTER+';\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid='+Config.SUDO+':'+Config.SUDO+'\n' // WhatsApp ID + phone number
            + 'END:VCARD'
 inrl({pattern: ['owner'], desc: "to check whether", sucReact: "🥺", category: ['all']},   async (message, client) => {
 await client.sendMessage( message.from, { contacts:{ displayName:`${Config.BOT_INFO.split(",")[0]}`, contacts: [{ vcard }],}})
});
inrl(
  {
    pattern: ["script"],
    desc: "to check the bot status",
    sucReact: "🥵",
    category: ["system", "all"],
  },
  async (message, client) => {
      const Message = {
      image: { url: config.image.url.D_E_TMB },
      caption: `╭═══〘${Config.BOT_INFO.split(",")[0]}〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴏᴡɴᴇʀ :${Config.BOT_INFO.split(",")[1]}
┃☯︎│ ᴜꜱᴇʀ : ${message.client.pushName}
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${Config.VERSION}
┃☯︎│ ɢɪᴛʜᴜʙ :`+Config.GIT+`
┃☯︎│ ᴡᴇʙꜱɪᴛᴇ :`+Config.WEB+`
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ :`+Config.VIDEO+`
┃☯︎│ yᴏᴜᴛᴜʙᴇ :`+Config.YT+`
┃☯︎│
┃☯︎╰───────────────
╰═════════════════⊷`
    };
    await client.sendMessage(message.from, Message, { quoted: message });
});
const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat","inrl":"Inrl","ibot":"Ibot", "system": "System", 'fun': "Fun", '18+': "18+","ff:":"Ff", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo", }

bots.inrl({ pattern: ["menu", 'help',"list"], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = 
`╭═══〘`+Config.BOT_INFO.split(',')[0]+`〙═══⊷❍
│
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += "│➪" + prefix + cmd + ' ' +"\n"+"│"+ command.desc + "\n│\n")}
    }); 
    CMD_HELP += "│\n│ ✰"+`${Config.BOT_INFO.split(',')[0]}`+"✰\n╰═════════════════⊷";
   
  const buttons = [
        { buttonId: ".ping", buttonText: { displayText: "ᴩɪɴɢ"}, type: 1, },
        { buttonId: ".owner", buttonText: { displayText: "ᴏᴡɴᴇʀ"}, type: 1, },
        { buttonId: ".git", buttonText: { displayText: "ɢɪᴛʜᴜʙ"}, type: 1, },
      ]

const templateButtons = {
      image: { url: Config.ALIVE_DATA.split(';')[0] },
      caption: CMD_HELP,
      footer: bots.config.exif.footer,
      buttons,
    };
  
    await client.sendMessage( message.from,templateButtons,{ quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
});
bots.categories.map(category => {
  if (category == 'all') return;
  bots.inrl({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = 
`╭═══〘${Config.BOT_INFO.split(',')[1]}〙═══⊷❍
│
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP += "│ *➪* ```" + prefix + cmd + ' '+"\n"+"│```\n")}
    }); 
    CMD_HELP += "│\n│ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${Config.BOT_INFO.split(',')[0]}\n╰═════════════════⊷";
    await client.sendMessage( message.from,{ image: { url: Config.ALIVE_DATA.split(';')[0] }, caption: CMD_HELP, }, { quoted: message });
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
