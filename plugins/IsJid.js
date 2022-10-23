const translate = require("translate-google-api")
const config = require('../config')
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
		let msg = "  "+ message.client.text+"\n\n     💗💗";
                let count = 1
                for (let mem of participants) {
			msg += ` ${count++}  @${mem.id.split('@')[0]}\n`
                }
		return await client.sendMessage(message.from, {
			text: msg })
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
		let msg = "  "+ message.client.text+"\n\n     💥💖💥 \n\n";
		let count = 1
                for (let mem of admins) {
			msg += ` ${count++}  @${mem.split('@')[0]}\n`
                }
		return await client.sendMessage(message.from, {
			text: msg })
          }
});

inrl({
		pattern: ['trt'],
		desc: 'To tag all group member',
                sucReact: "😄",
                category: ["system", "all"],
	   }, async (message, client) => {
//if (!m.quoted.text) return await m.reply('_Reply to a text message_\n*Example : trt ml"')
const [to, from] = message.client.text.split(' ')
let lang = message.client.text.split("#")[1] || "ml";
try {
const translated = await translate(message.client.text, {tld: "co.in", to: to || lang , from: from})
await client.sendMessage(message.from, { text: translated?.join() })
} catch (e) {
return await client.sendMessage(message.from, {text: `_${e.message}_` })
}
})
