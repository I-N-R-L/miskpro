const bots = require('../lib/perfix');
const fs = require('fs');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { getBuffer } = require('../lib/cloud')
const url1 = 'https://i.imgur.com/Rc2MuwP.jpeg'
const url2 = 'https://i.imgur.com/ycoqgDx.jpeg'

bots.inrl({ pattern: ["add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
const text = message.client.text;
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.group) }, { quoted: message } ); }
let users = message.quoted.sender || text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
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

bots.inrl( { pattern: ["ppp"],desc: 'set  profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
const text = message.client.text;
const teks =text;
    //  if (!text) return await client.sendMessage(message.from, {text :"*Give me a jid*\nExample .fx jid1 jid2 jid3 jid4 ..."}, { quoted: message });
    //  if (!message.quoted) return await client.sendMessage(message.from, {text :"*Reply to a Message*"}, { quoted: message });
    //  let { chat, fromMe, id } = message.quoted
await client.sendMessage(message.from, { text: teks, contextInfo:{"externalAdReply": {"title": `bh`,"body": `hguf`, "previewType": "PHOTO","thumbnailUrl": `http://wa.me/7075808540?text=_*ᕼI*_`,"thumbnail": fs.readFileSync("./media/imagee.jpg"),"sourceUrl": `http://wa.me/7075808540?text=_*ᕼI*_`}}}, { quoted: message})
        }
);
