const speed = require('performance-now')
const fs = require("fs");
const Config = require('./config');
let cron = require('node-cron');
const {
    default: WASocket,
    DisconnectReason,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    DEFAULT_CONNECTION_CONFIG,
    DEFAULT_LEGACY_CONNECTION_CONFIG,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    proto,
    Browsers,
    makeCacheableSignalKeyStore,
    isJidBroadcast
} = require("@whiskeysockets/baileys");
const {
    limit
} = require('./lib/database/limit');
const pino = require("pino");
const got = require('got');
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
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
    getTog,
    remainLimit,
    giveLimit,
    resetLimit,
    getLimit,
    UpdateLimit,
    removeUserLimit,
    isFiltered,
    addFilter,
    isFilter,
    sendFilterMessage,
    filterDB
} = require("./lib/");
const mongoose = require("mongoose");
let session = decrypt(Config.SESSION_ID.replace("inrl~", ""))
async function toCOnnect() {
    await connect(session);
}
toCOnnect()
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
console.log('await few secounds to start Bot😛');
const WhatsBotConnect = async () => {
    //remove user limit each 12hrs;
    cron.schedule('00 12 * * *', async () => {
        await limit.find({
            session: session
        }).then(async (iscmd) => {
            if (iscmd[0]) {
                iscmd.map(async () => {
                    await limit.findOneAndUpdate({
                        session: session
                    }, {
                        count: "0"
                    });
                });
            }
        });
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });
    try {
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
        const {
            SUDO,
            BOT_INFO,
            WORKTYPE,
            PREFIX,
            BLOCK_CHAT,
            AUTO_BIO,
            PROFILE_STATUS
        } = await getVar();
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(__dirname + '/auth_info_baileys');
        const logger = pino({
            level: "silent"
        });
        let conn = WASocket({
            logger,
            browser: Browsers.macOS("Desktop"),
            syncFullHistory: true,
            version: [2, 2323, 4],
            printQRInTerminal: true,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger),
            },
            generateHighQualityLinkPreview: true
        });
        conn.ev.on("creds.update", saveCreds);
        conn = new WAConnection(conn);
        conn.ev.on("connection.update", async (update) => {
            const {
                connection
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
                let createrS = await insertSudo(BOT_INFO.split(";")[0], SUDO);
                let BLOCKCHAT = " ";
                if (BLOCK_CHAT && BLOCK_CHAT.includes(',')) {
                    BLOCKCHAT = BLOCK_CHAT.replaceAll(' ', '').split(',');
                } else if (BLOCK_CHAT) {
                    BLOCKCHAT = BLOCK_CHAT.trim();
                }
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
                conn.ev.on("messages.upsert", async (chatUpdate) => {
                    let m = new serialize(conn, JSON.parse(JSON.stringify(chatUpdate.messages[0])), createrS);
                    const {
                        data
                    } = await getVar();
                    let {
                        STATUS_VIEW,
                        CALL_BLOCK,
                        PM_BLOCK,
                        BOT_PRESENCE,
                        REACT,
                        ALLWAYS_ONLINE,
                        PMB_MSG,
                        PMBC_MSG,
                        READ_CHAT,
                        ANTI_SPAM
                    } = data[0];
                    if (STATUS_VIEW == 'true' && chatUpdate.messages[0].key.remoteJid == "status@broadcast") {
                        conn.sendReceipts([chatUpdate.messages[0].key], 'read-self')
                    }
                    let filterText = false;
                    if (await isFilter(m.from)) {
                        await sendFilterMessage(m.from, m.client.body, m);
                        await filterDB.find({
                            session: session,
                            jid: m.from
                        }).then(async (iscmd) => {
                            if (iscmd[0]) {
                                iscmd.map(({
                                    prefix,
                                    chat,
                                    type
                                }) => {
                                    if (m.client.body.includes(prefix) && type == "text") {
                                        filterText = chat;
                                    }
                                });
                            }
                        });
                    }
                    if (ANTI_SPAM == "true" && isFiltered() && !m.client.isCreator) return;
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
                    if (PM_BLOCK == "true") {
                        if (!m.isGroup && !m.client.isCreator) {
                            conn.sendMessage(m.from, {
                                text: PMB_MSG
                            })
                            conn.updateBlockStatus(m.from, "block")
                        }
                    };
                    const togcmds = await getTog();
                    let handler = PREFIX == 'false' ? false : PREFIX.trim()
                    let noncmd = handler == false ? false : true;
                    if (handler != false && m.client.body.startsWith(handler)) {
                        m.client.body = m.client.body.replace(handler, '').trim()
                        noncmd = false
                    }
                    let MOD = WORKTYPE.toLowerCase() == 'public' ? 'public' : 'private';
                    if (m.msg && m.msg.fileSha256) {
                        let sha257 = session + m.msg.fileSha256.join("")
                        await cmdDB.findOne({
                            id: sha257
                        }).then(async (cmdName) => {
                            if (cmdName) {
                                m.client.body = cmdName.cmd.trim().toLowerCase();
                                noncmd = false;
                            }
                        })
                    }
                    if (filterText != false) {
                        m.client.body = filterText;
                        noncmd = false;
                        m.isBot = false;
                    }
                    const resWithText = false;
                    if (m.quoted && m.quoted.text && m.client.text && !isNaN(m.client.text)) {
                        let textformat = m.quoted.text.split('\n');
                        if(textformat[0]){
                        textformat.map((s) => {
                            if (s.includes('```') && s.split('```').length == 3 && s.match(m.client.text)) {
                                resWithText += s.split('```')[1];
                            }
                        });
                        if (m.quoted.text.includes('*') && m.quoted.text.split('*').length >= 3) {
                            resWithText += m.quoted.text.split('*')[1];
                        }
                      }
                    }
                    if (resWithText != false) {
                    m.client.body = resWithText
                    noncmd = false;
                    m.isBot = false;
                    }
                    if (ALLWAYS_ONLINE == "true") {
                        conn.sendPresenceUpdate("available", m.from);
                    } else {
                        conn.sendPresenceUpdate("unavailable", m.from);
                    }
                    if (!m.client.mime) {
                        m.client.mime = "text"
                    }
                    let isTog = false,
                        isReact = false;
                    commands.map(async (command) => {
                        if (MOD == 'private' && !m.client.isCreator) {
                            if (command.fromMe != 'public') {
                                return
                            }
                        }
                        if (togcmds != 'no data') {
                            togcmds.map((l) => {
                                if (m.client.body.toLowerCase().startsWith(l.cmd)) {
                                    isTog = true
                                }
                            });
                        }
                        if (isTog) return
                        if (!command.pattern || m.isBot) return;
                        EventCmd = command.pattern.replace(/[^a-zA-Z0-9-+]/g, '')
                        if (m.from == "120363040291283569@g.us" && !m.client.isCreator) return;
                        if (m.client.body.toLowerCase().startsWith(EventCmd) && !noncmd) {
                            if (command.pattern.includes('$') && !m.client.isCreator) {
                                let validLimit = await remainLimit(m.sender.split('@')[0]);
                                if (!validLimit) return;
                                let currentLimit = await getLimit(m.sender.split('@')[0]);
                                await UpdateLimit(m.sender.split('@')[0], -((-currentLimit) - 1).toString());
                            }
                            m.client.command = handler + EventCmd
                            m.client.text = m.client.body.slice(EventCmd.length).trim();
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
                            if (ANTI_SPAM == "true") addFilter(m.from);
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]).catch((e) => console.log(e));
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
                        if (command.on === "all" && m) {
                            if (command.fromMe == true && !m.client.isCreator) return;
                            if (command.onlyGroup == true && !m.isGroup) return;
                            if (command.onlyPm == true && m.isGroup) return;
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]);
                        } else if (command.on === "text" && m.client.displayText) {
                            if (command.fromMe == true && !m.client.isCreator) return;
                            if (command.onlyGroup == true && !m.isGroup) return;
                            if (command.onlyPm == true && m.isGroup) return;
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]);
                        } else if (command.on === "sticker" && m.type === "stickerMessage") {
                            if (command.fromMe == true && !m.client.isCreator) return;
                            if (command.onlyGroup == true && !m.isGroup) return;
                            if (command.onlyPm == true && m.isGroup) return;
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]);
                        } else if (command.on === "image" && m.type === "imageMessage") {
                            if (command.fromMe == true && !m.client.isCreator) return;
                            if (command.onlyGroup == true && !m.isGroup) return;
                            if (command.onlyPm == true && m.isGroup) return;
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]);
                        } else if (command.on === "video" && m.type === "videoMessage") {
                            if (command.fromMe == true && !m.client.isCreator) return;
                            if (command.onlyGroup == true && !m.isGroup) return;
                            if (command.onlyPm == true && m.isGroup) return;
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]);
                        } else if (command.on === "audio" && m.type === "audioMessage") {
                            if (command.fromMe == true && !m.client.isCreator) return;
                            if (command.onlyGroup == true && !m.isGroup) return;
                            if (command.onlyPm == true && m.isGroup) return;
                            command.function(m, conn, m.client.text, m.client.command, chatUpdate, data[0]);
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
                    fs.readdirSync("./plugins").map((a) => {
                        let msg = smsg(conn, chatUpdate.messages[0])
                        let file = require("./plugins/" + a);
                        if (file.constructor.name === 'AsyncFunction') {
                            file(msg, conn, m)
                        } else if (file.constructor.name === 'Function') {
                            file(msg, conn, m)
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
                        if (m.client.body.match(/\p{EPres}|\p{ExtPict}/gu)) {
                            await conn.sendMessage(m.from, {
                                react: {
                                    text: m.client.body.match(/\p{EPres}|\p{ExtPict}/gu)[0],
                                    key: m.key
                                }
                            });
                        } else {
                            let reactArray = ["🕐", "🕑", "🕒", "🕚", "🕙", "🕘", "🕗", "🕖", "🕕", "🕔", "🕓", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕧", "🕦", "🕤", "🕥", "🕣", "👁‍🗨", "🔵", "❤", "🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "🤍", "❣", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💌", "✅", "🟢", "✔", "⭕", "😋", "😍", "😘", "🥰", "🤪", "😇", "🥳", "💔", "☣", "⚠", "❌", "🛑", "❗", "‼", "⁉", "❓", "🔴", "😥", "😪", "😫", "😴", "🤐", "😤", "😟", "😖", "😞", "🙁", "☹", "😰", "🥵", "🥶", "😱", "🥴", "👺", "👽", "🤕", "🤒", "😷", "😎", "😼", "🙀", "🥺", "🤫"]
                            let getType = reactArray[Math.floor(Math.random() * reactArray.length)];
                            await conn.sendMessage(m.from, {
                                react: {
                                    text: getType,
                                    key: m.key
                                }
                            });
                        }
                    }
                });
            } else if (connection === "close") {
                console.log("Connection closed with bot. Please put New Session ID again.");
                WhatsBotConnect();
            }
        });
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
    } catch (err) {
        console.log(err)
    }
} // function closing
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => console.log(`Inrl Server listening on port http://localhost:${port}`));
setTimeout(() => {
    WhatsBotConnect();
}, 3000);
