const { inrl, getRandom, config} = require('../lib');
const ffmpeg = require('fluent-ffmpeg')
const {readFile,unlink} = require('fs').promises;
const fs = require('fs');
const { exec, spawn, execSync } = require('child_process')
async function photoGen(message,client){
return new Promise(async(resolve,reject) => {
  let photo = exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  //fs.unlinkSync(media)
  if (err) client.sendMessage(message.from, { text: "err"+err }, { quoted: message });
  let buffer = fs.readFileSync(ran)
  client.sendMessage(message.from, { image:  buffer , caption: "config.exif.cap" }, { quoted: message });

   })
//resolve buffer;
 })
}

inrl({ pattern: ['photo','toimg'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message);
   let ran = await getRandom('.png')
let img = await photoGen(message,client);
  client.sendMessage(message.from, { image:  img , caption: "config.exif.cap" }, { quoted: message });
  //unlink(ran)
   })
