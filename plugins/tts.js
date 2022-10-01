const bots = require('../lib/perfix');
const googleTTS = require('google-translate-tts');

bots.inrl({pattern: ['tts'], desc: "to check whether", sucReact: "💔", category: ['all'], }, (async (message, client) => {

const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });

            let 
                LANG = 'en',
                ttsMessage = text,
                SPEED = 1.0
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await client.sendMessage( message.from, { audio: { url: buffer }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
        }));
bots.inrl({pattern: ['ttts'], desc: "to check whether", sucReact: "💔", category: ['all'], }, (async (message, client) => {

const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });

            let 
                LANG = 'ml',
                ttsMessage = text,
                SPEED = 1.0
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await client.sendMessage( message.from, { audio:buffer, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
        }));
