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
inrl({ pattern: ['dogstick'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
await client.sendMessage( message.from, { sticker: sticker }, { quoted: message } );
encmedia = await client.sendImageAsSticker(message.from, sticker, message, { packname: Config.STICKER_DATA.split(',')[0], author: Config.STICKER_DATA.split(',')[1], })
await fs.unlinkSync(encmedia)
});
