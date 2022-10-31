const { inrl, sendUrl, tinyUrl, webSs, pdfGen, AudioMetaData } = require('../lib')

inrl(
	{
		pattern: ['url'],
       desc: 'to convert image/sticker to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
await sendUrl(message, client);
    }
);
 inrl({pattern: ['tinyurl'], desc: "to convert url as small", sucReact: "😛", category: ['all'],},   async (message, client) => {

           await tinyUrl(message, client);
});
inrl({ pattern: ['webss'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

        await webSs(message, client);
});

inrl({ pattern: ['pdf'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"],}, (async (message, client) => {
     await pdfGen(message, client);
}))

inrl({ pattern: ['copy'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
let _message == message.quoted.audioMessage
let media = await client.downloadAndSaveMediaMessage(_message)

    await AudioMetaData(media, message, client);
})
