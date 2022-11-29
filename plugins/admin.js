const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['adm'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
        const groupMetadata = message.isGroup ? await client.groupMetadata(message.from).catch(e => {}) : ''
	const participants = message.isGroup ? await groupMetadata.participants : ''
        let admins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''

console.log(admins, message.sender, message.chat)
if(!admins) return;
if(admins.includes(message.sender)) {
await client.sendMessage(message.from, {
		delete: {
			remoteJid: message.from,
			fromMe: message.quoted.fromMe,
			id: message.quoted.id,
			participant: message.quoted.sender
            }
     })
}
});
