const lnn = "ANIME MAKER"
const { errorMessage, pass, inrl, config, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita, insult }  = require('../lib')
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"
let crtPass = pass.PASS;
let passErr = pass.PERR;
let checkPass = Config.PASSWORD
console.log(crtPass);
console.log(checkPass);
inrl(
  {
    pattern: ["xxx"],
    desc: "to get randome *** images",
    sucReact: "",
    category: ["all","18+"],
  },
  async (message, client) => {
if(!message.client.isCreator){
    return await client.sendMessage(message.from,{ text :"😼😛🤥"+ passErr }, { quoted: message });
}
if(!message.client.text){
if(checkPass === crtPass ){
let ttinullimg = youAreBad(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
      }
    }
  }
);
inrl(
  {
    pattern: ["anime"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = anime(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);

 let dataforpack = ffpack();
 inrl({pattern: ['ffpack'], desc: Ln ,sucReact: "⚒️",  category: ["ff","all"]}, async (message, client) => { await client.sendMessage(message.from, { text : dataforpack },{ quoted: message })
  });
  
 inrl({ pattern: ['ff01'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff1(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff02'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff2(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff03'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (message.client.text === '') return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff3(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
    });
 inrl({ pattern: ['ff04'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff4(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff05'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff5(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff06'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff6(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff07'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff7(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff08'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff8(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff09'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff9(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff10'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff10(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ffff'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff11(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff12'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff12(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff13'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff13(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff14'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff14(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff15'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff15(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff16'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff16(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff17'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff17(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff18'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff18(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff19'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff19(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff20'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff20(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff21'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff21(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff22'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff22(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff23'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff23(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff24'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff24(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff25'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff25(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff26'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff26(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff27'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff27(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
   inrl({ pattern: ['ff28'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff28(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff29'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff29(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff30'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff30(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff31'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff31(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff32'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff32(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff33'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff33(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff34'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff34(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff35'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff35(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff36'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff36(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff37'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff37(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff38'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff38(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff39'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff39(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff40'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff40(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

       await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff41'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff41(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff42'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff42(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
inrl({ pattern: ['ff43'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff43(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff44'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff44(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff45'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff45(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff46'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff46(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff47'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff47(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };


        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff48'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff48(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff49'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff49(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff50'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff50(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

 });
   inrl({pattern: ['apkmod','apk'], desc: "mode apk link",sucReact: "🌇",  category: ["apk","all"]}, async (message, client) => {
   if(!message.client.text){
      await client.sendMessage(message.from, { text :'┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *ᴍᴀᴅᴇ ʙʏ ɪɴʀʟ ᴡɪᴛʜ\nɴᴀᴢɪᴍ-ʙʀᴏ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n'},{ quoted: message });
      }
});

   inrl({pattern: ['nova'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *NOVA LAUNCHER* 😹\npremium unlocked .\n📌 bit.ly/drknova'},{ quoted: message });
});

   inrl({pattern: ['cml'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CM LAUNCHER* 😹\npremium unlocked.\n😞 No disponible en este momento.'},{ quoted: message });
});

   inrl({pattern: ['apex'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *APEX LAUNCHER* 😹\npremium unlocked.\n📌 bit.ly/drkapex'},{ quoted: message });
});

   inrl({pattern: ['kinemaster'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *KINEMASTER MOD* 😹\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456'},{ quoted: message });
});

   inrl({pattern: ['inshot'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *INSHOT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3zyNjlZ'},{ quoted: message });
});

   inrl({pattern: ['alight'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *ALIGHT MOTION MOD* 😹\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass: 3456'},{ quoted: message });
});

   inrl({pattern: ['capcut'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CAP CUT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3pSSlFu'},{ quoted: message });
});
   inrl({pattern: ['picsart'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *PICSART GOLD* 😹\npremium unlocked.\n📌 bit.ly/drkpicsart'},{ quoted: message });
});

   inrl({pattern: ['canva'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CANVA PRO* 😹\npremium unlocked.\n📌 bit.ly/canvapro'},{ quoted: message });
});

   inrl({pattern: ['lightr'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *LIGTHROM* 😹\npremium unlocked.\n📌 bit.ly/drklightr'},{ quoted: message });
});

   inrl({pattern: ['pshop'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *PHOTOSHOP EXPRESS* 😹\npremium unlocked.\n📌 bit.ly/drkphotoshop'},{ quoted: message });
});

   inrl({pattern: ['snaps'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *SNAPSEED* 😹\npremium unlocked.\n📌 bit.ly/drksnaps'},{ quoted: message });
});

   inrl({pattern: ['retouch'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *RETOUCH* 😹\npremium unlocked.\n📌 bit.ly/drkretouch'},{ quoted: message });
});

   inrl({pattern: ['vanced'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *VANCED MANAGER* 😹\nyoutube vanced.\n📌 bit.ly/drkytubev'},{ quoted: message });
});

   inrl({pattern: ['freez'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *FREEZER MOD* 😹\nPremium Unlocked.\n📌 bit.ly/drkfreezer'},{ quoted: message });
});

   inrl({pattern: ['deezer'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *DEEZER MOD* 😹\npremium unlocked.\n📌 bit.ly/drkdeezer'},{ quoted: message });
});

   inrl({pattern: ['rbox'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *RADIO BOX* 😹\npremium unlocked.\n📌 bit.ly/drkradiobox'},{ quoted: message });
});

   inrl({pattern: ['mxpro'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *MX PLAYER PRO* 😹\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer'},{ quoted: message });
});

   inrl({pattern: ['amp'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *POWERAMP* 😹\npremium unlocked.\n📌 bit.ly/drkampplayer'},{ quoted: message });
});

   inrl({pattern: ['jetau'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *JetAudio* 😹\npremium unlocked.\n📌 bit.ly/drkjetau'},{ quoted: message });
});

   inrl({pattern: ['xpress'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *EXPRESS VPN* 😹\npremium unlocked.\n📌 bit.ly/drkXpress'},{ quoted: message });
});

   inrl({pattern: ['hshield'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *HOSPOT SHIELD VPN* 😹\npremium unlocked.\n📌 bit.ly/drkHShield'},{ quoted: message });
});

   inrl({pattern: ['avguard'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *TURBO VPN* 😹\npremium unlocked.\n📌 bit.ly/drkguard'},{ quoted: message });
});

   inrl({pattern: ['flmanager'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *FILE MANAGER* 😹\npremium unlocked.\n📌 bit.ly/drkesfile'},{ quoted: message });
});

   inrl({pattern: ['callr'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CALL RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkcallr'},{ quoted: message });
});

   inrl({pattern: ['fing'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *FING SCANNER* 😹\npremium unlocked.\n📌 bit.ly/drkfing'},{ quoted: message });
});

   inrl({pattern: ['shazam'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *SHAZAM ENCORE* 😹\npremium unlocked.\n📌 bit.ly/drkshaz'},{ quoted: message });
});

   inrl({pattern: ['qrcode'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *QR CODE SCANER* 😹\npremium unlocked.\n📌 bit.ly/drkqrscanner'},{ quoted: message });
});

   inrl({pattern: ['srecorder'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *SCREEN RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkgrabr'},{ quoted: message });
});

   inrl({pattern: ['tiktok'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *TIKTOK MOD* 😹\npremium unlocked.\n📌 bit.ly/drktiktok'},{ quoted: message });
});

   inrl({pattern: ['pmath'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *PHOTOMATH* 😹\npremium unlocked.\n📌 bit.ly/drkphotomath'},{ quoted: message });
});

   inrl({pattern: ['waplus'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *WHATSAPP PLUS* 😹\nwhattsapp mod.\n📌 bit.ly/drkWaPlus'},{ quoted: message });
});


inrl({pattern: ['animepack'], desc: lnn ,sucReact: "🌚",  category: ["logo"]}, (async (message, client) => {
let animeimgdat = animepack();
    await client.sendMessage(message.from, { text :animeimgdat},{ quoted: message })
  
  }));
  
inrl({ pattern: ['anime1'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an1(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
    
inrl({ pattern: ['anime2'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an2(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime3'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an3(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime4'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an4(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime5'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an5(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime6'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an6(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));

inrl({ pattern: ['anime7'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an7(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime8'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an8(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));      
        
inrl({ pattern: ['anime9'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an9(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));        
        
inrl({ pattern: ['anime10'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an10(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime11'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an11(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })  

    }));      
        
inrl({ pattern: ['anime12'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an12(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));

inrl({ pattern: ['anime13'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an13(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime14'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an14(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime15'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an15(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));  
        
inrl({ pattern: ['anime16'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an16(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));      
        
inrl({ pattern: ['anime17'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an17(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));
    inrl(
  {
    pattern: ["bts"],
    desc: "to get randome bts image",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = bts(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["tentacion"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = tentacion(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["robote"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = robote(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["spiderman"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = spiderman(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
   inrl({ pattern: ['an'], fromMe: true, desc: "to add " ,sucReact: "😹", category: ['all'],usage: '<word>',}, async (message, client) => {

const text = message.client.text;

    if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });

        var ttinullimage = ansay(text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    });

    inrl({ pattern: ['ch'], fromMe: true, desc: 'just for fun' ,sucReact: "😹", category: ['all'], },  async (message, client) => {

const text = message.client.text;

            if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });

        var ttinullimage = ch(text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    });

    inrl({ pattern: ['tr'], fromMe: true, desc: 'funny trumb Twitter post' ,sucReact: "😹", category: ['all'],usage: '<word>',} , async (message, client) => {

const text = message.client.text;

     if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });

        var ttinullimage = trumb(text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap, };

        await client.sendMessage( message.from, Message,{ quoted: message })

    });

const bots = require("../lib/perfix");
const maker = require("mumaker");
bots.inrl( { pattern: ["p1"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [texts, txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p2"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [texts, txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p3"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [texts, txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p4"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p5"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p6"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p7"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p8"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p9"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p10"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/neon-text-effect-online-879.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p11"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/thunder-text-effect-online-881.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p12"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p13"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-ninja-logo-online-935.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p14"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/advanced-glow-text-effect-873.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p15"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p16"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p17"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p18"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p19"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p20"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p21"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/neon-text-effect-online-963.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p22"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/ice-cold-text-effect-862.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p23"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p24"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p25"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p26"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p27"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p28"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p29"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p30"], sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
let text = message.client.text;
var text1, text2;
if (text.includes(',')) {  var split = text.split(',');text1 = split[0];text2 = split[1];  }
         var texts = text1 || text;
         var txt = text2 || Config.FREE_TXT;
  await maker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', [texts,txt])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});



bots.config.api.textpro.takes1.map(logo => {
  const { pattern, textLenth, id } = logo; 
  const url = bots.config.api.textpro.domain + id;
  bots.inrl( { pattern, sucReact: "💗", category: ['logo'], usage: '<word>', }, async (message, client) => {
    if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
    if (message.client.text.length >= textLenth) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
    await maker.textpro( url, [message.client.text, 'inrl'])
    .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
    .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
  });});

inrl({pattern: ['inrl'], desc: "to check i cmds", sucReact: "🙀", category: ['all'],},   async (message, client) => {
	  const txts =await inrlQuita();
await client.sendMessage( message.from, { text: "😇"+ txts },{ quoted: message });
});
inrl({pattern: ['🥲',"😦","🥺","😑","😕","🤧","😔","🙄","🤥","🥴","😐","😒","😢"], desc : "for und",sucReact: "😛", category: ['ibot'], },async (message, client) => {
   const texts = await insult();
   await client.sendMessage( message.from, { text : "😹"+texts },{ quoted: message });
});
