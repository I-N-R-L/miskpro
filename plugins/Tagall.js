const { inrl, config, add } = require('../lib');

inrl({ pattern: ["tagall"], sucReact: "😋", category: ["group", "all"], },
 
async (message, client) => {

let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await client.groupMetadata(message.id)
let gParticipants = message.participants

let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 

 

 ➲ *Message : ${mesage.client.text}*\n\n`

                for (let mem of gParticipants) {

                teks += ` @${mem.id.split('@')[0]}\n`

                }

                await client.sendMessage(message.from, { text: "➪ "+teks }, { quoted: message })

                });
/*
                break

                case 'hidetag': {
ezio.addCommand({ pattern: ["g-add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(ezio.config.reply.owner) }, { quoted: message } ); };
    if (!message.client.text) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(ezio.config.reply.group) }, { quoted: message } ); };
    try {
        let array = message.client.text.replace('+', '').replace(' ', '').split('/');
        array.map((item) => (item += "@s.whatsapp.net")); 
        await client.sendMessage( message.from, { text: ezio.infoMessage("😋 Add group member. Using number.") }, { quoted: message } );
        await client.groupParticipantsUpdate( message.from, array, "add" );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
*/
