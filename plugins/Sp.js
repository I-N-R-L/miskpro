const bots = require("../lib/perfix");
const Config = require('../config');
bots.inrl( { pattern: ["sp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=🥵_🥲`;
const Message = { image: { url:  url.url }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
