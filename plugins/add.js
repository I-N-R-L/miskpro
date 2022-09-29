const ezio = require('../lib/perfix');

ezio.inrl({ pattern: ["add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
const text = message.client.text;
   // if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(ezio.config.reply.owner) }, { quoted: message } ); };
   // if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(ezio.config.reply.group) }, { quoted: message } ); }
let users = message.quoted ? message.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await client.sendMessage( message.from, { text: ezio.infoMessage("😋 Add group member. Using number.") }, { quoted: message } );
        await client.groupParticipantsUpdate( message.from, [users], "add" );
        global.catchError = false;
    }
);
