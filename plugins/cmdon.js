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
		pattern : ["poll"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
	const pollMessage = {
        name: "name",
        options: [{ optionName: "poll[i]" },{ optionName: "poll[i]" },{ optionName: "poll[i]" },{ optionName: "poll[i]" }]
                    selectableOptionsCount: 4
        }
                
return await client.relayMessage(message.from, { pollCreationMessage: pollMessage }, { quoted: quoted(message).audio })
     }
);
