const { inrl } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
const got = ('got');

inrl(
	   {
		pattern: ['true'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
let rslt = got(`https://inrl-web.vercel.app/api/truecaller?number=${match}`);
const outPut = JSON.parse(rslt);
		return await client.sendMessage( message.from, { text: outPut }, { quoted: message })
                }
);
