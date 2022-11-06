const { inrl, pass, animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite } = require('../lib');
const Config = require('../config');
let checkPass = Config.PASSWORD;
let crtPass = pass.PASS;

inrl({ pattern: ['animewifu'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
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

inrl({ pattern: ['animenom'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
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
 inrl({ pattern: ['animefox'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animefox();
let buttons = [
        {buttonId:'.animefox', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animesmug'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animesmug();
let buttons = [
        {buttonId:'.animesmug', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['hentaiwifu'], desc: "thus send random anime imgs, maybe bad",sucReact: "😕",  category: ["anime","18+"],}, async (message, client) => {
if(checkPass === crtPass && message.client.isCreator){
let ttimg = await hentaiWifu();
let buttons = [
        {buttonId:'.hentaiwifu', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `are you bad!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
})

inrl({ pattern: ['hentaineko'], desc: "thus send random anime imgs, maybe bad",sucReact: "😑",  category: ["anime","18+"],}, async (message, client) => {
if(checkPass === crtPass && message.client.isCreator){
let ttimg = await hentaiNeko();
let buttons = [
        {buttonId:'.hentaineko', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Are you bad!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
      }
 })
 inrl({ pattern: ['hentaitrap'], desc: "thus send random anime imgs, maybe bad",sucReact: "🤥",  category: ["anime","18+"],}, async (message, client) => {
if(checkPass === crtPass && message.client.isCreator){
let ttimg = await hentaiTrap();
let buttons = [
        {buttonId:'.hentaitrap', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg.data.url},
      caption:  `Are you bad!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
})

inrl({ pattern: ['animeawoo'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animeawoo();
let buttons = [
        {buttonId:'.animeawoo', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animemegumin'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animemegumin();
let buttons = [
        {buttonId:'.animemegumin', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animemehold'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animemehold();
let buttons = [
        {buttonId:'.animemehold', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animehighfive'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animehighfive();
let buttons = [
        {buttonId:'.animehighfive', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animecringe'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animecringe();
let buttons = [
        {buttonId:'.animecringe', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animedance'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animedance();
let buttons = [
        {buttonId:'.animedance', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animehappy'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animehappy();
let buttons = [
        {buttonId:'.animehappy', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animeblush'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animeblush();
let buttons = [
        {buttonId:'.animeblush', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animeglomp'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animeglomp();
let buttons = [
        {buttonId:'.animeglomp', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animewave'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animewave();
let buttons = [
        {buttonId:'.animewave', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animepoke'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animepoke();
let buttons = [
        {buttonId:'.animepoke', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animewink'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animewink();
let buttons = [
        {buttonId:'.animewink', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animebonk'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animebonk();
let buttons = [
        {buttonId:'.animebonk', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animebully'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animebully();
let buttons = [
        {buttonId:'.animebully', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animeyeet'], desc: "thus send random anime imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await animeyeet();
let buttons = [
        {buttonId:'.animeyeet', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animeneko'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animeneko();
let buttons = [
        {buttonId:'.animeneko', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animecuddle'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animecuddle();
let buttons = [
        {buttonId:'.animecuddle', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animeslap'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animeslap();
let buttons = [
        {buttonId:'.animeslap', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animepat'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animepat();
let buttons = [
        {buttonId:'.animepat', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animegood'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animegood();
let buttons = [
        {buttonId:'.animegood', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animehug'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animehug();
let buttons = [
        {buttonId:'.animehug', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animekiss'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animekiss();
let buttons = [
        {buttonId:'.animekiss', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animewlp'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animewlp();
let buttons = [
        {buttonId:'.animewlp', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animespank'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animespank();
let buttons = [
        {buttonId:'.animespank', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animecry'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animecry();
let buttons = [
        {buttonId:'.animecry', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animekill'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animekill();
let buttons = [
        {buttonId:'.animekill', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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

inrl({ pattern: ['animelick'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animelick();
let buttons = [
        {buttonId:'.animelick', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
 inrl({ pattern: ['animebite'], desc: "thus send random anime imgs, maybe bad",  category: ["anime"],}, async (message, client) => {
let ttimg = await animebite();
let buttons = [
        {buttonId:'.animebite', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
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
