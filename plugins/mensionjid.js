const bots = require("../lib/perfix");

global.db = JSON.parse(fs.readFileSync('./lib/database/.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}

bots.inrl({ pattern: ["setcmd"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"],},
  async (message, client) => {
   const text = message.client.text;
   if (!message.quoted) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
   if (!message.quoted.fileSha256) {return await client.sendMessage(message.from, { text: 'SHA256 Hash Missing'},{ quoted: message } ); }
   if (!text) {return await client.sendMessage(message.from, { text: 'where is the cmd'},{ quoted: message } ); }
   let hash = m.quoted.fileSha256.toString('base64')
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) {return await client.sendMessage(message.from, { text: 'You have no permission to change this sticker command'}, { quoted: message } );
   global.db.sticker[hash] = {
  text,
  mentionedJid: message.mentionedJid,
  creator: message.sender,
  at: + new Date,
  locked: false,
   }
   return await client.sendMessage(message.from, { text: 'done!'},{ quoted: message } ); 
 }
});
