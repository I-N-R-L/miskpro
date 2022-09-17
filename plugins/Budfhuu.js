const { inrl } = require('../lib/perfix');
const Config = require('../config');
bots.inrl({pattern: ['owner'], desc: "to check whether", sucReact: "ðŸ˜¹", category: ['all'], },   async (message, client) => {
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:'+Config.PACKNAME+'\n' // full name
            + 'ORG:'+Config.FOOTER+';\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid='+Config.SUDO+':'+Config.SUDO+'\n' // WhatsApp ID + phone number
            + 'END:VCARD'
 await client.sendMessage( message.from, { contacts: { displayName:Config.profile.botName, contacts: [{ vcard }] }})
});
