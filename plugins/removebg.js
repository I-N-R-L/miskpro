const { inrl, remove, unscreen } = require('../lib/');
let gis = require("g-i-s");
const fs = require('fs');
const Config = require('../config');

inrl(
	   {
		pattern: ['removebg'],
		desc: 'To remove bg of any image',
                sucReact: "😉",
                category: ["system", "all"],
	   },
	async (message, client) => {
if(message.quoted.imageMessage){
let img = await client.downloadAndSaveMediaMessage(message.quoted.imageMessage)
let rmbgimg = await remove(fs.readFileSync(img))
// let rmbg = await fs.writeFile('./media/rmbg/isexit.jpg', rmbgimg)
await client.sendMessage( message.from, { image : rmbgimg, caption : Config.CAPTION }, { quoted: message })
await fs.unlinkSync(img);//return await fs.unlinkSync(rmbg);
                }
        }
);
inrl(
  {
    pattern: ["img"],
    usage: '<text>',
    sucReact: "🖼",
    category: ["search", "all"],
  },
  async (message, client) => {
    const text = message.client.text;
    if (!text) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: bots.errorMessage('Enter Text') }, { quoted: message } );
    }

    gis(text, async (error, results) => {
        if (error) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, error, message.key, message );
        } else {
          let data = results.length
          let img = results[Math.floor(data * Math.random())]
console.log(img.url, data);
            await client.sendMessage( message.from, { image: { url: img.url }, caption: bots.config.exif.cap,}, { quoted: message, });
            global.catchError = false;
        }
    
      }).catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, err, message.key, message );
      });
  }
);
