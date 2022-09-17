/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
const bots = require('../lib/perfix');
const got = require('got');
const Config = require('../config');


    bots.inrl({pattern: ['sp'], desc: "to check whether", sucReact: "💔", category: ['all'],},   async (message, client) => {
	    const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=🥵_😇`;
		    return await client.sendMessage( message.from, { image: { url:  url.url }, caption: bots.config.exif.cap,},{ quoted: message });
    });
