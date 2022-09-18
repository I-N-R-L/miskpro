const bots= require('../lib/perfix');
//const Config = require('../config');
const linkPreview = require("link-preview-js");

   bots.inrl({pattern: ['😄'], desc: "to check whether", sucReact: "❣️", category: ['all'],},   async (message, client) => {
const msgf=
{linkPreview: {head: "http://ī.am/ᴢᴇʏʀᴏx ",body: "ɪᴠᴅᴀ ᴄʟɪᴄᴋ ᴄʜᴇʏʏ ɴᴇɴʙᴀᴀ 🫣",showAdAttribution: true,renderLargerThumbnail: true,mediaType: 1,thumbnail: "https://i.imgur.com/aKMC2gf.jpeg",
        sourceUrl: "http://wa.me/+972522832722"},waveform: [ 20,5,0,80,80,30,20,50 ] }
 await client.sendMessage( message.from, msgf, { quoted: message });
});
