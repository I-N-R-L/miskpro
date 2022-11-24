const Config = require('../config');
const {inrl,fetchJson,styletext} = require('../lib/');
const fs = require('fs');

inrl({pattern: ['emojimix'], desc: "to emojis to single sticker",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'send to emojis \n\n _ex_:❣️+🥵'}, { quoted: message });
let emoji1,emoji2;
if (text.includes('+')) {
         var split = text.split('+');
         emoji1 = split[0];
         emoji2 = split[1];
        }
let md = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of md.results) {
	        let encmedia = await client.sendImageAsSticker(message.from, res.url, message, { packname: Config.PACKNAME, author: Config.FOOTER, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
})

