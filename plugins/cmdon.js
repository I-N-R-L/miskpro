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
console.log(result912.video_1);
              return await client.sendMessage(message.from, { video: { url: result912.video_1 }, caption: ` Title : result912.titlvideo_1` }, { quoted: message })
       }
);
inrl(
	   {
		pattern : ["textt"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text, cmd, store) => {
let pollCreation = generateWAMessageFromContent(message.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "botname",
"options": [
	{
"optionName": "VOTE FOR PLEASURE"
	},
	{
"optionName": "VOTE AND WIN IPHONE 14 PRO MAX"
	},
	{
"optionName": "VOTE TO GET FREE +84 NUMBER"
	},
	{
"optionName": "VOTE TO GET +54"
	},
	{
"optionName": "VOTE TO GET +64"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: message.from, quoted: message })

await client.relayMessage(message.from, pollCreation.message, { messageId: pollCreation.key.id })

//await client.sendMessage(i.id, { text:" message.from" })
       // return await sleep(1000)
           //   }
       }
);
       }
);
