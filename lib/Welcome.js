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
││────〔 𝒄𝒉𝒆𝒄𝒌 𝒕𝒉𝒆 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒕𝒊𝒐𝒏 〕────│
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
