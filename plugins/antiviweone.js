const fs = require('fs');
const  { inrl , config }= require('../lib/')

inrl(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
      if(message.quoted.type !== "viewOnceMessage") return await client.sendMessage(m.from, {text:'Please quote a view once message.'})
      let buff = await message.quoted.download();
      await client.sendFile(buff);
        fs.unlinkSync(buff)
           /*  try {
		const start = new Date().getTime()
		await client.sendMessage( message.from, { text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*' }, { quoted: message })
		const end = new Date().getTime()
		await client.sendMessage( message.from, { text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*' }, { quoted: message })
		global.catchError = false;
                } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );*/
              //  }
	 }
);
