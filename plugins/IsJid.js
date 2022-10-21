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

		let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await client.groupMetadata(message.id)
		let gParticipants = message.participants
		let texts += await participants;
		return await client.sendMessage( message.from, { text: texts }, { quoted: message })
                }
)
