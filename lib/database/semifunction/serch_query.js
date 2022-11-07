const google = require('google-it')
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('../../Scraper');


async function googleIt(text){
return new Promise((resolve, reject) => {
google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`;
                for (let g of res) {
                teks += `➪ *Title* : ${g.title}\n`
                teks += `➪ *Description* : ${g.snippet}\n`
                teks += `➪ *Link* : ${g.link}`
            }
          resolve(teks);
       })
    })
 }
async function wikiMedia(text){
                let wikki = await wikimedia(text)
                let result = wikki[Math.floor(Math.random() * wikki.length)]
                return result;
}
async function ringTone(text){
                let ringtoNe = await ringtone(text)
		let result = ringtoNe[Math.floor(Math.random() * ringtoNe.length)]
                return result;
}
module.exports = { googleIt, wikiMedia, ringTone }
