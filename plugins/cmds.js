const { inrl } = require('../lib');
inrl({ pattern: ["cmds"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
await client.sendMessage(message.from, { text : `text = ${message.client.text}
Cmds = ${message.client.command}
Iscmd = ${message.client.isCmd}
Args = ${messag.client.args}`
    })
})
inrl({ pattern: ["cmdds"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
await message.reply("testinf");
})
