const { inrl, getBuffer } = require('../lib');
const audio = "https://i.imgur.com/e2PKT60.mp4"
const fs = require('fs');

inrl(
	   {
		pattern: ['jidd'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		await client.sendMessage(message.from, {audio : { url : audio }, mimetype: 'audio/mpeg', ptt: true,contextInfo: { externalAdReply:{
        title:"ZIM BOT V4",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync('./media/imagee.jpg') ,
        mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
        sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: message})
   }
);
