const bots = require('../lib/perfix');
bots.inrl({pattern: ['calc'], desc: "to calculate by using bots",sucReact: "🤥",  category: ["ibot"] }, (async (message, client) => {
        if (message.client.text.length < 20) { return await client.sendMessage(message.from, { text :"your data is overload serverdown \nonly 4 letters possbile😄"},{ quoted: message })
        if (message.client.text.includes('+')) { var split = message.client.text.split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = -(-ilksayi - sonsayi)
            try {
           await client.sendMessage( message.from,{text : ilksayi+"+"+sonsayi+"="+result} ,{ quoted: message })}
            catch (err){ return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        }
        else if (message.client.text.includes('-')) { var split = message.client.text.split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await client.sendMessage( message.from,{text :ilksayicik+"-"+sonsayicik+"="+result }  ,{ quoted: message })}
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        
        else if (message.client.text.includes('x')) { var split = message.client.text.split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await client.sendMessage( message.from,{text : ilksayicarp+"×"+sonsayicarp+"="+result } ,{ quoted: message }) }
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })};
            }
        
        else if (message.client.text.includes('/')) { var split = message.client.text.split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await client.sendMessage( message.from,{text : ilksayibol+"÷"+sonsayibol+"="+result } ,{ quoted: message }) }
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }  
    }));
