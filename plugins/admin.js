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

console.log(admins, message.participant)
if(admins.includes(message.participant)) console.log("trt");
if(!admins) console.log("fals");
});
