const Config = require('../config');
let mP3 = Config.MENSION.MENSION_AUDIO.replaceAll(" ","");
let jPg = Config.MENSION.MENSION_IMG.replaceAll(" ","");
const { mensionMp3, mensionImg } = require('../media/mension/setmension');
const axios = require('axios');
const cheerio = require('cheerio');

async function IsMension(m, conn){
let IsOwner, IsSudo, Owner, Sudo
let NewMension = ["917593919575", "917025099154"]
let IsBot = conn.user.id.includes(':') ? conn.user.id.split(':')[0] : conn.user.id.split('@')[0];
NewMension.push(IsBot);
if(!Config.OWNER.includes(',')){
NewMension.push(Config.OWNER.trim())
} else if(Config.OWNER.includes(',')){
Owner = Config.OWNER.split(',');
NewMension = Owner.concat(NewMension)
};
if(!Config.SUDO.includes(',')){
NewMension.push(Config.SUDO.trim());
} else if(Config.SUDO.includes(',')){
Sudo = Config.SUDO.split(',');
NewMension = Sudo.concat(NewMension)
};
let IsMe = m.client.displayText.split('@')[1] || m.client.displayText;
IsMe = IsMe.replaceAll(' ','')
if(NewMension.includes(IsMe)){
let imag = await mensionImg(jPg);
let audio = await mensionMp3(mP3);
        await conn.sendMessage(m.from, { audio : audio, mimetype: 'audio/mpeg', ptt: true, quoted: m, waveform: [0,50,100,50,0,50,100,50,0,50,100,60,0], contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: true,
        mediaType:1,
        thumbnail: imag,
        mediaUrl: Config.MENSION.MENSION_TEXT.split(',')[2], 
        sourceUrl:Config.MENSION.MENSION_TEXT.split(',')[2] }}}, {quoted: m })
        }
}
function stickersearch(text) {
		return new Promise((resolve, reject) => {
			axios.get(`https://getstickerpack.com/stickers?query=${text}`)
				.then(({data}) => {
					const $ = cheerio.load(data)
					const source = []
					const link = [];
					var	ya = $('#stickerPacks > div > div:nth-child(3) > div > a').text()
		if (!ya ) return resolve()
					$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
						source.push($(b).attr('href'))
					})
					axios.get(source[Math.floor(Math.random() * source.length)])
						.then(({
							data
						}) => {
							const $$ = cheerio.load(data)
							$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
								link.push($$(d).attr('src').replace(/&d=200x200/g,''))
							})
							result = {
								title: $$('#intro > div > div > h1').text(),
								sticker_url: link
							}
							resolve(result)
						})
				}).catch(reject)
		})
	}

module.exports = { IsMension, stickersearch }
