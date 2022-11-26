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
let getbuty = `│➛ ${getbt.substring(0, 25)} \n`
if(getbt.length > 25) getbuty += await `\n│${getbt.substring(25, 50)}`
if(getbt.length > 50) getbuty += await `\n│${getbt.substring(50, 75)}`
if(getbt.length > 75) getbuty +=  await `\n│${getbt.substring(75, 100)}`
if(getbt.length > 100) getbuty += await `\n│${getbt.substring(100, 125)}`
if(getbt.length > 125) getbuty += await `\n│${getbt.substring(125, 150)}`
if(getbt.length > 150) getbuty += await `\n│${getbt.substring(150, 175)}`
if(getbt.length > 175) getbuty += await `\n│${getbt.substring(175, 200)}`
if(getbt.length > 200) getbuty += await `\n│${getbt.substring(200, 225)}`
if(getbt.length > 225) getbuty += await `\n│${getbt.substring(225, 250)}`
if(getbt.length > 250) getbuty += await `\n│${getbt.substring(250, 275)}`
if(getbt.length > 275) getbuty += await `\n│${getbt.substring(275, 300)}`
if(getbt.length > 300) getbuty += await `\n│${getbt.substring(300, 325)}`
if(getbt.length > 325) getbuty += await `\n│${getbt.substring(325, 350)}`
if(getbt.length > 350) getbuty += await `\n│${getbt.substring(350, 375)}`
if(getbt.length > 375) getbuty += await `\n│${getbt.substring(375, 400)}`
if(getbt.length > 400) getbuty += await `\n│${getbt.substring(400, 425)}`
if(getbt.length > 425) getbuty += await `\n│${getbt.substring(425, 450)}`
if(getbt.length > 450) getbuty += await `\n│${getbt.substring(450, 475)}`
if(getbt.length > 475) getbuty += await `\n│${getbt.substring(475, 500)}`
if(getbt.length > 500) getbuty += await `\n│${getbt.substring(500, 525)}`
if(getbt.length > 525) getbuty += await `\n│${getbt.substring(525, 550)}`
if(getbt.length > 550) getbuty += await `\n│${getbt.substring(550, 575)}`
if(getbt.length > 575) getbuty += await `\n│${getbt.substring(575, 600)}`
if(getbt.length > 600) getbuty += await `\n│${getbt.substring(600, 625)}`
if(getbt.length > 625) getbuty += await `\n│${getbt.substring(625, 650)}`
if(getbt.length > 650) getbuty += await `\n│${getbt.substring(650, 675)}`
if(getbt.length > 675) getbuty += await `\n│${getbt.substring(675, 700)}`
if(getbt.length > 700) getbuty += await `\n│${getbt.substring(700, 725)}`
if(getbt.length > 725) getbuty += await `\n│${getbt.substring(725, 750)}`
if(getbt.length > 750) getbuty += await `\n│${getbt.substring(750, 775)}`
if(getbt.length > 775) getbuty += await `\n│${getbt.substring(775, 800)}`
if(getbt.length > 800) getbuty += await `\n│${getbt.substring(800, 825)}`
if(getbt.length > 825) getbuty += await `\n│${getbt.substring(825, 850)}`
if(getbt.length > 850) getbuty += await `\n│${getbt.substring(850, 875)}`
if(getbt.length > 875) getbuty += await `\n│${getbt.substring(875, 900)}`
if(getbt.length > 900) getbuty += await `\n│${getbt.substring(900, 925)}`
if(getbt.length > 925) getbuty += await `\n│${getbt.substring(925, 950)}`
if(getbt.length > 950) getbuty += await `\n│${getbt.substring(950, 975)}`
if(getbt.length > 975) getbuty += await `\n│${getbt.substring(975, 1000)}`
if(getbt.length > 1000) getbuty += await `\n│${getbt.substring(1000, 1025)}`
if(getbt.length > 1025) getbuty += await `\n│${getbt.substring(1025, 1050)}`
if(getbt.length > 1050) getbuty += await `\n│${getbt.substring(1050, 1075)}`
if(getbt.length > 1075) getbuty += await `\n│${getbt.substring(1075, 1100)}`
if(getbt.length > 1100) getbuty += await `\n│${getbt.substring(1100, 1125)}`
if(getbt.length > 1125) getbuty += await `\n│${getbt.substring(1125, 1150)}`
if(getbt.length > 1150) getbuty += await `\n│${getbt.substring(1150, 1175)}`
if(getbt.length > 1175) getbuty += await `\n│${getbt.substring(1175, 1200)}`
if(getbt.length > 1200) getbuty += await `\n│${getbt.substring(1200, 1225)}`
if(getbt.length > 1225) getbuty += await `\n│${getbt.substring(1225, 1250)}`
if(getbt.length > 1250) getbuty += await `\n│${getbt.substring(1250, 1275)}`
if(getbt.length > 1275) getbuty += await `\n│${getbt.substring(1275, 1300)}`
if(getbt.length > 1300) getbuty += await `\n│${getbt.substring(1300, 1325)}`
if(getbt.length > 1325) getbuty += await `\n│${getbt.substring(1325, 1350)}`
if(getbt.length > 1350) getbuty += await `\n│${getbt.substring(1350, 1375)}`
if(getbt.length > 1375) getbuty += await `\n│${getbt.substring(1375, 1400)}`
if(getbt.length > 1400) getbuty += await `\n│${getbt.substring(1400, 1425)}`
if(getbt.length > 1425) getbuty += await `\n│${getbt.substring(1425, 1450)}`
if(getbt.length > 1450) getbuty += await `\n│${getbt.substring(1450, 1475)}`
if(getbt.length > 1475) getbuty += await `\n│${getbt.substring(1475, 1500)}`
if(getbt.length > 1500) getbuty += await `\n│${getbt.substring(1500, 1525)}`
console.log(getbuty);
		for (let num of gParticipants) {
			try { ppuser = await conn.profilePictureUrl(num, 'image') } 
			catch { ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
                    	if (m.action == 'add') {
let capctiOn = `╭─────〔 ℎ𝑒𝑦 𝑏𝑟𝑜 〕────╮
│
│➳ 𝒉𝒆𝒚 𝒃𝒓𝒐 〘${num.split("@")[0]}〙
│➳ 𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐〘${subject}〙
│➳ 𝒕𝒐𝒕𝒆𝒍 𝒎𝒆𝒎𝒃𝒆𝒓𝒔  ┈➤ ${(participants.length + 0).toString()}
││─〔 𝒄𝒉𝒆𝒄𝒌 𝒕𝒉𝒆 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒕𝒊𝒐𝒏 〕─│
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
