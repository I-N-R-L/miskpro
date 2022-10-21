module.exports = async (conn, m) => {
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
)
inrl(
	   {
		pattern: ['tagall'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
try{
		let { participants } = await conn.groupMetadata(m.id)
		let gParticipants = m.participants
		for (let mem of gParticipants) {

                let teks += await `@${mem.split('@')[0]}\n`

               
                await client.sendMessage(message.from, { text: teks })
    
                }
} catch (err) {
		return await client.sendMessage(message.from, { text: err })
                }
	}
);
}
