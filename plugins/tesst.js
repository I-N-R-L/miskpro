async (message, client) => {
	    const url = `https://qr-code-for-bots.herokuapp.com`;
		    return await client.sendMessage( message.from, { image: { url:  url }, caption: bots.config.exif.cap,},{ quoted: message });
    });
