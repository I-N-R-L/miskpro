const bots = require("../lib/perfix");
const Config = require("../config");
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

bots.inrl(
  { 
    pattern: ["set-bgm"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["bgm"] 
},
  async (message, client) => {
        await client.sendMessage(message.from,{ text :'to on|off bgm by remote cmd\n
          mode:${Config.BGMBOT}\n
          values are _on_,_off_'}, { quoted: message});
});
bots.inrl({pattern: ['bgmon'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["bgm"],}, async (message, client) => {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGMBOT']: 'on'
                    } 
                });
                await client.sendMessage(message.from, { text :"successfully set bgm as true"}, { quoted: message});
});
bots.inrl({pattern: ['bgmoff'], fromMe: true,desc :"bgm",sucReact: "🙅‍♀️", category: ["bgm"],}, async (message, client) => {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGMBOT']: 'off'
                    } 
                });
                await client.sendMessage(message.from, { text :"successfully set bgm as false"}, { quoted: message});
});
