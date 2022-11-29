const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['adm'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
const groupAdmins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
	return message.isGroup ? groupAdmins.includes(message.user_id) : false
console.log(groupAdmins);
console.log(message.groupAdmins)
});
