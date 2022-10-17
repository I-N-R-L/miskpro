
const { inrl,config }= require('../lib/');
const fs = require('fs');
const Config = require('../config');

    inrl({ pattern: ['send','snd'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, (async (message, client) => {

        if (message.quoted.videoMessage) {
       let location = await message.quoted.download();
await client.sendMessage(message.from, { video: location, caption: config.exif.cap }, { quoted: message });
   await fs.unlinkSync(location)
      }else if (!message.quoted.videoMessage && message.quoted.imageMessage) {
            let location =await message.quoted.download()
                    await client.sendMessage(message.from, { image: location, caption: config.exif.cap }, { quoted: message });
         }
    }));

inrl({pattern: ['scan'], desc: "to scan", sucReact: "💗", category: ['all'],},   async (message, client) => {
	    const url = `https://qr-code-for-whatsapp-bot.herokuapp.com/`;
		    
const qrTxtNew = "ᴛᴏ ᴜꜱᴇ ɪɴʀʟ ʙᴏᴛ ᴍᴅ\nᴩʟᴇᴀꜱᴇ ꜱᴄᴀɴ ᴛɢᴇ qʀ ᴡɪᴛʜɪɴ 25 ꜱᴇᴄᴏᴜɴᴅꜱ\nɪꜰ ᴛʜᴇ qʀ ᴡɪʟʟ ʙᴇᴇɴ ᴇxᴩɪʀᴇᴅ\nᴄʟɪᴄᴋ ᴛʜᴇ ʙɪʟᴏᴡ ʙᴜᴛᴛᴏɴ ᴀɴᴅ ʀᴇꜱᴄᴀɴ";
      const buttons = [
        { buttonId: "scan", buttonText: { displayText: "ꜱᴄᴀɴ qʀ"}, type: 1, },
      ]
const templateButtons = {
      image: { url: url },
      caption: qrTxtNew,
      footer: config.exif.footer,
      buttons,
    };
return await client.sendMessage( message.from, templateButtons, { quoted: message });
 });
