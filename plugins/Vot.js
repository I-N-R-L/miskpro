const bots = require('../lib/perfix');
const fs = require('fs');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const Config = require('../config');
             
 bots.inrl({pattern: ['vote'], desc: "to check whether", sucReact: "💔", category: ['all'], }, (async (message, client) => {
const text = message.client.text;
      if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
      var topText, bottomText, tl, t2, t3 ;
      if (text.includes(';')) {
         var split = text.split(';');
         t3 = split[4];
         t2 = split[3];
         tl = split[2];
         bottomText = split[1];
         topText = split[0];
         
      }
      
    
  
  const rows = [
 {title: `${bottomText}`, description: `\n\n${tl}`, rowId:"rowid1"},
 {title: `${t2}`, description: `\n\n${t3}`, rowId:"rowid2"}
]

const sections = [{title: `${topText}`, rows: rows}]

const button = {
 buttonText: 'Click Me!',
 description: `${topText}`,
 sections: sections,
 listType: 1
}

await client.sendMessage( message.from, button, { quoted: message, });
  
  }));
bots.inrl(
  {
    pattern: ["play", "song", "mp3"],
    desc: "For list search. you can use",
    usage: '<query>',
    sucReact: "🔎",
    category: ["search", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); };
    try {
      const results = await yts(message.client.text);
      let result = results.videos;
      let rows = [];
      result.map((video) => {
        let obj = { title: video.title, rowId: `song ${video.videoId}`, description: video.description, };
        rows.push(obj);
      });
      const sections = [ { title: "Videos", rows: rows, }, ];
      const listMessage = {
        text: "result like a list",
        footer: bots.config.exif.footer,
        title: "inrl-bot-md",
        buttonText: "📃 Results Here 📃",
        sections,
      };
      await client.sendMessage(message.from, listMessage, { quoted: message, });
      global.catchError = true;
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);
