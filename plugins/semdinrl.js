const { inrl } = require('../lib');
const virtext = require('../media/virtex');

inrl({ pattern: ['virtext'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, (async (message, client) => {
     await client.sendMessage(message.from, {text : "inrl"+virtext.inrlvirtext });
    }))
