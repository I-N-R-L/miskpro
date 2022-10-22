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
 bots.inrl({pattern: ['tinyurl'], desc: "to convert url as small", sucReact: "😛", category: ['all'],},   async (message, client) => {
           const text = message.client.text || message.quoted ;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode ===200) return await client.sendMessage( message.from, { text:'tinyurl:'+json.result.hasil }, { quoted: message });
	    } catch {
		    return await client.sendMessage( message.from, { text : "no data found on this location"},{ quoted: message });
	    }
    });
bots.inrl({ pattern: ['webss'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${message.client.text}&apikey=IkyOgiwara`;

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
const Raashii = require('../lib/perfix');
const Config = require('../config');
const { getBuffer } = require('../lib/cloud');
const need = "*add link after commandðŸ’Œ*"

  Raashii.inrl({ pattern: ['pdf'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"], iscmd : "pdf", type:"misc"}, (async (message, client) => {

const text = message.client.text;

    if (!text) return await client.sendMessage(message.from, { text :need },{ quoted: message })

    var inrlmx = await getBuffer(`https://api.html2pdf.app/v1/generate?url=${text}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`)
    
    await client.sendMessage(message.from , {document: inrlmx, mimetype: 'application/pdf', fileName: `inrl.pdf`}, {quoted: message})

  }))
