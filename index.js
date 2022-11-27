require("./global");
const fs = require("fs");
const Config = require('./config');
const { default: WASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, makeInMemoryStore, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG, } = require("@adiwajshing/baileys");
const chalk = require("chalk");
const pino = require("pino");
const express = require("express");
const app = express();
const port = process.env.port || 8080;
const router = express.Router();
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
global.mydb = {};
global.mydb.users = new Array();
global.mydb.hits = new Number();
global.isInCmd = false;
global.catchError = false;
var aes256 = require('aes256');
let PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});
const mddc=(Config.SESSION_ID);
var m = (mddc);
let mdm = m.replaceAll("inrl~", "");
var key = 'k!t';
var plaintext = (mdm);
var decryptedPlainText = aes256.decrypt(key, plaintext);
pastebin
  .getPaste(decryptedPlainText)
  .then(async function smile(data) {
   fs.writeFileSync("./session.json" , data);
});
setTimeout(() => {
router.get("/", async(req, res) => {
const WhatsBotConnect = async () => {
const { state, saveState } = useSingleFileAuthState("./session.json");
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }),});
store.readFromFile("./lib/database/json/store.json");
setInterval(() => { store.writeToFile("./lib/database/json/store.json")}, 30 * 1000);
if('./session.json' === false ){
console.log(' session file cretion failed ');
};
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
conn.sendMessage(conn.user.id, { text : "```bot working now 💗thanks for choosing inrlbotmd, if you have face any bug related on our bot please infrom our suppoer group```"+`*mode : ${Config.WORKTYPE}*` });
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
    global.isInCmd = false;
    let m = new serialize(conn, chatUpdate.messages[0]);
    if ((inrl.config.setting.blockchat.includes(m.from)) || (!m.message) || (m.key && m.key.remoteJid == "status@broadcast") || (m.key.id.startsWith("BAE5") && m.key.id.length == 16)) return;
    if (global.mydb.users.indexOf(m.sender) == -1) global.mydb.users.push(m.sender);
    await upsert(conn, m);
    await chatting(m, conn);
    await IsFake(m, conn);
    await AllLinkBan(m, conn);
    await FakeRemove(m, conn);
    await IsBadWord(m, conn);
    await IsMension(m, conn);
global.inrl = (m, conn) =>{}
//inrl bot call block speciol func!🥵//
if(Config.CALL_BLOCK == "true"){
    if(!m.isGroup){
    let users = Config.OWNER.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
    if(m.from !== users){
    conn.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    conn.sendMessage(callerId, { text: `iam already bussy bro! \nThen fans like as you calling?!\nhow i can response`})
    await sleep(8000)
    await conn.updateBlockStatus(callerId, "block")
           }
       });
     }
  }
}
//inrl pm block specio function❣️//
if(Config.PM_BLOCK == "true"){
    if(!m.isGroup){
    let users = Config.OWNER.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
    if(m.from !== users){
    conn.updateBlockStatus(m.from, "block")
    conn.sendMessage(m.from, { text: `hey bro!\nyou note thet i am bussy person!\nevery day we got 139,28,287😌 msgs on PM🤭\nHow i can response!?😹`})
      }
   }
};
//MODE MANAGER
    let mode = Config.WORKTYPE.toLowerCase();
    let MOD;
    if(mode.includes('public')){
    MOD = "public"
    } else if(mode.includes('privet')){
    MOD = "privet"
    } else MOD = "privet"
    let IsTeam = m.client.isCreator;
//MODEMANAGER RESPOSBLE OUTPUT ENDED
    try {
     inrl.commands.map(async (command) => {
        for (let i in command.pattern) {
        if(MOD == 'privet' && IsTeam === true){
          if (command.pattern[i] == m.client.command || command.on == "text"){
            global.isInCmd = true; global.mydb.hits += 1; global.catchError = false;
            if(Config.REACT =='true'){
            await conn.sendReact(m.from, await inrl.reactArry("INFO"), m.key);
            }
            await conn.sendPresenceUpdate( Config.BOT_PRESENCE, m.from );
            try {await command.function(m, conn, m.client.text, m.client.command, store);}
            catch (error) { global.catchError = true; console.log(error); }
            if(Config.REACT =='true'){
            global.catchError ? await conn.sendReact( m.from, await inrl.reactArry("ERROR"), m.key ) : await conn.sendReact(m.from, command.sucReact, m.key);
            }
            await conn.sendPresenceUpdate("available", m.from);
          }
         } else if(MOD == 'public'){
          if (command.pattern[i] == m.client.command || command.on == "text"){
            global.isInCmd = true; global.mydb.hits += 1; global.catchError = false;
            if(Config.REACT =='true'){
            await conn.sendReact(m.from, await inrl.reactArry("INFO"), m.key);
            }
            await conn.sendPresenceUpdate( Config.BOT_PRESENCE, m.from );
            try {await command.function(m, conn, m.client.text, m.client.command, store);}
            catch (error) { global.catchError = true; console.log(error); }
            if(Config.REACT =='true'){
            global.catchError ? await conn.sendReact( m.from, await inrl.reactArry("ERROR"), m.key ) : await conn.sendReact(m.from, command.sucReact, m.key);
            }
            await conn.sendPresenceUpdate("available", m.from);
          }
         }
        }
      });
     } catch (e) {
      console.log(e);
      sendErrorMessage(m.from,e,m.key,m,[],false);
    }
  });
if(Config.U_STATUS =='true'){
  setInterval(async () => {
    var utch = new Date().toLocaleDateString("EN", { weekday: "long", year: "numeric", month: "long", day: "numeric", });
    var ov_time = new Date().toLocaleString("LK", { timeZone: "Asia/Colombo" }).split(" ")[1];
    const biography = "📅 " + utch + "\n⌚ " + ov_time + `${Config.PROCFILE_DATA}`;
    await conn.updateProfileStatus(tiny(biography));
  }, 1000 * 10);
  if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id); conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
          };
     };
res.set(WhatsBotConnect())
WhatsBotConnect();
})
app.listen(port, () => {
    console.log(`Inrl Md Bot Running on port ${port}`)
       });
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
},2000);
