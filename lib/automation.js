const fs = require("fs");

module.exports = async (message, client) => {
		
			if (message.client.text.includes('mana')) {
				await client.groupParticipantsUpdate(message.from, [message.client.sender], "remove" );
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
await client.sendMessage( message.from, { text: ezio.infoMessage("😎 Adding new group admin. Using mentions.") }, { quoted: message } );
            
        }
