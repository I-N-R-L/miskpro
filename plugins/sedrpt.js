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
let number = match.split(',')[0] || match;
let type = match.split(',')[1] || "text";
 await sendRepeat(number, m, c, type)
});
