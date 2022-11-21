const { inrl, getRandom } = require('../lib');
const ffmpeg = require('fluent-ffmpeg')
const {unlinkSync,readFileSync} = require('fs').promises;
const { exec, spawn, execSync } = require('child_process')

inrl({ pattern: ['photo','toimg'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message);
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  unlinkSync(media)
  if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buffer = readFileSync(ran)
  client.sendMessage(message.from, { image:  buffer , caption: bots.config.exif.cap }, { quoted: message });
  unlinkSync(ran)
   })
 });
