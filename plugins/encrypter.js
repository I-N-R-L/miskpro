const whatsbixby = require('../events');
const {MessageType} = require("Wa-Web");
const axios = require('axios');
const Config = require('../config');

// ENCRYPTION PLUGIN FOR FUN, IF U NEED COPY PASTE THIS 
// NO NEED CREDIT
const b64 = "Text encryption using base64."
const usage = ".b64en <text>"
const encypt = "```Enter the text which you need to encrypt!```"

whatsbixby.addCommand( { pattern: ["b64en"],desc: b64, sucReact: "😁",  category: ["all", "create"], }, async (message, client) => {

        const Wtb = client[1]
        
        if (client[1] === '') return await client.sendMessage(message.from, encypt, MessageType.text);

        await axios
          .get(`https://xteam.xyz/encrypt/b64enc?APIKEY=ab9942f95c09ca89&text=${Wtb}`)
          .then(async (response) => {
            const {
              status,
              result,
            } = response.data

            const msg = `*CONNECTION STATUS ✔:* ${status}\n\n\n *ENCRYPTED TEXT:* ${result}`
            await client.sendMessage(message.from, msg, MessageType.text)
           })
      },
    )










