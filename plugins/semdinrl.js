const { inrl, getBuffer } = require('../lib');
const { animewifu } = require('../lib/database/anime_api_pack');
const Config = require('../config');
const fs = require('fs');
const mendia = fs.readFileSync('./media/imagee.jpg');

inrl({ pattern: ['animewifu'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, async (message, client) => {
let ttimg = await animewifu();
let buttons = [
        {buttonId:'.animewifu', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Here you go!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg , , quoted: message, contextInfo: { externalAdReply:{
 })
