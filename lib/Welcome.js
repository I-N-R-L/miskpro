const fs = require("fs");
const { getBuffer, styletext } = require('./');
const Config = require('../config');

module.exports = async (conn, m) => {
	try {
		let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await conn.groupMetadata(m.id)
		let gParticipants = m.participants
		let WC = ` ᴡᴇʟᴄᴏᴍᴇ ᴛo: ${subject}
${(participants.length + 0).toString()}th Member.
${desc}
`;

let getbt = desc.toString().replaceAll("\n", "");
console.log(getbt);
getbt = await styletext(getbt, 55)
let getmd = getbt.match(/.{1,50}/g);
let getbuty = `│➛ ${getmd[0]}`
if(getmd[1]) getbuty += `\n${getmd[1]}`
if(getmd[2]) getbuty += `\n${getmd[2]}`
if(getmd[3]) getbuty += `\n${getmd[3]}`
if(getmd[4]) getbuty += `\n${getmd[4]}`
if(getmd[5]) getbuty += `\n${getmd[5]}`
if(getmd[6]) getbuty += `\n${getmd[6]}`
if(getmd[7]) getbuty += `\n${getmd[7]}`
if(getmd[8]) getbuty += `\n${getmd[8]}`
if(getmd[9]) getbuty += `\n${getmd[9]}`
if(getmd[10]) getbuty += `\n${getmd[10]}`
if(getmd[11]) getbuty += `\n${getmd[11]}`
if(getmd[12]) getbuty += `\n${getmd[12]}`
if(getmd[13]) getbuty += `\n${getmd[13]}`
if(getmd[14]) getbuty += `\n${getmd[14]}`
if(getmd[15]) getbuty += `\n${getmd[15]}`
if(getmd[16]) getbuty += `\n${getmd[16]}`
if(getmd[17]) getbuty += `\n${getmd[17]}`
if(getmd[18]) getbuty += `\n${getmd[18]}`
if(getmd[19]) getbuty += `\n${getmd[19]}`
if(getmd[20]) getbuty += `\n${getmd[20]}`
if(getmd[21]) getbuty += `\n${getmd[21]}`
if(getmd[22]) getbuty += `\n${getmd[22]}`
if(getmd[23]) getbuty += `\n${getmd[23]}`
if(getmd[24]) getbuty += `\n${getmd[24]}`
if(getmd[25]) getbuty += `\n${getmd[25]}`
if(getmd[26]) getbuty += `\n${getmd[26]}`
if(getmd[27]) getbuty += `\n${getmd[27]}`
if(getmd[28]) getbuty += `\n${getmd[28]}`
if(getmd[29]) getbuty += `\n${getmd[29]}`
if(getmd[30]) getbuty += `\n${getmd[30]}`
if(getmd[31]) getbuty += `\n${getmd[31]}`
if(getmd[32]) getbuty += `\n${getmd[32]}`
console.log(getbuty);
		for (let num of gParticipants) {
			try { ppuser = await conn.profilePictureUrl(num, 'image') } 
			catch { ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
                    	if (m.action == 'add') {
let capctiOn = `╭───────〔 ℎ𝑒𝑦 𝑏𝑟𝑜 〕──────╮
│
│➳ 𝒉𝒆𝒚 𝒃𝒓𝒐 〘${num.split("@")[0]}〙
│➳ 𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐〘${subject}〙
│➳ 𝒕𝒐𝒕𝒆𝒍 𝒎𝒆𝒎𝒃𝒆𝒓𝒔  ┈➤ ${(participants.length + 0).toString()}
│
│
││───〔 𝒄𝒉𝒆𝒄𝒌 𝒕𝒉𝒆 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒕𝒊𝒐𝒏 〕───│
${getbuty}
│
╰─────────────────────╯`
let buttons = [
{buttonId: `inrl`, buttonText: {displayText: 'Thankyou'}, type: 1}
]
let templateButtons = {
image : { url : ppuser },
caption: capctiOn,
footer: Config.FOOTER,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Welcom to ${subject}`,
body: `please read the description and follow the rules`,
thumbnail: fs.readFileSync('./media/imagee.jpg'),
mediaType:2,
mediaUrl: Config.INSTAGRAM,
sourceUrl: Config.INSTAGRAM,
       }}}
				await conn.sendMessage(m.id, templateButtons)
			} else if (m.action == 'remove') {
				conn.sendMessage(m.id, { image: { url: ppuser }, caption: `ᴏᴋ ʙʀᴏ: @${num.split("@")[0]}\n\n🥵ᴅᴏɴᴛ ᴄᴏᴍᴇ ʙᴀᴄᴋ`})
			} else if (m.action == 'promote') {
				conn.sendMessage(m.id, { text: `HI: @${num.split("@")[0]}\n\n💖 You Are New Group Admin`, contextInfo: { mentionedJid: [num] }})
			} else if (m.client.displayText.includes(['7025099154'])) {
				conn.sendMessage(m.id, { text: `HI New Group Admin`})
			} else if (m.action == 'demote') {
				conn.sendMessage(m.id, { text: `HI: @${num.split("@")[0]}\n\n😉 You Are Not Group Admin`, contextInfo: { mentionedJid: [num] }})
			}
		}
	} catch (err) {
		console.log(err)
	}
}
