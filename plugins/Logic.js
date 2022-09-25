const imgbbUploader = require("imgbb-uploader");
const bots = require('../lib/perfix')
const api = "76a050f031972d9f27e329d767dd988f";
bots.inrl(
	{
		pattern: ['urli'],
       desc: 'set full size profile picture',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {

let _message = message.quoted.imageMessage || message.client.videoMessage;

if (!_message)

			return await client.sendMessage( message.from,{ text :'*Reply to a image/video to url.*'}, { quoted: message })

if (/image|video/.test(message.client.mime)) {
        let download = await message.quoted.downloadAndSaveMediaMessage()
var idata = imgbbUploader(api , download)
console.log(idata);
await client.sendMessage( message.from, {text : idata.url }, { quoted: message })
}
}

);
