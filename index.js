const fs = require("fs");
const speed = require('performance-now')
const Config = require('./config');
const { default: WASocket, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, makeInMemoryStore, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@adiwajshing/baileys");
const chalk = require("chalk");
const pino = require("pino");
const got = require('got');
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const yargs = require('yargs/yargs')
const path = require("path");
const { Boom } = require("@hapi/boom");
const { Simple, upsert, sleep,tiny } = require("./lib");
const Welcome = require("./lib/Welcome");
const inrl = require("./lib/perfix");
const PhoneNumber = require('awesome-phonenumber')
const { smsg } = require('./lib/infos/info');
const { AllLinkBan,removeByWord,actByPdm,isFakeNumber } = require('./lib/fake_remove');
const { IsMension }= require('./lib/set_mension');
const { serialize, WAConnection } = Simple;
const Levels = require("discord-xp");
const mongoose = require("mongoose")
//connecting to inrlDb
try {
    Levels.setURL("mongodb+srv://inrmd:fasweehfaz@cluster0.nxp4il6.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to Inrl DB")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri!")
    process.exit(0)
}

try{
        mongoose.connect("mongodb+srv://inrmd:fasweehfaz@cluster0.nxp4il6.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to Mongoose Db")
	} catch {
	console.log('Could not connect with Mongoose DB')
}
const { cmdDB } = require('./lib/database/cmddb');
const { getListOfPlugin } = require('./lib/database/pluginsdb');
//mongoose connection function end!
const aes256 = require('aes256');
let PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});
const mddc=(Config.SESSION_ID);
let m = (mddc);
let mdm = m.replaceAll("inrl~", "");
let key = 'k!t';
let plaintext = (mdm);
let decryptedPlainText = aes256.decrypt(key, plaintext);
pastebin
  .getPaste(decryptedPlainText)
  .then(async function smile(data) {
   fs.writeFileSync("./lib/auth_info_baileys/creds.json" , data);
});
let identityBotID = decryptedPlainText;
//gloab set
global.mydb = {};
global.mydb.users = new Array();
global.mydb.hits = new Number();
global.isInCmd = false;
global.catchError = false;
const WhatsBotConnect = async () => {
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/lib/auth_info_baileys')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }),});
store.readFromFile("./lib/database/json/store.json");
setInterval(() => { store.writeToFile("./lib/database/json/store.json")}, 30 * 1000);
  let { version, isLatest } = await fetchLatestBaileysVersion();
  connOptions = { markOnlineOnConnect: true, linkPreviewImageThumbnailWidth: 500, printQRInTerminal: true, browser: ["inrl", "Safari", "4.0.0"], logger: pino({ level: "silent" }), auth: state, version, };
  conn = WASocket(connOptions);
  conn = new WAConnection(conn);
  store.bind(conn.ev);
  conn.ev.on("creds.update", saveCreds);
  conn.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, isNewLogin, isOnline, qr, receivedPendingNotifications, } = update;
    if (connection == "connecting") console.log(chalk.yellow("💖 Connecting to WhatsApp...🥳"));
    else if (connection == "open") {
    console.log("installing plugins🔘")
    fs.readdirSync("./plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
      });
      console.log("plugin installed successfully☑️");
console.log("💖 Login successful! \n bot working now💗");
conn.sendMessage(conn.user.id, { text : "```bot working now 💗thanks for choosing inrlbotmd, if you have face any bug related on our bot please infrom our support group\nmode : ```"+Config.WORKTYPE+"```\nperfix :```"+Config.PERFIX});
}
    else if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) { console.log(chalk.red(`💥 Bad Session File, Please Delete Session and Scan Again`)); conn.logout(); } 
      else if (reason === DisconnectReason.connectionClosed) { console.log(chalk.red("💥 Connection closed, reconnecting....")); WhatsBotConnect(); } 
      else if (reason === DisconnectReason.connectionLost) { console.log(chalk.red("💥 Connection Lost from Server, reconnecting...")); WhatsBotConnect(); } 
      else if (reason === DisconnectReason.connectionReplaced) { console.log(chalk.red("💥 Connection Replaced, Another New Session Opened, Please Close Current Session First")); conn.logout(); } 
      else if (reason === DisconnectReason.loggedOut) { console.log(chalk.red(`💥 Device Logged Out, Please Scan Again And Run.`)); process.exit(0); } 
      else if (reason === DisconnectReason.restartRequired) { console.log(chalk.red("💥 Restart Required, Restarting...")); WhatsBotConnect(); } 
      else if (reason === DisconnectReason.timedOut) { console.log(chalk.red("💥 Connection TimedOut, Reconnecting...")); WhatsBotConnect(); } 
      else conn.end(chalk.red(`💥 Unknown DisconnectReason: ${reason}|${connection}`));
    } else if (isOnline === true) console.log(chalk.blue("💖 Online."));
    else if (isOnline === false) console.log(chalk.red("💖 Offine."));
    else if (receivedPendingNotifications === true) console.log(chalk.blue("💖 Received Pending Notifications."));
    else if (receivedPendingNotifications === false) console.log(chalk.red("💖 Not Received Pending Notifications."));
    else if (isNewLogin === true) console.log(chalk.blue("💖 New Login."));
    else if (isNewLogin === false) console.log(chalk.red("💖 Not New Login."));
    else if (qr) console.log(chalk.magenta("Qr: "), chalk.magentaBright(qr));
    else console.log("💖 Connection...", update);
    });
    // simple function
    let BLOCKCHAT = Config.BLOCKCHAT || 'your jid';
    if(BLOCKCHAT.includes(',')){
    BLOCKCHAT = BLOCKCHAT.split(',');
    }
    //ending thets function
    conn.ev.on("group-participants.update", async (m) => {
    if(BLOCKCHAT.includes(m.id)) return; else Welcome(conn, m); await actByPdm(m, conn)
    });
    conn.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = conn.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })
    conn.ev.on("messages.upsert", async (chatUpdate) => {
    let m = new serialize(conn, chatUpdate.messages[0]);
    if(Config.STATUS_VIEW == 'true' && chatUpdate.messages[0].key.remoteJid ==  "status@broadcast"){
    conn.sendReceipts([chatUpdate.messages[0].key],'read-self')
    }
    if ((BLOCKCHAT.includes(m.from)) || (!m.message) || (m.key && m.key.remoteJid == "status@broadcast") || (m.key.id.startsWith("BAE5") && m.key.id.length == 16)) return;
    if (global.mydb.users.indexOf(m.sender) == -1) global.mydb.users.push(m.sender);
    //add Your lib Functions
    await upsert(conn, m);
    await AllLinkBan(m, conn);
    await removeByWord(m, conn);
    await isFakeNumber(m, conn);
    await IsMension(m, conn);
    //end
    if(Config.CALL_BLOCK == "true"){
    if(!m.isGroup && !m.client.isCreator){
    conn.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    conn.sendMessage(callerId, { text: "calling to this number is't allowed"})
    await sleep(8000)
    await conn.updateBlockStatus(callerId, "block")
           }
       });
     }
  };
//inrl pm block specio function❣️//
if(Config.PM_BLOCK == "true"){
    if(!m.isGroup && !m.client.isCreator){
    conn.sendMessage(m.from, { text: "pm msg is't allowed"})
    conn.updateBlockStatus(m.from, "block")
    }
};
//IT CHECK AND INSTALL EXTERNEL PLUGINS
if(m){
let list = await getListOfPlugin();
for (let i=0;i<list.length;i++) {
name = list[i].name;
urls = list[i].url;
if(name && urls){
  let { body } = await got(list[i].url)
  await fs.writeFileSync('./plugins/'+list[i].name+'.js', body);
  }
}
fs.readdirSync("./plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
   });
}
//CHECK AND CREATE HANDLERS
let startCmd,EventCmd,botcmd ='';
let handler = Config.PERFIX ? Config.PERFIX.trim() : 'false';
if(handler == 'false'){
startCmd = '';
} else if(handler !== 'false'){
startCmd = handler;
}

//MODE MANAGER
    let mode = Config.WORKTYPE.toLowerCase();
    let MOD;
    if(mode.includes('public')){
    MOD = "public"
    } else if(mode.includes('privet')){
    MOD = "privet"
    } else MOD = "privet"
    let IsTeam = m.client.isCreator;

//PERFIX ACCESSIBLIE MANAGMENT
  if(m.client.body.startsWith(startCmd)){
  botcmd = startCmd+m.client.command;
  } else {
  botcmd = m.client.command;
}
//MAKE FUNCTION WITHOUT EVENTS
let msg = smsg(conn, chatUpdate.messages[0], store)
fs.readdirSync("./plugins").map((a)=>{
    let file =  require("./plugins/" + a);
      if (file.constructor.name === 'AsyncFunction') {
        file(msg, conn, m, store)
      }
  })

//Check if cmd exist on media
        if(m.msg && m.msg.fileSha256){
    	let sha257 = identityBotID+m.msg.fileSha256.join("")
        await cmdDB.findOne({ id: sha257 }).then(async(cmdName) => {
    	if(cmdName) {
    	botcmd = startCmd+cmdName.cmd.replaceAll(" ","");;
              }
         })
    }
//end
//MODEMANAGER RESPOSBLE OUTPUT ENDED
    inrl.commands.map(async (command) => {
      for (let i in command.pattern) {
        EventCmd = startCmd+command.pattern[i];
          if(MOD == 'privet' && IsTeam === true){
            if (EventCmd == botcmd){
            command.function(m, conn, m.client.text, m.client.command, store);
            conn.sendPresenceUpdate( Config.BOT_PRESENCE, m.from );
            if(Config.REACT =='true'){
            conn.sendReact(m.from, command.sucReact, m.key);
            }
            conn.sendPresenceUpdate("available", m.from);
            }
            } else if(MOD == 'public'){
            if(EventCmd == botcmd){
            command.function(m, conn, m.client.text, m.client.command, store);
            conn.sendPresenceUpdate( Config.BOT_PRESENCE, m.from );
            if(Config.REACT =='true'){
            conn.sendReact(m.from, command.sucReact, m.key);
            }
            conn.sendPresenceUpdate("available", m.from);
            }
          }
        }
     });
  });
  // support functions
  conn.getName = (jid, withoutContact  = false) => {
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
        } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
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
        await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
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
   
  //automatic reaction
            if(Config.REACT =='true' && m){
            let reactArray = ["INFO","SUCCESS","ERROR"];
            let getType = reactArray[Math.floor(Math.random() * reactArray.length)];
            conn.sendReact(m.from, await inrl.reactArry(getType), m.key);
            }
if(Config.U_STATUS =='true'){
  setInterval(async () => {
    let pstime = new Date().toLocaleDateString("EN", { weekday: "long", year: "numeric", month: "long", day: "numeric", });
    var psnewt = new Date().toLocaleString("LK", { timeZone: "Asia/Colombo" }).split(" ")[1];
    const biography = "💥 " + pstime + "\n🙃 " + psnewt + `${Config.PROFILE_STATUS}`;
    await conn.updateProfileStatus(tiny(biography));
  }, 1000 * 10);
};
   if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id); conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
}// function closing

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Inrl Server listening on port http://localhost:${port}`));
setTimeout(() => {
WhatsBotConnect().catch(err => console.log(err));
},2000);
