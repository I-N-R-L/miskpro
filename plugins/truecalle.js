const { inrl } = require('../lib/');
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
const outPut = JSON.parse(rslt.body);
let msg =`╭────────────────────╮
│ name : ${outPut.name}
│ score : ${outPut.score}
│ anName : ${outPut.alternativeName}
│ access : ${outPut.access}
│ type : ${outPut.type}
│ country : ${outPut.country}
│ carrier : ${outPut.carrier}
│ city : ${outPut.city}
│ timeZone : ${outPut.timeZone}
│ format : ${outPut.format}
╰────────────────────╯`
		return await client.sendMessage( message.from, { text: msg }, { quoted: message })
                }
        }
);
