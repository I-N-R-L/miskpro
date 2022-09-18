
const bots = require("../lib/perfix");

bots.inrl(
  {
    pattern: ["😄"],
    desc: "bts",
    sucReact: "😄",
    category: ["all", "create"],
  },
  async (message, client) => {
var ttinullimage = `https://api.waifu.pics/sfw/slap`;
   const aMsg = {
                                video: { url: ttinullimage },
                                caption: "hello!",
                                gifPlayback: true
}
await client.sendMessage( message.from, aMsg,{ quoted: message })
});
