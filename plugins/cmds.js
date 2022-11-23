const { inrl } = require('../lib');
inrl({ pattern: ["cmds"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
await client.sendMessage(message.from, { text : `text = ${message.client.text}
Body = ${this.client.body}`
    })
})
