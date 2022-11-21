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
       console.log(media);
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
   video = videos.videos[Math.floor(Math.random() * videos.videos.length)]
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
     video = videos.videos[Math.floor(Math.random() * videos.videos.length)]
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
bots.inrl({pattern: ['status'], desc: "to make a vote with pepoles", sucReact: "🙄", category: ['all'], }, (async (message, client) => {

   //  var reply = await message.client.sendMessage(message.jid,'*꧁•⊹٭D͙O͙W͙N͙L͙O͙A͙D͙I͙N͙G͙ W͙H͙A͙T͙S͙A͙P͙P͙ S͙T͙A͙T͙U͙S͙٭⊹•꧂*', MessageType.text);
 
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[9] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[10] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[11] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[12] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[13] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[14] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[15] = "https://imgur.com/64FWq3W.mp4";
        r_text[16] = "https://imgur.com/aZlS1bV.mp4";
        r_text[17] = "https://imgur.com/ed0X9m5.mp4";
        r_text[18] = "https://imgur.com/nDlrBug.mp4";
        r_text[19] = "https://imgur.com/3AczL5y.mp4";
        r_text[20] = "https://imgur.com/CeizCwC.mp4";
        r_text[21] = "https://imgur.com/XQNNBxg.mp4";
        
        var i = Math.floor(r_text.length * Math.random());

        const vMsg = client.sendMessage( message.from, { video: { url: r_text[i] }, mimetype: "video/mp4", fileName: `${Config.FREE_TXT}.mp4`, caption: bots.config.exif.cap,}, { quoted: message });
        
       await client.sendMessage( message.from, vMsg,{ quoted: message })
    }));
