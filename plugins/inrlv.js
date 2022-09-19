const { inrl } = require('../lib/perfix');
const got = require('got');
const Config = require('../config');


    inrl({pattern: ['😕'], desc: "to check whether", sucReact: "💔", category: ['all'], usage: '<word>',},   async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
		    await client.sendMessage( message.from, { text:url.insult },{ quoted: message });
});
