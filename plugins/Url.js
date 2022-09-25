const imgbbUploader = require("imgbb-uploader");
const bots = require('../lib/perfix')
const got = require('got');
const api = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
bots.inrl(
	{
		pattern: ['urli'],
       desc: 'set full size profile picture',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {

let _message = message.quoted.imageMessage || message.quoted.videoMessage;

if (!_message)
return await client.sendMessage( message.from,{ text :'*Reply to a image/video to url.*'}, { quoted: message })
let download = await client.downloadAndSaveMediaMessage(_message)
var idata = await imgbbUploader(api , download)
console.log(idata);
await client.sendMessage( message.from, {text : idata.url }, { quoted: message })
    }
);
 bots.inrl({pattern: ['tinyurl'], desc: "to check whether", sucReact: "💔", category: ['all'],},   async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode ===200) return await client.sendMessage( message.from, { text:'tinyurl:'+json.hasil+url.hasil }, { quoted: message });
	    } catch {
		    return await client.sendMessage( message.from, { text : "no data found on this location"},{ quoted: message });
	    }
    });
