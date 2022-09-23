
const bots = require('../lib/perfix')
bots.inrl(
	{
		pattern: ['fpp'], desc: 'set full size profile picture',sucReact: "⛰️",  category: ["all"],},
	async (conn, message, client) => {
	if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(bots.config.reply.owner) }, { quoted: message } ); };
			if (/image/.test(message.client.mime)) {
        let download = await message.quoted.download();
		await conn.updateProfilePicture(message.from, download );
		return await client.sendMessage( message.from,{text :'_Profile Picture Updated_'}, { quoted: message })
}
	}
)
