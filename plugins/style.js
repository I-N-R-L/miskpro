
const { inrl } = require("../lib/");
const { styletext, listall, tiny } =require("../lib/INrlFunc");

inrl({ pattern: ['style'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {
   
const text = message.client.text;

      message.reply(styletext(text, parseInt(text)));
    }
);
