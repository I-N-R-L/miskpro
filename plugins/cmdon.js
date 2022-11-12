const { inrl, quoted, send_vote } = require('../lib');

inrl(
	   {
		pattern : ["text"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
	//console.log("inrlonmsg working perfectly")
await client.sendMessage(message.from, { text:" message.from" }, { quoted: quoted(message).contact })
await client.sendMessage(message.from, { text:" message.from" }, { quoted: quoted(message).gclink })
return await client.sendMessage(message.from, { text:" message.from" }, { quoted: quoted(message).text })
                }
);
inrl(
	   {
		pattern : ["audio"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
	//console.log("inrlonmsg working perfectly")
return await client.sendMessage(message.from, { audio: { url: "https://i.imgur.com/2AbxJCd.mp4" }, mimetype: 'audio/mp4', fileName: "text}.mp3" }, { quoted: quoted(message).audio })
     }
);
