const Raashii = require('../lib/perfix');
const Config = require('../config');
const { getBuffer } = require('../lib/cloud');
const need = "*add link after commandðŸ’Œ*"

  Raashii.inrl({ pattern: ['pdf'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, (async (message, client) => {

const text = message.client.text;

    if (!text) return await client.sendMessage(message.from, { text :need },{ quoted: message })

    var inrlmx = await getBuffer(`https://api.html2pdf.app/v1/generate?url=${text}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`)
    
    await sendMessage(message.from , {document: inrlmx, mimetype: 'application/pdf', fileName: `inrl.pdf`}, {quoted: message})

  }))
