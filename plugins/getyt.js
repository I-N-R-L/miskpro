const { inrl } = require('../lib/');
const { getYtV } = require('../lib/youtube');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
inrl(
	   {
		pattern: ['ytv'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
await getYtV(message, client)
         }
);
