const imgbbUploader = require("imgbb-uploader");
const speed = require('performance-now')
const Config = require('../../../config');
let { runtime,getBuffer } = require('../../cloud');
const {getVar} = require('../variable');
const need = '```'+'add link after command'+'```'
const got = require('got');
const {insult,inrlQuita} = require('../../INrlFunc');
const os = require('os');
let { mensionImg } = require('../../../media/mension/setmension');
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
       return await client.sendMessage( message.from, Message,{ quoted: message }).catch((e)=>message.reply('error :'+e));
};

async function pdfGen(message, client){
const text = message.client.text;
if(!text.startsWith('http')) message.reply('need a valid url!');
const {BOT_INFO} = await getVar();
    if (!text) return await client.sendMessage(message.from, { text :need },{ quoted: message })
    let inrlmx = await getBuffer(`https://api.html2pdf.app/v1/generate?url=${text}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`)
    return await client.sendMessage(message.from , {document: inrlmx, mimetype: 'application/pdf', fileName: `${BOT_INFO.split(',')[0]}`}, {quoted: message})
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
resolve('error');
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
  let {MENSION_TEXT,BOT_INFO,PREFIX,WORKTYPE,FOOTER,INSTAGRAM, PASSWORD} = data.data[0];
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

╭━━━『 𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝙎 』━━❏`
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
      if(PASSWORD ==='undefined' && cmmd ==='18+') return;
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
templateButtons = {
[typo] : { url: BOT_INFO.split(',')[2] },
caption: '```'+menu+'```',
footer: FOOTER,
buttons: buttons,
    }
return await c.sendMessage(m.from, templateButtons, { quoted : contact});
}

async function send_alive(m, c, t){
const { ALIVE_DATA,GIT, FOOTER, OWNER, BOT_INFO, INSTAGRAM } = await getVar();
const quota = await inrlQuita();
const insulte = await insult();
const platform = os.platform();
const runtim = runtime(6447);
const sstart = new Date().getTime();
const date = new Date();
const eendd = new Date().getTime();
const speed = sstart - eendd;
let buttonss = [];
let responseMsg = {};
let ALIVE_VALUE = ALIVE_DATA.toLowerCase().split(/['$;']/);
let typo=false, extent,consolor;


for(let i =0;i<ALIVE_VALUE.length;i++){
  
if(ALIVE_VALUE[i].match('image')) {
typo=true
} else if(ALIVE_VALUE[i].match('video')) {
typo=true
};

if(ALIVE_VALUE[i].match('text')){
consolor = ALIVE_VALUE[i].replace('text>','')
if(consolor.includes('&quota')){
consolor = consolor.replace('&quota', `${quota}`);
}
if(consolor.includes('&insult')){
consolor = consolor.replace('&insult', `${insulte}`);
}
if(consolor.includes('&platform')){
consolor = consolor.replace('&platform', `${platform}`);
}
if(consolor.includes('&runtime')){
consolor = consolor.replace('&runtime', `${runtim}`);
}
if(consolor.includes('&date')){
consolor = consolor.replace('&date', `${date}`);
}
if(consolor.includes('&speed')){
consolor = consolor.replace('&speed', `${speed}`);
}
if(consolor.includes('&sender')){
consolor = consolor.replace('&sender', `@${m.pushName}`);
  }
}
if(ALIVE_VALUE[i].match('image')){
responseMsg = {...responseMsg, image :{url:ALIVE_VALUE[i].replace('image>','').trim().endsWith('jpg')?ALIVE_VALUE[i].replace('image>','').trim():ALIVE_VALUE[i].replace('image>','').trim().endsWith('jpeg')?ALIVE_VALUE[i].replace('image>','').trim():'https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg'    }
 }
}else if(ALIVE_VALUE[i].match('video')){
 responseMsg = {...responseMsg, video :{url:ALIVE_VALUE[i].replace('video>','').trim().endsWith('mp4')?ALIVE_VALUE[i].replace('video>','').trim():'https://i.imgur.com/0jQFPXK.mp4'  }
  }
}
 if(ALIVE_VALUE[i].match('button')){
 if(ALIVE_VALUE[i].match('urlbutton')){
 buttonss.push({index: 1, urlButton: {displayText: ALIVE_VALUE[i].replace('urlbutton>','').split('|')[0] || ALIVE_VALUE[i].replace('urlbutton>','') || "url", url: ALIVE_VALUE[i].replace('urlbutton>','').split('|')[1] || GIT}});
  }
 if(ALIVE_VALUE[i].match('callbutton')){
 buttonss.push({index: 2, callButton: {displayText: ALIVE_VALUE[i].replace('callbutton>','').split('|')[0] || ALIVE_VALUE[i].replace('callbutton>','') || 'Call me!', phoneNumber: ALIVE_VALUE[i].replace('callbutton>','').split('|')[1] || OWNER}});
 }
 if(!ALIVE_VALUE[i].match('callbutton') && !ALIVE_VALUE[i].match('urlbutton') && ALIVE_VALUE[i].match('button')){
   buttonss.push({buttonId:ALIVE_VALUE[i].replace('button>','').split('|')[1] || 'id1', buttonText: {displayText:ALIVE_VALUE[i].replace('button>','').split('|')[0] || ALIVE_VALUE[i].replace('button>','') || 'Button 1'}, type: 1})
    }
}

// define free header and footer
responseMsg = {...responseMsg,footer: ALIVE_VALUE[i].replace('footer>','')?ALIVE_VALUE[i].replace('footer>',''):FOOTER,buttons: buttonss,headerType: 1};
//fix the ends!"

// objcet concurrection for its externel requierd or not
if(ALIVE_VALUE[i].includes('title')){
extent = true
} else if (ALIVE_VALUE[i].includes('body')){
extent = true
} else if(ALIVE_VALUE[i].includes('mediatype')){
extent = true
} else if (ALIVE_VALUE[i].includes('thumbnail')){
extent = true
} else if(ALIVE_VALUE[i].includes('sourceurl')){
extent = true
} else if (ALIVE_VALUE[i].includes('mediaurl')){
extent = true
};
// ending of objcet concurrection for its externel requierd or not

if(extent){
responseMsg = {...responseMsg,contextInfo:{externalAdReply:{
title: ALIVE_VALUE[i].replace('title>','') || "hey bro",
body: ALIVE_VALUE[i].replace('body>','') || "hey sis/bro iam alive now",
mediaType: ALIVE_VALUE[i].replace('mediatype','') || 2,
thumbnail:await getBuffer('https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg'),//ALIVE_VALUE[i].replace('thumbnail>','').trim()?await getBuffer(ALIVE_VALUE[i].replace('thumbnail>','').trim()):await getBuffer('https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg'),
sourceUrl: ALIVE_VALUE[i].replace('sourceurl>','').trim() =='undefined'? INSTAGRAM:ALIVE_VALUE[i].replace('sourceurl>','').trim(),
mediaUrl: ALIVE_VALUE[i].replace('mediaurl>','').trim() =='undefined'? INSTAGRAM:ALIVE_VALUE[i].replace('mediaurl>','').trim()
   }}}
  }
}
  if(typo){
responseMsg = {...responseMsg, caption :consolor || 'hey'}
} else if(typo!==true){
responseMsg = {...responseMsg, text :consolor || 'hey'}
  }
  try{
    return await c.sendMessage(m.from, responseMsg, { quoted : m})
  } catch(e){
return m.reply('iam alive vroh')
  }
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
