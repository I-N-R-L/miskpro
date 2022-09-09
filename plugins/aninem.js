const ezio = require("../events");
const axios = require("axios");
const conf = require("../lib/config");
const lang = ezio.getString("wallpaper");

ezio.addCommand( { pattern: ["wallpaper"],desc: lang.WP, sucReact: "🌇",  category: ["all", "create"], }, async (message, client) => {

var r_text = new Array();





var i = Math.floor(r_text.length * Math.random());
    // const buttons = [{buttonId: ".wallpaper",buttonText: { displayText: "Next Wallpaper 🔀⏩" },type: 1,},];
    const Message = {
      image: { url: r_text[i] },
      caption: ezio.config.exif.cap,
      // footer: ezio.config.exif.footer,
      // buttons,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
  }
);
