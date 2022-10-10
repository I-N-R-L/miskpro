const { inrl, add, subtract, multiply, division, qrcode, base64e, base64d, age, config } = require('../lib/');
const got = require('got');

inrl({pattern: ['calc'], desc: "to calculate by using bots",sucReact: "🤥",  category: ["ibot"] }, (async (message, client) => {
          if (message.client.text.includes('+')) { var split = message.client.text.split('+');let number2 = split[1];let number1 = split[0]
            let result = add(number1,number2)
            try {
           await client.sendMessage( message.from,{text : result} ,{ quoted: message })}
            catch (err){ return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        else if (message.client.text.includes('-')) { var split = message.client.text.split('-'), inrlsub1 = split[1], inrlsub2 = split[0] 
            var result = subtract(inrlsub2,inrlsub1)
            try { await client.sendMessage( message.from,{text : result }  ,{ quoted: message })}
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        
        else if (message.client.text.includes('×')) { var split = message.client.text.split('×'), inrlbotswa = split[1], inrl1= split[0] 
            var result = multiply(inrl1,inrlbotswa)
            try { await client.sendMessage( message.from,{text : result } ,{ quoted: message })}
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        
        else if (message.client.text.includes('/')) { var split = message.client.text.split('/'), inrldiv1 = split[1], inrldiv2 = split[0] 
            var result = division(inrldiv2,inrldiv1)
            try { await client.sendMessage( message.from,{text : result } ,{ quoted: message }) }
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }  
    }));
inrl({pattern: ['base64e'], desc: "to convert ascii to base64", sucReact: "ðŸ˜‰", category: ['all'], }, (async (message, client) => {

const text = message.client.text || message.quoted.textMessage;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text to convert base64'}, { quoted: message });
           var encodedString = base64e(text);

            await client.sendMessage( message.from, { text: encodedString }, { quoted: message } );
        }));
inrl({pattern: ['base64d'], desc: "to convert base64 to ascii", sucReact: "ðŸ˜‰", category: ['all'], }, (async (message, client) => {

const text = message.client.text || message.quoted.textMessage;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text to convert base64'}, { quoted: message });
           var decodedString = base64d(text);

            await client.sendMessage( message.from, { text: decodedString }, { quoted: message } );
        }));
//qrcod
inrl({ pattern: ['qr'], desc: "to convert text as qrcode",sucReact: "💗",  category: ["all"]}, async (message, client) => {
        if (!message.client.text) return await client.sendMessage(message.from, { text :" enter some text to convert qr code😦",},{ quoted: message })
        let text = message.client.text;
        var ttinullimage = qrcode(text);
const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };
        await client.sendMessage( message.from, Message,{ quoted: message })
});
