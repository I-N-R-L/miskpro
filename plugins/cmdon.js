const { inrl } = require('../lib');

inrl(
	   {
		noncmd : "text" ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
	//console.log("inrlonmsg working perfectly")
return await client.sendMessage( client.user.id, { text:" message.from" }, { quoted: message })
                }
);
