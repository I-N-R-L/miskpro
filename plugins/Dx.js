const { inrl } = require("../lib/perfix");
//const Lang = inrl.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat", "system": "System", 'fun': "Fun", '18+': "18+", 'owner': "Owner",'ff':"Ff",'apk':"Apk", 'create': "Create", 'group': "Group", "logo": "Logo", }

inrl({ pattern: ["menu", 'help','list'], desc: "to viwe datas", sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = `
◉═════════════◉
  ☯︎ɪɴʀʟ-ʙᴏᴛ- ᴍᴅ ᴄᴏᴍᴍᴀɴᴛs☯︎
◉═════════════◉
┌─(ᴀʟʟ ᴄᴏᴍᴍᴀɴᴛs)
│
`;
    inrl.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += "│ *➪* ```" + prefix + cmd + ' ' + command.usage + "```\n")}
    }); 
    CMD_HELP += "│\n│✰ ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ ✰\n└─────────◉";
    await client.sendMessage( message.from,{ image: { url: inrl.config.image.url.D_E_DP_ }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
});

// ################################
// ###### MAPPING MENU ############
// ################################

inrl.categories.map(category => {
  if (category == 'all') return;
  inrl.addCommand({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = `
◉═════════════◉
✪  ɪɴʀʟ-ʙᴏᴛ ᴄᴏᴍᴀɴᴛs ✪
◉═════════════◉
┌─(𖠌 ${cTitle[category]} Commands)
│
`;
    inrl.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP += "│ *☞︎︎︎* ```" + prefix + cmd + ' ' + command.usage + "```\n")}
    }); 
    CMD_HELP += "│\n│ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪɴʀʟ ʙᴏᴛ\n└─────────◉";
    await client.sendMessage( message.from,{ image: { url: inrl.config.image.url.D_E_DP_ }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
  });
})


inrl.addCommand({ pattern: [`cmds-count`], sucReact: "🆗", category: ["all", "system"] }, async (message, client) => {
  try {
    await client.sendMessage( message.from, { text: inrl.infoMessage('Counting commands 💯') }, { quoted: inrl.config.quoted.product });
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
    inrl.commands.map(command => {
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
      { buttonId: ".extra_urls", buttonText: { displayText: "ᴜʀʟs" }, type: 1, },
      { buttonId: ".system-menu", buttonText: { displayText: "ɢɪᴛʜᴜʙ" }, type: 1, },
    ];
    const Message = {
      image: { url: inrl.config.image.url.D_E_DP_ },
      caption: text,
      footer: inrl.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, Message, { quoted: message })
    global.catchError = false;
  } catch (error) { 
    global.catchError = true; 
    let countcmdOfCmd = 0;
    inrl.commands.map((command) => { countcmdOfCmd += command.pattern.length });
    await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
    return await client.sendErrorMessage( message.from, error, message.key, message);
  }
});

// inrl.commands.length.toString()
