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
	let data = key.quoted, message[key];
await client.sendMessage(message.from, { text : data });
      }
   }
);
inrl(
	{
		pattern: ['logs'],
       desc: 'to convert image/sticker to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
for(let key in message) {
let data = key, message[key];
await client.sendMessage(message.from, { text : data });
      }
   }
);
inrl(
	{
		pattern: ['log'],
       desc: 'to convert image/sticker to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
for(let key in message) {
	let data = key.quoted, message[key.quoted];
await client.sendMessage(message.from, { text : data });
      }
   }
);
