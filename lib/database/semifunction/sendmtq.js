const moment = require('moment-timezone')

const ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

		

async function send_vote(message, client){
    
      const text = message.client.text;
      if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
      let t0, t1, t2, t3, t4, t5, t6, t7, t8,t9;
         t0 = text.split(',')[0];
         t1 = text.split(',')[1];
         t2 = text.split(',')[2];
         t3 = text.split(',')[3];
         t4 = text.split(',')[4];
         t5 = text.split(',')[5];
         t6 = text.split(',')[6];
         t7 = text.split(',')[7];
         t8 = text.split(',')[8];
         t9 = text.split(',')[9];
      }
      
    
  
  const rows = [
 {title: `${bottomText}`, rowId:"rowid1"},
 {title: `${tl}`,  rowId:"rowid2"}
]

const sections = [{title: `${topText}`, rows: rows}]
const button = {
        text: `${topText}`,
        footer: "inrl",
        buttonText: "vote",
        sections,
}

await client.sendMessage( message.from, button, { quoted: message, });
}
async set_auto_mute(m, c, j){
let t = m.client.text.trim();
let split = t.includes(':') ?  t.split(':') : t.split('.')
let hrs = split[0];
let mnt = split[1];
let crtme = moment().tz('Asia/Kolkata').format('HH:mm:ss')
let hr = crtme.split(':')[0]
let mt = crtme.split(':')[1]
if(j.match(m.from)){
if(hrs == hr && mnt == mt){
await c.groupSettingUpdate(m.from, "announcement");
        }
    }
}
async set_auto_unmute(m, c, j){
let t = m.client.text.trim();
let split = t.includes(':') ?  t.split(':') : t.split('.')
let hrs = split[0];
let mnt = split[1];
let crtme = moment().tz('Asia/Kolkata').format('HH:mm:ss')
let hr = crtme.split(':')[0]
let mt = crtme.split(':')[1]
if(j.match(m.from)){
if(hrs == hr && mnt == mt){
await c.groupSettingUpdate(m.from, "not_announcement");
        }
    }
}
module.exports = { hi, ha };
