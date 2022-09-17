const bots= require('../lib/perfix');
const Config = require('../config');


   bots.inrl({pattern: ['@'], desc: "to check whether", sucReact: "❣️", category: ['all'],},   async (message, client) => {
 await client.sendMessage( message.from, { text: 'please mension some one to take their data'}, { quoted: message });
});
