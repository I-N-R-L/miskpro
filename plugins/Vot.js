const bots = require('../lib/perfix');
const fs = require('fs');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const Config = require('../config');
             
 bots.inrl({pattern: ['vote'], desc: "to check whether", sucReact: "💔", category: ['all'], }, (async (message, client) => {
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
 {title: `${bottomText}`, description: `\n\n${tl}`, rowId:"rowid1"},
 {title: `${t2}`, description: `\n\n${t3}`, rowId:"rowid2"}
]

const sections = [{title: `${topText}`, rows: rows}]

const button = {
 buttonText: 'Click Me!',
 description: `${topText}`,
 sections: sections,
 listType: 1
}

await client.sendMessage( message.from, button, { quoted: message, });
  
  }));
