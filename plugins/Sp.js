const bots = require("../lib/perfix");
const got = require("got");
const Config = require('../config');
bots.inrl( { pattern: ["sp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=🥵_🥲`;
const Message = {
      image: { url: url.url },
      caption:`╭`
}
await client.sendImageAsSticker(message.from, Message, { quoted: message });
});
