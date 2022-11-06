const axios = require('axios');

async function animewifu(){
let waifu = await axios.get(`https://nekos.life/api/v2/img/waifu`)
return waifu;
}
async function animenom(){
let nom = await axios.get(`https://waifu.pics/api/sfw/nom`)
return nom;
}
module.exports = { animewifu, animenom }
