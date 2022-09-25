const bots = require('../lib/perfix');
bots.inrl({pattern: ['calc'], desc: "to calculate by using bots",sucReact: "🤥",  category: ["ibot"] }, (async (message, client) => {
          if (message.client.text.includes('+')) { var split = message.client.text.split('+');let number2 = split[1];let number1 = split[0]
            let result = -(-number1 - number2)
            try {
           await client.sendMessage( message.from,{text : number1+"+"+number2+"="+result} ,{ quoted: message })}
            catch (err){ return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        else if (message.client.text.includes('-')) { var split = message.client.text.split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await client.sendMessage( message.from,{text :ilksayicik+"-"+sonsayicik+"="+result }  ,{ quoted: message })}
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        
        else if (message.client.text.includes('×')) { var split = message.client.text.split('×'), inrlbotswa = split[1], inrl1= split[0] 
            var result = inrl1*inrlbotswa
            try { await client.sendMessage( message.from,{text : inrl1+"×"+inrl2+"="+result } ,{ quoted: message })}
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        
        else if (message.client.text.includes('/')) { var split = message.client.text.split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await client.sendMessage( message.from,{text : ilksayibol+"÷"+sonsayibol+"="+result } ,{ quoted: message }) }
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }  
    }));
