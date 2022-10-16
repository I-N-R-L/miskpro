const bots = require("../lib/perfix");

const Config = require("../config");

bots.inrl(

  {

    pattern: ["botstatus"],

    desc: "to check the bot status",

    sucReact: "",

    category: ["system", "all"],

  },

  async (message, client) => {

if (message.client.isCreator) {

await client.sendMessage(message.from,

{text : "bot status\n\n"

+" VERSION :"+ Config.VERSION+"\n"

+" SESSION_ID :"+Config.SESSION_ID+"\n"

+" PASSWORD :"+Config.PASSWORD+"\n"

+" U_STATUS :"+Config.U_STATUS+"\n"

+" BGM-BOT :"+Config.BGMBOT+"\n"

+" WORKTYPE :"+Config.WORKTYPE+"\n"

+" LANGUAGE :"+Config.LANG+"\n"

+" OWNER :"+Config.OWNER+"\n"

+" FOOTER :"+Config.FOOTER+"\n"

+" INSTAGRAM :"+Config.INSTAGRAM+"\n"

+" PACKNAME :"+Config.PACKNAME+"\n"

+" GITHUB :"+Config.GIT+"\n"

+" WEBSITE :"+Config.WEB+"\n"

+" YT :"+Config.YT+"\n"

+" CAPTION :"+Config.CAPTION+"\n"

+" SUDO :"+Config.SUDO+"\n"

+" TUTORIAL :"+Config.VIDEO+"\n"

+" WA-GRP :"+Config.WAGRP+"\n\n"

+"           ---images---"+"\n\n"

+" ALIVE :"+Config.ALIVE+"\n"

+" IMG1 :"+Config.IMG11+"\n"

+" IMG2 :"+Config.IMG12+"\n"

+" ERORR :"+Config.ERRIMG+"\n"

+" ALIVE_DATA :" +Config.ALIVE_DATA+"\n"

+" PM_BLOACK :"+Config.PM_BLOCK+"\n"

+" CALL_BLOACK :"+Config.CALL_BLOCK+"\n"

+" FREE TEXT :"+Config.BOT_INFO+"\n"

+" PROFILE STATUS:"+Config.U_STATUS+"\n"

+" PROFILE DATA:"+Config.PROCFILE_DATA+"\n"
 }, { quoted: message });
   }
});
bots.inrl(
  {
    pattern: ["setvar"],
    desc: "to check the bot status",
    sucReact: "",
    category: ["system", "all"],
  },
  async (message, client) => {
await client.sendMessage(message.from,
{text : `SETVAR\n\n
            y \n
\n
           All setvars are\n\n

 To set bgm on or off\n
  _ex_ : set-bgm _-values are on, off\n\n
To set pdf file name\n
  _ex_ : set-text _-values are you text\n\n
To set alive text \n
  _ex_ : set-alive-text _-values are your txt\n\n
To set chatbot in bot\n
  _ex_ : set-chat-bot _-values are your true, false\n\n
To set react \n
  _ex_ : set-react _-values are your txt\n\n
 To change footer\n
_ex_ : set-footer\n\n
 To change INSTAGRAM UrL_\n
_ex_ : set-insta _-values are ml, en_\n\n
 To change LANGUAGE\n
_ex_ : set-lang  _-values are ml, en_\n\n
 To change sticker PACKNAME\n
_ex_ : set-pack \n\n
 To change GITHUB user name\n
_ex_ : set-git _-values are UrL_\n\n
 To set WEBSITE UrL_\n
_ex_ : set-web _-values are UrL_\n\n
 To change YT UrL_\n
_ex_ : set-yt _-values are UrL_\n\n
 To change CAPTION msg\n
_ex_ : set-cap\n\n
 To change WA-GRP\n
_ex_ : set-wa _-values are UrL_\n\n
________________________________
  to set images whats you want 
--------------------------------------------------
To change alive img\n
_ex_ : set-alive _-values are UrL_\n\n
 To change image11 img\n
_ex_ : set-img-1 _-values are UrL_\n\n
 To change imag12 img\n
_ex_ : set-imag-2 _-values are UrL_\n\n
 To change err img \n
_ex_ : set-err _-values are UrL_\n\n\n
To set  U-STATUS :\n
_ex_ : set-ustatus Values are true false\n\n
To set  U-profiledata :\n
_ex_ : set-profile Values are your txt\n\n
To set  alivedata :\n
_ex_ : set-alive-data Values are your txt\n\n
To set  bot info:\n
_ex_ : set-bot-info Values are your txt\n\n
To set  Call_block :\n
_ex_ : set-call-block Values are true false\n\n
To set  pmBlock :\n
_ex_ : set-pm-block Values are true false\n\n
To set password :\n
_ex_: set-pass : value is crt pass\n\n
to set freetxt\n
_ex_ :set-txt : value is your txt\n\n
To set Alive txt :\n
_ex_ : set-text : value is Null\n\n
      `}, { quoted: message });
});

const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

bots.inrl(
  { 
    pattern: ["set-react"], 
    desc: "you can set sudo remotly", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
       
const alievTxtNew = "to on, or off automatic react msg";
      const buttons = [
        { buttonId: ".set-rea true", buttonText: { displayText: "reaction on"}, type: 1, },
        { buttonId: ".set-rea false", buttonText: { displayText: "reaction off"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current mode : "+Config.REACT,
      buttons: buttons,
      headerType: 1
    };

await client.sendMessage(message.from,buttonMessage, { quoted: message});
});
bots.inrl({pattern: ['set-rea'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['REACT']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set automatic reaction" }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-sudo"], 
    desc: "you can set sudo remotly", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };

const alievTxtNew = "to change sudo number ";
        const buttons = [
        { buttonId: ".😹", buttonText: { displayText: "_ok_"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew+"type set-sud and your number",
      footer:"current value: "+Config.SUDO,
      buttons: buttons,
      headerType: 1
    };
await client.sendMessage(message.from, buttonMessage , { quoted: message});
});
bots.inrl({pattern: ['set-sud'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['SUDO']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set sudo number" }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-chat-bot"], 
    desc: "you can set a chatbot", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
       
const alievTxtNew = "to set chat bot on grp or allchat";
      const buttons = [
        { buttonId: ".chat-all false", buttonText: { displayText: "chat bot off"}, type: 1, },
        { buttonId: ".chat-grp true", buttonText: { displayText: "chat bot on in grp"}, type: 1, },
        { buttonId: ".chat-all true", buttonText: { displayText: "chat bot on in all msg"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current mode in grp: "+Config.GROUP_CHAT+"\n\ncurrent mode in all chat :"+Config.CHATBOT,
      buttons: buttons,
      headerType: 1
    };
    
await client.sendMessage(message.from, buttonMessage , { quoted: message});
});
bots.inrl({pattern: ['chat-grp'], fromMe: true, desc:"server err",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['GROUP_CHAT']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set chat bot in grp " }, { quoted: message});
});
bots.inrl({pattern: ['chat-all'], fromMe: true, desc:"server err",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHATBOT']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set chat bot in all chat" }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-ustatus"], 
    desc: "you can set profile status by this", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
       
const alievTxtNew = "to on, or off automatic bio changing";
      const buttons = [
        { buttonId: ".set-bio false", buttonText: { displayText: "bio changing off"}, type: 1, },
        { buttonId: ".set-bio true", buttonText: { displayText: "bio changing on"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current mode : "+Config.U_STATUS,
      buttons: buttons,
      headerType: 1
    };
    
await client.sendMessage(message.from, buttonMessage, { quoted: message});
});
bots.inrl({pattern: ['set-bio'], fromMe: true, desc:"server err",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['U_STATUS']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set free text " }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-alive-data"], 
    desc: "you can set your alive data", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
      
const alievTxtNew = "to change alive image, text, buttuns id names,buttuns id \n _example_.set-alive-value imgUrl, alivedataText, button name, botton name";
      const buttons = [
        { buttonId: "e", buttonText: { displayText: "_ok_"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current data : "+Config.ALIVE_DATA,
      buttons: buttons,
      headerType: 1
    };

 await client.sendMessage(message.from, buttonMessage , { quoted: message});
});
bots.inrl({pattern: ['set-alive-value'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALIVE_DATA']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set Alive txt " }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-bgm"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["bgm"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
      
const alievTxtNew = "to set bgm bot on or off";
      const buttons = [
        { buttonId: ".bgm-on", buttonText: { displayText: "bgm on"}, type: 1, },
        { buttonId: ".bgm-off", buttonText: { displayText: "bgm off"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current mode : "+Config.BGMBOT,
      buttons: buttons,
      headerType: 1
    };

 await client.sendMessage(message.from,  buttonMessage, { quoted: message});
});
bots.inrl({pattern: ['bgm-on'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGMBOT']: 'true'
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set bgm as true"}, { quoted: message});
});
bots.inrl({pattern: ['bgm-off'], fromMe: true,desc :"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGMBOT']: 'false'
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set bgm as false"}, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-footer"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set   footer by remote cmd\n\n'
          +'Data:'+Config.FOOTER+'\n\n'
          +'values are _your txt_\n'
          +'_ex_:-set-foot' }, { quoted: message});
});
bots.inrl({pattern: ['set-foot'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['FOOTER']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set footer"}, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-insta"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set insta id\n\n'
          +'Data:'+Config.INSTAGRAM+'\n\n'
          +'values are _your txt_\n'
          +'_ex_:-set-ins' }, { quoted: message});
});
bots.inrl({pattern: ['set-ins'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['INSTAGRAM']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set instagram value" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-lang"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set languge by remot cmd\n\n'
          +'Data:'+Config.LANG+'\n\n'
          +'values are _ml, en_\n'
          +'_ex_:-set-language' }, { quoted: message});
});
bots.inrl({pattern: ['set-language'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['LANG']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set instagram value" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-pack"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set packname to use \n\n'
          +'Data:'+Config.PACKNAME+'\n\n'
          +'values are _your txt _\n'
          +'_ex_:-set-packname' }, { quoted: message});
});
bots.inrl({pattern: ['set-packname'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['PACKNAME']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set pack value" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-yt"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set yt nam by remot cmd\n\n'
          +'Data:'+Config.YT+'\n\n'
          +'values are _your txt _\n'
          +'_ex_:-set-ytc' }, { quoted: message});
});
bots.inrl({pattern: ['set-ytc'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['YT']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set instagram value" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-cap"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set cap id\n\n'
          +'Data:'+Config.CAPTION+'\n\n'
          +'values are _caption txt _\n'
          +'_ex_:-set-capc' }, { quoted: message});
});
bots.inrl({pattern: ['set-capc'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CAPTION']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set caption value" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-alive"], 
    desc: "you can change alive url", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set insta id\n\n'
          +'Data:'+Config.ALIVE+'\n\n'
          +'values are _on_,_off_\n'
          +'_ex_:-set-ali' }, { quoted: message});
});
bots.inrl({pattern: ['set-ali'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALIVE']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set alive value" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-owner"], 
    desc: "you can dowloade audio from youtube", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set owner id\n\n'
          +'Data:'+Config.OWNER+'\n\n'
          +'values are _on_,_off_\n'
          +'_ex_:-set-own' }, { quoted: message});
});
bots.inrl({pattern: ['set-own'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['OWNER']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set owner number" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-web"], 
    desc: "you can set you website", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set web id\n\n'
          +'Data:'+Config.WEB+'\n\n'
          +'values are _on_,_off_\n'
          +'_ex_:-set-webc' }, { quoted: message});
});
bots.inrl({pattern: ['set-webc'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WEB']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set web url" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-git"], 
    desc: "you can set you git url", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set git id\n\n'
          +'Data:'+Config.GIT+'\n\n'
          +'values are _on_,_off_\n'
          +'_ex_:-set-github' }, { quoted: message});
});
bots.inrl({pattern: ['set-github'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['GIT']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set git url" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-image"], 
    desc: "you can set you git url", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set image id\n\n'
          +'Data:'+Config.IMG11+'\n\n'
          +'values are _on_,_off_\n'
          +'_ex_:-set-img' }, { quoted: message});
});
bots.inrl({pattern: ['set-img'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['IMG11']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set image url" }, { quoted: message});
});
bots.inrl(
  { 
    pattern: ["set-image-2"], 
    desc: "you can set you git url", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set image id\n\n'
          +'Data:'+Config.IMG12+'\n\n'
          +'values are _on_,_off_\n'
          +'_ex_:-set-img-2' }, { quoted: message});
});
bots.inrl({pattern: ['set-img-2'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['IMG12']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set image url" }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-bio-data"], 
    desc: "you can set bio datas ", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
        await client.sendMessage(message.from,{ text :'to set image id\n\n'
          +'Data:'+Config.PROCFILE_DATA+'\n\n'
          +'values are _you text_\n'
          +'_ex_:-set-bio-txts' }, { quoted: message});
});
bots.inrl({pattern: ['set-bio-txts'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['PROCFILE_DATA']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set bio text " }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-call-block"], 
    desc: "you can set call block", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
     
const alievTxtNew = "to set call block";
      const buttons = [
        { buttonId: ".call-block true", buttonText: { displayText: "call block on"}, type: 1, },
        { buttonId: ".call-block false", buttonText: { displayText: "call block off"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current mode : "+Config.CALL_BLOCK,
      buttons: buttons,
      headerType: 1
    };

await client.sendMessage(message.from,buttonMessage, { quoted: message});
});
bots.inrl({pattern: ['call-block'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CALL_BLOCK']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set bio text " }, { quoted: message});
});

bots.inrl(
  { 
    pattern: ["set-pm-block"], 
    desc: "you can set call block", 
    sucReact: "🙅‍♀️", 
    category: ["inrl"] 
},
  async (message, client) => {
if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: "err🤥 this cmd only for bot owner" }, { quoted: message } ); };
     
const alievTxtNew = "to set pm block";
      const buttons = [
        { buttonId: ".pm-block true", buttonText: { displayText: "pm block on"}, type: 1, },
        { buttonId: ". pm-block false", buttonText: { displayText: "pm block off"}, type: 1, },
      ]

const buttonMessage = {
      text: alievTxtNew,
      footer:"current mode : "+Config.PM_BLOCK,
      buttons: buttons,
      headerType: 1
    };

await client.sendMessage(message.from,buttonMessage, { quoted: message});
});
bots.inrl({pattern: ['pm-block'], fromMe: true, desc:"bgm",sucReact: "🙅‍♀️", category: ["inrl"],}, async (message, client) => {
          const text = message.client.text;
                if (message.client.isCreator) { 
await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['PM_BLOCK']: text
                               } 
     });
}
                await client.sendMessage(message.from, { text :"successfully set pm block" }, { quoted: message});
});
