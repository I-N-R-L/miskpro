const { inrl } = require('../lib/perfix');
const Config = require('../config');


    inrl({pattern: ['😕'], desc: "to check whether", sucReact: "💔", category: ['all'],},   async (message, client) => {

	    const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
		   return await client.sendMessage( message.from, { text:url.insult },{ quoted: message });
});
