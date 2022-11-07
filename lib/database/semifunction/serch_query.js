const google = require('google-it')
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('../../Scraper');
const util = require('util')
const { mediafireDl } = require('./mediafire')

async function googleIt(text){
google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➪ *Title* : ${g.title}\n`
                teks += `➪ *Description* : ${g.snippet}\n`
                teks += `➪ *Link* : ${g.link}`
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
async function mediaFire(text){
const firstData = await mediafireDl(text)
const result = `*MEDIAFIRE DOWNLOADER*
*Name* : ${firstData[0].nama}
*Size* : ${firstData[0].size}
*Mime* : ${firstData[0].mime}
*Link* : ${firstData[0].link}`

let name = `${firstData[0].nama}`
let size = `${firstData[0].size}`
let mime = `${firstData[0].mime}`
let link = `${firstData[0].link}`
return { result, name, size, mime, link };
}
