const bots = require('../lib/perfix');
const InRl = require('../lib/Store');


bots.inrl({ pattern: ['del'], desc: "to create to delete unwanted grp msg by admins",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

                if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a group content"},{ quoted: message })
                let { chat, fromMe, id } = message.quoted
                client.sendMessage(message.from, { delete: { remoteJid: message.chat, fromMe: message.quoted.fromMe, id: message.quoted.id, participant: message.quoted.sender }})
            }
);
bots.inrl({ pattern: ['online'], desc: "to create to delete unwanted grp msg by admins",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

let id = message.client.args && /\d+\-\d+@g.us/.test(message.client.args[0]) ? message.client.args[0] : message.chat
let online = [...Object.keys(InRl.bind.presences[id]), message.client.botNumber]
let liston = 1
client.sendMessage(message.from, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, message, { mentions: online })
           }
);
