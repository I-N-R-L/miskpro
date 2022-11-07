const { inrl, isUrl, googleIt, wikiMedia, ringTone, happyMod } = require('../lib');
const Config = require('../config');
const util = require('util');


inrl(
	   {
		pattern: ['google'],
		desc: 'do get goole serch result',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let teks = await googleIt(message.client.text);
        return await client.sendMessage( message.from, { text: "result =>\n\n"+teks }, { quoted: message })
          }
     }
);
inrl(
	   {
		pattern: ['wikimedia'],
		desc: 'do get data from wikimedia',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let result = await wikiMedia(message.client.text);
let buttons = [
                 {buttonId: `wikimedia ${message.client.text}`, buttonText: {displayText: 'next result'}, type: 1}
              ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}`,
                    footer: Config.FOOTER,
                    buttons: buttons,
                    headerType: 4
                }
        return await client.sendMessage( message.from, buttonMessage, { quoted: message })
          }
     }
);
inrl(
	   {
		pattern: ['ringtone'],
		desc: 'do get random ringtons ',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let result = await ringTone(message.client.text);
        return await client.sendMessage( message.from, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: message })
          }
     }
);
inrl(
	   {
		pattern: ['happymod'],
		desc: 'do get dat from media fire',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let taks = await happyMod(message.client.text).teks
        let imeg = await happyMod(message.client.text).imag
console.log(taks, imeg);
let buttons = [
           {buttonId: `hia`, buttonText: {displayText: 'thankyou❣️'}, type: 1}
              ]
let buttonMessage = {
image: { url:imeg },
caption: taks,
footer: `Config.FOOTER`,
buttons: buttons,
headerType: 4
}
return await client.sendMessage( message.from, buttonMessage, { quoted: message })
          }
     }
);
