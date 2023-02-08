const imgbbUploader = require("imgbb-uploader");
const speed = require('performance-now')
const Config = require('../../../config');
const { getBuffer } = require('../../cloud');
const {getVar} = require('../lib/database/variable');
const need = '```'+'add link after command'+'```'
const got = require('got');
const os = require('os');
const { mensionImg } = require('../../../media/mension/setmension');
let {readFileSync} =require('fs/promises');
const client = require('https');
const ID3Writer = require('browser-id3-writer');
const api = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
const imgur = require('imgur');
const clientId = '3ca8036b07e0f25';
const FormData = require('form-data');
const https = require('https')
const axios = require('axios');
let jPg = Config.MENSION.MENSION_IMG.replaceAll(" ","");
const events = require('../../perfix');
const { inrl, commands } = require('../../perfix');
const { quoted } = require('./is_ext');
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg');
imgur.setClientId(clientId)
let apikeys = ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3']
axios.defaults.httpsAgent = new https.Agent({
   rejectUnauthorized: false,
   })
const chalk = require('chalk')
const { removeBackgroundFromImageBase64, removeBackgroundFromImageUrl, removeBackgroundFromImageFile } = require('remove.bg')

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

  let remove = async (input) => {
        try {
            const apis = apikeys
            const response = await removeBackgroundFromImageBase64({
                base64img: input.toString('base64'),
                apiKey: apis[Math.floor(Math.random() * apis.length)],
                size: 'auto',
                type: 'auto',
            })
                  return Buffer.from(response.base64img, 'base64')
        } catch (error) {
            console.log(error)
        }
    }  
    
let unscreen = async(input) => {
     const UNSCREEN_API_VIDEOS_URL = "https://api.unscreen.com/v1.0/videos";
     let API = apikeys[Math.floor(Math.random() * apikeys.length)]
     try{
     const form = new FormData();

 	var headers = form.getHeaders();
    headers['X-Api-Key'] = API;
		
			const data = await  axios({
				url: UNSCREEN_API_VIDEOS_URL,
				method: "POST",
				headers: {
					headers
				},
				data: input,
				'maxContentLength': Infinity,
                'maxBodyLength': Infinity,
			})
			.then(function (response) {
            // handle success
            console.log(response.data);
             })
		} catch (err) {
			console.log(err)
		}


}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})

async function sendUrl(message, client){
let _message = message.quoted.imageMessage || message.quoted.stickerMessage;
if (_message){
let download = await client.downloadAndSaveMediaMessage(_message)
var idata = await imgbbUploader(api , download)
await client.sendMessage( message.from, {text : idata.url }, { quoted: message })
return await fs.unlinkSync(download)
}else if(message.quoted.videoMessage){
let _essage = message.quoted.videoMessage;
let urvideo = await client.downloadAndSaveMediaMessage(_essage)
await imgur
  .uploadFile(urvideo)
  .then((json) => {
    client.sendMessage( message.from, {text : json.link }, { quoted: message })
        })
         return await fs.unlinkSync(urvideo)
    }else if(message.quoted.audioMessage){
let _essage = message.quoted.audioMessage;
let urvideo = await client.downloadAndSaveMediaMessage(_essage)
await ffmpeg(urvideo)
        .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
	.save('output.mp4')
	.on('end', async () => {
        await imgur
        .uploadFile('output.mp4')
        .then((json) => {
        message.send(json.link)
               })
         });        
   setTimeout(async()=>{
        if(fs.existsSync('output.mp4')){
         await fs.unlinkSync('output.mp4');
         return await fs.unlinkSync(urvideo)
         }
      }, 1000)
   }
}

async function tinyUrl(message, client){
           const text = message.client.text || message.quoted ;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode ===200) return await client.sendMessage( message.from, { text:'tinyurl:'+json.result.hasil }, { quoted: message });
	    } catch(e) {
		    return await client.sendMessage( message.from, { text : "no data from this url "+e},{ quoted: message });
	    }
    }

async function webSs(message, client){
        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })
        var ttinullimage = `https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${message.client.text}&apikey=IkyOgiwara`;
const Message = { image: { url:  ttinullimage }, caption: Config.CAPTION,  };
        await client.sendMessage( message.from, Message,{ quoted: message })
};

async function pdfGen(message, client){

const text = message.client.text;

    if (!text) return await client.sendMessage(message.from, { text :need },{ quoted: message })
    var inrlmx = await getBuffer(`https://api.html2pdf.app/v1/generate?url=${text}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`)
    await client.sendMessage(message.from , {document: inrlmx, mimetype: 'application/pdf', fileName: `inrl.pdf`}, {quoted: message})

 }

function BufferToFile(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
              }
        });
    });
}

async function AudioMetaData(imgFile, audio, message, client){
  let data = await getVar();
  let {AUDIO_DATA,STICKER_DATA} = data.data[0];
let text = message.client.text;
let CreaterForAud;
if(text.includes(' ')){ text = text.replaceAll(" ","") }
const songBuffer = fs.readFileSync(audio);
const coverBuffer = fs.readFileSync(imgFile);
const writer = new ID3Writer(songBuffer);
if(AUDIO_DATA.includes(' ')){ AUDIO_DATA = AUDIO_DATA.trim() }
if(text.includes(',')){ CreaterForAud = text.split(',')[1] } else { CreaterForAud = AUDIO_DATA.split(',')[1] || "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ" }
let Department = [];
let creater = CreaterForAud ;
await Department.push(creater);
await writer.setFrame('TIT2', text.split(',')[0] || text || AUDIO_DATA.split(',')[0] ||"ɪɴʀʟ-ᴍᴅ")
      .setFrame('TPE1', Department)
      .setFrame('TALB', text.split(',')[0] || AUDIO_DATA.split(',')[0] || "ɪɴʀʟ-ʙᴏᴛ")
      .setFrame('TYER', 1999)
      .setFrame('APIC', {
          type: 3,
          data: coverBuffer,
          description: 'ɪɴʀʟ-ʙᴏᴛꜱ-ᴏʀɢ'
      });
writer.addTag();
const taggedSongBuffer = Buffer.from(writer.arrayBuffer);
var inrlbotsorg = fs.writeFileSync('./inrl.mp3', taggedSongBuffer);
const sendAudio = fs.readFileSync('./inrl.mp3');
client.sendMessage(message.from,  { audio: sendAudio, mimetype: "audio/mp4", fileName: `${text}.mp3`,}, { quoted: message });
await fs.unlinkSync('./inrl.mp3');
if(fs.existsSync(imgFile)){
return await fs.unlinkSync(imgFile)
   }
}
async function send_menu(m, c){
  let data = await getVar();
  let {MENSION_TEXT,BOT_INFO,PREFIX,WORKTYPE,FOOTER} = data.data[0];
  const prefix = PREFIX == "false"?'':PREFIX;
const typo = BOT_INFO.split(',')[2].endsWith('mp4') ? 'video' : 'image'
  let cmnd = [];
  let cmd;
  let category=[],type,countcmdOfCmd=0;
const { contact } = await quoted(m);
  events.commands.map((command) => {
    countcmdOfCmd += command.pattern.length
  });
let menu =`╭━━〔 ${BOT_INFO.split(',')[0]} 〕━━◉
┃ Plugins : ${countcmdOfCmd.toString()}
┃ User : ${m.client.pushName}
┃ Owner : ${BOT_INFO.split(",")[1]}
┃ Version: ${Config.VERSION}
┃ Prefix:- ${prefix}
┃ MOD :- ${WORKTYPE}
╰━━━━━━━━━━━━━━━━━━◉

╭━━━『 𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝙎』━━❏`
      events.commands.map((command, num) => {
        if (command.pattern) {
          cmd = command.pattern;
          type = command.type
        }
        if (!command.type) {
            type = "others";
          } else {
            type = command.type.toLowerCase()
        }
        cmnd.push({ cmd, type: type });
        
                if (!category.includes(type)) category.push(type);

      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `
┃◬╭────────────────•
┃◬│╭───────────────∘
┃◬││⚠︎─❮ ${cmmd} ❯ ❏
┃◬│╰───────────────∘
┃◬│`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }, num) => {
          menu += `\n┃◬│ ✁  ${cmd[0]}`;
        });
        menu += `\n┃◬╰─────────────▫`;
      });
      menu += `\n╰━━━━━━━━━━━━━──⊷\n`;
  const buttons = [
        { buttonId: `${prefix}ping`, buttonText: { displayText: "ping"}, type: 1, },
        { buttonId: `${prefix}list`, buttonText: { displayText: "list menu"}, type: 1, },
        { buttonId: `${prefix}owner`, buttonText: { displayText: "owner"}, type: 1, },
      ];
let imag = await mensionImg(jPg);
templateButtons = {
[typo] : { url: BOT_INFO.split(',')[2] },
caption: '```'+menu+'```',
footer: FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: imag,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
return await c.sendMessage(m.from, templateButtons, { quoted : contact});
}
async function send_alive(m){
return m.reply('iam alive vro '+ m.pushName)
}
async function sendRepeat(number, m, c){
let i = 0, method, text, data;
if(m.quoted){
data = m.quoted.type == 'conversation' ? 'text' : m.quoted.type == 'stickerMessage' ? 'sticker' : m.quoted.type == 'imageMessage' ? 'image' : m.quoted.type == 'videoMessage' ? 'video' : m.quoted.type == 'audioMessage' ? 'audio' : 'text';
} else data = 'text';

if(data == "text") method = m.client.text || 'inrl';
else if(data == "image") method = await m.quoted.download();
else if(data == "video") method = await m.quoted.download();
else if(data == "audio") method = await m.quoted.download();
else if(data == "sticker") method = await m.quoted.download();
else method = "inrl,need text to send repeatly!!";
while (i < number) {
  text += await c.sendMessage(m.from, { [data] : method }, { quoted : m});
  i++;
     }
}
async function toGroup(number, m, c){
let i = 0, method, textt="", data,texts;
if(m.quoted){
  texts = m.quoted.type == 'conversation' ? m.quoted.text : "inrl";
  data = m.quoted.type == 'conversation' ? 'text' : false
} else data = "text";
if(data===false) return m.reply('need text/only support text for groupin!!')
method = m.client.text.split(',')[1] || texts || 'inrl';
while (i < number) {
  textt += method + "\n";
  i++;
     }
return await c.sendMessage(m.from, { text : textt });
}
module.exports = { remove, unscreen, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu, sendRepeat, toGroup }
