const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['jid'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) {
		return await client.sendMessage( message.from, { text: message.from }, { quoted: message })
                }
)
