const { getBuffer } = require('../../lib/cloud');

function mensionMp3(mP3){
let StoreMp3 = [];
var split = mP3.split(',')
if(split[0]){ StoreMp3.push(split[0]) }
if(split[1]){ StoreMp3.push(split[1]) }
if(split[2]){ StoreMp3.push(split[2]) }
if(split[3]){ StoreMp3.push(split[3]) }
if(split[4]){ StoreMp3.push(split[4]) }
if(split[5]){ StoreMp3.push(split[5]) }
if(split[6]){ StoreMp3.push(split[6]) }
if(split[7]){ StoreMp3.push(split[7]) }
if(split[8]){ StoreMp3.push(split[8]) }
if(split[9]){ StoreMp3.push(split[9]) }
if(split[10]){ StoreMp3.push(split[10]) }
if(split[11]){ StoreMp3.push(split[11]) }
if(split[12]){ StoreMp3.push(split[12]) }
if(split[13]){ StoreMp3.push(split[13]) }
if(split[14]){ StoreMp3.push(split[14]) }
if(split[15]){ StoreMp3.push(split[15]) }
if(split[16]){ StoreMp3.push(split[16]) }
if(split[17]){ StoreMp3.push(split[17]) }
if(split[18]){ StoreMp3.push(split[18]) }
if(split[19]){ StoreMp3.push(split[19]) }
if(split[20]){ StoreMp3.push(split[20]) }
if(split[21]){ StoreMp3.push(split[21]) }
if(split[22]){ StoreMp3.push(split[22]) }
if(split[23]){ StoreMp3.push(split[23]) }
if(split[24]){ StoreMp3.push(split[24]) }
if(split[25]){ StoreMp3.push(split[25]) }
if(split[26]){ StoreMp3.push(split[26]) }
if(split[27]){ StoreMp3.push(split[27]) }
if(split[28]){ StoreMp3.push(split[28]) }
if(split[29]){ StoreMp3.push(split[29]) }
if(split[30]){ StoreMp3.push(split[30]) }
if(split[31]){ StoreMp3.push(split[31]) }
if(split[32]){ StoreMp3.push(split[32]) }
if(split[33]){ StoreMp3.push(split[33]) }
if(split[34]){ StoreMp3.push(split[34]) }
if(split[35]){ StoreMp3.push(split[35]) }
if(split[36]){ StoreMp3.push(split[36]) }
if(split[37]){ StoreMp3.push(split[37]) }
if(split[38]){ StoreMp3.push(split[38]) }
if(split[39]){ StoreMp3.push(split[39]) }
if(split[40]){ StoreMp3.push(split[40]) }
if(split[41]){ StoreMp3.push(split[41]) }

let NextMp3 = StoreMp3[Math.floor(Math.random() * StoreMp3.length)]
return NextMp3
};

function mensionImg(jPg){
let StoreImg = [];
var split = jPg.split(',')
if(split[0]){ StoreImg.push(split[0]) }
if(split[1]){ StoreImg.push(split[1]) }
if(split[2]){ StoreImg.push(split[2]) }
if(split[3]){ StoreImg.push(split[3]) }
if(split[4]){ StoreImg.push(split[4]) }
if(split[5]){ StoreImg.push(split[5]) }
if(split[6]){ StoreImg.push(split[6]) }
if(split[7]){ StoreImg.push(split[7]) }
if(split[8]){ StoreImg.push(split[8]) }
if(split[9]){ StoreImg.push(split[9]) }
if(split[10]){ StoreImg.push(split[10]) }
if(split[11]){ StoreImg.push(split[11]) }
if(split[12]){ StoreImg.push(split[12]) }
if(split[13]){ StoreImg.push(split[13]) }
if(split[14]){ StoreImg.push(split[14]) }
if(split[15]){ StoreImg.push(split[15]) }
if(split[16]){ StoreImg.push(split[16]) }
if(split[17]){ StoreImg.push(split[17]) }
if(split[18]){ StoreImg.push(split[18]) }
if(split[19]){ StoreImg.push(split[19]) }
if(split[20]){ StoreImg.push(split[20]) }
if(split[21]){ StoreImg.push(split[21]) }
if(split[22]){ StoreImg.push(split[22]) }
if(split[23]){ StoreImg.push(split[23]) }
if(split[24]){ StoreImg.push(split[24]) }
if(split[25]){ StoreImg.push(split[25]) }
if(split[26]){ StoreImg.push(split[26]) }
if(split[27]){ StoreImg.push(split[27]) }
if(split[28]){ StoreImg.push(split[28]) }
if(split[29]){ StoreImg.push(split[29]) }
if(split[30]){ StoreImg.push(split[30]) }
if(split[31]){ StoreImg.push(split[31]) }
if(split[32]){ StoreImg.push(split[32]) }
if(split[33]){ StoreImg.push(split[33]) }
if(split[34]){ StoreImg.push(split[34]) }
if(split[35]){ StoreImg.push(split[35]) }
if(split[36]){ StoreImg.push(split[36]) }
if(split[37]){ StoreImg.push(split[37]) }
if(split[38]){ StoreImg.push(split[38]) }
if(split[39]){ StoreImg.push(split[39]) }
if(split[40]){ StoreImg.push(split[40]) }
if(split[41]){ StoreImg.push(split[41]) }

let NextImg = StoreImg[Math.floor(Math.random() * StoreImg.length)]
let FinelImg = getBuffer(NextImg)
return FinelImg
}
module.exports = { mensionMp3 , mensionImg }
