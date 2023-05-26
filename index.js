const speed = require('performance-now')
const fs = require("fs");
const Config = require('./config');
const {
        default: WASocket,
        DisconnectReason,
        useMultiFileAuthState,
        fetchLatestBaileysVersion,
        jidNormalizedUser,
        makeInMemoryStore,
        DEFAULT_CONNECTION_CONFIG,
        DEFAULT_LEGACY_CONNECTION_CONFIG,
        generateForwardMessageContent,
        prepareWAMessageMedia,
        generateWAMessageFromContent,
        generateMessageID,
        downloadContentFromMessage,
        jidDecode,
        proto
} = require("@adiwajshing/baileys");
const pino = require("pino");
const got = require('got');
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const yargs = require('yargs/yargs')
const path = require("path");
const axios = require('axios')
const {
        Boom
} = require("@hapi/boom");
const Welcome = require("./lib/infos/welcome");
const {
        commands,
        sleep,
        tiny,
        serialize,
        WAConnection,
        connect,
        smsg,
        cmdDB,
        getListOfPlugin,
        setAntiLink,
        removeAntiLink,
        getAntiLink,
        setAntiWord,
        removeAntiWord,
        getListOfWord,
        GetWords,
        removeWord,
        withValue,
        setpdm,
        removePdm,
        getPdm,
        setFakeNum,
        setFake,
        removeFake,
        getListofFake,
        GetFake,
        removeAFake,
        CreateDb,
        decrypt,
        getVar,
        getTog
} = require("./lib/");
const PhoneNumber = require('awesome-phonenumber')
const mongoose = require("mongoose");
//mongoose connection function end!
let session = decrypt(Config.SESSION_ID.replace("inrl~", ""))
async function toCOnnect() {
        await connect(session);
}
toCOnnect()
//admin pannel
async function isAdmin(m, conn) {
        if (!m.isGroup) return false;
        const groupMetadata = await conn.groupMetadata(m.from).catch(e => {});
        if (!groupMetadata) return false;
        participants = await groupMetadata.participants,
                admins = await participants.filter(v => v.admin !== null).map(v => v.id);
        if (!admins.includes(m.sender)) return false;
        return true;
};
async function isADmin(m, conn) {
        if (!m.isGroup) return false;
        const groupMetadata = await conn.groupMetadata(m.from).catch(e => {});
        if (!groupMetadata) return false;
        participants = await groupMetadata.participants,
                admins = await participants.filter(v => v.admin !== null).map(v => v.id);
        if (!admins.includes(conn.user.jid)) return false;
        return true;
}
//end init
//sudo manager function
function insertSudo(OWNER, SUDO) {
        let CreaterAr = [];
        CreaterAr.push(OWNER + '@s.whatsapp.net');
        if (SUDO.includes(',')) {
                let sudok = SUDO.replaceAll(' ', '');
                a = sudok.split(',');
                a.map((t) => {
                        t = t + '@s.whatsapp.net';
                        CreaterAr.push(t);
                })
        } else {
                IsSudo = SUDO.trim() + '@s.whatsapp.net';
                CreaterAr.push(IsSudo);
        }
        return CreaterAr;
}
//end!
//dlet unwanted storage as it free
function removeFile(FilePath) {
        const tmpFiless = fs.readdirSync('./' + FilePath)
        tmpFiless.map((tmpFiles) => {
                if (path.extname(tmpFiles).toLowerCase() == ".mp4") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".png") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".webp") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".jpg") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".jpeg") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".mp3") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".wav") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
                if (path.extname(tmpFiles).toLowerCase() == ".bin") {
                        fs.unlinkSync('./' + FilePath + '/' + tmpFiles)
                }
        });
        return true
};
// end
console.log('creating db for variable');
console.log('variable db created successfully☑️');
console.log('await few secounds to start Bot😛');
const WhatsBotConnect = async () => {
        fs.readdirSync("./plugins").forEach((plugin) => {
                if (plugin.includes(session)) {
                        fs.unlinkSync('./plugins/' + plugin)
                }
        });
        const MongoUri = Config.MONGO_URL || "mongodb+srv://inrmd:fasweehfaz@cluster0.nxp4il6.mongodb.net/?retryWrites=true&w=majority";
        mongoose.set("strictQuery", false);
        mongoose.connect(MongoUri).then(() => {
                console.log('Connected To Mongo DataBase')
        }).catch((err) => {
                mongoose.connect("mongodb+srv://inrl:fasweeh@cluster0.l6mj2ez.mongodb.net/?retryWrites=true&w=majority");
        })
        await CreateDb();
        let {
                BLOCK_CHAT,
                WORKTYPE,
                PREFIX,
                STATUS_VIEW,
                CALL_BLOCK,
                PM_BLOCK,
                BOT_PRESENCE,
                REACT,
                AUTO_BIO,
                PROFILE_STATUS,
                ALLWAYS_ONLINE,
                SUDO,
                BOT_INFO,
                PMB_MSG,
                PMBC_MSG,
                READ_CHAT
        } = await getVar();
        const {
                state,
                saveCreds
        } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
        const store = makeInMemoryStore({
                logger: pino().child({
                        level: "silent",
                        stream: "store"
                }),
        });
        conn = WASocket({
                logger: pino({
                        level: 'fatal'
                }),
                printQRInTerminal: false,
                patchMessageBeforeSending: (message) => {
                        const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
                        if (requiresPatch) {
                                message = {
                                        viewOnceMessage: {
                                                message: {
                                                        messageContextInfo: {
                                                                deviceListMetadataVersion: 2,
                                                                deviceListMetadata: {},
                                                        },
                                                        ...message,
                                                },
                                        },
                                };
                        }
                        return message;
                },
                getMessage: async key => {
                        if (store) {
                                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                                return msg.message || undefined
                        }
                        return {
                                conversation: 'An Error Occurred, Repeat Command!'
                        }
                },
                browser: ['the inrl', 'safari', '1.0.0'],
                auth: state
        })
        conn = new WAConnection(conn);
        store.bind(conn.ev);
        setInterval(() => {
                store.writeToFile("./lib/database/store.json")
        }, 30 * 1000);
        conn.ev.on("creds.update", saveCreds);
        conn.ev.on("connection.update", async (update) => {
                const {
                        lastDisconnect,
                        connection,
                        isNewLogin,
                        isOnline,
                        qr,
                        receivedPendingNotifications,
                } = update;
                if (connection == "connecting") console.log("💖 Connecting to WhatsApp...🥳");
                else if (connection == "open") {
                        console.log("installing plugins🔘");
                        let list = await getListOfPlugin();
                        for (let i = 0; i < list.length; i++) {
                                name = list[i].name;
                                urls = list[i].url;
                                if (name && urls) {
                                        let {
                                                body
                                        } = await got(list[i].url)
                                        await fs.writeFileSync('./plugins/' + list[i].name + '.js', body);
                                }
                        }
                        fs.readdirSync("./plugins").forEach((plugin) => {
                                if (path.extname(plugin).toLowerCase() == ".js") {
                                        require("./plugins/" + plugin);
                                }
                        });
                        let TUTORIAL = Config.TUTORIAL || 'URL',
                                WAGRP = Config.WAGRP || 'Wa_Group_Url';
                        console.log("plugin installed successfully☑️");
                        console.log("💖 Login successful! \n bot working now💗");
                        conn.sendMessage(conn.user.id, {
                                text: '```' + `bot working now\n\n\nplugins : ${commands.length.toString()}\nmode : ${WORKTYPE}\nprefix : ${PREFIX}\ntutorial :${TUTORIAL}\ngroupLink :${WAGRP}\n\n⚠️use getvar cmd to get variables of bot\nuse setvar to change variables\nuse delvar to dlt sudo& bock_chat jids\n\n🪄use restart after this cmd to restart and run with new variables🎗️` + '```'
                        })
                } else if (connection == "close") {
                        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
                        if (reason === DisconnectReason.badSession) {
                                console.log(`💥 Bad Session File, Please Delete Session and Scan Again`);
                                conn.logout();
                        } else if (reason === DisconnectReason.connectionClosed) {
                                console.log("💥 Connection closed, reconnecting....");
                                WhatsBotConnect();
                        } else if (reason === DisconnectReason.connectionLost) {
                                console.log("💥 Connection Lost from Server, reconnecting...");
                                WhatsBotConnect();
                        } else if (reason === DisconnectReason.connectionReplaced) {
                                console.log("💥 Connection Replaced, Another New Session Opened, Please Close Current Session First");
                                conn.logout();
                        } else if (reason === DisconnectReason.loggedOut) {
                                console.log(`💥 Device Logged Out, Please Scan Again And Run.`);
                                process.exit(1);
                        } else if (reason === DisconnectReason.restartRequired) {
                                console.log("💥 Restart Required, Restarting...");
                                WhatsBotConnect();
                        } else if (reason === DisconnectReason.timedOut) {
                                console.log("💥 Connection TimedOut, Reconnecting...");
                                WhatsBotConnect();
                        } else {
                                console.log(`💥 Unknown DisconnectReason: ${reason}|${connection}`)
                                WhatsBotConnect();
                        }
                } else if (isOnline === true) console.log("💖 Online.");
                else if (isOnline === false) console.log("💖 Offine.");
                else if (receivedPendingNotifications === true) console.log("💖 Received Pending Notifications.");
                else if (receivedPendingNotifications === false) console.log("💖 Not Received Pending Notifications.");
                else if (isNewLogin === true) console.log("💖 New Login.");
                else if (isNewLogin === false) console.log("💖 Not New Login.");
                else if (qr) console.log(qr);
                else console.log("💖 Connection...", update);
                //restart bot if connection == close;
        });
        // defination B!
        let createrS = await insertSudo(BOT_INFO.split(";")[0], SUDO);
        //close function B!
        // simple function
        let BLOCKCHAT = BLOCK_CHAT
        //ending thets function
        conn.ev.on("group-participants.update", async (m) => {
                if (BLOCKCHAT.includes(m.id.split('@')[0])) return;
                Welcome(conn, m);
                let gParticipants = m.participants;
                let isPdmOn = await getPdm(m.id);
                if (isPdmOn == 'true') {
                        for (let num of gParticipants) {
                                if (m.action == 'promote') {
                                        conn.sendMessage(m.id, {
                                                text: '_' + `@${num.split("@")[0]} promoted` + '_',
                                                mentions: [num]
                                        })
                                } else if (m.action == 'demote') {
                                        conn.sendMessage(m.id, {
                                                text: '_' + `@${num.split("@")[0]} demoted` + '_',
                                                mentions: [num]
                                        })
                                }
                        }
                }
        });
        conn.ev.on('contacts.update', update => {
                for (let contact of update) {
                        let id = conn.decodeJid(contact.id)
                        if (store && store.contacts) store.contacts[id] = {
                                id,
                                name: contact.notify
                        }
                }
        })
        const togcmds = await getTog();
        conn.ev.on("messages.upsert", async (chatUpdate) => {
                let m = new serialize(conn, JSON.parse(JSON.stringify(chatUpdate.messages[0])), createrS);
                if (STATUS_VIEW == 'true' && chatUpdate.messages[0].key.remoteJid == "status@broadcast") {
                        conn.sendReceipts([chatUpdate.messages[0].key], 'read-self')
                }
                if (BLOCKCHAT.includes(m.from.split('@')[0])) {
                        if (!m.isBot) return;
                        let adm = await isADmin(m, conn)
                        if (!adm) return;
                        if (m.isGroup) {
                                await conn.sendMessage(m.from, {
                                        delete: {
                                                remoteJid: m.key.remoteJid,
                                                fromMe: m.fromMe,
                                                id: m.id,
                                                participant: m.sender
                                        }
                                })
                        }
                }
                if (CALL_BLOCK == "true") {
                        if (!m.isGroup && !m.client.isCreator) {
                                conn.ws.on('CB:call', async (json) => {
                                        const callerId = json.content[0].attrs['call-creator']
                                        if (json.content[0].tag == 'offer') {
                                                conn.sendMessage(callerId, {
                                                        text: PMBC_MSG
                                                })
                                                await sleep(8000)
                                                await conn.updateBlockStatus(callerId, "block")
                                        }
                                });
                        }
                };
                //inrl pm block specio function❣️//
                if (PM_BLOCK == "true") {
                        if (!m.isGroup && !m.client.isCreator) {
                                conn.sendMessage(m.from, {
                                        text: PMB_MSG
                                })
                                conn.updateBlockStatus(m.from, "block")
                        }
                };
                //CHECK AND CREATE HANDLERS
                let startCmd, EventCmd, botcmd = '',
                        senscmd;
                let handler = PREFIX == 'false' ? 'false' : PREFIX.trim();
                if (handler == 'false') {
                        startCmd = '';
                } else if (handler !== 'false') {
                        startCmd = handler;
                }
                //MODE MANAGER
                let mode = WORKTYPE.toLowerCase();
                let MOD;
                if (mode.includes('public')) {
                        MOD = "public"
                } else if (mode.includes('private')) {
                        MOD = "private"
                } else MOD = "private"
                let IsTeam = m.client.isCreator;
                //MODEMANAGER RESPOSBLE OUTPUT ENDED
                //PERFIX ACCESSIBLIE MANAGMENT
                botcmd = m.client.body;
                //Check if cmd exist on media
                if (m.msg && m.msg.fileSha256) {
                        let sha257 = session + m.msg.fileSha256.join("")
                        await cmdDB.findOne({
                                id: sha257
                        }).then(async (cmdName) => {
                                if (cmdName) {
                                        botcmd = startCmd + cmdName.cmd.trim().split(/ +/).shift().toLowerCase();
                                }
                        })
                }
                //end
                if (ALLWAYS_ONLINE == "true") {
                        conn.sendPresenceUpdate("available", m.from);
                } else {
                        conn.sendPresenceUpdate("unavailable", m.from);
                }
                if (botcmd.startsWith(startCmd)) {
                        botcmd = startCmd + botcmd.replace(m.client.prefix, '').replace(startCmd, '').trim();
                } else {
                        botcmd = botcmd.replace(m.client.prefix, '').trim();
                }
                let cmmdd = botcmd;
                botcmd = botcmd.toLowerCase();
                if (!m.client.mime) {
                        m.client.mime = "text"
                }
                let isTog = false,
                        isReact = false;
                commands.map(async (command) => {
                        togcmds.map((l) => {
                                if (l.cmd == command.pattern.replace(/[^a-zA-Z0-9-+]/g, '')) {
                                        isTog = true
                                }
                        });
                        if (isTog) return
                        if (!command.pattern || m.isBot) return;
                        EventCmd = startCmd + command.pattern.replace(/[^a-zA-Z0-9-+]/g, '')
                        if (MOD == 'private' && IsTeam === true) {
                                if (botcmd.startsWith(EventCmd)) {
                                        m.client.command = EventCmd
                                        m.client.text = cmmdd.replace(startCmd, '').slice(EventCmd.length).trim();
                                        if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                                if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                        return await m.send('sorry dear user! not programed this cmd usage!!')
                                                } else return await m.send(command.usage)
                                        }
                                        if (command.onlyGroup == true && !m.isGroup) {
                                                return await m.send('_this plugin only work in group_')
                                        }
                                        if (command.onlyPm == true && m.isGroup) {
                                                return await m.send('_this plugin only work in personel chat_')
                                        }
                                        if (command.media == "text" && !m.client.displayText) {
                                                return await m.send('this plugin only response when data as text');
                                        } else if (command.media == "sticker" && !/webp/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as sticker');
                                        } else if (command.media == "image" && !/image/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as image');
                                        } else if (command.media == "video" && !/video/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as video');
                                        } else if (command.media == "audio" && !/audio/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as audio');
                                        }
                                        command.function(m, conn, m.client.text, m.client.command, store, chatUpdate).catch((e) => console.log(e));
                                        await conn.sendPresenceUpdate(BOT_PRESENCE, m.from);
                                        if (REACT == 'true') {
                                                isReact = true;
                                                await conn.sendMessage(m.from, {
                                                        react: {
                                                                text: command.sucReact,
                                                                key: m.key
                                                        }
                                                });
                                        }
                                }
                        } else if (MOD === 'public') {
                                if (m.from == "120363040291283569@g.us" && !m.client.isCreator) return;
                                if (botcmd.startsWith(EventCmd.trim())) {
                                        m.client.command = EventCmd
                                        m.client.text = cmmdd.replace(startCmd, '').slice(EventCmd.length).trim();
                                        if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                                if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                        return await m.send('sorry dear user! not programed this cmd usage!!')
                                                } else return await m.send(command.usage)
                                        }
                                        if (command.fromMe == true && !m.client.isCreator) {
                                                return;
                                        }
                                        if (command.onlyGroup == true && !m.isGroup) {
                                                return await m.send('_this plugin only work in group_')
                                        }
                                        if (command.onlyPm == true && m.isGroup) {
                                                return await m.send('_this plugin only work in personel chat_')
                                        }
                                        if (command.media == "text" && !m.client.displayText) {
                                                return await m.send('this plugin only response when data as text');
                                        } else if (command.media == "sticker" && !/webp/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as sticker');
                                        } else if (command.media == "image" && !/image/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as image');
                                        } else if (command.media == "video" && !/video/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as video');
                                        } else if (command.media == "audio" && !/audio/.test(m.client.mime)) {
                                                return await m.send('this plugin only response when data as audio');
                                        }
                                        command.function(m, conn, m.client.text, m.client.command, store, chatUpdate).catch((e) => console.log(e));
                                        await conn.sendPresenceUpdate(BOT_PRESENCE, m.from);
                                        if (REACT == 'true') {
                                                isReact = true;
                                                await conn.sendMessage(m.from, {
                                                        react: {
                                                                text: command.sucReact,
                                                                key: m.key
                                                        }
                                                });
                                        }
                                }
                        }
                        if (command.on === "all" && m) {
                                if (command.fromMe == true && !m.client.isCreator) {
                                        return;
                                }
                                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                return await m.send('sorry dear! dev notprogramed this cmd usage!!')
                                        } else return await m.send(command.usage)
                                }
                                if (command.onlyGroup == true && !m.isGroup) {
                                        return;
                                }
                                if (command.onlyPm == true && m.isGroup) {
                                        return;
                                }
                                command.function(m, conn, m.client.text, m.client.command, store, chatUpdate);
                        } else if (command.on === "text" && m.client.displayText) {
                                if (command.fromMe == true && !m.client.isCreator) {
                                        return;
                                }
                                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                return await m.send('sorry dear! dev notprogramed this cmd usage!!')
                                        } else return await m.send(command.usage)
                                }
                                if (command.onlyGroup == true && !m.isGroup) {
                                        return;
                                }
                                if (command.onlyPm == true && m.isGroup) {
                                        return;
                                }
                                command.function(m, conn, m.client.text, m.client.command, store, chatUpdate);
                        } else if (command.on === "sticker" && m.type === "stickerMessage") {
                                if (command.fromMe == true && !m.client.isCreator) {
                                        return;
                                }
                                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                return await m.send('sorry dear! dev not programed this cmd usage!!')
                                        } else return await m.send(command.usage)
                                }
                                if (command.onlyGroup == true && !m.isGroup) {
                                        return;
                                }
                                if (command.onlyPm == true && m.isGroup) {
                                        return;
                                }
                                command.function(m, conn, m.client.text, m.client.command, store, chatUpdate);
                        } else if (command.on === "image" && m.type === "imageMessage") {
                                if (command.fromMe == true && !m.client.isCreator) {
                                        return;
                                }
                                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                return await m.send('sorry dear! dev not programed this cmd usage!!')
                                        } else return await m.send(command.usage)
                                }
                                if (command.onlyGroup == true && !m.isGroup) {
                                        return;
                                }
                                if (command.onlyPm == true && m.isGroup) {
                                        return;
                                }
                                command.function(m, conn, m.client.text, m.client.command, store, chatUpdate);
                        } else if (command.on === "video" && m.type === "videoMessage") {
                                if (command.fromMe == true && !m.client.isCreator) {
                                        return;
                                }
                                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                return await m.send('sorry dear! dev not programed this cmd usage!!')
                                        } else return await m.send(command.usage)
                                }
                                if (command.onlyGroup == true && !m.isGroup) {
                                        return;
                                }
                                if (command.onlyPm == true && m.isGroup) {
                                        return;
                                }
                                command.function(m, conn, m.client.text, m.client.command, store, chatUpdate);
                        } else if (command.on === "audio" && m.type === "audioMessage") {
                                if (command.fromMe == true && !m.client.isCreator) {
                                        return;
                                }
                                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                                                return await m.send('sorry dear! dev not programed this cmd usage!!')
                                        } else return await m.send(command.usage)
                                }
                                if (command.onlyGroup == true && !m.isGroup) {
                                        return;
                                }
                                if (command.onlyPm == true && m.isGroup) {
                                        return;
                                }
                                command.function(m, conn, m.client.text, m.client.command, store, chatUpdate);
                        }
                });
                // some externel function
                try {
                        if (READ_CHAT == "true") {
                                conn.readMessages([m.key])
                        }
                        if (m.message) {
                                console.log("[ MESSAGE ]"),
                                        console.log(new Date()),
                                        console.log(m.client.displayText || m.type) + "\n" + console.log("=> From"),
                                        console.log(m.client.pushName),
                                        console.log(m.sender) + "\n" + console.log("=> In"),
                                        console.log(m.isGroup ? m.client.pushName : "Private Chat", m.from)
                        }
                } catch (err) {
                        console.log(err);
                }
                //MAKE FUNCTION WITHOUT EVENTS
                fs.readdirSync("./plugins").map((a) => {
                        let msg = smsg(conn, chatUpdate.messages[0])
                        let file = require("./plugins/" + a);
                        if (file.constructor.name === 'AsyncFunction') {
                                file(msg, conn, m, store)
                        } else if (file.constructor.name === 'Function') {
                                file(msg, conn, m, store)
                        }
                });
                // all link ban
                if (m.isGroup) {
                        let jid = m.from;
                        let text = m.client.displayText.toLowerCase() || 'ßßßßß';
                        let isInDb = await getAntiLink(jid);
                        if (isInDb == 'true' && !m.client.isCreator) {
                                if (text.includes('http')) {
                                        let adm = await isADmin(m, conn)
                                        if (!adm) return;
                                        let admm = await isAdmin(m, conn)
                                        if (admm) return;
                                        await conn.sendMessage(m.from, {
                                                delete: {
                                                        remoteJid: m.key.remoteJid,
                                                        fromMe: m.fromMe,
                                                        id: m.id,
                                                        participant: m.sender
                                                }
                                        })
                                        await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
                                        return await m.reply('links not allowed in this group')
                                }
                        }
                        let values = await GetWords(m.from)
                        if (values != 'no data') {
                                let text = m.client.displayText.toLowerCase() || 'ßßßßß';
                                if (values.includes(',')) {
                                        let value = values.split(',')
                                        await value.map(async (v) => {
                                                if (v && text.includes(v) && !m.client.isCreator) {
                                                        let adm = await isADmin(m, conn)
                                                        if (!adm) return;
                                                        let admm = await isAdmin(m, conn)
                                                        if (admm) return;
                                                        await conn.sendMessage(m.from, {
                                                                delete: {
                                                                        remoteJid: m.key.remoteJid,
                                                                        fromMe: m.fromMe,
                                                                        id: m.id,
                                                                        participant: m.sender
                                                                }
                                                        })
                                                        await m.reply('please follow the group rules')
                                                        return await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
                                                }
                                        })
                                } else if (values) {
                                        if (text.includes(values) && !m.client.isCreator) {
                                                let adm = await isADmin(m, conn)
                                                if (!adm) return;
                                                let admm = await isAdmin(m, conn)
                                                if (admm) return;
                                                await conn.sendMessage(m.from, {
                                                        delete: {
                                                                remoteJid: m.key.remoteJid,
                                                                fromMe: m.fromMe,
                                                                id: m.id,
                                                                participant: m.sender
                                                        }
                                                })
                                                await m.reply('please follow the group rules')
                                                return await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
                                        }
                                }
                        }
                        let valuess = await GetFake(m.from)
                        if (values !== 'no data') {
                                let sender = m.sender || 'ßßß';
                                if (valuess.includes(',')) {
                                        let value = valuess.split(',')
                                        await value.map(async (v) => {
                                                if (v && sender.startsWith(v) && !m.client.isCreator) {
                                                        let adm = await isADmin(m, conn)
                                                        if (!adm) return;
                                                        let admm = await isAdmin(m, conn)
                                                        if (admm) return;
                                                        await conn.sendMessage(m.from, {
                                                                delete: {
                                                                        remoteJid: m.key.remoteJid,
                                                                        fromMe: m.fromMe,
                                                                        id: m.id,
                                                                        participant: m.sender
                                                                }
                                                        })
                                                        await m.reply("this group isn't allowed your number format")
                                                        await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
                                                }
                                        })
                                } else if (valuess) {
                                        if (sender.startsWith(valuess) && !m.client.isCreator) {
                                                let adm = await isADmin(m, conn)
                                                if (!adm) return;
                                                let admm = await isAdmin(m, conn)
                                                if (admm) return;
                                                await conn.sendMessage(m.from, {
                                                        delete: {
                                                                remoteJid: m.key.remoteJid,
                                                                fromMe: m.fromMe,
                                                                id: m.id,
                                                                participant: m.sender
                                                        }
                                                })
                                                await m.reply("this group isn't allowed your number format")
                                                await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
                                        }
                                }
                        }
                }
                //end
                //automatic reaction
                if (REACT == 'true' && m && !isReact) {
                        let reactArray = ["🕐", "🕑", "🕒", "🕚", "🕙", "🕘", "🕗", "🕖", "🕕", "🕔", "🕓", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕧", "🕦", "🕤", "🕥", "🕣", "👁‍🗨", "🔵", "❤", "🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "🤍", "❣", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💌", "✅", "🟢", "✔", "⭕", "😋", "😍", "😘", "🥰", "🤪", "😇", "🥳", "💔", "☣", "⚠", "❌", "🛑", "❗", "‼", "⁉", "❓", "🔴", "😥", "😪", "😫", "😴", "🤐", "😤", "😟", "😖", "😞", "🙁", "☹", "😰", "🥵", "🥶", "😱", "🥴", "👺", "👽", "🤕", "🤒", "😷", "😎", "😼", "🙀", "🥺", "🤫"]
                        let getType = reactArray[Math.floor(Math.random() * reactArray.length)];
                        await conn.sendMessage(m.from, {
                                react: {
                                        text: getType,
                                        key: m.key
                                }
                        });
                }
        });
        // support functions
        conn.getName = (jid, withoutContact = false) => {
                id = conn.decodeJid(jid)
                withoutContact = conn.withoutContact || withoutContact
                let v
                if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
                        v = store.contacts[id] || {}
                        if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
                        resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                })
                else v = id === '0@s.whatsapp.net' ? {
                        id,
                        name: 'WhatsApp'
                } : id === conn.decodeJid(conn.user.id) ? conn.user : (store.contacts[id] || {})
                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
        }
        conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
                let vtype
                if (options.readViewOnce) {
                        message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                        vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                        delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                        delete message.message.viewOnceMessage.message[vtype].viewOnce
                        message.message = {
                                ...message.message.viewOnceMessage.message
                        }
                }
                let mtype = Object.keys(message.message)[0]
                let content = await generateForwardMessageContent(message, forceForward)
                let ctype = Object.keys(content)[0]
                let context = {}
                if (mtype != "conversation") context = message.message[mtype].contextInfo
                content[ctype].contextInfo = {
                        ...context,
                        ...content[ctype].contextInfo
                }
                const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                        ...content[ctype],
                        ...options,
                        ...(options.contextInfo ? {
                                contextInfo: {
                                        ...content[ctype].contextInfo,
                                        ...options.contextInfo
                                }
                        } : {})
                } : {})
                await conn.relayMessage(jid, waMessage.message, {
                        messageId: waMessage.key.id
                })
                return waMessage
        }
        conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
                //let copy = message.toJSON()
                let mtype = Object.keys(copy.message)[0]
                let isEphemeral = mtype === 'ephemeralMessage'
                if (isEphemeral) {
                        mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
                }
                let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
                let content = msg[mtype]
                if (typeof content === 'string') msg[mtype] = text || content
                else if (content.caption) content.caption = text || content.caption
                else if (content.text) content.text = text || content.text
                if (typeof content !== 'string') msg[mtype] = {
                        ...content,
                        ...options
                }
                if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
                else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
                if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
                else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
                copy.key.remoteJid = jid
                copy.key.fromMe = sender === conn.user.id
                return proto.WebMessageInfo.fromObject(copy)
        }
        conn.decodeJid = (jid) => {
                if (!jid) return jid
                if (/:\d+@/gi.test(jid)) {
                        let decode = jidDecode(jid) || {}
                        return decode.user && decode.server && decode.user + '@' + decode.server || jid
                } else return jid
        }
        //end suport function
        if (AUTO_BIO == 'true') {
                setInterval(async () => {
                        pstime = new Date().toLocaleDateString("EN", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                        });
                        psnewt = new Date().toLocaleString("LK", {
                                timeZone: "Asia/Colombo"
                        }).split(" ")[1];
                        const biography = "💥 " + pstime + "\n🙃 " + psnewt + `${PROFILE_STATUS}`;
                        await conn.updateProfileStatus(tiny(biography));
                }, 1000 * 60);
        };
        setInterval(async () => {
                await removeFile("");
                await removeFile("media");
        }, 1000 * 600);
        if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id);
        conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
} // function closing
app.get("/", (req, res) => {
        res.send("Hello World!");
});
app.listen(port, () => console.log(`Inrl Server listening on port http://localhost:${port}`));
setTimeout(() => {
        WhatsBotConnect().catch(err => console.log(err));
}, 3000);
