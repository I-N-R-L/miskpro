const google = require('google-it')
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('../../Scraper');


async function googleIt(text){
google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➪ *Title* : ${g.title}\n`
                teks += `➪ *Description* : ${g.snippet}\n`
                teks += `➪ *Link* : ${g.link}\n\n
           return teks;
            }
      })
 }
async function wikiMedia(text){
                let wikki = await wikimedia(text)
                let result = wikki[Math.floor(Math.random() * wikki.length)]
                return result;
}
async function ringtone(text){
                let ringtone = await ringtone(text)
		let result = ringtone[Math.floor(Math.random() * ringtone.length)]
                return result;
}
