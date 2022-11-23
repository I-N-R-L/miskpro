const { inrl, getYtV, getYtA, ytmp4, ytmp3 } = require('../lib/');

inrl(
	   {
		pattern: ['ytmp4'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
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
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtA(message, client)
}if(match.includes('http')){
await ytmp4(message, client)
    }
  }
);
