const { inrl, dogsticker, lovesticker, cartoonsticker,BufferToFile } = require('../lib');
const fs = require('fs');
const Config = require('../config');
//const Config = require('../congi

inrl({ pattern: ['dogsticker'], desc: "to get random dog stickers",sucReact: "🐕",  category: ["sticker"]}, async (message, client) => {
let sticker = await dogsticker();
let secd = await BufferToFile(sticker,'./media/stickers.webp');
await client.sendFile(message.from, secd, "", message, {
          asSticker: true,
          author: Config.STICKER_DATA.split(',')[0],
          packname: Config.STICKER_DATA.split(',')[1],
          categories: ["😄", "😊"],
        });
//await client.sendMessage( message.from, { sticker: Buffer.from('./media/stickers.webp'), }, { quoted: message } );
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
