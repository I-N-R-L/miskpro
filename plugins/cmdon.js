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
               let result912 = anu[Math.floor(Math.random(), anu.length)]
cosnole.log(result912.video_1);
              return await client.sendMessage(message.chat, { video: { url: result912.video_1 }, caption: ` Title : result912.titlvideo_1` }, { quoted: message })
       }
);
