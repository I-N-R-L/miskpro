const { inrl, quoted, send_vote, sleep } = require('../lib');

inrl(
	   {
		pattern : ["text"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text, cmd, store) => {
                           var data = await store.chats.all()
                           for (let i of data) {
                          // XeonBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\n${q}` })
   
await client.sendMessage(i.id, { text:" message.from" })
        return await sleep(1000)
              }
       }
);
