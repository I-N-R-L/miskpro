const fs = require('fs');
const { inrl, getBuffer } = require('../lib/');
cosnt Config = require('../config');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');

inrl(
	   {
		pattern: ['isbot'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		const trut =['Have you loved anyone? How long?','If you can or if you want, outside school/college Who will you make friends? (May be different / high school)','What is your biggest fear?','Have you liked a people and felt that person likes you too?','Who is your ex-girlfriend?','What makes you happy when you are sad?','Ever loved someone? what does it feels like?','Have you ever been in an affair?','The most feared thing','Who is the most influential person to your life?','What is the proud thing you did this year?',' Who can make you smile?','Who is the person you truly love? What is the reason? ','Mention the incident that makes you hurt that you still remember','What are the achievements that have been crushed on this year?','What is your worst habit when at school?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(Config.)
			client.sendMessage(message.from, { audio : truteh , mimetype: "audio/mpeg", fileName: `media.mp3`, ptt: true, quoted: message,contextInfo: { externalAdReply:{
        title:"just testing",
        body:"asboting",
        showAdAttribution: false,
        mediaType:2,
        thumbnail: fs.readFileSync(`./media/imagee.jpg`) ,
        mediaUrl:`https://github.com/hi_bro`, 
        sourceUrl: `https://github.com/hi_bro` }}}, {quoted: message})
                }
);
