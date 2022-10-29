const Config = require('../config');
let mP3 = Config.MENSION.MENSION_AUDIO;
let jPg = Config.MENSION.MENSION_IMG;
const { mensionMp3, mensionImg } = require('../media/mesion/mp3');

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
console.log(NewMension, "IsMe="+IsMe)

if(NewMension.includes(IsMe)){
let imag = await mensionImg(jPg);
let audio = await mensionMp3(mP3);
console.log(NewMension,audio,imag)
/*conn.sendMessage(m.from, { audio : audio , ptt: true, quoted: m,contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: false,
        mediaType:2,
        thumbnail: imag,
        //mediaUrl: "https://github.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/, 
        //sourceUrl: "https://github.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/ }}}, {quoted: m })
     */
        conn.sendMessage(m.from, { audio : audio , quoted: m,contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: true,
        mediaType:1,
        thumbnail: imag,
        mediaUrl: "https://github.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/, 
        sourceUrl: "https://github.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/ }}}, {quoted: m })

        conn.sendMessage(m.from, { audio : audio , quoted: m,contextInfo: { externalAdReply:{
        title : Config.MENSION.MENSION_TEXT.split(',')[0],
        body : Config.MENSION.MENSION_TEXT.split(',')[1],
        showAdAttribution: true,
        mediaType:2,
        thumbnail: imag,
        mediaUrl: "https://github.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/, 
        sourceUrl: "https://github.com/hi_bro"/*Config.MENSION.MENSION_TEXT.split(',')[2]*/ }}}, {quoted: m })        
        }
}
module.exports = { IsMension }

