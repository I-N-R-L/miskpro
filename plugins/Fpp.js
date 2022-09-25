const whatsbixby = require('../lib/perfix')
whatsbixby.inrl( { pattern: ["fpp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client, conn) => {
	let _message = message.quoted.imageMessage || message.client.text;
		let download = await client.downloadMediaMessage(_message);
		await conn.updateProfilePicture(download);
     	}
)
