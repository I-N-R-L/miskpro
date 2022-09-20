/*
const bots = require('../lib/perfix');
const Config = require('../config');
const Ibot = require('../media/bgm');

if(Config.BGMBOT =='on' || 'ON' ){

bots.inrl({ pattern: ['bgm'], desc: "lyfe",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.bgm }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['poda'], desc: "lyfe",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.poda }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['lyfe'], desc: "lyfe",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.lyfe }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['sed'], desc: "sed",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.sed }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['raganork'], desc: "raganork",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.raganork }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['bot'], desc: "bot",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.bot }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['hi'], desc: "hi",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.hi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['hey'], desc: "hey",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.hey }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['pavam'], desc: "pavam",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.pavam }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['admin'], desc: "admin",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.admin }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ok'], desc: "ok",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ok }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['nirthipoda'], desc: "nirthipoda",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.nirthipoda }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['sad'], desc: "sad",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.sad }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['eda'], desc: "eda",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.eda }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['tag'], desc: "tag",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.tag }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['umma'], desc: "umma",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.umma }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['velachil'], desc: "velachil",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.velachil }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['gold'], desc: "gold",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.gold }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['arada'], desc: "arada",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.arada }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['phub'], desc: "phub",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.phub }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['para'], desc: "para",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.para }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['fan'], desc: "fan",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.fan }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['duet'], desc: "duet",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.duet }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['aa'], desc: "aa",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.aa }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['thanks'], desc: "thanks",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.thanks }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['umfi'], desc: "umfi",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.umfi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['kozhi'], desc: "kozhi",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.kozhi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['who'], desc: "who",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.who }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['vaa'], desc: "vaa",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.vaa }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['sheri'], desc: "sheri",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.sheri }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['pedi'], desc: "pedi",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.pedi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['nannayi'], desc: "nannayi",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.nannayi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['kundan'], desc: "kundan",sucReact: "ðŸ˜¹",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.kundan }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['killadi'], desc: "killadi",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.killadi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['bhai'], desc: "bhai",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.bhai }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['kk'], desc: "kk",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.kk }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['violence'], desc: "violence",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.violence }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['hy'], desc: "hy",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.hy }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['suii'], desc: "suii",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.suii }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['single'], desc: "single",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.single }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['mass'], desc: "mass",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.mass }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['chunk'], desc: "chunk",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.chunk }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ooi'], desc: "ooi",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ooi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['haha'], desc: "haha",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.haha }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['jao'], desc: "jao",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.jao }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['beeshma'], desc: "beeshma",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.beeshma }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['kalipan'], desc: "kalipan",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.kalipan }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ettayi'], desc: "ettayi",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ettayi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['mothalali'], desc: "mothalali",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.mothalali }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['kaliyakunne'], desc: "kaliyakunne",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.kaliyakunne }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['nenben'], desc: "nenben",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.nenben }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['cr7'], desc: "cr7",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.cr7 }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ethokke'], desc: "ethokke",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ethokke }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['gangster'], desc: "gangster",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.gangster }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['idiot'], desc: "idiot",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.idiot }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ff'], desc: "ff",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ff }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['free'], desc: "free",sucReact: "ðŸ¤¥",  category: ["free"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.free }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['hlo'], desc: "hlo",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.hlo }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['helo'], desc: "helo",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.helo }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['big'], desc: "big",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.big }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['myre'], desc: "myre",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.myre }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['endi'], desc: "endi",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.endi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['perfect'], desc: "perfect",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.perfect }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['arum'], desc: "arum",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.arum }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['kooi'], desc: "kooi",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.kooi }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['njan'], desc: "njan",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.njan }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ne'], desc: "ne",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ne }, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
});
bots.inrl({ pattern: ['ara'], desc: "ara",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ara }, mimetype: "audio/mp4", fileName: `${Config.profile.owanerName}.mp3`, }, { quoted: message } );
});
bots.inrl({ pattern: ['hacker'], desc: "hacker",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.hacker }, mimetype: "audio/mp4", fileName: `${Config.profile.owanerName}.mp3`, }, { quoted: message } );
});
bots.inrl({ pattern: ['ayo'], desc: "ayo",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.ayo }, mimetype: "audio/mp4", fileName: `${Config.profile.owanerName}.mp3`, }, { quoted: message } );
});
bots.inrl({ pattern: ['mwonu'], desc: "mwonu",sucReact: "ðŸ¤¥",  category: ["bgm"]}, async (message, client) => {
await client.sendMessage( message.from, { audio: { url: Ibot.mwonu }, mimetype: "audio/mp4", fileName: `${Config.profile.owanerName}.mp3`, }, { quoted: message } );
});
};
*/
