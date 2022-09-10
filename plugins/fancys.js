const  Jsl = require('../events')
const { Fancy } = require('abu-bot')
 
Jsl.addCommand(
	   {
		pattern: ['fancy'],
		desc: 'To check ping',
                sucReact: "🥵💯",
                category: ["system", "all"],
	   },
  (async (message, client) => {
     if (!client[1] || !message.reply_message.message) return await client.sendMessage("Reply to any message with .fancy number\n" + Fancy("example", "32"))
     try {
         var result = Fancy(message.reply_message.message, client[1])
     } catch (e) {
         return await client.sendMessage(e.message)
     }
     await client.sendMessage(result)
 }))
