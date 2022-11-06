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
client.sendMessage(message.from, { text : "audio, mimetype: 'audio/mpeg', ptt: true", quoted: message, contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: true,
        mediaType:1,
        thumbnail: fs.readFileSync('./media/imagee.jpg'),
        mediaUrl: "https://instagram.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/, 
        sourceUrl: "https://instagram.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/ }}}, {quoted: message })
//client.sendMessage(message.from, { text: "error", contextInfo:{"externalAdReply": {"title": ` ${Config.OWNER}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/imagee.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: message})
   })
