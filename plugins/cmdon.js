const { inrl, quoted, send_vote, sleep } = require('../lib');
const { generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
inrl(
	   {
		pattern : ["text"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text, cmd, store) => {
                        //   var data = await store.chats.all()
                    //      for (let i of data) {
                          // XeonBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\n${q}` })

  let pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
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
}), { userJid: message.chat, quoted: message })

await client.relayMessage(message.chat, pollCreation.message, { messageId: pollCreation.key.id })

//await client.sendMessage(i.id, { text:" message.from" })
        return await sleep(1000)
              }
       }
);
