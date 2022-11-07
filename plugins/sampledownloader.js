const { inrl, isUrl, googleIt, wikiMedia, ringTone, mediaFire, gitClone, happyMod } = require('../lib');
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
		pattern: ['mediafire'],
		desc: 'do get dat from media fire',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if (!isUrl(message.client.args[0]) && !message.client.args[0].includes('mediafire.com')) return await client.sendMessage( message.from, { text :`The link you provided is invalid` })
        if (mediaFire(message.client.text).firstData[0].size.split('MB')[0] >= 999) return await client.sendMessage( message.from, { text :'*File Over Limit* '+util.format(firstData)})
        if(message.client.text){
        //await client.sendMessage( message.from, { text: await mediaFire(message.client.text).result })
        return await client.sendMessage( message.from, { document : { url : await mediaFire(message.client.text).firstData[0].link}, fileName : await mediaFire(message.client.text).firstData[0].nama, mimetype: await mediaFire(message.client.text).firstData[0].mime }, { quoted: message })
          }
     }
);
