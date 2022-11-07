const { inrl, dogphoto, lovephoto, cartoonphoto } = require('../lib');
const fs = require('fs');
const Config = require('../config');

inrl({ pattern: ['dogphoto'], desc: "thus send random fun dog imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await dogphoto();
let buttons = [
        {buttonId:'.dogphoto', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg},
      caption:  `HeHe!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})
inrl({ pattern: ['lovephoto'], desc: "thus send random love photos,imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await lovephoto();
let buttons = [
        {buttonId:'.lovephoto', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg},
      caption:  `HeHe!!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})
inrl({ pattern: ['cartoonphoto'], desc: "thus send random cartoon imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await cartoonphoto();
let buttons = [
        {buttonId:'.cartoonphoto', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg},
      caption:  `HeHe!!!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})
