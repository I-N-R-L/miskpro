const { inrl, googleIt, wikiMedia, ringTone, mediaFire, gitClone, happyMod } = require('../lib');
inrl(
	   {
		pattern: ['google'],
		desc: 'do get goole serch result',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let teks = await googleIt(message.client.text);
        return await client.sendMessage( message.from, { text: "result =>\n\n"+teks }, { quoted: message })
          }
     }
);
inrl(
	   {
		pattern: ['wikimedia'],
		desc: 'do get data from wikimedia',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let teks = await wikiMedia(message.client.text);
        return await client.sendMessage( message.from, { text: "_result_\n\n"+teks }, { quoted: message })
          }
     }
);
