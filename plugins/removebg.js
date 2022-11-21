const { inrl, remove, unscreen } = require('../lib/');
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
let rmbg = await fs.writeFileSync('./media/rmbg/isexit.jpg', rmbgimg)
await client.sendMessage( message.from, { image : rmbg, caption : Config.CAPTION }, { quoted: message })
await fs.unlinkSync(img);return await fs.unlinkSync(rmbg);
                }
        }
);
