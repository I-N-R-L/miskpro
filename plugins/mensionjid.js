const fs = require('fs');
global.db = JSON.parse(fs.readFileSync('./lib/database/server.json'))
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

const bots = require("../lib/perfix");
bots.inrl({ pattern: ["setcmd"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"],},
  async (message, client) => {
   const text = message.client.text;
   if (!message.quoted) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
   if (!message.quoted.stickerMessage.fileSha256) {return await client.sendMessage(message.from, { text: 'SHA256 Hash Missing'},{ quoted: message } ); }
   if (!text) {return await client.sendMessage(message.from, { text: 'where is the cmd'},{ quoted: message } ); }
   let hash = message.quoted.stickerMessage.fileSha256.toString('base64')
console.log(hash);
   if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return await client.sendMessage(message.from, { text: `You Have No Permission To Change This Sticker Command`})
   global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: message.mentionedJid,
                    creator: message.sender,
                    at: + new Date,
                    locked: false,
                }
   return await client.sendMessage(message.from, { text: 'done!'},{ quoted: message } ); 
});
