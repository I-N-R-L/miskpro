/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

const bots = require('../events');
const Config = require('../config');


    bots.inrl({pattern: ['ml'] desc: "to check whether", sucReact: "ð😇", category: ['all'], usage: '<word>',},   async (message, client) => {
           const text = message.client.text;
	 //if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `https://api.simsimi.net/v2/?text=${text}&lc=ml`;
 await client.sendMessage( message.from,{ text: url.success }, { quoted: message });
    });
*/
