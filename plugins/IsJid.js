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
if(!message.client.isCreator) return await client.sendMessage( message.from, { text: "sorry about thets! this cmd only for owner"});
if (message.isGroup) { 
await client.updateBlockStatus(message.quoted, "block") // Block user
}else{
await client.updateBlockStatus(message.from, "block")
    }
}); // Block user
inrl({
		pattern: ['unblock'],
		desc: 'To unblock a person',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
if(!message.client.isCreator) return await client.sendMessage( message.from, { text: "sorry about thets this cmd only for owner"});
if (message.isGroup) { 
await client.updateBlockStatus(message.quoted, "unblock") // Unblock user
}else{
await client.updateBlockStatus(message.from, "unblock") // Unblock user
    }
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
        let admins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		let msg = "╭───────────────⊷❍\n";
                let count ="│🪀";
                for (let mem of participants) {
			msg += `${count}  ${mem.id.split('@')[0]}\n`
                }
if(message.client.isCreator || admins){
		return await client.sendMessage(message.from, {
			text: msg })
                     }
          }
});
inrl({
		pattern: ['tagadmin'],
		desc: 'To tag all group member',
                sucReact: "😄",
                category: ["system", "all"],
	   }, async (message, client) => {
        if(message.isGroup){
	const groupMetadata = message.isGroup ? await client.groupMetadata(message.from).catch(e => {}) : ''
	const participants = message.isGroup ? await groupMetadata.participants : ''
        let admins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		let msg = "╭───────────────⊷❍\n";
		let count ="│🪀";
                for (let mem of admins) {
			msg += `${count}  ${mem.split('@')[0]}\n`
                }
if(message.client.isCreator || admins){
		return await client.sendMessage(message.from, {
			text: msg })
                    }
          }
});
