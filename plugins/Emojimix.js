const fs = require('fs');
const { fetchJson } = require('../lib/');
bots.inrl({pattern: ['emojimix'], desc: "to get video as audio ", sucReact: "💥", category: ['all'], }, (async (message, client) => {
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=🥺_😹`)
		for (let res of anu.results) {
		    await client..sendImageAsSticker(message.from, res.url, message, { packname: "inrl", author: "inrl", categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
}));
