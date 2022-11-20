const { inrl } = require('../lib');
inrl(
	{
		pattern: ['log'],
       desc: 'to convert image/sticker to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
for(let key in message) {
	console.log(key + ":", message[key]);
await client.sendMessage(message.from, { text : `key + ":", message[key]` });
      }
   }
);
