/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md


const bots = require('../lib/perfix');
const got = require('got');
const Config = require('../config');


    bots.inrl({pattern: ['why','how','what','who','whu', 'where','when','which'], desc: "to check whether", sucReact: "", category: ['logo'], usage: '<word>',},   async (message, client) => {
           const text = message.client.text;
	    const url = `https://api.simsimi.net/v2/?text=${text}&lc=ml`;
          const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await client.sendMessage( message.from, { text: 'Q :'+text+'\n\nA:'+JSON.success},{ quoted: message });
    });
*/
