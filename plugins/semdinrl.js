const { inrl, animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite } = require('../lib');
const Config = require('../config');

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

inrl({ pattern: ['animenom'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, async (message, client) => {
let ttimg = await animenom();
let buttons = [
        {buttonId:'.animenom', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
