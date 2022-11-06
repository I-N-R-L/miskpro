const { inrl, getBuffer } = require('../lib');
const { animewifu, animenom } = require('../lib/database/anime_api_pack');

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
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})

inrl({ pattern: ['animewifu'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, async (message, client) => {
let ttimg = await animenom();
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
await client.sendMessage(message.from, buttonMsg, {quoted: message})
 })
