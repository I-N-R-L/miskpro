const { inrl, dogsticker, lovesticker, cartoonsticker } = require('../lib');
const fs = require('fs');
const Config = require('../config');

inrl({ pattern: ['dogsticker'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
await client.sendMessage( message.from, { sticker: sticker }, { quoted: message } );
});
inrl({ pattern: ['dogsticke'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
await client.sendMessage( message.from, { sticker: Buffer.from(sticker) }, { quoted: message } );
});
