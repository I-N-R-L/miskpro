const { inrl } = require('../lib');
const ffmpeg = require('fluent-ffmpeg');

inrl(
  { 
    pattern: ["jimu"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search"] 
},
  async (message, client) => {
let _message = message.quoted.imageMessage;
  var media = await client.downloadMediaMessage(_message);
        ffmpeg(media).outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"]).save('output.mp4').on('end', async () => {
        var res = ('output.mp4');
        await client.reply("res.link");
   });
});
