const { inrl, dogsticker, lovesticker, cartoonsticker } = require('../lib');
const fs = require('fs');
const Config = require('../config');

inrl({ pattern: ['dogsticker'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
await client.sendImageAsSticker(message.from, sticker, message, { packname: Config.STICKER_DATA.split(',')[0], author: Config.STICKER_DATA.split(',')[1], })
});
