const Config = require('../config');
let mP3 = Config.MENSION.MENSION_AUDIO;
let jPg = Config.MENSION.MENSION_IMG;
const { mensionMp3, mensionImg } = require('../media/mesion/mp3');
const axios = require('axios');
const cheerio = require('cheerio');

async function IsMension(m, conn){
var IsOwner, IsSudo;
var NewMension = ["917593919575", "917025099154"]
let IsBot = conn.user.id.match(/.{1,12}/g);
if(Config.OWNER.includes(',')){ IsOwner = Config.OWNER.split[0] } else { IsOwner = Config.OWNER }
if(Config.SUDO.includes(',')){
if(Config.SUDO.split[0]){ NewMension.push(Config.SUDO.split[0]) }
if(Config.SUDO.split[1]){ NewMension.push(Config.SUDO.split[1]) }
if(Config.SUDO.split[2]){ NewMension.push(Config.SUDO.split[2]) }
if(Config.SUDO.split[3]){ NewMension.push(Config.SUDO.split[3]) }
if(Config.SUDO.split[4]){ NewMension.push(Config.SUDO.split[4]) }
if(Config.SUDO.split[5]){ NewMension.push(Config.SUDO.split[5]) }
if(Config.SUDO.split[6]){ NewMension.push(Config.SUDO.split[6]) }
if(Config.SUDO.split[7]){ NewMension.push(Config.SUDO.split[7]) }
if(Config.SUDO.split[8]){ NewMension.push(Config.SUDO.split[8]) }
if(Config.SUDO.split[9]){ NewMension.push(Config.SUDO.split[9]) }
if(Config.SUDO.split[10]){ NewMension.push(Config.SUDO.split[10]) }
if(Config.SUDO.split[11]){ NewMension.push(Config.SUDO.split[11]) }
if(Config.SUDO.split[12]){ NewMension.push(Config.SUDO.split[12]) }
if(Config.SUDO.split[13]){ NewMension.push(Config.SUDO.split[13]) }
if(Config.SUDO.split[14]){ NewMension.push(Config.SUDO.split[14]) }
if(Config.SUDO.split[15]){ NewMension.push(Config.SUDO.split[15]) }
if(Config.SUDO.split[16]){ NewMension.push(Config.SUDO.split[16]) }
if(Config.SUDO.split[17]){ NewMension.push(Config.SUDO.split[17]) }
if(Config.SUDO.split[18]){ NewMension.push(Config.SUDO.split[18]) }
if(Config.SUDO.split[19]){ NewMension.push(Config.SUDO.split[19]) }
if(Config.SUDO.split[20]){ NewMension.push(Config.SUDO.split[20]) }
if(Config.SUDO.split[21]){ NewMension.push(Config.SUDO.split[21]) }
if(Config.SUDO.split[22]){ NewMension.push(Config.SUDO.split[22]) }
if(Config.SUDO.split[23]){ NewMension.push(Config.SUDO.split[23]) }
if(Config.SUDO.split[24]){ NewMension.push(Config.SUDO.split[24]) }
if(Config.SUDO.split[25]){ NewMension.push(Config.SUDO.split[25]) }
if(Config.SUDO.split[26]){ NewMension.push(Config.SUDO.split[26]) }
if(Config.SUDO.split[27]){ NewMension.push(Config.SUDO.split[27]) }
if(Config.SUDO.split[28]){ NewMension.push(Config.SUDO.split[28]) }
if(Config.SUDO.split[29]){ NewMension.push(Config.SUDO.split[29]) }
if(Config.SUDO.split[30]){ NewMension.push(Config.SUDO.split[30]) }
if(Config.SUDO.split[31]){ NewMension.push(Config.SUDO.split[31]) }
if(Config.SUDO.split[32]){ NewMension.push(Config.SUDO.split[32]) }
if(Config.SUDO.split[33]){ NewMension.push(Config.SUDO.split[33]) }
if(Config.SUDO.split[34]){ NewMension.push(Config.SUDO.split[34]) }
if(Config.SUDO.split[35]){ NewMension.push(Config.SUDO.split[35]) }
if(Config.SUDO.split[36]){ NewMension.push(Config.SUDO.split[36]) }
if(Config.SUDO.split[37]){ NewMension.push(Config.SUDO.split[37]) }
if(Config.SUDO.split[38]){ NewMension.push(Config.SUDO.split[38]) }
if(Config.SUDO.split[39]){ NewMension.push(Config.SUDO.split[39]) }
if(Config.SUDO.split[40]){ NewMension.push(Config.SUDO.split[40]) }
if(Config.SUDO.split[41]){ NewMension.push(Config.SUDO.split[41]) }
      } else {
IsSudo = Config.SUDO;
NewMension.push(IsSudo);
   }
NewMension.push(IsBot[0], IsOwner)
let IsMe = m.client.displayText.split('@')[1] || m.client.displayText;
if(IsMe.includes(' '){ IsMe = IsMe.split(' ')[0] };

console.log("isme="+IsMe, "men="+NewMension);
if(NewMension.includes(IsMe)){
let imag = await mensionImg(jPg);
let audio = await mensionMp3(mP3);
const msUrl = Config.MENSION.MENSION_TEXT.split(',')[2];
        conn.sendMessage(m.from, { audio : { url :  audio }, mimetype: 'audio/mpeg', ptt: true, waveform: [10,10,30,50,70,90,100,100,90,70,50,30,10,10], contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: true,
        mediaType : 2,
        thumbnail : imag,
        mediaUrl: "https://www.instagram.com/reel/inrl_md", 
        sourceUrl: [msUrl] }}}, {quoted: m })
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

