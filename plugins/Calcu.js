const bots = require('../lib/perfix');
const got = require('got');

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
            try { await client.sendMessage( message.from,{text : inrl1+"×"+inrlbotswa+"="+result } ,{ quoted: message })}
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }
        
        else if (message.client.text.includes('/')) { var split = message.client.text.split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await client.sendMessage( message.from,{text : ilksayibol+"÷"+sonsayibol+"="+result } ,{ quoted: message }) }
            catch (err) { return await client.sendMessage(message.from,{text : "error="+err} ,{ quoted: message })}
            }  
    }));
bots.inrl({ pattern: ['hihi'], desc: "to calculate by using bots",sucReact: "🤥",  category: ["ibot"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from,{text: "enter some text"},{ quoted: message })

        var rex = await `https://bx-hunter.herokuapp.com/api/flamingtext/army?text=${encodeURIComponent(message.client.text)}&apikey=Ikyy69`;
        
        var IdaTa = await Buffer.from(rex.data)
   
        const Message = { image: { url:  IdaTa }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

}));
bots.inrl({ pattern: ['hih'], desc: "to calculate by using bots",sucReact: "🤥",  category: ["ibot"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from,{text: "enter some text"},{ quoted: message })

        var rex = await `https://bx-hunter.herokuapp.com/api/flamingtext/army?text=${encodeURIComponent(message.client.text)}&apikey=Ikyy69`;
        
        //var IdaTa = await Buffer.from(rex.data)
   
        const Message = { image: { url:  rex }, caption: bots.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

}));
bots.inrl({pattern: ['modapk'], desc: "to calculate by using bots",sucReact: "🤥",  category: ["ibot"] }, (async (message, client) => {

if (!message.client.text) return await client.sendMessage(message.from,{text: "enter some text"},{ quoted: message })

	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${message.client.text}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.from, {text :
		'*📕 ' + "name" +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + "size" +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + "download" +':* ```' + json.result[0].link + '```\n'}, { quoted: message })
	} catch {
		await client.sendMessage( message.from,{ text :"e" },{ quoted: message })
       }
}));
