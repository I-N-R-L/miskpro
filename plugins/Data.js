const bots= require('../lib/perfix');
const Config = require('../config');


   bots.inrl({pattern: ['data'], desc: "to check whether", sucReact: "ðŸ¥¸", category: ['all'],},   async (message, client) => {
if (!message.quoted) return await client.sendMessage( message.from, { text: 'please mension some one to take their data'}, { quoted: message });
const url = `https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=url`;
 await client.sendMessage(message.from,  { text : 'NAME  :' + url.name + '\n' + 'GENDER :'+ url.gender + 'AGE  :' + url.age + '\n' + 'BDAY :'+ url.birtday + 'JOB  :' + url.occupation + '\n' + 'ADDRESS :'+ url.address +'PIN  :' + url.zip_code + '\n' + 'PLACE :'+ url.state + 'COUNTRY  :' + url.country + '\n' + 'PHONE :'+ url.phone}, { quoted: message });
});
