const { inrl } = require('../lib');
const img = require('../media/imagee.jpg');
const fs = require('fs');

inrl(
	   {
		pattern: ['jidd'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		await client.sendMessage(message.from, {image: fs.readFileSync(img), caption: '*Truth*\n\n+ ttrth,' quoted: message,contextInfo: { externalAdReply:{
        title:"ZIM BOT V4",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync(img) ,
        mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
        sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: message})
   }
);
