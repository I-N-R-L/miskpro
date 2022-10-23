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
		pattern: ['clear'],
		desc: 'To clear a group chat',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
const lastMsgInChat = await getLastMessageInChat(message.from) // implement this on your end
await client.chatModify({
  delete: true,
  lastMessages: [{ key: lastMsgInChat.key, messageTimestamp: lastMsgInChat.messageTimestamp }]
},message.from)
});
