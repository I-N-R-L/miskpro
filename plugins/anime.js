const WhatsBixby = require("../events");
const axios = require("axios");
// const lang = ezio.getString("github");

WhatsBixby.config.api.waifu.sfw.map(category => {
    ezio.addCommand( { pattern: [`anime-${category}`, `anime-${category}-gif`], sucReact: "🤹‍♀️", category: ["create",], }, async (message, client) => {
        await axios.get(`${WhatsBixby.config.api.waifu.domain}/sfw/${category}`)
        .then(async (res) => {
            message.client.command == `anime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: WhatsBixby.config.exif.author, packname: WhatsBixby.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: WhatsBixby.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,ezio.errorMessage(err),message.key,message); });
    });
});

WhatsBixby.config.api.waifu.nsfw.map(category => {
    ezio.addCommand( { pattern: [`xanime-${category}`, `xanime-${category}-gif`], sucReact: "🔞", category: ["18+",], }, async (message, client) => {
        if (message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(WhatsBixby.config.reply.private) }, { quoted: message } ); };
        if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: WhatsBixby.errorMessage(WhatsBixby.config.reply.owner) }, { quoted: message } ); };
        await axios.get(`${WhatsBixby.config.api.waifu.domain}/nsfw/${category}`)
        .then(async (res) => {
            message.client.command == `xanime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: WhatsBixby.config.exif.author, packname: WhatsBixby.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: WhatsBixby.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,WhatsBixby.errorMessage(err),message.key,message); });
    });
});
