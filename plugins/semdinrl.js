const { inrl, getBuffer } = require('../lib');
const Config = require('../config');
const fs = require('fs');
const mendia = fs.readFileSync('./media/imagee.jpg');

inrl({ pattern: ['virtext'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, async (message, client) => {
/*const reply = (teks) => {

            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/gojo.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
     await client.sendMessage(message.from, {
text : "inrl",
jpegThumbnail : mendia,
headerType : 4,
contextInfo : {externalAdReply:{
title : "${ownername}",
body : `Don't forget to read group description`,
mediaType : 2,
thumbnail : getBuffer(Config.BOT_INFO.split(',')[2]),
sourceUrl : "https://g.com",
mediaUrl : `https://g.com`
     }}})
});
*/
client.sendMessage(message.from, { text: "error", contextInfo:{"externalAdReply": {"title": ` ${Config.OWNER}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/imagee.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: message})
   })
