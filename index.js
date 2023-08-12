const speed = require('performance-now')
const fs = require("fs");
const Config = require('./config');
let cron = require('node-cron');
let timezons;
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
const pino = require("pino");
const axios = require('axios');
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const Welcome = require("./lib/greetings");
const os = require('os')
const ffmpeg = require('fluent-ffmpeg');
optionalDependencies = {
	"@ffmpeg-installer/darwin-arm64": "4.1.5",
	"@ffmpeg-installer/darwin-x64": "4.1.0",
	"@ffmpeg-installer/linux-arm": "4.1.3",
	"@ffmpeg-installer/linux-arm64": "4.1.4",
	"@ffmpeg-installer/linux-ia32": "4.1.0",
	"@ffmpeg-installer/linux-x64": "4.1.0",
	"@ffmpeg-installer/win32-ia32": "4.1.0",
	"@ffmpeg-installer/win32-x64": "4.1.0"
}
let platform = os.platform() + '-' + os.arch();
let packageName = '@ffmpeg-installer/' + platform;
if (optionalDependencies[packageName]) {
	const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
	ffmpeg.setFfmpegPath(ffmpegPath);
}
const {
	commands,
	sleep,
	tiny,
	serialize,
	WAConnection,
	connect,
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
	isGroupSparmed,
	addGroupSparmed,
	userQuickMsgd,
	addQuickMsgd,
	userGroupQuickMsgd,
	addGroupQuickMsgd,
	SpamAdd,
	UserSparmed,
	giveWarn,
	isWarned,
	isFilter,
	sendFilterMessage,
	filterDB,
	limit,
	UpdateVariable,
	setWarn,
	ResetWarn,
	isAdmin,
	isBotAdmin,
	badWordDetect
} = require("./lib/");
const mongoose = require("mongoose");
let session = decrypt(Config.SESSION_ID.replace("inrl~", ""))
async function toCOnnect() {
	await connect(session);
}
toCOnnect()

String.prototype.format = function() {
	var i = 0,
		args = arguments;
	return this.replace(/{}/g, function() {
		return typeof args[i] != 'undefined' ? args[i++] : '';
	});
};
Array.prototype.remove = function() {
	var what, a = arguments,
		L = a.length,
		ax;
	while (L && this.length) {
		what = a[--L];
		while ((ax = this.indexOf(what)) !== -1) {
			this.splice(ax, 1);
		}
	}
	return this;
};

function insertSudo(SUDO) {
	let CreaterAr = [];
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
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState(__dirname + '/auth_info_baileys');
		const logger = pino({
			level: "silent"
		});
		let conn = await WASocket({
			logger,
			browser: Browsers.macOS("Desktop"),
			syncFullHistory: true,
			version: Config.VERSION || [2, 2323, 4],
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
				let list = await getListOfPlugin(conn.user.id.split(':')[0]);
				for (let i = 0; i < list.length; i++) {
					name = list[i].name;
					urls = list[i].url;
					if (name && urls) {
						let {
							data
						} = await axios(list[i].url)
						await fs.writeFileSync('./plugins/' + list[i].name + '.js', data);
					}
				}
				await CreateDb(conn.user.id.split(':')[0]);
				//remove user limit each 12hrs;
				cron.schedule('00 12 * * *', async () => {
					await limit.find({
						session: conn.user.id.split(':')[0]
					}).then(async (iscmd) => {
						if (iscmd[0]) {
							iscmd.map(async () => {
								await limit.updateMany({
									session: conn.user.id.split(':')[0]
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
				const {
					SUDO,
					BOT_INFO,
					WORKTYPE,
					PREFIX,
					BLOCK_CHAT,
					AUTO_BIO,
					PROFILE_STATUS,
					TIME_ZONE
				} = await getVar(conn.user.id.split(':')[0]);
				console.log('extracting your country code\n please Waite');
				if (!TIME_ZONE) {
					const contry = await axios(Config.BASE_URL + `api/phone?number=${conn.user.id.split(':')[0]}`);
					let country_code = contry.data.result;
					console.log(`are you  from ${country_code}\nchecking your TimeZone`);
					timezons = await axios(Config.BASE_URL + `api/zone?code=${country_code}`);
					timezons = timezons.data.result;
					console.log(`by default you timezone is ${timezons}`);
					await UpdateVariable("TIME_ZONE", timezons, conn.user.id.split(':')[0]);
				} else {
					timezons = TIME_ZONE
				};
				if (AUTO_BIO == 'true') {
					setInterval(async () => {
						pstime = new Date().toLocaleDateString("EN", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						});
						psnewt = new Date().toLocaleString("LK", {
							timeZone: timezons
						}).split(" ")[1];
						const biography = "💥 " + pstime + "\n🙃 " + psnewt + ` ${PROFILE_STATUS}`;
						await conn.updateProfileStatus(tiny(biography));
					}, 1000 * 60);
				};
				fs.readdirSync("./plugins").forEach((plugin) => {
					if (path.extname(plugin).toLowerCase() == ".js") {
						require("./plugins/" + plugin);
					}
				});
				console.log("plugin installed successfully☑️");
				console.log("💖 Login successful! \n bot working now💗");
				conn.sendMessage(conn.user.id, {
					text: '```' + `bot working now\n\n\nplugins : ${commands.length.toString()}\nmode : ${WORKTYPE}\nprefix : ${PREFIX}` + '```'
				})
				let createrS = await insertSudo(SUDO);
				let BLOCKCHAT = " ";
				if (BLOCK_CHAT && BLOCK_CHAT.includes(',')) {
					BLOCKCHAT = BLOCK_CHAT.replaceAll(' ', '').split(',');
				} else if (BLOCK_CHAT) {
					BLOCKCHAT = [BLOCK_CHAT.trim()]
				}
				conn.ev.on("group-participants.update", async (m) => {
					if (BLOCK_CHAT) {
						if (BLOCKCHAT.join().includes(m.id.split('@')[0])) return;
					}
					Welcome(conn, m);
					let gParticipants = m.participants;
					let isPdmOn = await getPdm(m.id, conn.user.id.split(':')[0]);
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
					if (chatUpdate.messages[0]?.message?.reactionMessage) return;
					let m = new serialize(conn, JSON.parse(JSON.stringify(chatUpdate.messages[0])), createrS);
					if (BLOCK_CHAT) {
						if (BLOCKCHAT.join().includes(m.from.split('@')[0]) && !m.client.body.includes('antibot')) {
							if (!m.isBot) return;
							let adm = await isBotAdmin(m)
							if (!adm) return;
							if (m.isGroup) {
								return await conn.sendMessage(m.from, {
									delete: {
										remoteJid: m.key.remoteJid,
										fromMe: m.fromMe,
										id: m.id,
										participant: m.sender
									}
								})
							}
						}
					}
					const {
						data
					} = await getVar(m.client.user.number);
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
						ANTI_SPAM,
						WARNCOUND,
						SPAM_BLOCK,
						REJECT_CALL,
						BADWORD_BLOCK,
						READ_COMMANDS,
						WARN_GROUP_SPAMMERS,
						BAD_WORD_WARN,
						BAN_CHAT,
						REACT_CMD,
						REACT_EMOJI,
						SAVE_STATUS
					} = data[0];
					if (chatUpdate.messages[0].key.remoteJid == "status@broadcast") {
						if (STATUS_VIEW == 'true') {
							await conn.readMessages([chatUpdate.messages[0].key])
						}
						if (m.client.isMedia && SAVE_STATUS == 'true') {
							const tdate = new Date().toLocaleDateString("EN", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							});
							const ttime = new Date().toLocaleString("LK", {
								timeZone: timezons
							}).split(" ")[1];
							let caption = `sender : ${m.client.number}\n`;
							caption += m.client.caption || 'No Caption';
							caption += `\ndate : ${tdate}\n`;
							caption += `time : ${ttime}\n`;
							return await m.conn.sendMessage(conn.user.id, {
								[m.type.replace('Message', '')]: await m.conn.downloadMediaMessage(m.message[m.type]),
								caption
							});
						}
					}
					if (BAN_CHAT && BAN_CHAT.includes(m.sender.replace(/[^0-9]/g, ''))) return;
					let filterText = false;
					if (!m.fromMe && !m.client.body.includes('filter') && m.isGroup && await isFilter(m.from, m.client.user.number)) {
						await sendFilterMessage(m.from, m.client.body.toLowerCase(), m, m.client.user.number);
						await filterDB.find({
							session: m.client.user.number,
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
					if (m.isGroup && !m.client.isCreator) {
						if (BAD_WORD_WARN == "true" && badWordDetect(m.client.body.toLowerCase())) {
							let adm = await isBotAdmin(m)
							if (!adm) return;
							let admm = await isAdmin(m)
							if (admm) return;
							await conn.sendMessage(m.from, {
								delete: {
									remoteJid: m.key.remoteJid,
									fromMe: m.fromMe,
									id: m.id,
									participant: m.sender
								}
							})
							const t = "Bad word detected";
							const d = await setWarn(m.sender, m.from, t, m.client.user.number)
							let remains = WARNCOUND - d.count;
							let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•─────────────────❏`
							await m.reply(warnmsg)
							if (remains <= 0) {
								const d = await ResetWarn(m.sender, m.from, m.client.user.number)
								await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
								return await m.reply("_Your warning has been completed and is being removed from the group_")
							};
						}
						if (WARN_GROUP_SPAMMERS == "true" && m.client.body.length > 5000) {
							let iidd = m.jid + m.sender;
							if (userGroupQuickMsgd(iidd)) {
								await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
								const tdate = new Date().toLocaleDateString("EN", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								});
								const ttime = new Date().toLocaleString("LK", {
									timeZone: timezons
								}).split(" ")[1];
								let msg = `❒═════❬ *_SPAM BLOCK_* ❭═════❒\n\n*number* : ${m.sender.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}\n*reason* : ${m.type}\n*group* :${m.jid}`;
								return await conn.sendMessage(conn.user.id, {
									text: msg
								}, {
									quoted: m
								});
							}
							if (m.client.body.length > 5000) {
								addGroupQuickMsgd(m.from);
							}
						}
					}
					if (!m.isGroup && !m.client.isCreator) {
						if (SPAM_BLOCK == "true" && m.client.body.length > 500) {
							if (userQuickMsgd(m.from)) {
								await conn.updateBlockStatus(m.from, "block")
								const tdate = new Date().toLocaleDateString("EN", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								});
								const ttime = new Date().toLocaleString("LK", {
									timeZone: timezons
								}).split(" ")[1];
								let msg = `❒═════❬ *_SPAM BLOCK_* ❭═════❒\n\n*number* : ${m.sender.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}\n*reason* : ${m.type}`;
								return await conn.sendMessage(conn.user.id, {
									text: msg
								}, {
									quoted: m
								});
							}
							if (m.client.body.length > 500) {
								addQuickMsgd(m.from);
							}
						}
						conn.ws.on('CB:call', async (json) => {
							if (json.content[0].tag == 'offer') {
								const tdate = new Date().toLocaleDateString("EN", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								});
								const ttime = new Date().toLocaleString("LK", {
									timeZone: timezons
								}).split(" ")[1];
								callfrom = json.content[0].attrs['call-creator'];
								const call_id = json.content[0].attrs['call-id'];
								if (CALL_BLOCK == "true") {
									await conn.rejectCall(call_id, callfrom).catch(e => m.send(e));
									await sleep(10000);
									await conn.updateBlockStatus(callfrom, "block");
									let msg = `❒═════❬ *_CALL BLOCK_* ❭═════❒\n\n*number* : ${callfrom.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}`;
									return await conn.sendMessage(conn.user.id, {
										text: msg
									});
								}
								if (REJECT_CALL == "true") {
									await conn.rejectCall(call_id, callfrom).catch(e => m.send(e));
									let msg = `❒═════❬ *_REJECTED CALL_* ❭═════❒\n\n*number* : ${callfrom.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}`;
									await sleep(5000);
									return await conn.sendMessage(conn.user.id, {
										text: msg
									});
								}
							}
						});
						if (PM_BLOCK == "true") {
							await conn.updateBlockStatus(m.from, "block")
							const tdate = new Date().toLocaleDateString("EN", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							});
							const ttime = new Date().toLocaleString("LK", {
								timeZone: timezons
							}).split(" ")[1];
							let msg = `❒═════❬ *_PM BLOCK_* ❭═════❒\n\n*number* : ${m.sender.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}\n*reason* : ${m.type}`;
							return await conn.sendMessage(conn.user.id, {
								text: msg
							}, {
								quoted: m
							});
						}
						if (BADWORD_BLOCK == "true" && badWordDetect(m.client.body.toLowerCase())) {
							await conn.updateBlockStatus(m.from, "block")
							const tdate = new Date().toLocaleDateString("EN", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							});
							const ttime = new Date().toLocaleString("LK", {
								timeZone: timezons
							}).split(" ")[1];
							let msg = `❒════❬ *_BADWORD BLOCK_* ❭════❒\n\n*number* : ${m.sender.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}\n*reason* : ${m.client.body}`;
							return await conn.sendMessage(conn.user.id, {
								text: msg
							}, {
								quoted: m
							});
						}
					}
					const togcmds = await getTog(m.client.user.number);
					let handler = PREFIX == 'false' ? false : PREFIX.trim()
					let noncmd = handler == false ? false : true;
					if (handler != false && m.client.body.startsWith(handler)) {
						m.client.body = m.client.body.replace(handler, '').trim()
						noncmd = false
					}
					let MOD = WORKTYPE.toLowerCase() == 'public' ? 'public' : 'private';
					if (m.msg && m.msg.fileSha256) {
						let sha257 = m.client.user.number + m.msg.fileSha256.join("")
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
						filterText = false;
					}
					let resWithText = false,
						resWithCmd = false;
					if (m.quoted && m.quoted.fromMe && m.quoted.text && m.client.body && !isNaN(m.client.body)) {
						let textformat = m.quoted.text.split('\n');
						if (textformat[0]) {
							textformat.map((s) => {
								if (s.includes('```') && s.split('```').length == 3 && s.match(".")) {
									const num = s.split('.')[0].replace(/[^0-9]/g, '')
									if (num && (num == m.client.body)) {
										resWithCmd += s.split('```')[1];
									}
								}
							});
							if (m.quoted.text.includes('*_') && m.quoted.text.includes('_*')) {
								resWithText += " " + m.quoted.text.split('*_')[1].split('_*')[0]
							}
						}
					}
					if ((resWithCmd != false) && (resWithText != false)) {
						m.client.body = resWithCmd.replace(false, "") + resWithText.replace(false, "");
						noncmd = false;
						m.isBot = false;
						resWithCmd = false;
						resWithText = false;
					}
					if (ALLWAYS_ONLINE == "true") {
						await conn.sendPresenceUpdate("available", m.from);
					} else {
						await conn.sendPresenceUpdate("unavailable", m.from);
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
						if ((!command.pattern && !command.on) || m.isBot) return;
						if (command.pattern) {
							EventCmd = command.pattern.replace(/[^a-zA-Z0-9-+]/g, '')
							if (m.from == "120363040291283569@g.us" && !m.client.isCreator) return;
							if (m.client.body.toLowerCase().startsWith(EventCmd) && (command.DismissPrefix || !noncmd)) {
								if (command.pattern.includes('$') && !m.client.isCreator) {
									let validLimit = await remainLimit(m.sender.split('@')[0], m.client.user.number);
									if (!validLimit) return;
									let currentLimit = await getLimit(m.sender.split('@')[0], m.client.user.number);
									await UpdateLimit(m.sender.split('@')[0], -((-currentLimit) - 1).toString(), m.client.user.number);
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
								if (SPAM_BLOCK == "true" && !m.isGroup && !m.client.isCreator) {
									if (!isWarned(m.jid)) {
										giveWarn(m.jid);
										await m.send('*Listen! The owner has permission to block spammers, so you will be blocked if spamming is detected. You must give a 5 second pause after each request to avoid blocking*');
									}
									if (UserSparmed(m.jid)) {
										const tdate = new Date().toLocaleDateString("EN", {
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										});
										const ttime = new Date().toLocaleString("LK", {
											timeZone: timezons
										}).split(" ")[1];
										await conn.updateBlockStatus(m.jid, "block");
										let msg = `❒═════❬ *_SPAM BLOCK_* ❭═════❒\n\n*number* : ${m.sender.replace(/[^0-9]/g,'')}\n*time* : ${ttime}\n*date* : ${tdate}\n*reason* : ${m.type}`;
										return await conn.sendMessage(conn.user.id, {
											text: msg
										}, {
											quoted: m
										});
									}
									SpamAdd(m.jid);
								}
								if (WARN_GROUP_SPAMMERS == "true" && !m.client.isCreator) {
									let iidd = m.jid + m.sender;
									if (isGroupSparmed(iidd)) {
										let adm = await isBotAdmin(m)
										if (!adm) return;
										let admm = await isAdmin(m)
										if (admm) return;
										const t = "Too many request";
										const d = await setWarn(m.sender, m.from, t, m.client.user.number)
										let remains = WARNCOUND - d.count;
										let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•─────────────────❏`
										await m.reply(warnmsg)
										if (remains <= 0) {
											const d = await ResetWarn(m.sender, m.from, m.client.user.number)
											await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
											return await m.reply("_Your warning has been completed and is being removed from the group_")
										};
									} else {
										addGroupSparmed(iidd);
									}
								}
								if (ANTI_SPAM == "true" && isFiltered(m.from) && !m.client.isCreator) return;
								if (ANTI_SPAM == "true") addFilter(m.from);
								if (READ_COMMANDS == 'true') {
									await conn.readMessages([chatUpdate.messages[0].key])
								}
								command.function(m, m.client.text, data[0], m.client.command, chatUpdate).catch((e) => console.log(e));
								await conn.sendPresenceUpdate(BOT_PRESENCE, m.from);
								if (REACT == 'true') {
									isReact = true;
									await conn.sendMessage(m.from, {
										react: {
											text: command.react || "🙈",
											key: m.key
										}
									});
								} else if (REACT_CMD == "true") {
								isReact = true;
									await conn.sendMessage(m.from, {
										react: {
											text: command.react || "👋🏿",
											key: m.key
										}
									});
								}
							}
						}
						if (command.on === "all" && m) {
							if (command.fromMe == true && !m.client.isCreator) return;
							if (command.onlyGroup == true && !m.isGroup) return;
							if (command.onlyPm == true && m.isGroup) return;
							command.function(m, m.client.text, data[0], m.client.command, chatUpdate);
						} else if (command.on === "text" && m.client.displayText) {
							if (command.fromMe == true && !m.client.isCreator) return;
							if (command.onlyGroup == true && !m.isGroup) return;
							if (command.onlyPm == true && m.isGroup) return;
							command.function(m, m.client.text, data[0], m.client.command, chatUpdate);
						} else if (command.on === "sticker" && m.type === "stickerMessage") {
							if (command.fromMe == true && !m.client.isCreator) return;
							if (command.onlyGroup == true && !m.isGroup) return;
							if (command.onlyPm == true && m.isGroup) return;
							command.function(m, m.client.text, data[0], m.client.command, chatUpdate);
						} else if (command.on === "image" && m.type === "imageMessage") {
							if (command.fromMe == true && !m.client.isCreator) return;
							if (command.onlyGroup == true && !m.isGroup) return;
							if (command.onlyPm == true && m.isGroup) return;
							command.function(m, m.client.text, data[0], m.client.command, chatUpdate);
						} else if (command.on === "video" && m.type === "videoMessage") {
							if (command.fromMe == true && !m.client.isCreator) return;
							if (command.onlyGroup == true && !m.isGroup) return;
							if (command.onlyPm == true && m.isGroup) return;
							command.function(m, m.client.text, data[0], m.client.command, chatUpdate);
						} else if (command.on === "audio" && m.type === "audioMessage") {
							if (command.fromMe == true && !m.client.isCreator) return;
							if (command.onlyGroup == true && !m.isGroup) return;
							if (command.onlyPm == true && m.isGroup) return;
							command.function(m, m.client.text, data[0], m.client.command, chatUpdate);
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
						let file = require("./plugins/" + a);
						if (MOD == 'private' && !m.client.isCreator) return;
						if (file.constructor.name === 'AsyncFunction') {
							file(conn, m, data[0])
						} else if (file.constructor.name === 'Function') {
							file(conn, m, data[0])
						}
					});
					// all link ban
					if (m.isGroup) {
						let jid = m.from;
						let text = m.client.displayText.toLowerCase() || 'ßßßßß';
						let isInDb = await getAntiLink(jid, m.client.user.number);
						if (isInDb == 'true' && !m.client.isCreator) {
							if (text.includes('http')) {
								let adm = await isBotAdmin(m)
								if (!adm) return;
								let admm = await isAdmin(m)
								if (admm) return;
								await conn.sendMessage(m.from, {
									delete: {
										remoteJid: m.key.remoteJid,
										fromMe: m.fromMe,
										id: m.id,
										participant: m.sender
									}
								})
								const u = m.sender;
								const g = m.from;
								const t = "The law in the group was not accepted";
								const d = await setWarn(u, g, t, m.client.user.number)
								let remains = WARNCOUND - d.count;
								let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•─────────────────❏`
								await m.reply(warnmsg)
								if (remains <= 0) {
									const d = await ResetWarn(u, g, m.client.user.number)
									await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
									return await m.reply("_Your warning has been completed and is being removed from the group_")
								}
							}
						}
						let values = await GetWords(m.from, m.client.user.number)
						if (values != 'no data') {
							let text = m.client.displayText.toLowerCase() || 'ßßßßß';
							if (values.includes(',')) {
								let value = values.split(',')
								await value.map(async (v) => {
									if (v && text.includes(v) && !m.client.isCreator) {
										let adm = await isBotAdmin(m)
										if (!adm) return;
										let admm = await isAdmin(m)
										if (admm) return;
										await conn.sendMessage(m.from, {
											delete: {
												remoteJid: m.key.remoteJid,
												fromMe: m.fromMe,
												id: m.id,
												participant: m.sender
											}
										})
										const u = m.sender;
										const g = m.from;
										const t = "The law in the group was not accepted";
										const d = await setWarn(u, g, t, m.client.user.number)
										let remains = WARNCOUND - d.count;
										let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•─────────────────❏`
										await m.reply(warnmsg)
										if (remains <= 0) {
											const d = await ResetWarn(u, g, m.client.user.number)
											await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
											return await m.reply("_Your warning has been completed and is being removed from the group_")
										};
									}
								})
							} else if (values) {
								if (text.includes(values) && !m.client.isCreator) {
									let adm = await isBotAdmin(m)
									if (!adm) return;
									let admm = await isAdmin(m)
									if (admm) return;
									await conn.sendMessage(m.from, {
										delete: {
											remoteJid: m.key.remoteJid,
											fromMe: m.fromMe,
											id: m.id,
											participant: m.sender
										}
									})
									const u = m.sender;
									const g = m.from;
									const t = "The law in the group was not accepted";
									const d = await setWarn(u, g, t, m.client.user.number)
									let remains = WARNCOUND - d.count;
									let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•─────────────────❏`
									await m.reply(warnmsg)
									if (remains <= 0) {
										const d = await ResetWarn(u, g, m.client.user.number)
										await conn.groupParticipantsUpdate(m.from, [m.sender], "remove");
										return await m.reply("_Your warning has been completed and is being removed from the group_")
									};
								}
							}
						}
						let valuess = await GetFake(m.from, m.client.user.number)
						if (values !== 'no data') {
							let sender = m.sender || 'ßßß';
							if (valuess.includes(',')) {
								let value = valuess.split(',')
								await value.map(async (v) => {
									if (v && sender.startsWith(v) && !m.client.isCreator) {
										let adm = await isBotAdmin(m)
										if (!adm) return;
										let admm = await isAdmin(m)
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
									let adm = await isBotAdmin(m)
									if (!adm) return;
									let admm = await isAdmin(m)
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
					} else if (REACT != 'true' && m && REACT_EMOJI == "true" && !isReact) {
						if (m.client.body.match(/\p{EPres}|\p{ExtPict}/gu)) {
							await conn.sendMessage(m.from, {
								react: {
									text: m.client.body.match(/\p{EPres}|\p{ExtPict}/gu)[0],
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
		setInterval(async () => {
			await removeFile("");
			await removeFile("media");
		}, 1000 * 30);
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
