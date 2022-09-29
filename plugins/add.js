const bots = require('../lib/perfix');
const fs = require('fs');

bots.inrl({ pattern: ["add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
const text = message.client.text;
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: bots..errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.group) }, { quoted: message } ); }
let users = message.quoted ? message.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await client.sendMessage( message.from, { text: ezio.infoMessage("😋 Add group member. Using number.") }, { quoted: message } );
        await client.groupParticipantsUpdate( message.from, [users], "add" );
        global.catchError = false;
    }
);
bots.inrl( { pattern: ["pp"],desc: 'set  profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	let _message = message.quoted.imageMessage || message.client.text;
		let download = await client.downloadMediaMessage(_message);
		await client.updateProfilePicture(message.client.botNumber,download ).catch((err) => fs.unlinkSync(download))
      }
);
