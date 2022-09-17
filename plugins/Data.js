const bots= require('../lib/perfix');
const Config = require('../config');


   bots.inrl({pattern: ['data'], desc: "to check whether", sucReact: "ðŸ¥¸", category: ['all'],},   async (message, client) => {
if (!message.quoted) return await client.sendMessage( message.from, { text: 'please mension some one to take their data'}, { quoted: message });
const ibotmd = `https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=ibotmd`;
 return await client.sendMessage(message.from,  { text : 'NAME  :' + ibotmd.name + '\n' + 'GENDER :'+ ibotmd.gender + 'AGE  :' + ibotmd.age + '\n' + 'BDAY :'+ ibotmd.birtday + 'JOB  :' + ibotmd.occupation + '\n' + 'ADDRESS :'+ ibotmd.address +'PIN  :' + ibotmd.zip_code + '\n' + 'PLACE :'+ ibotmd.state + 'COUNTRY  :' + ibotmd.country + '\n' + 'PHONE :'+ ibotmd.phone}, { quoted: message });
});
