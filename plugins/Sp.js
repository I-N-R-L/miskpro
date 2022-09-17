const bots = require("../lib/perfix");
const Config = require('../config');
bots.inrl( { pattern: ["sp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=🥵_🥲`;
          const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await client.sendImageAsSticker(message.from, json.url, { packname: "inrl", author: "inrl", categories: json.tags })
	}
);
