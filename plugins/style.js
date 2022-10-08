const { inrl } = require("../lib/");
const { styletext, listall, tiny } =require("../lib/");

inrl({ pattern: ['style'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {
   
const text = message.client.text;
var botcondom = (styletext("inrl-bots", parseInt(35)));
      client.sendMessage( message.from, {text :botcondom },{ quoted: message });
    }
);
