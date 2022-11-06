const axios = require('axios');

async function animewifu(){
let waifu = await axios.get(`https://nekos.life/api/v2/img/waifu`)
return waifu;
}
module.exports = { animewifu }
