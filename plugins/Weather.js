/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
const { inrl } = require('../lib/perfix');
const got = require('got');
const Config = require('../config');


    inrl({pattern: ['weather'], desc: "to check whether", sucReact: "💔", category: ['all'], usage: '<word>',},   async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await client.sendMessage( message.from, { text:'climet of ' +text+ ' is \n\n' +
		     '🌄 ᴛᴇᴍʀᴀᴛᴜʀᴇ:-' + json.main.temp_max + '\n'+
		     '💖 ᴅᴇꜱᴄʀᴩᴛɪᴏɴ:-' + json.weather[0].description + '\n'+
		     '☀ ʜᴜᴍɪᴅɪᴛy    :-' + json.main.humidity +  '\n'+
		     '💨 ᴡɪɴᴅ            :-' + json.wind.speed + 'm/s\n'+
		     '🎇 ᴄʟᴏᴜᴅ          :-' + json.clouds.all + '\n' }, { quoted: message });
	    } catch {
		    return await client.sendMessage( message.from, { text : "no data found on this location"},{ quoted: message });
	    }
    });
