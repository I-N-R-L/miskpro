const bots = require('../lib/perfix');


bots.inrl({ pattern: ['jid'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, m) => {

if (message.quoted) {
        await client.sendMessage( message.from, { text :message.quoted },{ quoted: message });
}else{
        await client.sendMessage( message.from, { text :message.quoted },{ quoted: message })
}
});
