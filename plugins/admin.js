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
        const groupAdmins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
	return message.isGroup ? groupAdmins.includes(message.user_id) : false
console.log("adm"+groupAdmins,"adm"+participants);
console.log("adm"+message.groupAdmins)
if(groupAdmins) console.log("trt");
});
