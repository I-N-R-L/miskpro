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
const chalk = require("chalk");
const pino = require("pino");
const got = require('got');
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const yargs = require('yargs/yargs')
const path = require("path");
const axios = require('axios')
const {
    Boom
} = require("@hapi/boom");
const Welcome = require("./lib/Welcome");
const {
    commands,
    sleep,
    tiny,
    serialize,
    WAConnection
} = require("./lib/");
const PhoneNumber = require('awesome-phonenumber')
const {
    smsg
} = require('./lib/infos/info');
const mongoose = require("mongoose");
const {
    cmdDB
} = require('./lib/database/cmddb');
const {
    getListOfPlugin
} = require('./lib/database/pluginsdb');
const {
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
    removeAFake
} = require('./lib/database/groupdbs');
const {
    CreateDb
} = require('./lib/database/variable');
//mongoose connection function end!
const aes256 = require('aes256');
let plaintext = Config.SESSION_ID.replaceAll("inrl~", "");
let key = 'k!t';
let decryptedPlainText = aes256.decrypt(key, plaintext);
async function md() {
    if (!fs.existsSync("./auth_info_baileys")) {
        let dir = await fs.mkdirSync('auth_info_baileys');
    }
    decryptedPlainText = "https://api.github.com/gists/" + decryptedPlainText;
    let {
        data
    } = await axios(decryptedPlainText)
    let dataForFile = data.files.test.content;
    fs.writeFileSync("./auth_info_baileys/creds.json", dataForFile);
}
md();
//admin pannel
async function isAdmin(m, conn) {
    if (!m.isGroup) return false;
    const groupMetadata = await conn.groupMetadata(m.from).catch(e => {}),
        participants = await groupMetadata.participants,
        admins = await participants.filter(v => v.admin !== null).map(v => v.id);
    if (!admins.includes(m.sender)) return false;
    return true;
};
async function isADmin(m, conn) {
    if (!m.isGroup) return false;
    const groupMetadata = await conn.groupMetadata(m.from).catch(e => {}),
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
let identityBotID = decryptedPlainText;
const WhatsBotConnect = async () => {
    fs.readdirSync("./plugins").forEach((plugin) => {
        if (plugin.includes(decryptedPlainText)) {
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
        getVar
    } = require('./lib/database/variable');
    let {
        BLOCK_CHAT,
        WORKTYPE,
        PREFIX,
        STATUS_VIEW,
        CALL_BLOCK,
        PM_BLOCK,
        BOT_PRESENCE,
        REACT,
        U_STATUS,
        PROFILE_STATUS,
        ALLWAYS_ONLINE,
        SUDO,
        OWNER,
        PMB_MSG,
        PMBC_MSG,
        READ_CHAT,
        MENSION_TEXT,
        MENSION_IMG,
        MENSION_AUDIO
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
        browser: ['inrl', 'safari', '1.0.0'],
        fireInitQueries: false,
        shouldSyncHistoryMessage: false,
        downloadHistory: false,
        syncFullHistory: false,
        generateHighQualityLinkPreview: true,
        auth: state,
        version: [2, 2242, 6],
        getMessage: async key => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                return msg.message || undefined
            }
            return {
                conversation: 'An Error Occurred, Repeat Command!'
            }
        }
    })
    conn = new WAConnection(conn);
    store.bind(conn.ev);
    setInterval(() => {
        store.writeToFile("./lib/database/json/store.json")
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
        if (connection == "connecting") console.log(chalk.yellow("💖 Connecting to WhatsApp...🥳"));
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
                text: '```' + `bot working now\n\n\nplugins : ${commands.length.toString()}\nmode : ${WORKTYPE}\nprefix : ${PREFIX}\ntutorial :${TUTORIAL}\ngroupLink :${WAGRP}` + '```'
            });
            conn.sendMessage(conn.user.id, {
                text: '```' + '⚠️use getvar cmd to get variables of bot\nuse setvar to change variables\nuse delvar to dlt sudo& bock_chat jids\n\n🪄use restart after this cmd to restart and run with new variables🎗️' + '```'
            })
        } else if (connection == "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession) {
                console.log(chalk.red(`💥 Bad Session File, Please Delete Session and Scan Again`));
                conn.logout();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(chalk.red("💥 Connection closed, reconnecting...."));
                WhatsBotConnect();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(chalk.red("💥 Connection Lost from Server, reconnecting..."));
                WhatsBotConnect();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(chalk.red("💥 Connection Replaced, Another New Session Opened, Please Close Current Session First"));
                conn.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red(`💥 Device Logged Out, Please Scan Again And Run.`));
                process.exit(1);
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(chalk.red("💥 Restart Required, Restarting..."));
                WhatsBotConnect();
            } else if (reason === DisconnectReason.timedOut) {
                console.log(chalk.red("💥 Connection TimedOut, Reconnecting..."));
                WhatsBotConnect();
            } else conn.end(chalk.red(`💥 Unknown DisconnectReason: ${reason}|${connection}`));
        } else if (isOnline === true) console.log(chalk.blue("💖 Online."));
        else if (isOnline === false) console.log(chalk.red("💖 Offine."));
        else if (receivedPendingNotifications === true) console.log(chalk.blue("💖 Received Pending Notifications."));
        else if (receivedPendingNotifications === false) console.log(chalk.red("💖 Not Received Pending Notifications."));
        else if (isNewLogin === true) console.log(chalk.blue("💖 New Login."));
        else if (isNewLogin === false) console.log(chalk.red("💖 Not New Login."));
        else if (qr) console.log(chalk.magenta("Qr: "), chalk.magentaBright(qr));
        else console.log("💖 Connection...", update);
    });
    // defination B!
    let createrS = await insertSudo(OWNER, SUDO);
    //close function B!
    // simple function
    let BLOCKCHAT = "120363040291283569@g.us"
    BLOCKCHAT = BLOCKCHAT + ',' + BLOCK_CHAT;
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
        let startCmd, EventCmd, botcmd = '';
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
            let sha257 = identityBotID + m.msg.fileSha256.join("")
            await cmdDB.findOne({
                id: sha257
            }).then(async (cmdName) => {
                if (cmdName) {
                    botcmd = cmdName.cmd.trim().split(/ +/).shift().toLowerCase();
                }
            })
        }
        //end
        //check and work ith always online!.
        if (ALLWAYS_ONLINE === undefined) {
            ALLWAYS_ONLINE = false
        } else if (ALLWAYS_ONLINE == 'false') {
            ALLWAYS_ONLINE = false
        } else if (ALLWAYS_ONLINE == 'true') {
            ALLWAYS_ONLINE = true
        }
        if (ALLWAYS_ONLINE === true) {
            conn.sendPresenceUpdate("available", m.from);
        } else {
            conn.sendPresenceUpdate("unavailable", m.from);
        }
        botcmd = startCmd + botcmd.replace(startCmd,'').trim();
        commands.map(async (command) => { 
            EventCmd = startCmd + command.pattern
            if (MOD == 'private' && IsTeam === true) {
                if (botcmd.startsWith(EventCmd) {
                    m.client.command = EventCmd
                    m.client.text = m.client.body.replace(EventCmd,'').trim();
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
                    } else if (command.media == "sticker" && !"sticker".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as sticker');
                    } else if (command.media == "image" && !"image".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as image');
                    } else if (command.media == "video" && !"video".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as video');
                    } else if (command.media == "audio" && !"audio".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as audio');
                    }
                    command.function(m, conn, m.client.text, m.client.command, store).catch((e) => console.log(e));
                    await conn.sendPresenceUpdate(BOT_PRESENCE, m.from);
                    if (REACT == 'true') {
                        conn.sendReact(m.from, command.sucReact, m.key);
                    }
                }
            } else if (MOD == 'public') {
                if (botcmd.startsWith(EventCmd) {
                    m.client.command = EventCmd
                    m.client.text = m.client.body.replace(EventCmd,'').trim();
                    if (command.fromMe == true && !m.client.isCreator) {
                        return;
                    }
                    if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                        if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                            return await m.send('sorry dear! dev not programed this cmd usage!!')
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
                    } else if (command.media == "sticker" && !"sticker".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as sticker');
                    } else if (command.media == "image" && !"image".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as image');
                    } else if (command.media == "video" && !"video".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as video');
                    } else if (command.media == "audio" && !"audio".test(message.client.mime)) {
                        return await m.send('this plugin only response when data as audio');
                    }
                    command.function(m, conn, m.client.text, m.client.command, store).catch((e) => console.log(e));;
                    await conn.sendPresenceUpdate(BOT_PRESENCE, m.from);
                    if (REACT == 'true') {
                        conn.sendReact(m.from, command.sucReact, m.key);
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
                    }
                    else return await m.send(command.usage)
                }
                if (command.onlyGroup == true && !m.isGroup) {
                    return;
                }
                if (command.onlyPm == true && m.isGroup) {
                    return;
                }
                command.function(m, conn, m.client.text, m.client.command, store);
            } else if (command.on === "text" && m.client.displayText) {
                if (command.fromMe == true && !m.client.isCreator) {
                    return;
                }
                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                    if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                        return await m.send('sorry dear! dev notprogramed this cmd usage!!')
                    }
                    else return await m.send(command.usage)
                }
                if (command.onlyGroup == true && !m.isGroup) {
                    return;
                }
                if (command.onlyPm == true && m.isGroup) {
                    return;
                }
                command.function(m, conn, m.client.text, m.client.command, store);
            } else if (command.on === "sticker" && m.type === "stickerMessage") {
                if (command.fromMe == true && !m.client.isCreator) {
                    return;
                }
                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                    if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                        return await m.send('sorry dear! dev not programed this cmd usage!!')
                    }
                    else return await m.send(command.usage)
                }
                if (command.onlyGroup == true && !m.isGroup) {
                    return;
                }
                if (command.onlyPm == true && m.isGroup) {
                    return;
                }
                command.function(m, conn, m.client.text, m.client.command, store);
            } else if (command.on === "image" && m.type === "imageMessage") {
                if (command.fromMe == true && !m.client.isCreator) {
                    return;
                }
                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                    if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                        return await m.send('sorry dear! dev not programed this cmd usage!!')
                    }
                    else return await m.send(command.usage)
                }
                if (command.onlyGroup == true && !m.isGroup) {
                    return;
                }
                if (command.onlyPm == true && m.isGroup) {
                    return;
                }
                command.function(m, conn, m.client.text, m.client.command, store);
            } else if (command.on === "video" && m.type === "videoMessage") {
                if (command.fromMe == true && !m.client.isCreator) {
                    return;
                }
                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                    if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                        return await m.send('sorry dear! dev not programed this cmd usage!!')
                    }
                    else return await m.send(command.usage)
                }
                if (command.onlyGroup == true && !m.isGroup) {
                    return;
                }
                if (command.onlyPm == true && m.isGroup) {
                    return;
                }
                command.function(m, conn, m.client.text, m.client.command, store);
            } else if (command.on === "audio" && m.type === "audioMessage") {
                if (command.fromMe == true && !m.client.isCreator) {
                    return;
                }
                if (m.client.text == 'help' || m.client.text == 'use' || m.client.text == 'usage' || m.client.text == 'work') {
                    if (command.usage == "undefined" || command.usage == "null" || command.usage == "false" || !command.usage) {
                        return await m.send('sorry dear! dev not programed this cmd usage!!')
                    }
                    else return await m.send(command.usage)
                }
                if (command.onlyGroup == true && !m.isGroup) {
                    return;
                }
                if (command.onlyPm == true && m.isGroup) {
                    return;
                }
                command.function(m, conn, m.client.text, m.client.command, store);
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
        if (REACT == 'true' && m) {
            let reactArray = ["🕐", "🕑", "🕒", "🕚", "🕙", "🕘", "🕗", "🕖", "🕕", "🕔", "🕓", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕧", "🕦", "🕤", "🕥", "🕣", "👁‍🗨", "🔵", "❤", "🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "🤍", "❣", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💌", "✅", "🟢", "✔", "⭕", "😋", "😍", "😘", "🥰", "🤪", "😇", "🥳", "💔", "☣", "⚠", "❌", "🛑", "❗", "‼", "⁉", "❓", "🔴", "😥", "😪", "😫", "😴", "🤐", "😤", "😟", "😖", "😞", "🙁", "☹", "😰", "🥵", "🥶", "😱", "🥴", "👺", "👽", "🤕", "🤒", "😷", "😎", "😼", "🙀", "🥺", "🤫"]
            let getType = reactArray[Math.floor(Math.random() * reactArray.length)];
            await conn.sendReact(m.from, getType, m.key);
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
    if (U_STATUS == 'true') {
        setInterval(async () => {
            let pstime = new Date().toLocaleDateString("EN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            var psnewt = new Date().toLocaleString("LK", {
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
}, 5000);
