const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL =
	process.env.DATABASE_URL === undefined
		? './database.db'
		: process.env.DATABASE_URL
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || 'inrl~aERcvy7YuygegPGrUJeT5OWooCUlmxrh',
    PASSWORD: process.env.PASSWORD || 'inrl-bot-md',
    REACT : process.env.REACT || 'false',
    GROUP_CHAT : process.env.GROUP_CHAT || 'false',
    FREE_TXT : process.env.FREE_TXT || 'inrlbotmd',
    U_STATUS: process.env.U_STATUS || 'true',
    ALIVE_DATA : process.env.ALIVE_DATA || `aliveTxt;aliveText;alivebButtenText1;aliveTextButten2`,
    ALIVETXT: process.env.ALIVETXT || 'INRL-BOT-MD',
    MENTION: process.env.MENTION || 'on',
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD,INRL,https://i.imgur.com/DyLAuEh.jpg",
    BGMBOT : process.env.BGMBOT || 'false',
    WORKTYPE: process.env.WORKTYPE || 'public',
    LANG :process.env.LANG || 'EN', //values are ml, en only
    OWNER : process.env.OWNER || "917593919575",
    BRANCH: 'master',
    PROCFILE_DATA : process.env.PROCFILE_DATA || "\n\n💗 ᴀᴜᴛᴏ ᴍᴀᴛɪᴄ ʙɪᴏ ʙy ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    PM_BLOCK : process.env.PM_BLOCK || "false",
    CALL_BLOCK : process.env.CALL_BLOCK || "true",
    SET_ANTI_LINK : process.env.ANTILINK || 'youtube',
    FACK_REMOVE : process.env.ANTIFAKE || '91',
    ALL_LINK_BAN : process.env.ALL_LINK_BAN || 'true;120363044370289918@g.us',
    BAD_WORD_TEXT : "-&6";
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    DATABASE:
		DATABASE_URL === './database.db'
			? new Sequelize({
					dialect: 'sqlite',
					storage: DATABASE_URL,
					logging: false,
			  })
			: new Sequelize(DATABASE_URL, {
					dialect: 'postgres',
					ssl: true,
					protocol: 'postgres',
					dialectOptions: {
						native: true,
						ssl: { require: true, rejectUnauthorized: false },
					},
					logging: false,
			  }),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '5c70df7f-b11e-44cd-9b8f-4a67055e66ba',
        APP_NAME: process.env.HEROKU_APP_NAME || 'freetrsr-md'
    },
    BLOCK_CHAT : process.env.BLOCK_CHAT ||[],
    AUTO_CHAT_PM : process.env.AUTO_CHAT_PM || "false",
    AUTO_CHAT_GRP : process.env.AUTO_CHAT_GRP || "false",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    IS_PRESENCE : process.env.IS_PRESENCE || "false",
    CHATBOT : process.env.CHATBOT || 'null',
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ᴍᴅ",
    ALIVE : process.env.ALIVE || "https://i.imgur.com/DyLAuEh.jpg",
    IMG11 : process.env.IMG11 || "https://i.imgur.com/DyLAuEh.jpg",
    IMG12 : process.env.IMG12 || "https://imgur.com/AelfUJg.jpg",
    ERRIMG : process.env.ERRIMG || "https://imgur.com/ggvhL6C.jpg",
    INSTAGRAM : process.env.INSTAGRAM || "https://instagram.com/_user_not_define",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    GIT : process.env.GIT || "https://tinyurl.com/3ex3e48e",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://tinyurl.com/36r3668n",
    CAPTION : process.env.CAPTION || "_created by inrl-bot_",
    SUDO: process.env.SUDO || "917593919575",
    VIDEO : "https://tinyurl.com/3x38ajmn",
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/f5wh55mk',
    };
