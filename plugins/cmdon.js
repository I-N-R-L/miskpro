const { inrl, quoted, hentaivideo, send_vote, sleep } = require('../lib');
const { generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
inrl(
	   {
		pattern : ["text"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text, cmd, store) => {
await send_vote(message, client);
       }
);
inrl(
	   {
		pattern : ["hentaivideo"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text, cmd, store) => {
let anu = await hentaivideo()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                client.sendMessage(message.chat, { video: { url: result912.video_1 }, caption: ` Title : ${result912.title}\n Category : ${result912.category}\n Mimetype : ${result912.type}\n Views : ${result912.views_count}\n Shares : ${result912.share_count}\n Source : ${result912.link}\n Media Url : ${result912.video_1}` }, { quoted: message })
       }
);
