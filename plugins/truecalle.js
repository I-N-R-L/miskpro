const { inrl, truecaller } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
const got = require('got');

inrl(
	   {
		pattern: ['true'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
if(match){
let True = match.includes('@') ? match.split('@')[1] : match;
let rslt = await got(`https://inrl-web.vercel.app/api/truecaller?number=${True}`);
let msg = await truecaller(rslt);
		return await client.sendMessage( message.from, { text: msg }, { quoted: message })
                }
        }
);
