const { inrl, sendRepeat, toGroup } = require('../lib/');
inrl(
	   {
		pattern: ['repeat'],
		desc: 'To get jid off member',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match ) => {
if(!match) return;
    match = match.toLowerCase()
let number = match.split(',')[0].trim() || match;
let type = match.split(',')[1].trim() || "text";
 await sendRepeat(number, message, client, type)
});
inrl(
	   {
		pattern: ['togroup'],
		desc: 'To get jid off member',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match ) => {
if(!match) return;
    match = match.toLowerCase()
    let number = match.split(',')[0].trim() || match;
    await toGroup(number, message, client)
});
