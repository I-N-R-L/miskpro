const bots = require('../lib/perfix');
const fs = require('fs');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const Config = require('../config');
             
 bots.inrl({pattern: ['vote'], desc: "to check whether", sucReact: "ðŸ’”", category: ['all'], }, (async (message, client) => {
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
 {title: `${bottomText}`, rowId:"rowid1"},
 {title: `${tl}`,  rowId:"rowid2"}
]

const sections = [{title: `${topText}`, rows: rows}]
const button = {
        text: `${topText}`,
        footer: "inrl",
        buttonText: "vote",
        sections,
}

await client.sendMessage( message.from, button, { quoted: message, });
  
  }));
const yts = require("yt-search");
const lang = bots.getString("scrapers");

bots.inrl(
  { 
    pattern: ["play", "ytplay","mp4"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search"] 
},
  async (message, client) => {
    try {
      if (!message.client.text) { await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); return global.catchError = true; }
      let video = {};
      let results = {};
      let result;
      let buttons = [];
      if (message.client.args[0] == "x/65v79") {
        video = await yts({ videoId: message.client.args[1] });
        result = video;
        buttons = [
          { buttonId: `.mp3 ${result.url}`, buttonText: { displayText: "ᴀᴜᴅɪᴏ" }, type: 1, },
          { buttonId: `.mp4 ${result.url}`, buttonText: { displayText: "ᴠɪᴅᴇᴏ" }, type: 1, },
        ];
      } else {
        results = await yts(message.client.text);
        result = results.videos[0];
        buttons = [
          { buttonId: `.mp3 ${result.url}`, buttonText: { displayText: "ᴀᴜᴅɪᴏ" }, type: 1, },
          { buttonId: `.mp4 ${result.url}`, buttonText: { displayText: "ᴠᴇᴅɪᴏ" }, type: 1, },
          { buttonId: `.play ${message.client.text}`, buttonText: { displayText: "ꜱᴇᴀʀᴄʜ" }, type: 1, },
        ];
      }
      let Message = {
        image: { url: result.thumbnail },
        caption: `
  —————————————————————
                        ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ 
  —————————————————————
  ♻ ᴛɪᴛɪʟᴇ : ${result.title}
  ♻ ᴏᴜᴛᴩᴜᴛ : Search [first result]
  ♻ ᴜʀʟ-ɪᴅ : ${result.videoId}
  ♻ ʟᴇɴɢᴛʜ: ${result.timestamp}
  ♻ ᴠɪᴡᴇʀꜱ : ${result.views}
  ♻ ᴜᴩʟᴏᴀᴅᴇᴅ: ${result.ago}
  ♻ ᴀᴜᴛʜᴇʀ : ${result.author.name}
  ♻ ᴄʜᴀɴɴᴇʟ : ${result.author.url}
  ♻ ᴅɪꜱᴄʀɪᴩᴛɪᴏɴ : ${result.description}
  ♻ ᴜʀʟ : ${result.url}
  —————————————————————————`,
        footer: bots.config.exif.footer,
        buttons: buttons,
      };

      await client.sendMessage(message.from, Message, { quoted: message});
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);

bots.inrl(
  { 
    pattern: ["mp4", "play"], 
    desc: "you can dowloade Randomly yt result downlode", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search", "all"] 
},
  async (message, client) => {
    try {
      if (!message.client.text) { await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); return global.catchError = true; }
      const results = await yts(message.client.text);
      let result = results.videos[Math.floor(Math.random() * results.videos.length)];
      let buttons = [
        { buttonId: `.mp3 ${result.url}`, buttonText: { displayText: "🎼 Audio 🎵" }, type: 1, },
        { buttonId: `.mp4 ${result.url}`, buttonText: { displayText: "🎞 Video 📽️" }, type: 1, },
        { buttonId: `.play ${message.client.text}`, buttonText: { displayText: "🔎 Random Search 🔍" }, type: 1, },
      ];
      let buttonMessage = {
        image: { url: result.thumbnail },
        caption: `
  —————————————————————————
  ♻ ᴛɪᴛɪʟᴇ: ${result.title}
  ♻ ᴏᴜᴛᴩᴜᴛ: Search [Random result]
  ♻ ᴜʀʟ-ɪᴅ: ${result.videoId}
  ♻ ꜱɪᴢᴇ : ${result.timestamp}
  ♻ ᴠɪᴡᴇʀꜱ : ${result.views}
  ♻ ᴜᴩʟᴏᴀᴅᴇᴅ : ${result.ago}
  ♻ ᴀᴜᴛʜᴏʀ : ${result.author.name}
  ♻ ᴄʜᴀɴɴᴇʟ : ${result.author.url}
  ♻ ᴅɪꜱᴄʀᴩᴛɪᴏɴ : ${result.description}
  ♻ ᴜʀʟ : ${result.url}
  —————————————————————————`,
        footer: bots.config.exif.footer,
        buttons: buttons,
      };
      await client.sendMessage(message.from, buttonMessage, { quoted: message, });
      global.catchError = false;
      } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message ); 
      }
  }
);

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
