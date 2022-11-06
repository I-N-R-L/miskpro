const axios = require('axios');


async function animewifu(){
let waifu = await axios.get(`https://nekos.life/api/v2/img/waifu`)
return waifu;
}
async function animenom(){
let nom = await axios.get(`https://waifu.pics/api/sfw/nom`)
return nom;
}
async function animefox(){
let fox = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
return fox;
}
async function animesmug(){
let smug = await axios.get(`https://nekos.life/api/v2/img/smug`)
return smug;
}
async function hentaiWifu(){
let nsfw = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
return nsfw;
}
async function hentaiNeko(){
let nsfw = await axios.get(`https://waifu.pics/api/nsfw/neko`)
return nsfw;
}
async function hentaiTrap(){
let nsfw = await axios.get(`https://waifu.pics/api/nsfw/trap`)
return nsfw;
}
async function animeawoo(){
let woo = await axios.get(`https://waifu.pics/api/sfw/awoo`)
return woo;
}
async function animemegumin(){
let gumin = await axios.get('https://waifu.pics/api/sfw/megumin')
return gumin;
}
async function animemehold(){
let hold = await axios.get(`https://api.waifu.pics/sfw/handhold`)
return hold;
}
async function animehighfive(){
let five = await axios.get(`https://api.waifu.pics/sfw/highfive`)
return five;
}
async function animecringe(){
let cring = await axios.get(`https://api.waifu.pics/sfw/cringe`)
return cring;
}
async function animedance(){
let dance = await axios.get(`https://api.waifu.pics/sfw/dance`)
return dance;
}
async function animehappy(){
let happy = await axios.get(`https://api.waifu.pics/sfw/happy`)
return happy;
}
async function animeblush(){
let blush = await axios.get(`https://api.waifu.pics/sfw/blush`)
return blush;
}
async function animeglomp(){
let glomp = await axios.get(`https://api.waifu.pics/sfw/glomp`)
return glomp;
}
async function animewave(){
let wame = await axios.get(`https://api.waifu.pics/sfw/wave`)
return wame;
}
async function animepoke(){
let poke = await axios.get(`https://api.waifu.pics/sfw/poke`)
return poke;
}
async function animewink(){
let wink = await await axios.get(`https://api.waifu.pics/sfw/wink`)
return wink;
}
async function animebonk(){
let bonk = await axios.get(`https://api.waifu.pics/sfw/bonk`)
return bonk;
}
async function animebully(){
let bully = await axios.get(`https://api.waifu.pics/sfw/lick`)
return bully;
}


async function animeyeet(){
let yeet = await axios.get(`https://api.waifu.pics/sfw/yeet`)
return yeet;
}
async function animewink(){
let wink = await await axios.get(`https://api.waifu.pics/sfw/wink`)
return wink;
}
async function animebonk(){
let bonk = await axios.get(`https://api.waifu.pics/sfw/bonk`)
return bonk;
}
async function animebully(){
let bully = await axios.get(`https://api.waifu.pics/sfw/lick`)
return bully;
}


module.exports = { animewifu, animenom, animefox, animesmug,  }
