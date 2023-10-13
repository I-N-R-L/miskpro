const {
    generateWAMessageContent,
    extractMessageContent,
    jidNormalizedUser,
    getContentType,
    normalizeMessageContent,
    proto,
    delay,
    downloadContentFromMessage,
    getBinaryNodeChild,
    WAMediaUpload,
    generateForwardMessageContent,
    generateLinkPreviewIfRequired,
    generateWAMessageFromContent,
    getBinaryNodeChildren,
    areJidsSameUser
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const FileType = require("file-type");
const moment = require("moment-timezone");
const path = require("path");
const PhoneNumber = require('awesome-phonenumber')
const {
    getRandom,
    getBuffer
} = require("./func");
const Config = require('../../config');
const {
    videoToWebp,
    writeExifVid,
    writeExif
} = require('../scrapers/sticker');
const {
    toAudio,
	toPTT,
	toVideo
} = require("../scrapers")

const inrlFunc = require("./prefix");
const axios = require("axios")
const cheerio = require("cheerio");
const Jimp = require("jimp");
const util = require("util");
let CreaterAr = [];
const prefa = ["", "!", ".", "🐦", "🐤", "🗿"];
let M = proto.WebMessageInfo;
// #################################################################################################
async function changeprofile(img) {
    const {
        read,
        MIME_JPEG
    } = require("jimp")
    const jimp = await read(img)
    const min = Math.min(jimp.getWidth(), jimp.getHeight())
    const cropped = jimp.crop(0, 0, jimp.getWidth(), jimp.getHeight())
    let width = jimp.getWidth(),
        hight = jimp.getHeight(),
        ratio;
    if (width > hight) {
        ratio = jimp.getWidth() / 720
    } else {
        ratio = jimp.getWidth() / 324
    };
    width = width / ratio;
    hight = hight / ratio;
    img = cropped.quality(100).resize(width, hight).getBufferAsync(MIME_JPEG);
    return {
        img: await img
    }
}

function nullish(args) {
    return !(args !== null && args !== undefined)
}
const fetchBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "GET",
            url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (err) {
        return err
    }
};
async function sendInvaite(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', jpegThumbnail, options = {}) {
    const msg = proto.Message.fromObject({
        groupInviteMessage: proto.Message.GroupInviteMessage.fromObject({
            inviteCode,
            inviteExpiration: parseInt(inviteExpiration) || +new Date(new Date + (3 * 86400000)),
            groupJid: jid,
            groupName: groupName,
            jpegThumbnail: null,
            caption
        })
    })
    const message = generateWAMessageFromContent(participant, msg, options)
    await conn.relayMessage(participant, message.message, {
        messageId: message.key.id
    })
    return message
};
// #################################################################################################
class WAConnection {
    constructor(conn) {
        for (let v in conn) this[v] = conn[v];
    }
    /**
     *
     * @param {*} m
     */
    async serializeM(m) {
        return exports.serialize(this, m);
    }
   
getName  (jid, withoutContact = false) {
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
       async copyNForward   (jid, message, forceForward = false, options = {}){
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
        cMod (jid, copy, text = '', sender = conn.user.id, options = {}){
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
        decodeJid (jid) {
                if (!jid) return jid
                if (/:\d+@/gi.test(jid)) {
                        let decode = jidDecode(jid) || {}
                        return decode.user && decode.server && decode.user + '@' + decode.server || jid
                } else return jid
        }

    parseMention(text) {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
            (v) => v[1] + "@s.whatsapp.net");
    }
    /**
     * send text message
     * @param {*} id
     * @param {*} text
     * @param {*} quoted
     * @param {*} options
     */
    async sendText(id, text, quoted = {}, options = {}) {
       return this.sendMessage(id, {
            text,
            ...options
        }, {
            quoted,
            ...options
        });
    }
    /**
     *
     * @param {*} message
     * @param {*} fileName
     * @returns
     */
    async downloadMediaMessage(message, fileName) {
        message = message?.msg ? message?.msg : message;
        let mimetype = (message.msg || message).mimetype || "";
        let mtype = message.type ? message.type.replace(/Message/gi, "") : mimetype.split("/")[0];
        const stream = await downloadContentFromMessage(message, mtype);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        if (fileName) {
            let ftype = await FileType.fromBuffer(buffer);
            let trueFileName = fileName ? fileName + "." + ftype.ext || mimetype.split("/")[1] : getRandom(ftype.ext || mimetype.split("/")[1]);
            return fs.writeFileSync(trueFileName, buffer);
        } else {
            return buffer;
        }
    }
    //sepsiol fjnc
    async reply(jid, text = '', quoted, options ={}) {
        let pp = this.profilePictureUrl(this.user.jid, 'image')
        const _uptime = process.uptime() * 1000
        return Buffer.isBuffer(text) ? this.sendFile(jid, text, 'file', '', quoted, false, options) : this.sendMessage(jid, {
            ...options,
            text: util.format(text),
            mentions: this.parseMention(text),
            contextInfo: options.contextInfo || " € ",
            mentions: this.parseMention(text),
            ...options
        }, {
            quoted,
            ephemeralExpiration: 86400,
            ...options
        })
    }
    async resize(image, width, height) {
        let read = await Jimp.read(image)
        let afcutt = await read.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
        return afcutt
    }
    // end
    /**
     *
     * @param {*} message
     * @param {*} fileName
     * @param {*} attachExtension
     * @returns
     */
    async downloadAndSaveMediaMessage(message, filename, attachExtension = true) {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? filename + "." + type.ext : filename;
        // save to file
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    }
    /**
     *
     * @param {*} PATH
     * @param {*} save
     * @returns
     */
    async getFile(PATH, save) {
        let filename;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], "base64") : /^https?:\/\//.test(PATH) ? await fetchBuffer(PATH) : fs.existsSync(PATH) ? ((filename = PATH), fs.readFileSync(PATH)) : typeof PATH === "string" ? PATH : Buffer.alloc(0);
        let type = (await FileType.fromBuffer(data)) || {
            mime: "application/octet-stream",
            ext: ".bin",
        };
        filename = path.join(__dirname, "../../media" + new Date() * 1 + "." + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return {
            filename,
            size: await Buffer.byteLength(data),
            ...type,
            data,
        };
    }
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    async sendVideoAsSticker(jid, path, quoted, options = {}) {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }
        await this.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    async sendFile(jid, PATH, fileName, quoted = {}, options = {}) {
        let types = await this.getFile(PATH, true);
        let {
            filename,
            size,
            ext,
            mime,
            data
        } = types;
        let type = "",
            mimetype = mime,
            pathFile = filename;
        if (options.asDocument) type = "document";
        if (options.asSticker || /webp/.test(mime)) {
            let media = {
                mimetype: mime,
                data
            };
            pathFile = await writeExif(media, {
                packname: options.packname ? options.packname : " ",
                author: options.author ? options.author : " ",
                categories: options.categories ? options.categories : [],
            });
            type = "sticker";
            mimetype = "image/webp";
        } else if (/image/.test(mime)) type = "image";
        else if (/video/.test(mime)) type = "video";
        else if (/audio/.test(mime)) type = "audio";
        else type = "document";
        await this.sendMessage(jid, {
            [type]: {
                url: pathFile
            },
            mimetype,
            fileName,
            ...options
        }, {
            quoted,
            ...options
        });
    }
    /**
     *
     * @param {*} code
     * @returns
     */
    async sendReact(jid, imog = "", key) {
       return await this.sendMessage(jid, {
            react: {
                text: imog,
                key: key
            }
        });
    }
    /**
     * Send error message
     * @param {*} jid
     * @param {*} error
     * @param {*} imoji
     * @param {*} key
     * @returns
     */
}
class serialize {
    constructor(conn, m, createrS, store) {
        if (!m) return m;
        m = M.fromObject(m);
        for (let i in m) this[i] = m[i];
        this._key(conn);
        this._message(conn);
        this.conn = conn;
        this.body = this.text = this.message?.conversation || this.message?.[this.type]?.text || this.message?.[this.type]?.caption || this.message?.[this.type]?.contentText || this.message?.[this.type]?.selectedDisplayText || this.message?.[this.type]?.title || "";
        this._client(conn, createrS);
    }
    _key(conn) {
        if (this.key) {
            this.from = this.jid = this.chat = jidNormalizedUser(this.key.remoteJid || this.key.participant);
            this.fromMe = this.key.fromMe;
            this.id = this.key.id;
            this.isBot = this.id == undefined || null ? 'false' : this.id.startsWith("BAE5") && this.id.length == 16;
            this.isGroup = this.from.endsWith("@g.us");
            this.sender = jidNormalizedUser(
                (this.fromMe && conn.user?.id) || this.key.participant || this.from || "");
        }
    }
    _message(conn) {
        if (this.message) {
            this.type = getContentType(this.message);
            this.media = this.message;
            this.message = extractMessageContent(this.message);
            this.msg = this.message[this.type];
            this.key.participant = this.sender;
            this.key.stanzaId = this.msg?.contextInfo?.stanzaId;
            this.quoted = this.msg?.contextInfo ? this.msg?.contextInfo?.quotedMessage : null;
            this.reply_message = this.msg?.contextInfo ? this.msg?.contextInfo?.quotedMessage : null;
            if(this.quoted&&this.reply_message){
                this.quoted.media = this.reply_message.media = this.msg?.contextInfo?.quotedMessage;
                this.quoted.image = this.reply_message.image = this.quoted.imageMessage? true:false;
                this.quoted.video = this.reply_message.video = this.quoted.videoMessage? true:false;
                this.quoted.location = this.reply_message.location = this.quoted.locationMessage? true:false;
                this.quoted.sticker = this.reply_message.sticker = this.quoted.stickerMessage? true:false;
                this.quoted.audio = this.reply_message.audio = this.quoted.audioMessage? true:false;
                this.quoted.contact = this.reply_message.contact = this.quoted.contactMessage? true:false;
                this.quoted.document = this.reply_message.document = this.quoted.documentMessage? true:false;
                this.quoted.type = this.reply_message.type = getContentType(this.quoted);
                this.quoted.isAnimatedSticker = this.reply_message.isAnimatedSticker = this.quoted.msg?.isAnimated;
                this.quoted.secounds = this.reply_message.secounds = this.quoted.msg?.secounds;
                this.quoted.msg = this.reply_message.msg = this.quoted[this.quoted.type];
                this.quoted.id = this.reply_message.id = this.msg?.contextInfo?.stanzaId;
                this.quoted.sender = this.reply_message.sender = jidNormalizedUser(this.msg?.contextInfo?.participant);
                this.quoted.from = this.reply_message.from = this.from;
                this.quoted.mention = this.reply_message.mention = new Object();
                this.quoted.mention.jid = this.reply_message.mention.jid = this.quoted?.msg?.extendedTextMessage?.contextInfo?.mentionedJid || this.quoted?.msg?.contextInfo?.mentionedJid||[];
                this.quoted.mention.isBotNumber = this.reply_message.mention.isBotNumber = this.quoted.mention.jid.includes(conn.botNumber);
                this.quoted.mention.isOwner = this.reply_message.mention.isOwner = (conn.botAdmins.map((v)=> this.quoted.mention.jid.includes(v))).includes(true);
                this.quoted.isBot = this.reply_message.isBot = this.quoted.id ? this.quoted?.id?.startsWith("BAE5") && this.quoted?.id == 16 : 'false';
                this.quoted.fromMe = this.reply_message.fromMe = this.quoted?.sender == jidNormalizedUser(conn.user && conn.user?.id);
                this.quoted.text  = this.reply_message.text = this.quoted?.extendedTextMessage?.text || this.quoted?.text || this.quoted?.msg?.caption || this.quoted?.conversation || "";
                this.quoted.caption = this.reply_message.caption = this.quoted?.msg?.caption;
                this.quoted.isEval = this.reply_message.isEval = this.quoted.text ? (this.quoted.text.includes('require')||this.quoted.text.includes('return')||this.quoted.text.includes('await')):false
                this.quoted.mime = this.reply_message.mime = this.quoted?.msg?.mimetype;
                this.quoted.number = this.reply_message.number = this.quoted.sender ? this.quoted.sender.replace(/[^0-9]/g,''):undefined;
                this.quoted.data = this.reply_message.data = M.fromObject({
                    key: {
                        remoteJid: this.quoted?.from,
                        fromMe: this.quoted?.fromMe,
                        stanzaId: this.msg?.contextInfo?.stanzaId,
                        participant: jidNormalizedUser(this.msg?.contextInfo?.participant)
                    },
                    message: this.quoted,
                    ...(this.quoted?.isGroup ? {
                        participant: this.quoted?.sender
                    } : {}),
                });
                this.quoted.delete = () => conn.sendMessage(this.quoted?.from, {
                    delete: this.quoted.fakeObj.key
                });
                this.quoted.download = (pathFile) => conn.downloadMediaMessage(this.quoted?.msg, pathFile);
            } else {
              this.quoted = new Object();
              this.reply_message = new Object();
              this.quoted.mention = this.reply_message.mention = new Object();
            }
         }
      } 
    _client(conn, createrS) {
        this.sock = conn;
        this.client = conn;
        this.number = this.sender.replace(/[^0-9]/g,'');
        this.client.displayText = this.message?.conversation || this.message?.[this.type]?.text || this.message?.[this.type]?.caption || this.message?.[this.type]?.contentText || this.message?.[this.type]?.selectedDisplayText || this.message?.[this.type]?.title ||"";
        this.client.displayId = this.client.body = this.message?.conversation || this.message?.[this.type]?.text || this.message?.[this.type]?.caption || this.message?.[this.type]?.selectedButtonId || this.message?.[this.type]?.singleSelectReply?.selectedRowId || this.message?.[this.type]?.selectedId || this.type === "messageContextInfo" ? this.message.buttonsResponseMessage?.selectedButtonId || this.message.listResponseMessage?.singleSelectReply?.selectedRowId || this.text : "";
        this.client.budy = typeof this.text == "string" ? this.text : "";
        this.client.prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(this.client.body) ? this.client.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? ".";
        this.client.isCmd = this.client.body.startsWith(this.client.prefix);
        this.client.command = this.client.body.replace(this.client.prefix, "").trim().split(/ +/).shift().toLowerCase();
        this.client.replaceMent = this.client.body.replace(this.client.prefix, "").trim().split(/ +/).shift();
        this.client.args = this.client.body.trim().split(/ +/).slice(1);
        this.client.pushName = this.pushName || "No Name";
        this.client.botNumber = jidNormalizedUser(conn.user.id);
        CreaterAr.push(this.client.botNumber);
        CreaterAr = CreaterAr.concat(createrS);
        let IsOwner = "917593919575@s.whatsapp.net";
        CreaterAr.push(IsOwner)
        this.client.botAdmins = CreaterAr;
        this.client.isDev = IsOwner.includes(this.sender);
        this.client.caption = this.message?.[this.type]?.caption;
        this.client.secounds = this.client.message?.secounds;
        this.client.mention = new Object();
        this.client.mention.jid = this.msg?.contextInfo?.mentionedJid || [];
        this.client.mention.isBotNumber = this.client.mention.jid.includes(this.client.botNumber);
        this.client.mention.isOwner = (this.client.botAdmins.map((v)=> this.client.mention.jid.includes(v))).includes(true)
        this.client.isCreator = this.client.botAdmins.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(this.sender);
        this.client.itsMe = this.sender == this.client.botNumber ? true : false;
        this.client.text  = this.client.body.replace(this.client.prefix, "").replace(this.client.replaceMent, "").trim();
        this.client.quoted = this.quoted?.from ? this.quoted : this;
        this.client.mime = (this.client.quoted.msg || this.client.quoted).mimetype || "text";
        this.client.isMedia = /image|video|sticker|audio/.test(this.client.mime);
        this.client.from = this.key.remoteJid;
        this.client.image = this.msg?.imageMessage? true:false;
        this.client.video = this.msg?.videoMessage? true:false;
        this.client.location = this.msg?.locationMessage? true:false;
        this.client.sticker = this.msg?.stickerMessage? true:false;
        this.client.audio  = this.msg?.audioMessage? true:false;
        this.client.contact = this.msg?.contactMessage? true:false;
        this.client.document  = this.msg?.documentMessage? true:false;
        this.client.isEval = this.client.body? (this.client.body.includes('require')||this.client.body.includes('return')||this.client.body.includes('await')):false;
        this.client.number = this.sender.replace(/[^0-9]/g,"");
        this.client.user.jid = jidNormalizedUser(conn.user.id);
        this.client.user.number = this.client.user.jid.replace(/[^0-9]/g,"");
        this.client.messagesD = this.client.body.slice(0).trim().split(/ +/).shift().toLowerCase();
    }
    async download(pathFile) {
        await this.conn.downloadMediaMessage(this.msg, pathFile);
    }
    async updateProfilePicture(jid, content) {
        content: WAMediaUpload;
        const {
            img
        } = await changeprofile(content);
        await this.conn.query({
            tag: 'iq',
            attrs: {
                to: jidNormalizedUser(jid),
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        })
    }
    async sendMessage(
    content,
    opt = { packname: "INRL", author: "INRL" },
    type = "text"
  ) {
    switch (type.toLowerCase()) {
      case "text":
        {
          return this.client.sendMessage(
            this.jid,
            {
              text: content,
              ...opt,
            },
            { ...opt }
          );
        }
        break;
      case "image":
        {
          if (Buffer.isBuffer(content)) {
            return this.client.sendMessage(
              this.jid,
              { image: content, ...opt },
              { ...opt }
            );
          } else if (isUrl(content)) {
            return this.client.sendMessage(
              this.jid,
              { image: { url: content }, ...opt },
              { ...opt }
            );
          }
        }
        break;
      case "video": {
        if (Buffer.isBuffer(content)) {
          return this.client.sendMessage(
            this.jid,
            { video: content, ...opt },
            { ...opt }
          );
        } else if (isUrl(content)) {
          return this.client.sendMessage(
            this.jid,
            { video: { url: content }, ...opt },
            { ...opt }
          );
        }
      }
      case "audio":
        {
          if (Buffer.isBuffer(content)) {
            return this.client.sendMessage(
              this.jid,
              { audio: content, ...opt },
              { ...opt }
            );
          } else if (isUrl(content)) {
            return this.client.sendMessage(
              this.jid,
              { audio: { url: content }, ...opt },
              { ...opt }
            );
          }
        }
        break;
    }
  }
    async sendFromUrl(path, filename = "", caption = "", quoted, ptt = false, options = {}) {
        let type = await this.conn.getFile(path, true);
        let {
            res,
            data: file,
            filename: pathFile
        } = type;
        if ((res && res.status !== 200) || file.length <= 65536) {
            try {
                return {
                    json: JSON.parse(file.toString())
                };
            } catch (e) {
                if (e.json) return e.json;
            }
        }
        let opt = {
            filename
        };
        if (quoted) opt.quoted = quoted;
        if (!type)
            if (options.asDocument) options.asDocument = true;
        let mtype = "",
            mimetype = type.mime;
        let naem = (a) => "../../media/" + Date.now() + "." + a;
        if (/webp/.test(type.mime)) mtype = "sticker";
        else if (/image/.test(type.mime)) mtype = "image";
        else if (/video/.test(type.mime)) mtype = "video";
        else if (/audio/.test(type.mime))
            (ss = await (ptt ? toPTT : toAudio )(file, type.ext)),
            (skk = await require("file-type").fromBuffer(ss.data)),
            (ty = naem(skk.ext)),
            require("fs").writeFileSync(ty, ss.data),
            (pathFile = ty),
            (mtype = "audio"),
            (mimetype = "audio/mpeg");
        else mtype = "document";
        this.conn.sendMessage(this.from, {
            ...options,
            caption,
            ptt,
            fileName: filename,
            [mtype]: {
                url: pathFile
            },
            mimetype,
        }, {
            ...opt,
            ...options,
        }).then(() => {
            fs.unlinkSync(pathFile);
        });
    };
    async reply(text, chatId = this.from, options = {}) {
        return await this.conn.sendMessage(chatId, {
            text: util.format(text)
        }, {
            quoted: this
        });
    }
    async sendReply(data, options = {}, type) {
        let nonUrl = false;
        if (type == "text") nonUrl = true;
        if(nonUrl) return this.send(data);
       return await this.conn.sendMessage(this.from, {
            [type]: {
                url: data
            },
            ...options
        });
    }
    async updateProfileStatus(status) {
        return await this.conn.query({
            tag: 'iq',
            attrs: {
                to: 's.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
    };
    async sendGroupInviteMessageRequst(number) {
        const groupMetadata = await this.conn.groupMetadata(this.from).catch(e => {})
        const participants = await groupMetadata.participants
        let NumToArr = [number.toString()];
        let _participants = participants.map(user => user.id)
        let users = (await Promise.all(NumToArr.map(v => v.replace(/[^0-9]/g, '')).filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net')).map(async v => [
            v,
            await this.conn.onWhatsApp(v + '@s.whatsapp.net')
        ]))).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
        const response = await this.conn.query({
            tag: 'iq',
            attrs: {
                type: 'set',
                xmlns: 'w:g2',
                to: this.from,
            },
            content: users.map(jid => ({
                tag: 'add',
                attrs: {},
                content: [{
                    tag: 'participant',
                    attrs: {
                        jid
                    }
                }]
            }))
        })
        const jpegThumbnail = null
        const add = getBinaryNodeChild(response, 'add')
        const participant = getBinaryNodeChildren(response, 'add')
        let anu = participant[0].content.filter(v => v)
        if (anu[0].attrs.error == 408) return await this.send(`Unable to add @${anu[0].attrs.jid.split('@')[0]}!\nThe news is that @${anu[0].attrs.jid.split('@')[0]} just left this group`)
        for (const user of participant[0].content.filter(item => item.attrs.error == 403)) {
            const jid = user.attrs.jid
            const content = getBinaryNodeChild(user, 'add_request')
            const invite_code = content.attrs.code
            const invite_code_exp = content.attrs.expiration
            const {
                subject,
                desc
            } = await this.conn.groupMetadata(this.from);
            const caption = desc || 'Invitation to join my WhatsApp group';
            return await sendInvaite(this.from, jid, invite_code, invite_code_exp, subject, caption, jpegThumbnail)
        }
    };
     isMediaURL(url) {
        const mediaExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'webm','webp'];
        if(!url.includes('.')) return false;
          const extension = url.split('.').pop().toLowerCase();
          return (mediaExtensions.includes(extension) &&  url.startsWith('http'))
        }
        async forwardMessage(jid, content, options = {}) {
            let externalAdReply,quotedMessage;
            const isBuffer = Buffer.isBuffer(content);
            const IsMediaUrl = isBuffer? false : (typeof content != "object")?this.isMediaURL(content):false;
            let msg = (!isBuffer && !IsMediaUrl && content?.viewOnceMessageV2?.message) ?
                                                     content?.viewOnceMessageV2?.message :
                                                     content.media ? content.media : content;
            //LinkPreview
            if(options.linkPreview) {
            externalAdReply = {
                                title: options.linkPreview.title,
                                body: options.linkPreview.body,
                                renderLargerThumbnail: options.linkPreview.renderLargerThumbnail,
                                showAdAttribution: options.linkPreview.showAdAttribution,
                                mediaType: options.linkPreview.mediaType,
                                thumbnailUrl:options.linkPreview.thumbnailUrl,
                                previewType:options.linkPreview.previewType,
                                containsAutoReply:options.linkPreview.containsAutoReply,
                                thumbnail: options.linkPreview.thumbnail,
                                mediaUrl: options.linkPreview.mediaUrl,
                                sourceUrl: options.linkPreview.sourceUrl 
                            }
                      }
                   const opt = {
             mimetype: options.mimetype,
                        jpegThumbnail: options.jpegThumbnail,
                        mentions: options.mentions,
                        fileName: options.fileName,
                        fileLength: options.fileLength,
                        caption: options.caption,
                        headerType: options.headerType,
                        ptt: options.ptt,
                        gifPlayback: options.gifPlayback,
                        viewOnce: options.viewOnce,
                        seconds: [options.seconds],
                        waveform: options.waveform,
                        contextInfo: {}
                        }
             if(isBuffer || IsMediaUrl) {
             try {
             if(IsMediaUrl) content = await getBuffer(content);
             const {ext, mime} = await require("file-type").fromBuffer(content);
             if(options.forwardType &&  ext != options.forwardType) {
             if(options.forwardType.toLowerCase() == "sticker") {
                let {data} = await this.conn.getFile(content, true)
                let media = {
                    mimetype: mime,
                    data
                };
                let pathFile = await writeExif(media, {
                    packname: options.packname || "inrl",
                    author: options.author || "auth key not found",
                    categories: options.categories || [],
                });
                msg = await generateWAMessageContent({
                    sticker: {url:pathFile},mimetype:"image/webp"
                  }, {
                    upload: this.conn.waUploadToServer
                  })
                  } else if(options.forwardType.toLowerCase() == "audio"){
            msg = await generateWAMessageContent({
                [options.forwardType.toLowerCase()]: content,mimetype: options.mimetype || "audio/mpeg"
              }, {
                upload: this.conn.waUploadToServer
              })
             }
         } else {
                if(!opt.mimetype) opt.mimetype = mime;
                msg = await generateWAMessageContent({
                    [mime.split('/')[0]]: content
                  }, {
                    upload: this.conn.waUploadToServer
                  })
                }
            } catch(e){
            return await this.send('Error : utils not generated for your invalid Buffer To Url');
            }
            }
            if(msg && (typeof msg == "object")) {
                let index = Object.keys(msg);
                let type = index[0];
                try {
                    let tendot;
            for(let key in opt){
                tendot = key;
                if(opt[key] != undefined) {
                    if(!Array.isArray(opt[key]) || !opt[key].includes(undefined)) {
                        msg[type][tendot] = opt[key]
                    }
                }
            }
            if(options.contextInfo?.mentionedJid) msg[type].contextInfo.mentionedJid = options.contextInfo?.mentionedJid;
            if(options.contextInfo?.forwardingScore) msg[type].contextInfo.forwardingScore = options.contextInfo?.forwardingScore;
            if(options.contextInfo?.isForwarded) msg[type].contextInfo.isForwarded = options.contextInfo?.isForwarded;
            if(options.quoted){
            if(options.quoted?.key?.participant) msg[type].contextInfo.participant = options.quoted?.key?.participant;
            if(options.quoted?.key?.stanzaId) msg[type].contextInfo.stanzaId = options.quoted?.key?.stanzaId;
            if(options.quoted) quotedMessage = options.quoted?.message?.extendedTextMessage?.contextInfo?.quotedMessage||options.quoted?.message;
            if(options.quoted?.key?.remoteJid) msg[type].contextInfo.remoteJid = options.quoted?.key?.remoteJid;
            if(quotedMessage){
            let index2 = Object.keys(quotedMessage);
            let type2 = index2[0];
            delete quotedMessage[type2].scanLengths;
            delete quotedMessage[type2].caption;
            delete quotedMessage[type2].fileSha256;
            delete quotedMessage[type2].height;
            delete quotedMessage[type2].width;
            delete quotedMessage[type2].mediaKey;
            delete quotedMessage[type2].fileEncSha256;
            delete quotedMessage[type2].directPath;
            delete quotedMessage[type2].mediaKeyTimestamp;
            delete quotedMessage[type2].intracttiveAnnotions;
            delete quotedMessage[type2].mimetype;
            delete quotedMessage[type2].contextInfo;
            delete quotedMessage[type2].fileLength;
            delete quotedMessage[type2].viewOnce;
            msg[type].contextInfo.quotedMessage = quotedMessage;
                }
            }
            if(externalAdReply) msg[type].contextInfo.externalAdReply = externalAdReply;
            return await this.conn.relayMessage(jid,JSON.parse(JSON.stringify(msg)),{})
            } catch(e){
                return await this.send('Error : Log Handlers Error\nTry Agin later');
            } 
        } else {
            if(options.linkPreview) opt.contextInfo.externalAdReply = externalAdReply;
                if(opt.contextInfo.externalAdReply && Object.keys(opt.contextInfo.externalAdReply).length != 0) {
                       opt.contextInfo.externalAdReply.previewType = "PHOTO"
                       opt.contextInfo.externalAdReply.containsAutoReply=true
                 }
                 return await this.conn.sendMessage(jid,{text:content,...opt},{quoted:options.quoted})
                    }
            }
    async forward(jid, message, forceForward = false, options = {}) {
        let vtype;
        if (options.readViewOnce) {
            message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : message.message || undefined;
            vtype = Object.keys(message.message.viewOnceMessage.message)[0];
            delete(message.message && message.message.ignore ? message.message.ignore : message.message || undefined);
            delete message.message.viewOnceMessage.message[vtype].viewOnce;
            message.message = {
                ...message.message.viewOnceMessage.message,
            };
        }
        let mtype = Object.keys(message.message)[0];
        let content = await generateForwardMessageContent(message, forceForward);
        let ctype = Object.keys(content)[0];
        let context = {};
        if (mtype != "conversation") context = message.message[mtype].contextInfo;
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo,
        };
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                },
            } : {}),
        } : {});
        await this.conn.relayMessage(jid, waMessage.message, {
            messageId: waMessage.key.id,
        });
        return waMessage;
    }
    // some new Ex function
    async fullForward(jid, content, options = {}) {
        let mm = await generateWAMessageFromContent(this.from, content, {
            userJid: this.from
        })
        await conn.relayMessage(jid, mm.message, {
            messageId: this.key.id
        })
    }
    //func 2
    
    //func3
    async fakeReply(jid, text = '', fakeJid = this.conn.user.jid, fakeText = '', fakeGroupJid, options={}) {
        return this.conn.reply(jid, text, {
            key: {
                fromMe: areJidsSameUser(fakeJid, this.conn.user.id),
                participant: fakeJid,
                ...(fakeGroupJid ? {
                    remoteJid: fakeGroupJid
                } : {})
            },
            message: {
                conversation: fakeText
            },
            ...options
        })
    }
  async editMessage(jid, msg, key){
  return await this.conn.relayMessage(jid, {
  protocolMessage: {
    key: key,
    type: 14,
    editedMessage: {
      conversation: msg
    }
  }
}, {})
   }
   async edite(msg, key){
    return await this.conn.relayMessage(this.jid, {
    protocolMessage: {
      key: key,
      type: 14,
      editedMessage: {
        conversation: msg
      }
    }
  }, {})
     }
    //func4
    async sendPaymentMessage(jid, amount, currency, text = '', from, image, options) {
        let file = await this.conn.resize(image, 300, 150)
        let a = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XFU", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMW"]
        let b = a[Math.floor(Math.random() * a.length)]
        const requestPaymentMessage = {
            amount: {
                currencyCode: currency || b,
                offset: 0,
                value: amount || 9.99
            },
            expiryTimestamp: 0,
            amount1000: (amount || 9.99) * 1000,
            currencyCodeIso4217: currency || b,
            requestFrom: from || '0@s.whatsapp.net',
            noteMessage: {
                extendedTextMessage: {
                    text: text || 'Example Payment Message'
                }
            },
            background: !!image ? file : undefined
        };
        return await this.conn.relayMessage(jid, {
            requestPaymentMessage
        }, {
            ...options
        });
    }
    // func 5
    async getQuotedObj() {
        return proto.WebMessageInfo.fromObject({
            key: {
                fromMe: this.fromMe,
                remoteJid: this.from,
                id: this.id
            },
            message: this.msg?.contextInfo?.quotedMessage,
            ...(this.isGroup ? {
                participant: this.sender
            } : {})
        })
    }
    //func 6
    async vM() {
        return proto.WebMessageInfo.fromObject({
            key: {
                fromMe: this.fromMe,
                remoteJid: this.from,
                id: this.id
            },
            message: this.msg?.contextInfo?.quotedMessage,
            ...(this.IsGroup ? {
                participant: this.sender
            } : {})
        })
    }
    //end             
    async send(text, chatId = this.from, options = {}) {
        return await this.conn.sendMessage(chatId, {
            text: util.format(text)
        }, {
            quoted: this
        });
    }
}
module.exports = {
    serialize,
    WAConnection
};
