const { inrl } = require('../lib');
inrl({ pattern: ["cmds"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
await client.sendMessage(message.from, { text : `args = ${message.client.args}
withcmd = ${message.client.withcmd}
withoutcmd = ${message.clinet.withoutcmd}
text = ${message.client.text}`
    })
})
