const fs = require('fs');
const { inrl, getBuffer } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
inrl(
	   {
		pattern: ['isinrl'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		const trut =['Have you loved anyone? How long?','If you can or if you want, outside school/college Who will you make friends? (May be different / high school)','What is your biggest fear?','Have you liked a people and felt that person likes you too?','Who is your ex-girlfriend?','What makes you happy when you are sad?','Ever loved someone? what does it feels like?','Have you ever been in an affair?','The most feared thing','Who is the most influential person to your life?','What is the proud thing you did this year?',' Who can make you smile?','Who is the person you truly love? What is the reason? ','Mention the incident that makes you hurt that you still remember','What are the achievements that have been crushed on this year?','What is your worst habit when at school?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.imgur.com/B71ASsj.mp4`)
			client.sendMessage(message.from, { audio : truteh, quoted: message,contextInfo: { externalAdReply:{
        title:"ZIM BOT V4",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync(`./media/imagee.jpg`) ,
        mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
        sourceUrl: `https://github.com/hi_bro` }}}, {quoted: message})
                }
);
				
