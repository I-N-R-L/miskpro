const fs = require('fs');
const got = require('got');
const {inrl,fetchJson,styletext} = require('../lib/');

inrl({pattern: ['emojiimix'], desc: "to emojis to single sticker",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'send to emojis \n\n _ex_:❣️+🥵'}, { quoted: message });
if (text.includes('+')) {
         var split = text.split('+');

         emoji1= split[0];
         emoji2 = split[1];
        }
const response = await got(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
/*
await got(url);
*/
	const json = response.results.url;

console.log("url="+json);
const Message = {
      image: { url: json },
      caption: "ezio.config.exif.cap",
}
await client.sendMessage(message.from, Message, /*message, { packname: "inrl", author: "inrl", categories: "🥵" }*/)
});
