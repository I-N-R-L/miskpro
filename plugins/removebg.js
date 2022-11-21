const { inrl, remove, unscreen, config } = require('../lib/');
let gis = require("g-i-s");
const fs = require('fs');
const Config = require('../config');

inrl(
	   {
		pattern: ["removebg", "rmbg"],
		desc: 'To remove bg of any image',
                sucReact: "😉",
                category: ["system", "all","create","photo","fun"],
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
async function serchimg(text){
    gis(text, async (error, results) => {
        if (error) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, error, message.key, message );
        } else {
          let data = results.length
          let img = results[Math.floor(data * Math.random())]
return img;
       }
   })
}
inrl(
  {
    pattern: ["img"],
    usage: '<text>',
    sucReact: "🖼",
    category: ["search", "all"],
  },
  async (message, client, match) => {
    const text = message.client.text;
    if (!text) {
      return await client.sendMessage( message.from, { text: bots.errorMessage('Enter Text') }, { quoted: message } );
    }
let img = serchimg(text);
let buttons = [
        {buttonId:`img ${text}`, buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:img.url},
      caption:  `HeHe!`,
      footer: Config.FOOTER,
      buttons: buttons
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
});
