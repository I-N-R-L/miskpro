const { inrl, config, add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb } = require('../lib')
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"

inrl(
  {
    pattern: ["xxx"],
    desc: "to get randome *** images",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
if(!message.client.text){
let ttinullimg = youAreBad(); 
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
  
 inrl({ pattern: ['ff01'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff1(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff02'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff2(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff03'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (message.client.text === '') return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff3(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
    });
 inrl({ pattern: ['ff04'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff4(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff05'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff5(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff06'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff6(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff07'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff7(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff08'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff8(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff09'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff9(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff10'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff10(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ffff'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff11(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff12'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff12(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff13'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff13(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff14'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff14(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff15'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff15(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff16'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff16(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff17'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff17(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff18'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff18(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff19'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff19(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff20'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff20(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff21'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff21(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff22'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff22(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff23'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff23(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff24'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff24(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff25'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff25(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff26'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff26(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff27'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff27(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
   inrl({ pattern: ['ff28'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff28(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff29'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff29(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff30'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff30(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff31'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff31(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff32'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff32(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff33'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff33(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff34'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff34(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff35'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff35(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff36'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff36(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff37'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff37(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff38'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff38(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff39'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff39(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff40'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff40(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

       await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff41'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff41(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff42'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff42(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
inrl({ pattern: ['ff43'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff43(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff44'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff44(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff45'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff45(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff46'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff46(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff47'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff47(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };


        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff48'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff48(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff49'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff49(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff50'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff50(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

 });
