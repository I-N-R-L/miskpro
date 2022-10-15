const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
const Config = require("../config");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat","inrl":"Inrl","ibot":"Ibot", "system": "System", 'fun': "Fun", '18+': "18+","ff:":"Ff", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo", }

bots.inrl({ pattern: ["menu", 'help',"list"], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = 
`╭═══〘{Config.BOT_INFO.split(',')[0]}〙═══⊷❍
│
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += "│➪" + prefix + cmd + ' ' +"\n"+"│"+ command.desc + "\n│\n")}
    }); 
    CMD_HELP += "│\n│ ✰${Config.BOT_INFO.split(',')[0]}✰\n╰═════════════════⊷";
   
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

// bots.commands.length.toString()
