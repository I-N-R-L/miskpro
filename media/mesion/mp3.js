const Config = require('../config');
const { getBuffer } = require('../lib/');
let mp3 = Config.MENSION.MENSION_AUDIO;

async function mensionMp3(mp3){
let StoreMp3 = [];
var split = mp3.split(',')
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
let FinelMp3 = await getBuffer(NextMp3)

return FinelMp3
}
