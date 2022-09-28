const bots = require('../lib/perfix'); 
const { isUrl , getBuffer , getRandom } = require('../lib/cloud');
const Config = require('../config');
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper');
let noh = require('@bochilteam/scraper');
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs');
let { webp2mp4File } = require('./lib/uploader')
let { toAudio } = require('./lib/converter')
let { toPTT } = require('./lib/converter')


bots.inrl({pattern: ['tiktok'], desc: "to downlode tiktok video",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
const text = message.client.text;
if (!text) return await client.sendMessage(message.from, { text :' enter a tiktok link '},{ quoted: message })
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return await client.sendMessage(message.from, { text :' enterd a tiktok link is not valid'},{ quoted: message })
url = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
let listmn = `ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\n\n*ᴛɪᴛɪʟᴇ:* ${url.result.title}\n\ᴀᴜᴛʜᴇʀ:${url.result.id}\n\nᴜʀʟ: ${url.result.url}`
buf = await getBuffer(url.result.thumb)
buf2 = await getBuffer(url.result.link_dl2)
let onMessage = {
        image: { url: buf },
        caption: listmn
};
let Message = {
        image: { url: buf2 },
        caption: listmn
};
await client.sendMessage(message.from, Message, { quoted: message});
await client.sendMessage(message.from, onMessage, { quoted: message});
});
bots.inrl({pattern: ['ig'], desc: "to download istagram video",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
const text = message.client.text;     
if (!text) return await client.sendMessage(message.from, { text :`enter a instagram link _ex_:${Config.INSTAGRAM}`},{ quoted: message })
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return await client.sendMessage(message.from, { text :'entered instagram link is not valid'},{ quoted: message })
   
instagramdlv3(`${text}`).then(async (data) => {
for (let f of data) {                                      
await client.sendMessage( message.from, { video: { url: f.url }, mimetype: "video/mp4", fileName: `${Config.FREE_TXT}.mp4`, caption,}, { quoted: message });
}
}).catch((err) => {
  client.sendMessage(message.from, { text :"filed to download"},{ quoted: message })
})
});
bots.inrl({ pattern: ['mp3'], desc: "to downlode fb mp3",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
if (!text) return await client.sendMessage(message.from, { text :"enter a fb link"},{ quoted: message })
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) { global.catchError = true; }
     
noh.savefrom(`${text}`).then(async (inrl) => { 
await client.sendMessage( message.from, { audio: { url: inrl.url[0].url }, mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message } );
}).catch((err) => {
client.sendMessage(message.from, { text :"filed to download"},{ quoted: message })
})
});
bots.inrl({ pattern: ['photo','toimg'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buffer = fs.readFileSync(ran)
  client.sendMessage(message.from, { image: { url: buffer }, caption: bots.config.exif.cap }, { quoted: message });
  fs.unlinkSync(ran)
   })
 });
 bots.inrl({ pattern: ['video','tomp4'], desc: "to convert webp to mp4",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   await client.sendMessage(message.from, { video: { url: webpToMp4.result}, caption: bots.config.exif.cap }, { quoted: message });
   await fs.unlinkSync(media)
 });
 bots.inrl({ pattern: ['mp3','toaudio'], desc: "to convert video to mp3",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
 if (!/video/.test(mime) && !/audio/.test(mime)) return await client.sendMessage(message.from, { text : "Send/Reply Video/Audio You Want Audio With Caption" },{ quoted: message })
 if (!message.quoted) return await client.sendMessage(message.from, { text :"Send/Reply Video/Audio You Want to Use as Audio With Caption " },{ quoted: message })
let _message = message.quoted.videoMessage || message.quoted.audioMessage;
   let media = await client.downloadAndSaveMediaMessage(_message)
 let audio = await toAudio(media, 'mp4')
await client.sendMessage( message.from, { audio: { url: audio }, mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message } );
 });
bots.inrl({ pattern: ['voice','ptt'], desc: "to convert audio/video to ptt",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
 if (!/video/.test(mime) && !/audio/.test(mime)) return await client.sendMessage(message.from, { text : "Reply Video/Audio That You Want To Be VN With Caption " },{ quoted: message });
 if (!message.quoted) return await client.sendMessage(message.from, { text :"Reply Video/Audio That You Want To Be VN With Caption " },{ quoted: message });
 let _message = message.quoted.videoMessage || message.quoted.audioMessage;
   let media = await client.downloadAndSaveMediaMessage(_message)
 let audio = await toPTT(media, 'mp4')
await client.sendMessage( message.from, { audio: { url: audio }, mimetype: "audio/mpeg",ptt:true }, { quoted: message } );
 });
 bots.inrl({ pattern: ['togif'], desc: "to convert webp to gif",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text : "Reply An img " },{ quoted: message });
   if (!/webp/.test(mime)) return await client.sendMessage(message.from, { text : "this features is used to convert webp to gif playback" },{ quoted: message });
  let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   await client.sendMessage(message.from, { video: { url: webpToMp4.result,  caption: 'Convert Webp To Video' }, caption: bots.config.exif.cap, gifPlayback: true },{ quoted: message });
   await fs.unlinkSync(media)
 });
