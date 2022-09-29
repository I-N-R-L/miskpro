const bots = require('../lib/perfix');
const fs = require('fs');

bots.inrl({ pattern: ["add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
const text = message.client.text;
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
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
/*
const { getBuffer } = require('../lib/cloud')
const url1 = 'https://i.imgur.com/Rc2MuwP.jpeg'
const url2 = 'https://i.imgur.com/ycoqgDx.jpeg'

bots.inrl( { pattern: ["ppp"],desc: 'set  profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
const text = message.client.text;
        if (!text) return await client.sendMessage(message.from, {text :"*Give me a jid*\nExample .fx jid1 jid2 jid3 jid4 ..."}, { quoted: message });
        if (!message.quoted) return await client.sendMessage(message.from, {text :"*Reply to a Message*"}, { quoted: message });
        const buff1 = await getBuffer(url1)
        const buff2 = await getBuffer(url2)
        const options = {}
        
        // ADD A /* HERE TO REMOVE FORWARD TAG EX:- /*
        options.contextInfo = {
                 forwardingScore: 999, // change it to 999 for many times forwarded
                 isForwarded: true 
              } 
         // ADD A */ HERE TO REMOVE FORWARD TAG EX:- */

        
        if(message.quoted.audioMessage){ 
         //ADD /* HERE NOT TO MODIFY AUDIO DURATION
            options.duration = 200001355
        //ADD */ HERE NOT TO MODIFY AUDIO DURATION

        options.ptt = true // delete this if not need audio as voice always
        }
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        options.linkPreview = {
               head: "𝞘𝙏𝙎 𝞛𝞝 Iᑎᖇᒪ💖",
               body: "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ",
               mediaType: 2, //3 for video
               thumbnail: buff2.buffer,
               sourceUrl:"http://wa.me/7075808540?text=_*ᕼI*_",
                }
         // ADDED */ TO REMOVE LINK PREVIEW TYPE
        
            message: {
                "imageMessage": {
                    "jpegThumbnail": buff1.buffer,
                    "caption": "𝙾𝙽𝙴 𝙰𝙽𝙳 𝙾𝙽𝙻𝚈 𝙺𝙸𝙽𝙶  ITᔕ ᑭOOᑕᕼᗩ ᔕEᖇ😻"
                   }
              }
await client.sendMessage(message.from,message,options);
      }
);
*/
