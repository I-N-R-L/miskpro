const { inrl , styletext, listall, tiny , randomStyle} = require("../lib/");

inrl(
	   {
		pattern: ['ttxt'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = message.client.text;
     const ttxt = message.quoted.text ;
if(!text){
return await client.sendMessage(message.from, { text : "reply to a tex" })
}
await client.sendMessage(message.from { text : ttxt });
});
