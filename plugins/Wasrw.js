
const { inrl,config }= require('../lib/');
const fs = require('fs');
const Config = require('../config');

    inrl({ pattern: ['send','snd'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, (async (message, client) => {

        if (message.quoted.videoMessage) {
        let _message = message.quoted.videoMessage;
        var location = client.downloadMediaMessage(_message)
await client.sendMessage(message.from, { video: location, caption: config.exif.cap }, { quoted: message });
   await fs.unlinkSync(location)
      }else if (!message.quoted.videoMessage && message.quoted.imageMessage) {
            let _message = message.quoted.imageMessage;
            var location = client.downloadMediaMessage(_message)
                    await client.sendMessage(message.from, { image: location, caption: config.exif.cap }, { quoted: message });
         }
    }));
