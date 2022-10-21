const { inrl , styletext, listall, tiny } = require("../lib/");

inrl(
	   {
		pattern: ['faancy'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = message.client.text;
  // if (text.includes(',')) {
         var split = text.split(',');
         Num = split[0] || "25";
         Text = split[1] || "enter A text with number ex 31,text";
//}
let ThenText = await styletext(Text, Num)

return await client.sendMessage(message.from, { text : ThenText });
    }
);
