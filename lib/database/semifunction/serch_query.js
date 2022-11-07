const google = require('google-it')
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('../../Scraper');
const util = require('util')
const { mediafireDl } = require('./mediafire')
const fetch = require('node-fetch');
const todapi = require("tod-api");


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
async function happyMod(text){
todapi.happymod(text).then(async(res) => {
let teks;
teks = '```Happy mod result```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let imag = res[0].icon;
return { teks, imag };
    })
}
module.exports = { googleIt, wikiMedia, ringTone, happyMod }
