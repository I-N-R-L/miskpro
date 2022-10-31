const imgbbUploader = require("imgbb-uploader");
const Config = require('../../config');
const { getBuffer } = require('../cloud');
const { config } = require('../Data');
const need = "*add link after command"
const got = require('got');
const fs = require('fs');
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
async function AudioMetaData(audio, message, client){
const text = message.client.text;
var TextForAud,CreaterForAud,imgForAud;
if (text.includes(',')) {
         var split = text.split(',');
         TextForAud = split[1] || Config.AUDIO_DATA.split(',')[0];
         CreaterForAud = split[0] || Config.AUDIO_DATA.split(',')[1];
         imgForAud = split[2] || Config.AUDIO_DATA.split(',')[2];
      }
const songBuffer = fs.readFileSync(audio);
const coverBuffer = getBuffer("https://i.imgur.com/DyLAuEh.jpg");
 
const writer = new ID3Writer(songBuffer);
writer.setFrame('TIT2', "CreaterForAud")
      .setFrame('TPE1', ["TextForAud"])
      .setFrame('TALB', "TextForAud")
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
} 
module.exports = { sendUrl, tinyUrl, webSs, pdfGen, AudioMetaData }
