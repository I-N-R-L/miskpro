const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['jid'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		return await client.sendMessage( message.from, { text: message.from }, { quoted: message })
                }
);
inrl({
		pattern: ['tagall'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
let { participants } = await client.groupMetadata(message.from);
let gParticipants = message.participants;
		for (let mem of participants){
                let teks = 
                `╭═══〘Config.BOT_INFO.split(',')[1]〙═══⊷❍
                │`
                teks += await `${mem}\n`
     }
console.log(teks);
                return await client.sendMessage(message.from, { text: teks })
   }
);
