const whatsbixby = require("../events");
const axios = require("axios");
// const lang = ezio.getString("github");

whatsbixby.config.api.waifu.sfw.map(category => {
    ezio.addCommand( { pattern: [`anime-${category}`, `anime-${category}-gif`], sucReact: "🤹‍♀️", category: ["create",], }, async (message, client) => {
        await axios.get(`${whatsbixby.config.api.waifu.domain}/sfw/${category}`)
        .then(async (res) => {
            message.client.command == `anime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: whatsbixby.config.exif.author, packname: whatsbixby.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: whatsbixby.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,ezio.errorMessage(err),message.key,message); });
    });
});

whatsbixby.config.api.waifu.nsfw.map(category => {
    ezio.addCommand( { pattern: [`xanime-${category}`, `xanime-${category}-gif`], sucReact: "🔞", category: ["18+",], }, async (message, client) => {
        if (message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(whatsbixby.config.reply.private) }, { quoted: message } ); };
        if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
        await axios.get(`${whatsbixby.config.api.waifu.domain}/nsfw/${category}`)
        .then(async (res) => {
            message.client.command == `xanime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: whatsbixby.config.exif.author, packname: whatsbixby.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: whatsbixby.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,whatsbixby.errorMessage(err),message.key,message); });
    });
});
