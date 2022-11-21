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
inrl(
  {
    pattern: ["img"],
    usage: '<text>',
    sucReact: "🖼",
    category: ["search", "all"],
  },
  async (message, client, match) => {
    if (!match) {
      return await client.sendMessage( message.from, { text: bots.errorMessage('Enter Text') }, { quoted: message } );
    }
    gis(match, async (error, results) => {
        if (error) return;
          let data = await results.length
          let img = await results[Math.floor(data * Math.random())]
await client.sendMessage(message.from,{ image : {url : img.url }, caption : Config.CAPTION }, {quoted: message})
   })
});
