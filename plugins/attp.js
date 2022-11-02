const ezio = require("../lib/perfix");
const lang = ezio.getString("ttp");
const axios = require("axios");

ezio.inrl( { pattern: ["ttp"], sucReact: "🖼", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_WORD, message.key, message ); }
    var uri = encodeURI(message.client.text);
    try {
      var resImage = await axios.get( "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) {
      global.catchError = true; 
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    await client.sendMessage( message.from, { image: Buffer.from(resImage.data), caption: ezio.config.exif.cap }, { quoted: message } );
    global.catchError = false;
  }
);

ezio.inrl( { pattern: ["attp"], desc: lang.ATTP_DESC, sucReact: "☯", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) {global.catchError = true; return await client.sendErrorMessage(message.from,lang.NEED_WORD,message.key,message);}
    var uri = encodeURI(message.client.text);
    try {
      var resSticker = await axios.get( "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message );
    }
console.log("normel:"+resSticker.data, "buffer:"+Buffer.from(resSticker.data));
console.log(resSticker.data);
    client.sendMessage( message.from, { sticker: Buffer.from(resSticker.data) }, { quoted: message } );
    global.catchError = false;
  }
);
