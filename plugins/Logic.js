const imgbbUploader = require("imgbb-uploader");
const bots = require('../events')
const api = "76a050f031972d9f27e329d767dd988f";
bots.addCommand(
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

let download = await client.downloadAndSaveMediaMessage(_message);

var idata = imgbbUploader(api , download)

return await client.sendMessage( message.from, {text : idata.url }, { quoted: message })

}

);
