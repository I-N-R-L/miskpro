const bots = require('../lib/perfix');
const googleTTS = require('google-translate-tts');

bots.inrl({pattern: ['tts'], desc: "to get text as audio ", sucReact: "💔", category: ['all'], }, (async (message, client) => {

const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
            var InRL ;
            if (text.includes('#')) {
            var split = text.split('#');
            TEXT = split[0]
            InRL = split[1];
            ISpeeD = split[2];
           }
            let 
                LANG = InRL || "en",
                ttsMessage = TEXT,
                SPEED = 2.0
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await client.sendMessage( message.from, { audio:buffer, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
        }));
