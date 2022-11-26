const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['clear'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
    await client.chatModify({
        delete: true,
        lastMessages: [{ key: message.key, messageTimestamp:message.data.messageTimestamp }]
      },message.from)
    return await message.send("_Chat cleared!_")  
});
