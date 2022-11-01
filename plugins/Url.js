const { inrl, sendUrl, tinyUrl, webSs, pdfGen, urlBufferToImgFile, AudioMetaData  } = require('../lib')
const Config = require('../config');
const fs = require('fs');
const { readFile, writeFile } = require('fs/promises')
inrl(
	{
		pattern: ['url'],
       desc: 'to convert image/sticker to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
await sendUrl(message, client);
    }
);
 inrl({pattern: ['tinyurl'], desc: "to convert url as small", sucReact: "😛", category: ['all'],},   async (message, client) => {

           await tinyUrl(message, client);
});
inrl({ pattern: ['webss'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

        await webSs(message, client);
});

inrl({ pattern: ['pdf'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, (async (message, client) => {
     await pdfGen(message, client);
}))

inrl({ pattern: ['copy'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
let _message = message.quoted.audioMessage
let media = await client.downloadAndSaveMediaMessage(_message)
let text = message.client.text;

if(text.includes(' ')){ text = text.trim() }
let img = Config.AUDIO_DATA.split(',')[2];
if(img.includes(' ')){ img = img.trim() }
img = text.split(',')[2] ? text.split(',')[2] : img;
console.log(img)
let imgForUdio = await urlBufferToImgFile(img,'./media/imagForAudio.jpg');
    await AudioMetaData(imgForUdio, media, message, client);
//return await fs.unlinkSync(dltImg)

})
