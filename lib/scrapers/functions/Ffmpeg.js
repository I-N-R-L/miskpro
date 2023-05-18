const { toAudio, toPTT } = require('../converter');
const { webp2mp4File } = require('../uploader');
const Config = require('../../../config');
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs');
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const cheerio = require('cheerio')


const os = require('os')
optionalDependencies =  {
    "@ffmpeg-installer/darwin-arm64": "4.1.5",
    "@ffmpeg-installer/darwin-x64": "4.1.0",
    "@ffmpeg-installer/linux-arm": "4.1.3",
    "@ffmpeg-installer/linux-arm64": "4.1.4",
    "@ffmpeg-installer/linux-ia32": "4.1.0",
    "@ffmpeg-installer/linux-x64": "4.1.0",
    "@ffmpeg-installer/win32-ia32": "4.1.0",
    "@ffmpeg-installer/win32-x64": "4.1.0"
}
let platform = os.platform() + '-' + os.arch();
let packageName = '@ffmpeg-installer/' + platform;

if(optionalDependencies[packageName]) {
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);
}

async function sendPhoto(message, client){
   if (!/webp/.test(message.client.mime)) return message.reply('need a photo!');
   let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
        await ffmpeg(media)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
 await client.sendMessage(message.from,{ image : fs.readFileSync('output.png')});
            });
}
async function sendVideo(message, client){
   if (!message.quoted) return ;
   if (!/webp/.test(message.client.mime)) return;
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   return await client.sendMessage(message.from, { video: { url : webpToMp4.result } }, { quoted: message });
}
async function sendVoice(message, client){
   if (!/video/.test(message.client.mime) && !/audio/.test(message.client.mime)) return;
   if (!message.quoted) return;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   return await client.sendMessage( message.from,{ audio: { url: media }, mimetype: "audio/mp4", ptt:true }, { quoted: message }); 
}
async function sendGif(message, client){
if (!message.quoted) return;
   if (!/webp/.test(message.client.mime)) return;
   let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   return await client.sendMessage(message.from, { video: { url : webpToMp4.result }, gifPlayback: true },{ quoted: message });  
}
async function sendBassAudio(message, client){
if (!message.quoted) return;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af equalizer=f=54:width_type=o:width=2:g=20"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });
}
async function sendSlowAudio(message, client){
if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .audioFilter("atempo=0.5")
        .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
      });
}
async function sendBlownAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af acrusher=.1:1:64:0:log"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });        
}
async function sendDeepAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af atempo=4/4,asetrate=44500*2/3"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
      });      
}
async function sendErrapeAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af volume=12"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });	
}
async function sendFastAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=1.63,asetrate=44100"])
        .save("./media/bhass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bhass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
     });
}
async function sendFatAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=1.6,asetrate=22100"])
        .save("./media/bgass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bgass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });   
}
async function sendNightcoreAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=1.06,asetrate=44100*1.25"])
        .save("./media/bgass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bgass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });  
}
async function sendReverseAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter_complex areverse"])
        .save("./media/bgass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bgass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });  
}
async function sendSquirrelAudio(message, client){
	if (!message.quoted) return ;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=0.5,asetrate=65100"])
        .save("./media/beass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/beass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });  
}
async function sendMp4AsMp3(message, client){
if (!message.quoted) return ;
   let _message = message.quoted.videoMessage ? message.quoted.videoMessage : message.quoted.audioMessage;
   let media = await client.downloadAndSaveMediaMessage(_message)
await ffmpeg(media)
        .save('./media/bass.mp3')
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });      
}

module.exports = { sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3 };
