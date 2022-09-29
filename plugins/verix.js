const bots = require('../lib/perfix');
const verix = require('../media/virtex');

bost.inrl( { pattern: ["virtex"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
await client.sendMessage( message.from,{text : verix.MENSION } ,{ quoted: message })}
     	}
);
