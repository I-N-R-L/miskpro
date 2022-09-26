const bots = require('../lib/perfix');
const { fetchJson } = require('../lib/cloud');
const fs = require('fs');

bots.inrl({pattern: ['emojimix'], desc: "to emojis to single sticker",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'send to emojis \n\n _ex_:❣️+🥵'}, { quoted: message });
if (text.includes('+')) {
         var split = text.split('+');

         emoji1= split[0];
         emoji2 = split[1];
        }
const url = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of url.results) {
console.log("inrl="+res.url)
await client.sendMessage( message.from, { sticker: Buffer.from(res.url) }, { quoted: message } );
await fs.unlinkSync(encmedia)
     }
});
