const { inrl } = require('../lib');
const ffmpeg = require('fluent-ffmpeg');

inrl(
  { 
    pattern: ["jimu"],
    fromMe : true,
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search"] 
},
  async (message, client) => {
let _message = message.quoted.audioMessage;
        let media = await client.downloadAndSaveMediaMessage(_message);
        await ffmpeg(media).outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"]).save('output.mp4').on('end', async () => {
        var res = ('output.mp4');
        await client.reply("res.link");
   });
});
inrl(
  { 
    pattern: ["reply"],
    fromMe : true,
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search"] 
},
  async (message, client) => {
await client.sendText(message.from,"res.link");
   });
inrl(
  { 
    pattern: ["sendd"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search"] 
},
  async (message, client) => {
console.log(message.fromMe)
   });
