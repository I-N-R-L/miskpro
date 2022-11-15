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
		await client.sendMessage(message.from, {audio : { url : audio }, mimetype: 'audio/mpeg', ptt: true,waveform: [10,50,100,50,10,50,100,50,10,50,100,50,10],contextInfo: { externalAdReply:{
        title:"ZIM BOT V4",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:2,
        thumbanil : { url : 'https://i.imgur.com/DyLAuEh.jpg'} ,
        mediaUrl:`https://www.instagram.com/reel/CkH8SbUJP16/?igshid=YmMyMTA2M2Y=`, 
        sourceUrl: `https://www.instagram.com/reel/CkH8SbUJP16/?igshid=YmMyMTA2M2Y=` }}}, {quoted: message})
   }
);
inrl(
	   {
		pattern: ['jidddd'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		await client.sendMessage(message.from, {audio : { url : audio }, mimetype: 'audio/mpeg', ptt: true,waveform: [10,50,100,50,10,50,100,50,10,50,100,50,10],contextInfo: { externalAdReply:{
        title:"inrl4",
        body:"md",
        showAdAttribution: true,
        mediaType:2,
        jpegThumbnail : getBuffer('https://i.imgur.com/DyLAuEh.jpg') ,
        mediaUrl:`https://www.instagram.com/reel/CkH8SbUJP16/?igshid=YmMyMTA2M2Y=`, 
        sourceUrl: `https://www.instagram.com/reel/CkH8SbUJP16/?igshid=YmMyMTA2M2Y=` }}}, {quoted: message})
   }
);
