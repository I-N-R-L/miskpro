const { inrl, googleIt, wikiMedia, ringTone, mediaFire, gitClone, happyMod } = require('../lib');
inrl(
	   {
		pattern: ['google'],
		desc: 'do get goole aerch rsult',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let teks = await googleIt(message.client.text);
        return await client.sendMessage( message.from, { text: teks }, { quoted: message })
          }
     }
);
