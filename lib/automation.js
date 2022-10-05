const fs = require("fs");
let ANTI_LINK = ".com";
let BAD_WORDS = "xxx" || "myr" || "myre" || "myran" || "panni" || "patt" || "nayi" || "fuck" || "andi" || "endi" || "sex"|| "hot";
let AUTO_MUTE = "close" || "ᴄʟᴏꜱᴇ" || "CLOSE";
let AUTO_OPEN = "open" || "OPEN" || "ᴏᴩᴇɴ";
let EXTRA_KICK = "tag" || "Tag" || "ᴛᴀɢ";

module.exports = async (conn, m) => {
		let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await conn.groupMetadata(m.id)
		let gParticipants = m.participants
		let WC = `💖 Welcome to: ${subject}
💓 ${(participants.length + 1).toString()}th Member.
💗 ${desc}
`;
			if (m.action == 'add') {
				conn.sendMessage(m.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `HI: @${num.split("@")[0]}\n\n${WC}`})
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
