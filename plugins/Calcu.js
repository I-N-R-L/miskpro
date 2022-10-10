const { inrl, add, subtract, multiply, division, qrcode, base64e, base64d, age } = require('../lib/');
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
qrcod
