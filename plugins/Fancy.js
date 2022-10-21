const { inrl , styletext, listall, tiny } = require("../lib/");

inrl(
	   {
		pattern: ['faancy'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = "message.quoted.text";
   
let ThenText = await styletext("text", "31")

return await client.sendMessage(message.from, { text : ThenText });
    }
);
