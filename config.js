const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || '',
    PASSWORD: process.env.PASSWORD || '',
    U_STATUS: process.env.U_STATUS || 'true',
    MENTION: process.env.MENTION || 'on',
    BGMBOT : process.env.BGMBOT || 'on',
    WORKTYPE: process.env.WORKTYPE || 'public',
    LANG :process.env.LANG || 'ml', //values are ml, en only
    OWNER : ["917593919575"],
    BRANCH: 'master',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '10e5c5fb-7127-4687-8afc-40a26e51d0f4',
        APP_NAME: process.env.HEROKU_APP_NAME || 'inrl-bot-v1'
    },
    profile: {
    ownerName: "inrl", 
    ownerNumb: "917593919575", 
    botName: "inrl-bot-md", 
  },
    setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: false, // Chat Bot In Group | u can set true or false
      inbox: true, // chat bot in inbox | u can set true or false
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
    ALIVE : "https://i.imgur.com/DyLAuEh.jpg",
    IMG11 : "https://i.imgur.com/DyLAuEh.jpg",
    IMG12 : "https://imgur.com/AelfUJg.jpg",
    ERRIMG : "https://imgur.com/ggvhL6C.jpg",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    INSTAGRAM : "https://instagram.com/_user_undifined_",
    GIT : process.env.GIT || "https://tinyurl.com/3ex3e48e",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://www.youtube.com/channel/null",
    CAPTION : process.env.CAPTION || "_created by inrl-bot_",
    SUDO: process.env.SUDO || ['917593919575'],
    VIDEO : "coming soon",
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/f5wh55mk',
    DB_URL:process.env.DATABASE_URL,
   };
