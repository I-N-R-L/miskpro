const imgbbUploader = require("imgbb-uploader");
const Config = require('../../../config');
const { getBuffer } = require('../../cloud');
const need = "*add link after command"
const got = require('got');
const os = require('os');
const fs = require('fs');
let {readFileSync} =require('fs/promises');
const client = require('https');
const ID3Writer = require('browser-id3-writer');
const api = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
async function sendUrl(message, client){

let _message = message.quoted.imageMessage || message.quoted.stickerMessage;

if (!_message)
return await client.sendMessage( message.from,{ text :'*Reply to a image/video to url.*'}, { quoted: message })
let download = await client.downloadAndSaveMediaMessage(_message)
var idata = await imgbbUploader(api , download)
console.log(idata);
await client.sendMessage( message.from, {text : idata.url }, { quoted: message })
return await fs.unlinkSync(download)
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
let text = message.client.text;
let CreaterForAud;
if(text.includes(' ')){ text = text.replaceAll(" ","") }
const songBuffer = fs.readFileSync(audio);
const coverBuffer = fs.readFileSync(imgFile);
const writer = new ID3Writer(songBuffer);
let AUDIO_DATA = Config.AUDIO_DATA;
if(AUDIO_DATA.includes(' ')){ AUDIO_DATA = AUDIO_DATA.trim() }
if(text.includes(',')){ CreaterForAud = text.split(',')[1] } else { CreaterForAud = AUDIO_DATA.split(',')[1] || "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ" }
let Department = [];
let creater = CreaterForAud ;
console.log("err="+CreaterForAud,Department);
await Department.push(creater);
console.log("new array ="+Department)
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
await fs.unlinkSync(sendAudio,coverBuffer)
}

async function send_alive(message, client){
const { styletext, inrlQuita, insult } = require('../../');
let Quita = await inrlQuita();
let Insult = await insult();
const Sender = message.client.pushName;
const Hits = global.mydb.hits;
const Git = Config.GIT;
const Yt = Config.YT;
const Insta = Config.INSTAGRAM; 
let myUsers = global.mydb.users.length;
let date = new Date().toLocaleString("EN", { timeZone: "Asia/kolkata" }); ;
let host = os.hostname();
let imag = await BufferToFile(Config.BOT_INFO.split(',')[2] ,'./media/aliveimgnew.jpg')
let jpgimg =  fs.readFileSync('./media/aliveimgnew.jpg');
const aliveData = Config.ALIVE_DATA;
let aliveImgUrl,aliveTxt,aliveButton1,aliveButton2,aliveButton3
aliveImgUrl = aliveData.split(',')[0] || "&#&#%&&#&#&&#&#&#&#&";
aliveTxt = aliveData.split(',')[1] || "£©©£©£¥£¥£¥£¥£¥£©£©£©£©";
aliveButton1 = aliveData.split(',')[2] || "£©£©¥¥¥¥%¥¥£¥£¥££¥¥";
aliveButton2 = aliveData.split(',')[3] || "@%%₹₹¥©©©£©£©$©©$©#";
aliveButton3 = aliveData.split(',')[4] || "@%%#©&#&#&&@&@&#&&#";
NewGen = aliveTxt || "inrl-bot-md";
if (NewGen.includes('{quita}')) {
NewGen = NewGen.replace("{quita}", `${Quita}`)
}
if (NewGen.includes('{insult}')) {
NewGen = NewGen.replace("{insult}", `${Insult}`)
}
if (NewGen.includes('{sender}')) {
NewGen = NewGen.replace("{sender}", `${Sender}`)
}
if (NewGen.includes('{fans}')) {
NewGen = NewGen.replace("{fans}", `${myUsers}`)
}
if (NewGen.includes('{hits}')) {
NewGen = NewGen.replace("hits", `${myUsers}`)
}
if (NewGen.includes('{server}')) {
NewGen = NewGen.replace("{server}", `${host}`)
}
if (NewGen.includes('{date}')) {
NewGen = NewGen.replace("{date}", `${date}`)
}
if (NewGen.includes('{git}')) {
NewGen = NewGen.replace("{git}", `${Git}`)
}
if (NewGen.includes('{yt}')) {
NewGen = NewGen.replace("{yt}", `${Yt}`)
}

let buttons = [];
let b1 = { buttonId: "1", buttonText: { displayText: aliveButton1}, type: 1, };
if(aliveButton2){ let b2 = { buttonId: "2", buttonText: { displayText: aliveButton2}, type: 1, }; buttons.push(b2); }
if(aliveButton3){ let b3 = { buttonId: "3", buttonText: { displayText: aliveButton3}, type: 1, }; buttons.push(b3); }
buttons.push(b1);
if(aliveImgUrl.endsWith('.mp4') && NewGen.includes('{ig}')){
	NewGen = NewGen.replace("{ig}", "");
if (NewGen.includes('{fancy}')) {
var r_text = new Array();
 r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24"; r_text[3] = "57"; r_text[4] = "1"; r_text[5] = "36"; r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39"; r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41"; const i = Math.floor(11 * Math.random()); let Num = r_text[i];
NewGen = NewGen.replace("{fancy}", "")
NewGen = await styletext(NewGen, Num);
}
    let alievTxtNew = `${NewGen}`;
    templateButtons = {
video : { url: aliveImgUrl },
jpegThumbnail:  jpgimg,
caption: `${alievTxtNew}`,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: jpgimg,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
await client.sendMessage(message.from, templateButtons, { quoted: message });
}else if(aliveImgUrl.endsWith('.jpg') && NewGen.includes('{ig}')){
	NewGen = NewGen.replace("{ig}", "");
if (NewGen.includes('{fancy}')) {
var r_text = new Array();
 r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24"; r_text[3] = "57"; r_text[4] = "1"; r_text[5] = "36"; r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39"; r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41"; const i = Math.floor(11 * Math.random()); let Num = r_text[i];
NewGen = NewGen.replace("{fancy}", "")
NewGen = await styletext(NewGen, Num);
}
    let alievTxtNew = `${NewGen}`;
    templateButtons = {
image: { url: aliveImgUrl },
jpegThumbnail:  jpgimg,
caption: `${alievTxtNew}`,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: jpgimg,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
await client.sendMessage(message.from, templateButtons, { quoted: message });
}else if(aliveImgUrl.endsWith('.jpeg') && NewGen.includes('{ig}')){
	NewGen = NewGen.replace("{ig}", "");
if (NewGen.includes('{fancy}')) {
var r_text = new Array();
 r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24"; r_text[3] = "57"; r_text[4] = "1"; r_text[5] = "36"; r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39"; r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41"; const i = Math.floor(11 * Math.random()); let Num = r_text[i];
NewGen = NewGen.replace("{fancy}", "")
NewGen = await styletext(NewGen, Num);
}
    let alievTxtNew = `${NewGen}`;
    templateButtons = {
image: { url: aliveImgUrl },
jpegThumbnail:  jpgimg,
caption: `${alievTxtNew}`,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: jpgimg,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
await client.sendMessage(message.from, templateButtons, { quoted: message });
}else if (aliveImgUrl.endsWith('.mp4')) {
if (NewGen.includes('{fancy}')) {
var r_text = new Array();
 r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24"; r_text[3] = "57"; r_text[4] = "1"; r_text[5] = "36"; r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39"; r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41"; const i = Math.floor(11 * Math.random()); let Num = r_text[i];
NewGen = NewGen.replace("{fancy}", "")
NewGen = await styletext(NewGen, Num);
}
 templateButtons = {
video: { url: aliveImgUrl },
caption: `${NewGen}`,
footer: Config.FOOTER,
buttons,
 }
await client.sendMessage(message.from, templateButtons, { quoted: message });
}else if(aliveImgUrl.endsWith('.jpeg')){
if (NewGen.includes('{fancy}')) {
var r_text = new Array();
 r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24"; r_text[3] = "57"; r_text[4] = "1"; r_text[5] = "36"; r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39"; r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41"; const i = Math.floor(11 * Math.random()); let Num = r_text[i];
NewGen = NewGen.replace("{fancy}", "")
NewGen = await styletext(NewGen, Num);
}
templateButtons = {
 text: NewGen,
 footer: Config.FOOTER,
 templateButtons: buttons,
 image: {url: aliveImgUrl}
 }
await client.sendMessage(message.from, templateButton);
}else if(aliveImgUrl.endsWith('.jpg')) {
if (NewGen.includes('{fancy}')) {
var r_text = new Array();
 r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24"; r_text[3] = "57"; r_text[4] = "1"; r_text[5] = "36"; r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39"; r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41"; const i = Math.floor(11 * Math.random()); let Num = r_text[i];
NewGen = NewGen.replace("{fancy}", "")
NewGen = await styletext(NewGen, Num);
}
  templateButtons = {
image: { url: aliveImgUrl },
caption: `${NewGen}`,
footer: Config.FOOTER,
buttons,
 }
await client.sendMessage(message.from, templateButtons, { quoted: message });
} else {
await client.sendMessage(message.from,{ text :`_iam alive vro_ : ${Sender}` }, { quoted: message });
await client.sendMessage(client.user.id,{ text : " we think _Bot Team_ \n you have been not seted eny alive data as like image url img, button, etc\nif you have been think to set coustamized alive msg as you want\n we have been send a\*example value*  _with a cmd_ :  _set-alive-value_ \nset-alive-value https://image.jpg, hey bro iam alive :{sender} \nquita :{quita}\ninsult{insult}\ndate :{date}\nNo value in curresponding: {ig}\ngit : {git} \n {ig} when setting alive automaticly convert thet as an linkprewImg.., aliveButtion, aliveButtion1,alivebutten2\n\n and we infrom to you the alive values like {ig}, {git}, {sender} etc..., we give all data bellow \n\n1){quita}\n2){insult}\n3){sender}\n4){fans}\n5){hits}\n6){server}\n7){date}\n8){git}\n9){yt}\n10){ig} "}, { quoted: message });
     }
await fs.unlinkSync(imag)
}
async function send_menu(message, client){
let jpgpick = await BufferToFile(Config.BOT_INFO.split(',')[2] ,'./media/aliveimgnew.jpg')
let jpgimg =  fs.readFileSync('./media/aliveimgnew.jpg');
const { commands, styletext} = require('../');
var r_text = new Array(); r_text[0] = "22"; r_text[1] = "23"; r_text[2] = "24";  r_text[3] = "57"; r_text[4] = "1";  r_text[5] = "36";  r_text[6] = "37"; r_text[7] = "38"; r_text[8] = "39";  r_text[9] = "41"; r_text[10] = "39"; r_text[11] = "41";
    const i = Math.floor(11 * Math.random());
let Num = r_text[i];
let countcmdOfCmd = 0;

  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';

 commands.map((command) => {
 countcmdOfCmd += command.pattern.length
 });

 let CMD_HELP =  ` ╭═══〘 ${Config.BOT_INFO.split(",")[0]} 〙═══⊷❍
 ┃
 ┃  ╭════〘 about 〙════⊷❍
 ┃  │
 ┃  │  Owner : ${Config.BOT_INFO.split(",")[1]}
 ┃  │  User : ${message.client.pushName}
 ┃  │  webSite : ${Config.WEB}
 ┃  │  Server : ${Config.HEROKU.APP_NAME}
 ┃  │  github : ${Config.GIT}
 ┃  │  you Tube : ${Config.YT}
 ┃  │  Plugins : ${countcmdOfCmd.toString()};
 ┃  │  Disk Space: 620 GB
 ┃  │  Version: ${Config.VERSION}
 ┃  │ 
 ┃  │   ▎▍▌▌▉▏▎▌▉▐▏▌▎
 ┃  │    ${Config.BOT_INFO.split(",")[0]}
 ┃  │
 ┃  ╰───────────────
 ┃  ╭════〘 all-cmds 〙═══⊷❍\n`;
    commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += " ┃  │      "+styletext(cmd, Num)+"\n")}
    }); 
    CMD_HELP += ` ┃  ╰─═════════════⊷❍
 ╰══════════════════⊷❍`;
   
  const buttons = [
        { buttonId: ".ping", buttonText: { displayText: "ᴩɪɴɢ"}, type: 1, },
        { buttonId: ".owner", buttonText: { displayText: "ᴏᴡɴᴇʀ"}, type: 1, },
        { buttonId: ".git", buttonText: { displayText: "ɢɪᴛʜᴜʙ"}, type: 1, },
      ];
var templateButtons, menuImgUrl;
menuImgUrl = Config.BOT_INFO.split(',')[2];
if(menuImgUrl.endsWith('.mp4')){
templateButtons = {
video : { url: menuImgUrl },
jpegThumbnail:  jpgimg,
caption: CMD_HELP,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: jpgimg,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
await client.sendMessage(message.from, templateButtons);
}else if(menuImgUrl.endsWith('.jpg')) {
  templateButtons = {
image : { url: menuImgUrl },
jpegThumbnail:  jpgimg,
caption: CMD_HELP,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: jpgimg,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
await client.sendMessage(message.from, templateButtons, { quoted: message });
}else if(menuImgUrl.endsWith('.jpeg')) {
   templateButtons = {
image : { url: menuImgUrl },
jpegThumbnail:  jpgimg,
caption: CMD_HELP,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:Config.MENSION.MENSION_TEXT.split(',')[0],
body: Config.MENSION.MENSION_TEXT.split(',')[1],
thumbnail: jpgimg,
mediaType:1,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
await client.sendMessage(message.from, templateButtons, { quoted: message });
} else {
await client.sendMessage(message.from,{ text :"error while img capturing"}, { quoted: message });
      }
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
await fs.unlinkSync(jpgpick)
}
module.exports = { sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu }
