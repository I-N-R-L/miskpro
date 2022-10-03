const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || 'inrl~aERcvy7YuygegPGrUJeT5OWooCUlmxrh',
    PASSWORD: process.env.PASSWORD || '',
    U_STATUS: process.env.U_STATUS || 'true',
    MENTION: process.env.MENTION || 'on',
    BGMBOT : process.env.BGMBOT || 'false',
    FREE_TXT:"INRL",
    WORKTYPE: process.env.WORKTYPE || 'privet',
    PERFIX : ".",
    LANG :process.env.LANG || 'ml', //values are ml, en only
    OWNER : ["917593919575"],
    ANTIFAKE : "+212,+94,+27",
    ANTILINK : "youtube||Instagram",
    REACT : "false",
    PRODUCT_ID:"https://wa.me/p/4919198358182077/917025099154",
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '8e1c3eb4-d26d-43cc-8d24-ea824945ccc8',
        APP_NAME: process.env.HEROKU_APP_NAME || 'inrl-bo'
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
