const { inrl, config, add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb } = require('../lib')

inrl(
  {
    pattern: ["bad"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
let ttinullimg = youAreBad(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
  }
);
inrl(
  {
    pattern: ["ann"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
let ttinullimg = anime(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
  }
);
