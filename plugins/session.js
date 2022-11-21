const { inrl, getRandom, config} = require('../lib');
const ffmpeg = require('fluent-ffmpeg')
const { readFileSync: read, unlinkSync: remove } = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { tmpdir } = require('os')

inrl({ pattern: ['photo','toimg'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message);
   let ran = getRandom('.png')
  async exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   remove(media)
   if (err) console.log(err);
   buffer = await read(ran)
   client.sendMessage(message.from, { image:  buffer , caption: "config.exif.cap" }, { quoted: message });
   remove(ran)
   })
 });
       /*  exec(`ffmpeg -i ${media} ${isFile}`, (err, stderr, stdout) => {
            remove(media)
            if (err) return client.reply(m.chat, Func.texted('bold', `🚩 Conversion failed.`), m)
            buffer = read(isFile)
            client.sendFile(m.chat, buffer, '', '', m)
            remove(isFile)
         })*/
