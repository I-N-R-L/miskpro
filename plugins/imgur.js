const { inrl } = require('../lib/');
const ffmpeg = require('fluent-ffmpeg')
const imgur = require('imgur');
const clientId = '3ca8036b07e0f25';
imgur.setClientId(clientId)

inrl(
	   {
		pattern: ['imgur'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		if (message.quoted.audioMessage){
    if (message.quoted.duration > 90) return await m.client.sendMessage(message.from,{text:'_Audio too large. Try below 90 seconds!_'},{quoted: message});
    var q = await message.quoted.download();
    ffmpeg(q).outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"]).save('output.mp4').on('end', async () => {
    await imgur
    .uploadFile('output.mp4')
    .then((json) => {
    console.log(json.link);
  })
  .catch((err) => {
    console.error(err.message);
         });
     });
 }})
