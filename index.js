require("./global");
const fs = require("fs");
const Config = require('./config');
const { default: WASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, makeInMemoryStore, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG, } = require("@adiwajshing/baileys");
const chalk = require("chalk");
const pino = require("pino");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const yargs = require('yargs/yargs')
const path = require("path");
const { Boom } = require("@hapi/boom");
const { Simple, upsert, sleep,tiny } = require("./lib");
const inrlspfunc = require("./lib/Message")
const Welcome = require("./lib/Welcome");
const jsoConfig = JSON.parse(fs.readFileSync("./lib/database/config.json"));
const inrl = require("./lib/perfix");
const { chatting } = inrlspfunc;
const isFubc = require('./lib/fake_remove');
const setmension = require('./lib/set_mension');
const { IsMension } = setmension;
const { IsFake, AllLinkBan, FakeRemove, IsBadWord } = isFubc;
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
   fs.writeFileSync("./session.json" , data);
});
let identityBotID = decryptedPlainText;
//gloab set
global.BotID = identityBotID;
global.mydb = {};
global.mydb.users = new Array();
global.mydb.hits = new Number();
global.isInCmd = false;
global.catchError = false;
const WhatsBotConnect = async () => {
const { state, saveState } = useSingleFileAuthState("./session.json");
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }),});
store.readFromFile("./lib/database/json/store.json");
setInterval(() => { store.writeToFile("./lib/database/json/store.json")}, 30 * 1000);
  let { version, isLatest } = await fetchLatestBaileysVersion();
  connOptions = { markOnlineOnConnect: true, linkPreviewImageThumbnailWidth: 500, printQRInTerminal: true, browser: ["WhatsBixby", "Safari", "4.0.0"], logger: pino({ level: "silent" }), auth: state, version, };
  conn = WASocket(connOptions);
  conn = new WAConnection(conn);
  store.bind(conn.ev);
  conn.ev.on("creds.update", saveState);
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
conn.sendMessage(conn.user.id, { text : "```bot working now 💗thanks for choosing inrlbotmd, if you have face any bug related on our bot please infrom our support group``` *mode : "+Config.WORKTYPE });
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
    conn.ev.on("group-participants.update", async (m) => { if (inrl.config.setting.blockchat.includes(m.id)) return; else Welcome(conn, m);});
    conn.ev.on("messages.upsert", async (chatUpdate) => {
    let m = new serialize(conn, chatUpdate.messages[0]);
    if(Config.STATUS_VIEW == 'true' && chatUpdate.messages[0].key.remoteJid ==  "status@broadcast"){
    conn.sendReceipts([chatUpdate.messages[0].key],'read-self')
    }
    if ((inrl.config.setting.blockchat.includes(m.from)) || (!m.message) || (m.key && m.key.remoteJid == "status@broadcast") || (m.key.id.startsWith("BAE5") && m.key.id.length == 16)) return;
    if (global.mydb.users.indexOf(m.sender) == -1) global.mydb.users.push(m.sender);
    //add Your lib Functions
    await upsert(conn, m);
    await chatting(m, conn);
    await IsFake(m, conn);
    await AllLinkBan(m, conn);
    await FakeRemove(m, conn);
    await IsBadWord(m, conn);
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

//Check if cmd exist on media
    if(m.client.isMedia){
        if(m.msg.fileSha256){
    	let sha257 = identityBotID+m.msg.fileSha256.join("")
        await cmdDB.findOne({ id: sha257 }).then(async(cmdName) => {
    	if(cmdName) {
    	botcmd = startCmd+cmdName.cmd;
              }
         })
    }
}
//end

//automatic reaction
            if(Config.REACT =='true' && m){
            conn.sendReact(m.from, await inrl.reactArry("INFO"), m.key);
            }

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
            if(EventCmd == botcmd || command.on == "text"){
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
if(Config.U_STATUS =='true'){
  setInterval(async () => {
    let pstime = new Date().toLocaleDateString("EN", { weekday: "long", year: "numeric", month: "long", day: "numeric", });
    var psnewt = new Date().toLocaleString("LK", { timeZone: "Asia/Colombo" }).split(" ")[1];
    const biography = "💥 " + pstime + "\n🙃 " + psnewt + `${Config.PROFILE_STATUS}`;
    await conn.updateProfileStatus(tiny(biography));
  }, 1000 * 10);
  if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id); conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
          };
}// function closing

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Inrl Server listening on port http://localhost:${port}`));
setTimeout(() => {
WhatsBotConnect().catch(err => console.log(err));
},2000);
