
const bots = require("../lib/perfix");

bots.inrl(
  {
    pattern: ["😄"],
    desc: "bts",
    sucReact: "😄",
    category: ["all", "create"],
  },
  async (message, client) => {
var ttinullgif = `https://api.waifu.pics/sfw/slap`;
 let str = ttinullgif;
let newStr = str.replace('.gif','.mp4');
 const aMsg = {
                                video: { url: newStr },
                                caption: "hello!",
                                gifPlayback: true
}
await client.sendMessage( message.from, aMsg,{ quoted: message })
});
