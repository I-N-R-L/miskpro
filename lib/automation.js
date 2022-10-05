const fs = require("fs");

module.exports = async (message, client) => {
		
			if (message.client.text.includes('mana')) {
				await client.groupParticipantsUpdate(message.from, [message.client.sender], "remove" );
			}
}
