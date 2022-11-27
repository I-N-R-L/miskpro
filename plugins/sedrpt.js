const { inrl, sendRepeat } = require('../lib/');
inrl(
	   {
		pattern: ['repeat'],
		desc: 'To get jid off member',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match ) => {
if(!match) return;
let match = match.toLowerCase()
let number = match.split(',')[0].trim() || match;
let type = match.split(',')[1].trim() || "text";
 await sendRepeat(number, message, client, type)
});
