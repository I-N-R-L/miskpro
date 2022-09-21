
const bots = require('../lib/perfix')
bots.bot(
	{
		pattern: ['fpp'], desc: 'set full size profile picture',sucReact: "⛰️",  category: ["all"],},
	async (conn, message, client) => {
	let _message = message.quoted.imageMessage || message.client.text;
		if (!_message)
			return await client.sendMessage( message.from,{ text :'*Reply to a image.*'}, { quoted: message })
             if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
			let download = await client.downloadMediaMessage(_message);
		await conn.updateProfilePicture(message.from, download );
		return await client.sendMessage( message.from,{text :'_Profile Picture Updated_'}, { quoted: message })
	}
)
