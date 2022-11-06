const {fetchJson} = require('../../');

async function dogsticker(){
let stickers = await fetchJson('https://gist.githubusercontent.com/inrl-official/ae2464bce7aaea0d60677bea517ff24f/raw/b1a60dcd390ef4135ca0300c1c037d151dbdaa3c/dogsticker')
let eachsticker = stickers.split('\n')
let sticker = eachsticker[Math.floor(Math.random() * eachsticker.length)]
return sticker;
}

module.exports = { dogsticker }
