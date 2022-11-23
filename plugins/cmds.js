const { inrl } = require('../lib');
inrl({ pattern: ["cmds"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
await client.sendMessage(message.from, { text : `args = ${message.client.text}`
    })
})
