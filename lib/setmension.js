const Config = require('../config');
let mP3 = Config.MENSION.MENSION_AUDIO;
let jPg = Config.MENSION.MENSION_IMG;
const { mensionMp3, mensionImg } = require('../media/mesion/mp3');


var Wawe = new Array();
Wawe[1] = "10,20,30,40,50,60,70,80,100,80,70,60,50,40,30,20,10";
Wawe[2] = "20,10,40,30,60,50,80,70,100,70,80,50,60,30,40,10,20";
Wawe[3] = "30,10,30,10,30,10,30,10,30,10,30,10,30,10,30,10,30";
Wawe[4] = "10,50,10,50,10,50,10,50,10,50,10,50,10,50,10,50,50";
Wawe[5] = "10,20,10,20,10,20,10,20,10,20,10,20,10,20,10,20,10";
Wawe[6] = "100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100";
Wawe[7] = "10,40,20,60,30,80,40,100,50,100,60,100,70,100,80,100,90";
Wawe[8] = "100,50,50,100,100,50,50,50,100,100,50,50,100,100,50,50,100";
var i = Math.floor(Wawe.length * Math.random());

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

let IsMe = m.client.displayText.split('@')[1];
if(NewMension.includes(IsMe)){
let imag = await mensionImg(jPg);
let audio = await mensionMp3(mP3);
  await conn.sendMessage(m.from, { audio : audio, mimetype: 'audio/mp4', ptt: true, waveform: [`${Wawe[i]}`], contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],ype: 'audio/mp4', ptt: true, quoted: m, 
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: true,
        mediaType:1,
        thumbnail: imag,
        mediaUrl: "https://instagram.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/, 
        sourceUrl: "https://instagram.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/ }}}, {quoted: m })
        }
}
module.exports = { IsMension }

