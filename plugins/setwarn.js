const config = require('../config')
const {
	inrl
} = require('../lib/')
const { isLimit } = require('../lib/database/data/user.js')

inrl(
	   {
		pattern: ['warn'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
            const userId = message.from.split('@')[0];
            const isPremium = "";
            const isOwner = "";
            var limitCount = "3";
		const count = await isLimit(userId, isPremium, isOwner, limitCount, _db) => {
		if (count > 2 ) {
		await client.sendMessage( message.from, { text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*' }, { quoted: message })
		}
      return await client.sendErrorMessage( message.from, error, message.key, message );
                }
);
