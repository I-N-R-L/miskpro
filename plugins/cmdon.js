const { inrl, pass, hentaivideo, send_vote, send_poll } = require('../lib');
const Config = require('../config');

inrl(
	   {
		pattern : ["text"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text, cmd, store) => {
await send_vote(message, client);
       }
);
inrl(
	   {
		pattern : ["textt"] ,
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, text) => {
await send_poll(message, client, text);
       }
);
inrl({ pattern: ['hentaivideo'], desc: "thus send random anime hot videos, asure thets bad",sucReact: "😕",  category: ["anime","18+"],}, async (message, client) => {
if(checkPass === crtPass && message.client.isCreator){
//let ttimg = await hentaivideo();
let buttons = [
        {buttonId:'.hentaivideo', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      video : {url:ttimg.data.url},
      caption:  `are you bad!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
//    }
})
