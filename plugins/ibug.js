const { inrl } = require('../lib/perfix');
const got = require('got');
const Config = require('../config');
    inrl({pattern: ['inrl'], desc: "to check i cmds", sucReact: "ðŸ˜‰", category: ['all'],},   async (message, client) => {
	    const url = `https://api.quotable.io/random`;
const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await client.sendMessage( message.from, { text: json.content },{ quoted: message });
});
