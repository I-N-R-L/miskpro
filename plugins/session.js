const { inrl, getRandom, config} = require('../lib');
const ffmpeg = require('fluent-ffmpeg')
const {readFile,unlink} = require('fs').promises;
const fs = require('fs');
const { exec, spawn, execSync } = require('child_process')
async function photoGen(message,client){
if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadMediaMessage(_message);
   let ran = await getRandom('.png')
  let photo = ffmpeg(media)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
  //fs.unlinkSync(media)
  if (err) client.sendMessage(message.from, { text: "err"+err }, { quoted: message });
  let buffer = readFileSync('output.png')
  client.sendMessage(message.from, { image:  buffer , caption: "config.exif.cap" }, { quoted: message });

   })
}

inrl({ pattern: ['photo','toimg'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
await photoGen(message,client);
 //client.sendMessage(message.from, { image:  img , caption: "config.exif.cap" }, { quoted: message });
  //unlink(ran)
   })