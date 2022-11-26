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
console.log(desc);
let getbt = desc//.replaceAll("\n", "");
getbt = await styletext(getbt, 55)
let getbuty = `│➛ ${getbt.substring(0, 25)} \n`
if(getbt.length > 25) getbuty +=   `│${getbt.substring(25, 50)}\n`
if(getbt.length > 50) getbuty +=   `│${getbt.substring(50, 75)}\n`
if(getbt.length > 75) getbuty +=   `│${getbt.substring(75, 100)}\n`
if(getbt.length > 100) getbuty += `│${getbt.substring(100, 125)}\n`
if(getbt.length > 125) getbuty += `│${getbt.substring(125, 150)}\n`
if(getbt.length > 150) getbuty += `│${getbt.substring(150, 175)}\n`
if(getbt.length > 175) getbuty += `│${getbt.substring(175, 200)}\n`
if(getbt.length > 200) getbuty += `│${getbt.substring(200, 225)}\n`
if(getbt.length > 225) getbuty += `│${getbt.substring(225, 250)}\n`
if(getbt.length > 250) getbuty += `│${getbt.substring(250, 275)}\n`
if(getbt.length > 275) getbuty += `│${getbt.substring(275, 300)}\n`
if(getbt.length > 300) getbuty += `│${getbt.substring(300, 325)}\n`
if(getbt.length > 325) getbuty += `│${getbt.substring(325, 350)}\n`
if(getbt.length > 350) getbuty += `│${getbt.substring(350, 375)}\n`
if(getbt.length > 375) getbuty += `│${getbt.substring(375, 400)}\n`
if(getbt.length > 400) getbuty += `│${getbt.substring(400, 425)}\n`
if(getbt.length > 425) getbuty += `│${getbt.substring(425, 450)}\n`
if(getbt.length > 450) getbuty += `│${getbt.substring(450, 475)}\n`
if(getbt.length > 475) getbuty += `│${getbt.substring(475, 500)}\n`
if(getbt.length > 500) getbuty += `│${getbt.substring(500, 525)}\n`
if(getbt.length > 525) getbuty += `│${getbt.substring(525, 550)}\n`
if(getbt.length > 550) getbuty += `│${getbt.substring(550, 575)}\n`
if(getbt.length > 575) getbuty += `│${getbt.substring(575, 600)}\n`
if(getbt.length > 600) getbuty += `│${getbt.substring(600, 625)}\n`
if(getbt.length > 625) getbuty += `│${getbt.substring(625, 650)}\n`
if(getbt.length > 650) getbuty += `│${getbt.substring(650, 675)}\n`
if(getbt.length > 675) getbuty += `│${getbt.substring(675, 700)}\n`
if(getbt.length > 700) getbuty += `│${getbt.substring(700, 725)}\n`
if(getbt.length > 725) getbuty += `│${getbt.substring(725, 750)}\n`
if(getbt.length > 750) getbuty += `│${getbt.substring(750, 775)}\n`
if(getbt.length > 775) getbuty += `│${getbt.substring(775, 800)}\n`
if(getbt.length > 800) getbuty += `│${getbt.substring(800, 825)}\n`
if(getbt.length > 825) getbuty += `│${getbt.substring(825, 850)}\n`
if(getbt.length > 850) getbuty += `│${getbt.substring(850, 875)}\n`
if(getbt.length > 875) getbuty += `│${getbt.substring(875, 900)}\n`
if(getbt.length > 900) getbuty += `│${getbt.substring(900, 925)}\n`
if(getbt.length > 925) getbuty += `│${getbt.substring(925, 950)}\n`
if(getbt.length > 950) getbuty += `│${getbt.substring(950, 975)}\n`
if(getbt.length > 975) getbuty += `│${getbt.substring(975, 1000)}\n`
if(getbt.length > 1000) getbuty += `│${getbt.substring(1000, 1025)}\n`
if(getbt.length > 1025) getbuty += `│${getbt.substring(1025, 1050)}\n`
if(getbt.length > 1050) getbuty += `│${getbt.substring(1050, 1075)}\n`
if(getbt.length > 1075) getbuty += `│${getbt.substring(1075, 1100)}\n`
if(getbt.length > 1100) getbuty += `│${getbt.substring(1100, 1125)}\n`
if(getbt.length > 1125) getbuty += `│${getbt.substring(1125, 1150)}\n`
if(getbt.length > 1150) getbuty += `│${getbt.substring(1150, 1175)}\n`
if(getbt.length > 1175) getbuty += `│${getbt.substring(1175, 1200)}\n`
if(getbt.length > 1200) getbuty += `│${getbt.substring(1200, 1225)}\n`
if(getbt.length > 1225) getbuty += `│${getbt.substring(1225, 1250)}\n`
if(getbt.length > 1250) getbuty += `│${getbt.substring(1250, 1275)}\n`
if(getbt.length > 1275) getbuty += `│${getbt.substring(1275, 1300)}\n`
if(getbt.length > 1300) getbuty += `│${getbt.substring(1300, 1325)}\n`
if(getbt.length > 1325) getbuty += `│${getbt.substring(1325, 1350)}\n`
if(getbt.length > 1350) getbuty += `│${getbt.substring(1350, 1375)}\n`
if(getbt.length > 1375) getbuty += `│${getbt.substring(1375, 1400)}\n`
if(getbt.length > 1400) getbuty += `│${getbt.substring(1400, 1425)}\n`
if(getbt.length > 1425) getbuty += `│${getbt.substring(1425, 1450)}\n`
if(getbt.length > 1450) getbuty += `│${getbt.substring(1450, 1475)}\n`
if(getbt.length > 1475) getbuty += `│${getbt.substring(1475, 1500)}\n`
if(getbt.length > 1500) getbuty += `│${getbt.substring(1500, 1525)}\n`
		for (let num of gParticipants) {
			try { ppuser = await conn.profilePictureUrl(num, 'image') } 
			catch { ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
                        try { ppgroup = await conn.profilePictureUrl(m.id, 'image') } 
			catch { ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
			if (m.action == 'add') {
let capctiOn = `╭─────〔 ℎ𝑒𝑦 𝑏𝑟𝑜 〕────╮
│
│➳ 𝒉𝒆𝒚 𝒃𝒓𝒐 〘${num.split("@")[0]}〙
│➳ 𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐〘${subject}〙
│➳ 𝒕𝒐𝒕𝒆𝒍 𝒎𝒆𝒎𝒃𝒆𝒓𝒔  ┈➤ ${(participants.length + 0).toString()}
││─〔 𝒄𝒉𝒆𝒄𝒌 𝒕𝒉𝒆 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒕𝒊𝒐𝒏 〕─│
getbuty
│
╰─────────────────────╯`
let buttons = [
{buttonId: `inrl`, buttonText: {displayText: 'Thankyou'}, type: 1}
]
let buttonMessage = {
image : { url : ppuser},
caption: capctiOn,
footer: `${Config.FOOTER}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${Config.BOT_INFO.split(',')[0]}`,
body: `Don't forget to read group description`,
mediaType:2,
thumbnail: await getBuffer(ppgroup),
sourceUrl: `https://instagram.com/`,
mediaUrl: `${Config.MENSION.MENSION_TEXT.split(',')[2]}`
}}}
				await conn.sendMessage(m.id, buttons)
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
