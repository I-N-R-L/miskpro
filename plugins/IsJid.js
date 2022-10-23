const { inrl } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
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
		pattern: ['block'],
		desc: 'To block a person',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
await client.updateBlockStatus(message.from, "block") // Block user
});
inrl({
		pattern: ['unblock'],
		desc: 'To unblock a person',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
await client.updateBlockStatus(message.from, "unblock") // Unblock user
});
inrl({
		pattern: ['tagall'],
		desc: 'To tag all group member',
                sucReact: "😄",
                category: ["system", "all"],
	   }, async (message, client) => {
        if(message.isGroup){
	const groupMetadata = message.isGroup ? await client.groupMetadata(message.from).catch(e => {}) : ''
	const participants = message.isGroup ? await groupMetadata.participants : ''
console.log(participants);
		let msg = message.client.text+"\n\n" || ' 💗 \n\n';
		let count = 1
			msg += ` ${count++}  @${participants.id.split('@')[0]}`+"\n"
console.log(msg);
		return await client.sendMessage(message.from, {
			text: msg,
			mentions: participants.map(a => a.id)
	})
     }
});
