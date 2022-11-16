const { inrl, getBuffer } = require('../lib');
const fs = require('fs');

inrl(
	   {
		pattern: ['jidd'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
const audio = await getBuffer("https://i.imgur.com/e2PKT60.mp4");
		await client.sendMessage(message.from, {audio : { url : audio }, mimetype: 'audio/mpeg', ptt: true,waveform: [10,50,100,50,10,50,100,50,10,50,100,50,10,50],contextInfo: { externalAdReply:{
        title:"ZIM BOT V4",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:3,
        thumbnail: audio,//fs.readFileSync('./media/imagee.jpg') ,
        mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
        sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: message})
   }
);
