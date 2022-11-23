const { inrl } = require('../lib/');
const { getYtV } = require('../lib/youtube');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
inrl(
	   {
		pattern: ['ytmp4'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtV(message, client)
}
         }
);
inrl(
	   {
		pattern: ['ytmp3'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtVA(message, client)
}
         }
);
