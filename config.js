const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || '',
    U_STATUS: process.env.U_STATUS || 'true',
    MENTION: process.env.MENTION || 'on',
    WORKTYPE: process.env.WORKTYPE || 'public',
    OWNER : ["919446072492"],
    BRANCH: 'master',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    profile: {
    ownerName: "Ziyan", 
    ownerNumb: "919446072492", 
    botName: "WhatsBixby-MD", 
  },
    setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: false, // Chat Bot In Group | u can set true or false
      inbox: false, // chat bot in inbox | u can set true or false
    },
    reply: {
      sticker: false, // Boolean | ===== It not created now ======
      audio: false, // Boolean | ===== It not created now ======
    },
    presence: {
      is: false, // U Can on or off this () | u can set true or false
      value: "recording", // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ᴍᴅ",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    GIT : process.env.GIT || "https://tinyurl.com/3ex3e48e",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://www.youtube.com/channel/null",
    CAPTION : process.env.CAPTION || "*inrlbotmd*",
    SUDO: process.env.SUDO || '919446072492',
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/dbtjh2vu',
    ACR_A: "ff489a0160188cf5f0750eaf486eee74",
    ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp"
    };
