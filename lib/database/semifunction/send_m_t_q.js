const Config = require('../../../config');
const { getBuffer } = require('../../cloud');
const fs = require('fs');
const { BufferToFile } = require('./send_buffer_data');

async function quoted(m){
const text ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: getBuffer(Config.BOT_INFO.split(',')[2]), surface: 200, message: Config.MENSION.MENSION_TEXT.split(',')[0], orderTitle:Config.BOT_INFO.split(',')[0], sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const document = {key : {participant : '0@s.whatsapp.net', ...(m.from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title:Config.MENSION.MENSION_TEXT.split(',')[0],jpegThumbnail: getBuffer(Config.BOT_INFO.split(',')[2])}}}
const audio = {key: {participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const gift = {key: {participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":Config.BOT_INFO.split(',')[0], "h": Config.MENSION.MENSION_TEXT.split(',')[0],'seconds': '359996400', 'gifPlayback': 'true', 'caption':Config.BOT_INFO.split(',')[0], 'jpegThumbnail': getBuffer(Config.BOT_INFO.split(',')[2])}}}
const gclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-161616974300@g.us","inviteCode":Config.WAGRP,"groupName":Config.BOT_INFO.split(',')[1], "caption": `${m.client.pushname}`, 'jpegThumbnail': getBuffer(Config.BOT_INFO.split(',')[2])}}}
const video = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.from? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":Config.BOT_INFO.split(',')[0], "h": Config.BOT_INFO.split(',')[1],'seconds': '359996400', 'caption': `${m.client.pushname}`, 'jpegThumbnail': getBuffer(Config.BOT_INFO.split(',')[2])}}}
const local = {key : {participant : '0@s.whatsapp.net', ...(m.from ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: Config.BOT_INFO.split(',')[0],jpegThumbnail: getBuffer(Config.BOT_INFO.split(',')[2])}}}
const contact = { key: {participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName':Config.BOT_INFO.split(',')[0], 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Config.BOT_INFO.split(',')[1]},;;;\nFN:${Config.BOT_INFO.split(',')[1]}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': getBuffer(Config.BOT_INFO.split(',')[2]), thumbnail: getBuffer(Config.BOT_INFO.split(',')[2]),sendEphemeral: true}}}
const status = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": Config.MENSION.MENSION_TEXT.split(',')[1] ,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail":getBuffer(Config.BOT_INFO.split(',')[2]),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
return { text, document, audio, gift, gclink, video, local, contact, status }
}
		

async function send_vote(message, client){
    
      const text = message.client.text;
      if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
      let t0, t1, t2, t3, t4, t5, t6, t7, t8,t9, rows= [];
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
  if(t1) { raws.push({title: `${t1}`, rowId:"rowid1"}) };
  if(t2) { raws.push({title: `${t2}`, rowId:"rowid2"}) };
  if(t3) { raws.push({title: `${t3}`, rowId:"rowid3"}) };
  if(t4) { raws.push({title: `${t4}`, rowId:"rowid4"}) };
  if(t5) { raws.push({title: `${t5}`, rowId:"rowid5"}) };
  if(t6) { raws.push({title: `${t6}`, rowId:"rowid6"}) };
  if(t7) { raws.push({title: `${t7}`, rowId:"rowid7"}) };
  if(t8) { raws.push({title: `${t8}`, rowId:"rowid8"}) };
  if(t9) { raws.push({title: `${t9}`, rowId:"rowid9"}) };
const sections = [{title: `${t0}`, rows: rows}]
const button = {
        text: `${t0}`,
        footer: Config.FOOTER,
        buttonText: "vote",
        sections,
}

await client.sendMessage( message.from, button, { quoted: message, });
}

module.exports = { quoted, send_vote };
