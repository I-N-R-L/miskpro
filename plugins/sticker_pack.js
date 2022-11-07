const { inrl, dogsticker, lovesticker, cartoonsticker } = require('../lib');
const fs = require('fs');
const Config = require('../config');

inrl({ pattern: ['dogsticker'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
let stickEr, data = sticker;
if(data.includes('.png'){ stickEr = data.replace('.png','.webp') }else if(data.includes('.gif'){ stickEr = data.replace('.gif','.webp') }
console.log(stickEr);
await client.sendMessage( message.from, { sticker:  { url: stickEr }, }, { quoted: message } );
});
inrl({ pattern: ['dogsticke'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
let data = Buffer.from("https://i.ibb.co/H2TSHnL/34fd06ac823c.webp") ;
await client.sendMessage( message.from, { sticker: { url : data },}, { quoted: message } );
});
inrl({ pattern: ['dogstick'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
//await client.sendMessage( message.from, { sticker: sticker }, { quoted: message } );
encmedia = await client.sendImageAsSticker(message.from, sticker, message, { packname: Config.STICKER_DATA.split(',')[0], author: Config.STICKER_DATA.split(',')[1], })
await fs.unlinkSync(encmedia)
});
