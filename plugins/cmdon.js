const { inrl } = require('../lib');

inrl(
	   {
		on : "text" ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
	//console.log("inrlonmsg working perfectly")
return await client.sendMessage( message.from, { text: message.from }, { quoted: message })
                }
);
