const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['setname'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
//if(message.client.isCreater && !message.IsGroup) {
    await client.updateProfileName(match)
    return await message.send("Name Changed!") 
   //  }
});
