const {getVar} = require('../variable')
const { getBuffer } = require('../../cloud');
const fs = require('fs');
const { BufferToFile } = require('./send_buffer_data');
const axios = require('axios');
const cheerio = require('cheerio');
const { generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
const Config = require('../../../config')

async function quoted(m){
    let data = await getVar();
    let {FOOTER,BOT_INFO,OWNER,MENSION_TEXT} =data.data[0];
const text ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: getBuffer(BOT_INFO.split(',')[2]), surface: 200, message: MENSION_TEXT.split(',')[0], orderTitle:BOT_INFO.split(',')[0], sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const document = {key : {participant : '0@s.whatsapp.net', ...(m.key.remoteJid ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title:MENSION_TEXT.split(',')[0],jpegThumbnail: getBuffer(BOT_INFO.split(',')[2])}}}
const audio = {key: {participant: `0@s.whatsapp.net`, ...(m.key.remoteJid ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const gift = {key: {participant: `0@s.whatsapp.net`, ...(m.key.remoteJid ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":BOT_INFO.split(',')[0], "h": MENSION_TEXT.split(',')[0],'seconds': '359996400', 'gifPlayback': 'true', 'caption':BOT_INFO.split(',')[0], 'jpegThumbnail': getBuffer(BOT_INFO.split(',')[2])}}}
const gclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-161616974300@g.us","inviteCode":Config.WAGRP,"groupName":BOT_INFO.split(',')[1], "caption": `${m.client.pushname}`, 'jpegThumbnail': getBuffer(BOT_INFO.split(',')[2])}}}
const video = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.key.remoteJid? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":BOT_INFO.split(',')[0], "h": BOT_INFO.split(',')[1],'seconds': '359996400', 'caption': `${m.client.pushname}`, 'jpegThumbnail': getBuffer(BOT_INFO.split(',')[2])}}}
const local = {key : {participant : '0@s.whatsapp.net', ...(m.key.remoteJid ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: BOT_INFO.split(',')[0],jpegThumbnail: getBuffer(BOT_INFO.split(',')[2])}}}
const contact = { key: {participant: `0@s.whatsapp.net`, ...(m.key.remoteJid ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName':BOT_INFO.split(',')[0], 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${BOT_INFO.split(',')[1]},;;;\nFN:${BOT_INFO.split(',')[1]}\nitem1.TEL;waid=${OWNER}:${OWNER}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': getBuffer(BOT_INFO.split(',')[2]), thumbnail: getBuffer(BOT_INFO.split(',')[2]),sendEphemeral: true}}}
const status = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.key.remoteJid ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": MENSION_TEXT.split(',')[1] ,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail":getBuffer(BOT_INFO.split(',')[2]),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
return { text, document, audio, gift, gclink, video, local, contact, status }
}
		
function hentaivideo() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function send_vote(message, client){
      let data = await getVar();
      let {FOOTER} =data.data[0];
      const text = message.client.text;
      if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
      let t0, t1, t2, t3, t4, t5, t6, t7, t8,t9, rows = [];
         t0 = text.split(',')[0] || text;
         t1 = text.split(',')[1];
         t2 = text.split(',')[2];
         t3 = text.split(',')[3];
         t4 = text.split(',')[4];
         t5 = text.split(',')[5];
         t6 = text.split(',')[6];
         t7 = text.split(',')[7];
         t8 = text.split(',')[8];
         t9 = text.split(',')[9];
  if(t1) { rows.push({title: `${t1}`, rowId:"rowid1"}) };
  if(t2) { rows.push({title: `${t2}`, rowId:"rowid2"}) };
  if(t3) { rows.push({title: `${t3}`, rowId:"rowid3"}) };
  if(t4) { rows.push({title: `${t4}`, rowId:"rowid4"}) };
  if(t5) { rows.push({title: `${t5}`, rowId:"rowid5"}) };
  if(t6) { rows.push({title: `${t6}`, rowId:"rowid6"}) };
  if(t7) { rows.push({title: `${t7}`, rowId:"rowid7"}) };
  if(t8) { rows.push({title: `${t8}`, rowId:"rowid8"}) };
  if(t9) { rows.push({title: `${t9}`, rowId:"rowid9"}) };
const sections = [{title: `${t0}`, rows: rows}]
const button = {
        text: `${t0}`,
        footer: FOOTER,
        buttonText: "vote",
        sections,
}
return await client.sendMessage( message.from, button, { quoted: message, });
}

async function send_poll(m, c, t){
    let data = await getVar();
    let {FOOTER,BOT_INFO} =data.data[0];
let t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, options = [];
let cound = t.split(',').length - 1 || 2;
console.log(cound);
         t0 = t.split(',')[0] || "add options & information of this poll msg y 👉 , 👈this";
         t1 = t.split(',')[1] || "_add options by👉 , 👈this";
         t2 = t.split(',')[2] || "_add options by👉 , 👈this_";
         t3 = t.split(',')[3];
         t4 = t.split(',')[4];
         t5 = t.split(',')[5];
         t6 = t.split(',')[6];
         t7 = t.split(',')[7];
         t8 = t.split(',')[8];
         t9 = t.split(',')[9];
         t10 = t.split(',')[10];
  if(t1) { options.push({"optionName": `${t1}`}) };
  if(t2) { options.push({"optionName": `${t2}`}) };
  if(t3) { options.push({"optionName": `${t3}`}) };
  if(t4) { options.push({"optionName": `${t4}`}) };
  if(t5) { options.push({"optionName": `${t5}`}) };
  if(t6) { options.push({"optionName": `${t6}`}) };
  if(t7) { options.push({"optionName": `${t7}`}) };
  if(t8) { options.push({"optionName": `${t8}`}) };
  if(t9) { options.push({"optionName": `${t9}`}) };
  if(t10) { options.push({"optionName": `${t10}`}) };

let pollCreation = generateWAMessageFromContent(m.from, proto.Message.fromObject({
"pollCreationMessage": {
"name": t0 || BOT_INFO.split(',')[2] || t,
"options":options,
"selectableOptionsCount": cound,
	}
}), { userJid: m.from, quoted: m });
c.relayMessage(m.from, pollCreation.message, { messageId: pollCreation.key.id })
}
function truecaller(response){
const outPut = JSON.parse(response.body);
let msg =`╭────────────────────╮
│ name : ${outPut.name}
│ score : ${outPut.score}
│ anName : ${outPut.alternativeName}
│ access : ${outPut.access}
│ type : ${outPut.type}
│ country : ${outPut.country}
│ carrier : ${outPut.carrier}
│ city : ${outPut.city}
│ timeZone : ${outPut.timeZone}
│ format : ${outPut.format}
╰────────────────────╯`
return msg;
}
module.exports = { quoted, hentaivideo, send_vote, send_poll, truecaller };
