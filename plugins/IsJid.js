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
let gParticipants = participants;
		gParticipants.map((users) => {
                let teks = 
                `╭═══〘Config.BOT_INFO.split(',')[1]〙═══⊷❍
                │`
                teks += `${users}\n`
})
console.log(teks);
                return await client.sendMessage(message.from, { text: teks })
                        }
);
