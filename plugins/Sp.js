/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
const bots = require('../lib/perfix');
const got = require('got');
const Config = require('../config');


    bots.inrl({pattern: ['sp'], desc: "to check whether", sucReact: "💔", category: ['all'],},   async (message, client) => {
	    const url = `https://qr-code-for-bots.herokuapp.com`;
		    return await client.sendMessage( message.from, { image: { url:  url }, caption: bots.config.exif.cap,},{ quoted: message });
    });
