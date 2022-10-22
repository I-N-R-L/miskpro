module.exports = async (conn, m) => {
let { participants } = await conn.groupMetadata(m.id);
let gParticipants = m.participants
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
		gParticipants.map((users) => {
                let teks = 
                `╭═══〘${Config.BOT_INFO.split(',')[1]}〙═══⊷❍
                │`
                teks += `@${users.split('@')[0]}\n`

               }
                return await client.sendMessage(message.from, { text: teks })
    
               }
	}
);
}
