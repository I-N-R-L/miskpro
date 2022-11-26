const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['setname'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
    let match = match || " ";
    await cleint.updateProfileName(match)
    return await message.send("Name Changed!")  
});
