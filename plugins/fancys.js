const  Jsl = require('../events')
const { Fancy } = require('abu-bot')
 
Jsl.addCommand(
	   {
		pattern: ['fancy'],
		desc: 'To check fancy',;
                sucReact: "🥵💯",
                category: ["system", "all"],
	   },
 }, (async (message, client) => {
     if (!client[1] || !message.reply_message.message) return await message.sendReply("Reply to any message with .fancy number\n" + Fancy("example", "32"))
     try {
         var result = Fancy(message.reply_message.message, client[1])
     } catch (e) {
         return await message.sendReply(e.message)
     }
     await message.sendReply(result)
 }))
