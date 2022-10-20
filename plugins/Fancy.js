const { inrl , styletext, listall, tiny } = require("../lib/");

inrl(
	   {
		pattern: ['faancy'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = message.quoted.text
      client.sendMessage(styletext(text, parseInt(message.client.txt)));
    }
  }
);
