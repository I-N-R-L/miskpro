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

let id = message.client.args && /\d+\-\d+@g.us/.test(message.client.args[0]) ? message.client.args[0] : message.chat
                    let online = [...Object.keys(store.presences[id]), message.client.botNumber]
          //  XeonBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
await client.sendMessage(message.from, { text:'Online List:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, message }, { mentions: online })
       // return await sleep(1000)
           //   }
       }
);
