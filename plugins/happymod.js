const andikudamkk = require('../events');
const got = require('got');
const Config = require('../config');
const misk = message.client.text;
andikudamkk.addCommand({pattern: ['happymod'], fromMe: false, desc: "to get mode apk",sucReact: "😁",  category: ["all", "create"],}, async (message, client) => {
	if (!misk) return await client.sendMessage(message.from, { text :"need an apk name to get mod"},{ quoted: message })
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${misk}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await client.sendMessage( message.from, { text:
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', }, { quoted: message });
	} catch {
		return await client.sendMessage( message.from, { text : "no data found on this apk"},{ quoted: message });
	}
});
