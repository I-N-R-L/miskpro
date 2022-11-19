const { inrl, truecaller, stickersearch } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

inrl(
	   {
		pattern: ['true'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
if(match){
let True = match.includes('@') ? match.split('@')[1] : match;
let rslt = await got(`https://inrl-web.vercel.app/api/truecaller?number=${True}`);
let msg = await truecaller(rslt);
		return await client.sendMessage( message.from, { text: msg }, { quoted: message })
                }
        }
);
inrl(
  {
    pattern: ["search"],
    desc: "to serch  datas as you want",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client, match) => {
if(match){
if(match.match("photo")){
let data = await stickersearch(match.replace("photo",""))
let img = data.sticker_url;
console.log(data);
let GetRandom = img[Math.floor(Math.random(), img.length)]
 let buttons = [
        {buttonId:`.search ${match}`, buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image : {url: GetRandom },
      caption:`${data.titile}`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
  }
});
