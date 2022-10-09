require("./global");
const fs = require("fs");
const Config = require('./config');
const { default: WASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, makeInMemoryStore, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG, } = require("@adiwajshing/baileys");
const chalk = require("chalk");
const pino = require("pino");
const path = require("path");
const { Boom } = require("@hapi/boom");
const { Simple, upsert, sleep} = require("./lib");
const inrlspfunc = require("./lib/Message")
const Welcome = require("./lib/Welcome");
const jsoConfig = JSON.parse(fs.readFileSync("./lib/database/config.json"));
const inrl = require("./lib/perfix");
const { chatting } = inrlspfunc;
const { serialize, WAConnection } = Simple;
global.mydb = {};
global.mydb.users = new Array();
global.mydb.hits = new Number();
global.isInCmd = false;
global.catchError = false;
//varconst fs = require("fs");
var aes256 = require('aes256');
let PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});
const WhatsBotConnect = async () => {
const mddc=(Config.SESSION_ID);
var m = (mddc);
let mdm = m.replaceAll("inrl~", "");
var key = 'k!t';
var plaintext = (mdm);
var decryptedPlainText = aes256.decrypt(key, plaintext);
pastebin
  .getPaste(decryptedPlainText)
  .then(async function inrlBot(data) {
   fs.writeFileSync("./session.json" , data);
await console.log('file creted successfully☑️');
const { state, saveState } = useSingleFileAuthState( "./session.json")
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }),});
store.readFromFile("./lib/database/json/baileys/store_multi.json");
setInterval(() => { store.writeToFile("./lib/database/baileys/store_multi.json")}, 30 * 1000);
fs.readdirSync("./plugins").forEach((file) => {if (path.extname(file).toLowerCase() == ".js") {require(`./plugins/${file}`);}});
global.api = (name, path = "/", query = {}, apikeyqueryname) => (name in jsoConfig.APIs ? jsoConfig.APIs[name] : name) + path + (query || apikeyqueryname ? "?" + new URLSearchParams( Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: jsoConfig.APIs.apikey } : {}), }) ) : "");
if('./session.json' === false ){
console.log(' session file cretion failed ');
};
  let { version, isLatest } = await fetchLatestBaileysVersion();
  connOptions = { markOnlineOnConnect: true, linkPreviewImageThumbnailWidth: 500, printQRInTerminal: true, browser: ["WhatsBixby", "Safari", "4.0.0"], logger: pino({ level: "silent" }), auth: state, version, };
  conn = WASocket(connOptions);
  conn = new WAConnection(conn);
  store.bind(conn.ev);

setInterval(() => {
    store.writeToFile("./lib/database/json/store.json");
    console.log("saved store");
  }, 30 * 60 * 1000);

  conn.ev.on("creds.update", saveState);
  conn.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, isNewLogin, isOnline, qr, receivedPendingNotifications, } = update;
    if (connection == "connecting") console.log(chalk.yellow("💖 Connecting to WhatsApp...🥳"));
    else if (connection == "open") {
console.log(chalk.green("💖 Login successful! \n bot working now💗"));
conn.sendMessage(conn.user.id, {text : "inrl-bot-md working now"})
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
    
    conn.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    conn.sendMessage(callerId, { text: `iam already bussy bro! \nThen fans like as you calling?!\nhow i can response`})
    await sleep(8000)
    await conn.updateBlockStatus(callerId, "block")
    }
});

    try {
     inrl.commands.map(async (command) => {
        for (let i in command.pattern) {
          if (command.pattern[i] == m.client.command || command.on == "text"){
            global.isInCmd = true; global.mydb.hits += 1; global.catchError = false;
if(Config.REACT =='true'){
            await conn.sendReact(m.from, await inrl.reactArry("INFO"), m.key);
}
            await conn.sendPresenceUpdate( inrl.config.auto.presence.value, m.from );
            try {await command.function(m, conn);}
            catch (error) { global.catchError = true; console.log(error); }
if(Config.REACT =='true'){
            global.catchError ? await conn.sendReact( m.from, await inrl.reactArry("ERROR"), m.key ) : await conn.sendReact(m.from, command.sucReact, m.key);
}
            await conn.sendPresenceUpdate("available", m.from);
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
    await conn.updateProfileStatus(biography);
  }, 1000 * 10);
  if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id); conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
             };
         });
     };
WhatsBotConnect();
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
