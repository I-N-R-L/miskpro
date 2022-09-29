const whatsbixby = require('../lib/perfix')
whatsbixby.inrl( { pattern: ["fpp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	let _message = message.quoted.imageMessage || message.client.text;
		let download = await client.downloadMediaMessage(_message);
		//let users = message.quoted ? message.quoted.sender : message.displayText.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await client.updateProfilePicture(message.client.botNumber, { url: download }).catch((err) => fs.unlinkSync(download))
      //await conn.updateProfilePicture(download);
     	}
);
whatsbixby.inrl( { pattern: ["fppp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	let _message = message.quoted.imageMessage || message.client.text;
		let download = await client.downloadMediaMessage(_message);
		//let users = message.quoted ? message.quoted.sender : message.displayText.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await client.updateProfilePicture(message.client.botNumber,download ).catch((err) => fs.unlinkSync(download))
      //await conn.updateProfilePicture(download);
     	}
);
