const { inrl } = require('../lib');
inrl(
	{
		pattern: ['log'],
       desc: 'to convert image/sticker to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
let obj = JSON.stringify(message);
console.log(obj);
await client.sendMessage(message.from, { text : obj });
    }
);
