const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['qu'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
console.log(message.quoted.msg);
		//return await client.sendMessage( message.from, { text: message.quoted }, { quoted: message })
                }
);
