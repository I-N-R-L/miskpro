const { inrl, getYtV, getYtA, ytmp4, ytmp3, weather, movie } = require('../lib/');

inrl(
	   {
		pattern: ['ytmp4'],
		desc: 'To get yt video',
                sucReact: "💯",
                category: ["system", "all", "downloade"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtV(message, client)
}else if(match.includes('http')){
await ytmp4(message, client)
    }
  }
);
inrl(
	   {
		pattern: ['ytmp3'],
		desc: 'get yt video as mp3 output',
                sucReact: "🤙",
                category: ["system", "all", "downloade"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtA(message, client)
}if(match.includes('http')){
await ytmp3(message, client)
    }
  }
);
inrl(
	   {
		pattern: ['movie'],
		desc: 'To get detiles of movie',
                sucReact: "💥",
                category: ["system", "all", "downloade"],
	   },
	async (message, client,match) => {
if(!match) return message.send("enter name of movie");
await movie(message,client);
  }
);

inrl(
	   {
		pattern: ['weather'],
		desc: 'To get detiles of you place',
                sucReact: "🔥",
                category: ["system", "all"],
	   },
	async (message, client,match) => {
await wather(message,client);
  }
);
