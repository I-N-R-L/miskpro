const google = require('google-it')
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('../../Scraper');
const util = require('util')
const { mediafireDl } = require('./mediafire')
const fetch = require('node-fetch');
const todapi = require("tod-api");


async function googleIt(text){
return new Promise(async(resolve, reject) => {
google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➪ *Title* : ${g.title}\n\n`
                teks += `➪ *Description* : ${g.snippet}\n\n`
                teks += `➪ *Link* : ${g.link}`

            }
         await resolve(teks);
       })
    })
 }
async function wikiMedia(text){
                let wikki = await wikimedia(text)
                let result = wikki[Math.floor(Math.random() * wikki.length)]
                return result;
}
async function ringTone(text){
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
async function gitClone(args){
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!regex1.test(args[0])) return "not valid"
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
return { url, filename };
}
async function happyMod(args){
if (!args.join(" ")) return `Example : ${happymod} mobile legend`
todapi.happymod(args.join(" ")).then(async(res) => {
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
module.exports = { googleIt, wikiMedia, ringTone, mediaFire, gitClone, happyMod }
