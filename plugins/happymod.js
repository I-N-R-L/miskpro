const whatsbixby = require('../events');
const {MessageType} = require("Wa-Web");
const got = require('got');
const Config = require('../config');
const lang = whatsbixby.getString("weather");

whatsbixby.addCommand({pattern: 'happymod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, client) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
