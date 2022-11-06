const { inrl, getBuffer } = require('../lib');
const Config = require('../config');

inrl({ pattern: ['virtext'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, async (message, client) => {
     await client.sendMessage(message.from, {
text : "inrl",
contextInfo:{externalAdReply:{
title: "${ownername}",
body: `Don't forget to read group description`,
mediaType:2,
thumbnail: getBuffer(Config.BOT_INFO.split(',')[2]),
sourceUrl: "https://g.com",
mediaUrl: `https://g.com`
     }};
});
