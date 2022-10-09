
const { inrl,config }= require('../lib/');
const fs = require('fs');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const White = Config.ALIVE
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');

    inrl({ pattern: ['send','snd'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, (async (message, client) => {

        if (message.quoted.videoMessage) {
        let _message = message.quoted.videoMessage;
        var location = client.downloadAndSaveMediaMessage(_message)
await client.sendMessage(message.from, { video: location, caption: config.exif.cap }, { quoted: message });
   await fs.unlinkSync(location)
      }
        if (!message.quoted.videoMessage && message.quoted.imageMessage) {
            ffmpeg(location)
                .save('status.png')
                .on('end', async () => {
                    await client.sendMessage(message.from, { image: status.png, caption: config.exif.cap }, { quoted: message });
            });
        return 
        }
    }));
