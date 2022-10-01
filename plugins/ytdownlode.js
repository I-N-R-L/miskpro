const yts = require("yt-search");
const bots = require("../lib/perfix");
const lang = bots.getString("scrapers");
let { isUrl } = require("../lib/Function");
const { yta, ytv } = require("../lib/y2Mate");
const Config = require('../config');

bots.inrl(
  { 
    pattern: ["mp4"], 
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
    pattern: ["mp3"],
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
        title: Config.FREE_TXT,
        buttonText: "📃 Results Here 📃",
        sections,
      };
      await client.sendMessage(message.from, listMessage, { quoted: message, });
      global.catchError = true;
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);

bots.inrl(
  {
    pattern: ["mp3"],
    desc: "you can dowloade audio from youtube",
    usage: "<url>",
    sucReact: "📥",
    category: ["downloade"],
  },
  async (message, client) => {
if(message.client.text.includes("https://youtube.com")){
    // if (isUrl(message.client.args[0])) { global.catchError = true; return await client.sendErrorMessage( message.from, `Enter url\nExample : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`, message.key, message );}
    try {
      let quality = message.client.args[1] ? message.client.args[1] : "320kbps";
      let media = await yta(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `♻ ᴛɪᴛɪʟᴇ : ${media.title}\n♻ ꜱɪᴢᴇ : ${media.filesizeF}\n♻ ᴜʀʟ : ${message.client.args[0]}\n♻ ᴏᴜᴛ : mp3\n♻ ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${message.client.args[1] || "320kbps"}\n\n${bots.config.exif.cap}`;
      await client.sendMessage( message.from, { image: { url: media.thumb }, caption }, { quoted: message } );
      const aMsg = await client.sendMessage( message.from, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, }, { quoted: message } );
      await client.sendReact(message.from, "🎧", aMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
         }
      }
   }
);
bots.inrl(
  {
    pattern: ["mp4"],
    desc: "you can dowloade video from youtube",
    usage: "<url>",
    sucReact: "📥",
    category: ["downloade"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=inrlbotsp`, message.key, message ); }
    if(message.client.text.includes("https://youtube.com")){
    // if (isUrl(message.client.args[0])) { global.catchError = true; return await client.sendErrorMessage( message.from, `Enter url\nExample : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=inrl360p`, message.key, message );}
    try {
      let quality = message.client.args[1] ? message.client.args[1] : "360p";
      let media = await ytv(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `♻ ᴛɪᴛɪʟᴇ : ${media.title}\n♻ ꜱɪᴢᴇ : ${media.filesizeF}\n♻ ᴜʀʟ : ${message.client.args[0]}\n♻ ᴏᴜᴛᴩᴜᴛ: ᴍᴩ4\n♻ ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${message.client.args[1] || "360p"}`;
      const vMsg = await client.sendMessage( message.from, { video: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}.mp4`, caption,}, { quoted: message });
      await client.sendReact(message.from, "🎞", vMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
         }
      }
   }
);
bots.inrl(
  { 
    pattern: ["yta"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "📥", 
    category: ["downloade", "all"] 
},
  async (message, client) => {
    if (!message.client.text) {
        await client.sendErrorMessage( message.from, "need text to get song", message.key, message );
        return global.catchError = true;
    }
    try {
        let videos = await yts(message.client.text);
        let video = {};
        message.client.command == 'song' || 'mp3'
          ? video = videos.videos[0] 
          : video = videos.videos[Math.floor(Math.random() * videos.videos.length)]
        let caption = `
      ${Config.FREE_TXT}
☢︎︎ ᴛɪᴛɪʟᴇ : ${video.title}
☢︎︎ sᴇʀᴄʜ: Search [${message.client.command=='song'?'first':"random"} song]
☢︎︎ ᴜʀʟ-ɪᴅ : ${video.videoId}
☢︎︎ ʟᴇɴɢᴛʜ : ${video.timestamp}
☢︎︎ ᴠɪᴡᴇʀs : ${video.views}
☢︎︎ ᴜᴘʟᴏᴀᴅᴇᴅ : ${video.ago}
☢︎︎ ᴄʀᴇᴀᴛᴇʀ : ${video.author.name}
☢︎︎ ᴄʜᴀɴɴᴇʟ : ${video.author.url}
☢︎︎ ᴅɪsᴄʀᴘᴛɪᴏɴ : ${video.description}
☢︎︎ ᴜʟʀ : ${video.url}
———————————————————
${bots.config.exif.cap}
_________________________`;

        const Buttons = [
          { buttonId: `ytmp4${video.url}`, buttonText: { displayText: "ᴠɪᴅᴇᴏ" }, type: 1, },
        ];
        const Message = {
          image: {url: video.thumbnail },
          caption,
          footer: bots.config.exif.footer,
          buttons: Buttons,
        };
        await client.sendMessage( message.from, Message, { quoted: message })
        let audio = await yta(video.url)
        const aMsg = await client.sendMessage( message.from, { audio: { url: audio.dl_link }, mimetype: 'audio/mp4' }, { quoted: message })
        await client.sendReact(message.from, '🎧', aMsg.key);
        global.catchError = false;
    } catch (error) {
        await client.sendErrorMessage( message.from, error, message.key, message );
        return (global.catchError = true);
    }
  }
);


bots.inrl(
  { 
    pattern: ["ytv"], 
    desc: "you can dowloade video from youtube", 
    usage: '<url|query>',
    sucReact: "📥", 
    category: ["downloade"] 
},
  async (message, client) => {
    if (!message.client.text) {
        await client.sendErrorMessage( message.from, "need text to get song", message.key, message );
        return global.catchError = true;
    }
    try {
        let videos = await yts(message.client.text);
        let video = {};
        message.client.command == 'video' || 'mp4'
          ? video = videos.videos[0] 
          : video = videos.videos[Math.floor(Math.random() * videos.videos.length)]
        let caption = `
————————————————————
              ✰${Config.FREE_TXT}✰
————————————————————
☢︎︎ Title : ${video.title}
☢︎︎ Ext : Search [${message.client.command == "video"| 'mp4' ? "first" : "random"} song]
☢︎︎ ID : ${video.videoId}
☢︎︎ Duration : ${video.timestamp}
☢︎︎ Viewes : ${video.views}
☢︎︎ Uploaded On : ${video.ago}
☢︎︎ Author : ${video.author.name}
☢︎︎ Channel : ${video.author.url}
☢︎︎ Description : ${video.description}
☢︎︎ Url : ${video.url}
————————————————————
${bots.config.exif.cap}
_________________________`;

        const Buttons = [
          { buttonId: `ytmp3 ${video.url}`, buttonText: { displayText: "ᴀᴜᴅɪᴏ" }, type: 1, },
        ];
        const Message = {
          image: {url: video.thumbnail },
          caption,
          footer: bots.config.exif.footer,
          buttons: Buttons,
        };
        await client.sendMessage( message.from, Message, { quoted: message })
        let result = await ytv(video.url)
        const aMsg = await client.sendMessage( message.from, { video: { url: result.dl_link }, caption: bots.config.exif.cap}, { quoted: message })
        await client.sendReact(message.from, '🎞', aMsg.key);
        global.catchError = false;
    } catch (error) {
        await client.sendErrorMessage( message.from, error, message.key, message );
        return (global.catchError = true);
    }
  }
);
