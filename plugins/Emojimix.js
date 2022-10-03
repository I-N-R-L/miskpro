const fs = require('fs');
const {inrl,fetchJson,styletext} = require('../lib/');

inrl({pattern: ['emojimix'], desc: "to emojis to single sticker",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'send to emojis \n\n _ex_:❣️+🥵'}, { quoted: message });
if (text.includes('+')) {
         var split = text.split('+');

         emoji1= split[0];
         emoji2 = split[1];
        }
const url = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of url.results) {
console.log("inrl="+res.url)
await client.sendImageAsSticker(message.from, res.url, message, { packname: "inrl", author: "inrl", categories: res.tags })
        }
});
inrl({pattern: ['carbon'], desc: "to get video as audio ", sucReact: "ðŸ’¥", category: ['all'], }, (async (message, client) => {

const text = message.client.text;

        if (!text) return await client.sendMessage( message.from, { text: 'please replay to an text😹'}, { quoted: message });

        var rgbafmin = 0; 
        var rgbafmax = 255;  
        var rgbafirst = Math.floor(Math.random() * (+rgbafmax - +rgbafmin) + +rgbafmin)

        var rgbasmin = 0; 
        var rgbasmax = 255;  
        var rgbasecond = Math.floor(Math.random() * (+rgbasmax - +rgbasmin) + +rgbasmin)

        var rgbatmin = 0; 
        var rgbatmax = 255;  
        var rgbathird = Math.floor(Math.random() * (+rgbatmax - +rgbatmin) + +rgbatmin)

        var Theme = new Array ()
        Theme[0] = "twilight";
        Theme[1] = "panda";
        Theme[2] = "blackboard";
        Theme[3] = "seti";
        Theme[4] = "verminal";
        Theme[5] = "nord";
        Theme[6] = "monokai";
        Theme[7] = "cobalt";
        Theme[8] = "vscode";
        Theme[9] = "material";
        Theme[10] = "hopscotch";
        Theme[11] = "shades-of-purple";
        Theme[12] = "oceanic-next";
        Theme[13] = "one-light";
        Theme[14] = "one-dark";
        Theme[15] = "synthwave-84";
        Theme[16] = "zenburn";
        Theme[17] = "3024-night";
        Theme[18] = "a11y-dark";
        Theme[19] = "dracula-pro";
        Theme[20] = "dracula-pro";
        Theme[21] = "dracula-pro";
        Theme[22] = "dracula-pro";
        Theme[23] = "night-owl";
        var i = Math.floor(24*Math.random())

        var Language = new Array ()
        Language[0] = "Apache";
        Language[1] = "Python";
        Language[2] = "Javascript";
        Language[3] = "Bash";
        Language[4] = "cobol";
        Language[5] = "coffeescript";
        Language[6] = "Crystal";
        Language[7] = "Erlang";
        Language[8] = "GraphQL";
        var l = Math.floor(9*Math.random())

        var fin = text.replace(/(?:\r\n|\r|\n)/g, '%250A')
        var pay = encodeURIComponent(fin)
        
        var respoimage = await fetchJson('https://thiccyscarbonapi.herokuapp.com/?code=' + pay + '&theme=' + Theme[i] + '&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&backgroundColor=rgba(' + rgbafirst + ',' + rgbasecond + ',' + rgbathird + ')&language=' + Language[l], { responseType: 'arraybuffer' })

        await await client.sendImageAsSticker(message.from, respoimage, message, { packname: "inrl", author: "inrl", categories: "😄" })
		          await fs.unlinkSync(respoimage)

    }));
inrl({pattern: ['fancy'], desc: "to get video as audio ", sucReact: "😇", category: ['all'], }, async (message, client) => {
const text = message.client.text;
if (!text) {
 await client.sendMessage(message.from, {text :`  fancy1. ⓔⓝⓣⓔⓡ ⓐ ⓣⓔⓧⓣ

fancy2. 🅔🅝🅣🅔🅡 🅐 🅣🅔🅧🅣

fancy3. ｅｎｔｅｒ ａ ｔｅｘｔ

fancy4. 𝐞𝐧𝐭𝐞𝐫 𝐚 𝐭𝐞𝐱𝐭

fancy5. 𝖊𝖓𝖙𝖊𝖗 𝖆 𝖙𝖊𝖝𝖙

fancy6. 𝒆𝒏𝒕𝒆𝒓 𝒂 𝒕𝒆𝒙𝒕

fancy7. 𝓮𝓷𝓽𝓮𝓻 𝓪 𝓽𝓮𝔁𝓽

fancy8. 𝕖𝕟𝕥𝕖𝕣 𝕒 𝕥𝕖𝕩𝕥

fancy9. 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚝𝚎𝚡𝚝

fancy10. 𝖾𝗇𝗍𝖾𝗋 𝖺 𝗍𝖾𝗑𝗍

fancy11. 𝗲𝗻𝘁𝗲𝗿 𝗮 𝘁𝗲𝘅𝘁

fancy12. 𝙚𝙣𝙩𝙚𝙧 𝙖 𝙩𝙚𝙭𝙩

fancy13. 𝘦𝘯𝘵𝘦𝘳 𝘢 𝘵𝘦𝘹𝘵

fancy14. ⒠⒩⒯⒠⒭ ⒜ ⒯⒠⒳⒯

fancy15. 🇪🇳🇹🇪🇷 🇦 🇹🇪🇽🇹

fancy16. 🄴🄽🅃🄴🅁 🄰 🅃🄴🅇🅃

fancy17. 🅴🅽🆃🅴🆁 🅰 🆃🅴🆇🆃

fancy18. 󠁥󠁮󠁴󠁥󠁲󠀠󠁡󠀠󠁴󠁥󠁸󠁴Enter a Textx

fancy19. éńtéŕ á téxt

fancy20. 乇刀ｲ乇尺 ﾑ ｲ乇ﾒｲ

fancy21. ﻉกՇﻉɼ ค ՇﻉซՇ

fancy22. єηтєя α тєχт

fancy23. єภՇєг ค ՇєאՇ

fancy24. эитэѓ а тэхт

fancy25. ቿክፕቿዪ ል ፕቿሸፕ

fancy26. 𝔢𝔫𝔱𝔢𝔯 𝔞 𝔱𝔢𝔵𝔱

fancy27. ëṅẗëṛ ä ẗëẍẗ

fancy28. ᴇɴᴛᴇʀ ᴀ ᴛᴇxᴛ

fancy29. ɇnŧɇɍ Ⱥ ŧɇxŧ

fancy30. ₑₙₜₑᵣ ₐ ₜₑₓₜ

fancy31. ᵉⁿᵗᵉʳ ᵃ ᵗᵉˣᵗ

fancy32. ǝuʇǝɹ ɐ ʇǝxʇ

fancy33. ʇxǝʇ ɐ ɹǝʇuǝ

fancy34. ɘᴎTɘᴙ A TɘxT

fancy35. TxɘT A ᴙɘTᴎɘ

`}, { quoted : message })
              }
} else if(text){
                let anu = await styletext(text)
                let no = 1
                let teks = ''
                for (let i of anu) {
                teks += `${no++}. ${i.result}\n\n`
await client.sendMessage(message.from, {text : teks}, { quoted : message })
            }
      }
});
