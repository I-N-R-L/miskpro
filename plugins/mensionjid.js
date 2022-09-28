const bots = require("../lib/perfix");
const fs = require('fs');
let sticker = JSON.parse(fs.readFileSync('./lib/database/server.json'));

bots.inrl({ pattern: ["setcmd"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"],},
  async (message, client) => {
   const text = message.client.text;
   if (!message.quoted) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
   if (!message.quoted.fileSha256) {return await client.sendMessage(message.from, { text: 'SHA256 Hash Missing'},{ quoted: message } ); }
   if (!text) {return await client.sendMessage(message.from, { text: 'where is the cmd'},{ quoted: message } ); }
   let hash = message.quoted.fileSha256.toString('base64')
   if (sticker[hash] && sticker[hash].locked) {return await client.sendMessage(message.from, { text: 'You have no permission to change this sticker command'}, { quoted: message } );
   sticker[hash] = {
  text,
  mentionedJid: message.mentionedJid,
  creator: message.sender,
  at: + new Date,
  locked: false,
   }
   return await client.sendMessage(message.from, { text: 'done!'},{ quoted: message } ); 
 }
});
