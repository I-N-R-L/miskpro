const {fetchJson} = require('../../cloud');

async function dogsticker(){
let stickers = await fetchJson('https://gist.githubusercontent.com/inrl-official/ae2464bce7aaea0d60677bea517ff24f/raw/b1a60dcd390ef4135ca0300c1c037d151dbdaa3c/dogsticker')
let eachsticker = stickers.split('\n')
let sticker = eachsticker[Math.floor(Math.random() * eachsticker.length)]
return sticker;
}
async function lovesticker(){
let stickers = await fetchJson('https://gist.githubusercontent.com/inrl-official/a7218f9abd3d90faa1e418008bc92ec0/raw/1120492a592502a3ee02d8e964b56c6fd09903fa/lovesticker')
let eachsticker = stickers.split('\n')
let sticker = eachsticker[Math.floor(Math.random() * eachsticker.length)]
return sticker;
}
async function cartoonsticker(){
let stickers = await fetchJson('https://gist.githubusercontent.com/inrl-official/e2d2d188be1d1e91162493f09d28ee26/raw/cf7d05379c939cebf51af21b2c55b37beaf504ad/cartoonstickers')
let eachsticker = stickers.split('\n')
let sticker = eachsticker[Math.floor(Math.random() * eachsticker.length)]
return sticker;
}

module.exports = { dogsticker, lovesticker, cartoonsticker }
