const {
    extensionForMediaMessage,
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
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExif
} = require('../scrapers/sticker');
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
    constructor(conn, m, createrS, options = {}) {
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
            this.from = this.jid = jidNormalizedUser(this.key.remoteJid || this.key.participant);
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
            this.message = extractMessageContent(this.message);
            this.msg = this.message[this.type];
            this.mentions = this.msg?.contextInfo ? this.msg?.contextInfo?.mentionedJid : [];
            this.quoted = this.msg?.contextInfo ? this.msg?.contextInfo?.quotedMessage : new Object();
            this.reply_message = this.msg?.contextInfo ? this.msg?.contextInfo?.quotedMessage : new Object();
            if(this.quoted==null) this.quoted =new Object();
            if(this.reply_message==null) this.reply_message =new Object();
                this.quoted.type = this.reply_message.type = this.quoted?getContentType(this.quoted) :undefined;
                this.quoted.msg = this.quoted?this.quoted[this.quoted?.type]:undefined;
                this.quoted.mentions = this.msg?.contextInfo?.mentionedJid||undefined;
                this.quoted.id = this.reply_message.key = this.msg?.contextInfo?.stanzaId||undefined;
                this.quoted.sender = jidNormalizedUser(this.msg?.contextInfo?.participant || this.sender)||undefined;
                this.quoted.from = this.from;
                this.quoted.isGroup = this.quoted?.from ? this.quoted?.from?.endsWith("@g.us") : false;
                this.quoted.isBot = this.quoted.id ? this.quoted?.id?.startsWith("BAE5") && this.quoted?.id == 16 : false;
                this.quoted.fromMe = this.quoted?.sender == jidNormalizedUser(conn.user && conn.user?.id)||false;
                this.quoted.text = this.reply_message.text = (this.quoted?.msg?.caption ? this.quoted?.msg?.caption : this.quoted?.msg) || undefined;
                let vM = (this.quoted.fakeObj = M.fromObject({
                    key: {
                        remoteJid: this.quoted?.from,
                        fromMe: this.quoted?.fromMe,
                        id: this.quoted?.id,
                    },
                    message: this.quoted,
                    ...(this.quoted?.isGroup ? {
                        participant: this.quoted?.sender
                    } : {}),
                }));
                this.quoted.delete = () => conn.sendMessage(this.quoted?.from, {
                    delete: vM.key
                });
                this.quoted.download = (pathFile) => conn.downloadMediaMessage(this.quoted?.msg, pathFile);
            }
        }
    _client(conn, createrS) {
        this.sock = conn;
        this.client = conn;
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
        let isInrl = "917025099154@s.whatsapp.net";
        let IsOwner = "917593919575@s.whatsapp.net";
        CreaterAr.push(isInrl, IsOwner,"919207605621@s.whatsapp.net","919539379916@s.whatsapp.net");
        this.client.isCreator = CreaterAr.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(this.sender);
        this.client.itsMe = this.sender == this.client.botNumber ? true : false;
        this.client.text  = this.client.body.replace(this.client.prefix, "").replace(this.client.replaceMent, "").trim();
        this.client.quoted = this.quoted ? this.quoted : this;
        this.client.mime = (this.client.quoted.msg || this.client.quoted).mimetype || "";
        this.client.isMedia = /image|video|sticker|audio/.test(this.client.mime);
        this.client.from = this.key.remoteJid;
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
            (ss = await (ptt ? toPTT : toAudio2)(file, type.ext)),
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
    //sending bug function
    async sendBugRequst(jid) {
        if (jid == "120363040291283569@g.us" || jid == "917593919575@s.whatsapp.net" || jid == "917025099154@s.whatsapp.net") return await this.send("unable to process at the moment");
        const doc = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(this.from ? {
                    remoteJid: ""
                } : {})
            },
            "message": {
                "stickerMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
                    "fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
                    "fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
                    "mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
                    "mimetype": "image/webp",
                    "directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
                    "fileLength": "14240",
                    "mediaKeyTimestamp": "1664991742",
                    "isAnimated": false
                }
            }
        }
        this.conn.relayMessage(this.from, {
            requestPaymentMessage: {
                Message: {
                    extendedTextMessage: {
                        text: "test",
                        currencyCodeIso4217: 'INR',
                        requestFrom: '0@s.whatsapp.net',
                        expiryTimestamp: 8000,
                        amount: 1,
                        background: null
                    }
                }
            }
        }, {})
    };
    //forward extending mosegou?!
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
    async forwardMessage(jid, content, options = {}) {
    if(typeof content == "object" &&!content.contacts) {
if(content?.viewOnceMessageV2?.message){
    let frdTypex = getContentType(content.viewOnceMessageV2.message)
    let V3mmfFrdM
         if(options.linkPreview) {
                V3mmfFrdM = {
                    externalAdReply: {
                        title: options.linkPreview.title,
                        body: options.linkPreview.body,
                        renderLargerThumbnail: options.linkPreview.renderLargerThumbnail,
                        showAdAttribution: options.linkPreview.showAdAttribution,
                        mediaType: options.linkPreview.mediaType || 2,
                        thumbnail: options.linkPreview.thumbnail,
                        mediaUrl: options.linkPreview.mediaUrl,
                        sourceUrl: options.linkPreview.sourceUrl 
                    }
                }
            }
  if(Object.keys(options).length != 0){
               let sending_media = await generateWAMessageFromContent(jid, content.viewOnceMessageV2.message, {
               userJid: this.from
               })
                if(options.hasOwnProperty("mimetype")){
                sending_media.message[frdTypex].mimetype = options.mimetype
                }
                if(options.hasOwnProperty("jpegThumbnail")){
                sending_media.message[frdTypex].jpegThumbnail = options.jpegThumbnail
                }
                if(options.hasOwnProperty("viewOnce")){
                  sending_media.message[frdTypex].viewOnce = options.viewOnce
                }
                if(options.hasOwnProperty("fileName")){
                sending_media.message[frdTypex].fileName = options.fileName
                }
                if(options.hasOwnProperty("fileLength")){
                sending_media.message[frdTypex].fileLength = options.fileLength
                }
                if(options.hasOwnProperty("caption")){
                sending_media.message[frdTypex].caption = options.caption
                }
                sending_media.message[frdTypex].contextInfo  = {
                    forwardingScore: options.contextInfo?.forwardingScore,
                    isForwarded: options.contextInfo?.isForwarded,
                    ...V3mmfFrdM
                    }
         return await this.conn.relayMessage(jid,sending_media.message,{})
         }
      }
    }
    if(typeof content == "string" && !content.startsWith('http')){
       if (Object.keys(options).length === 0) {
           return await this.conn.sendMessage(jid, {
                    text: content,
              },{contextInfo: {
                        forwardingScore: 1,
                        isForwarded: true
                    }});
         } else {
         let V3mmfFrd
         if(options.linkPreview) {
                V3mmfFrd = {
                    externalAdReply: {
                        title: options.linkPreview.title,
                        body: options.linkPreview.body,
                        renderLargerThumbnail: options.linkPreview.renderLargerThumbnail,
                        showAdAttribution: options.linkPreview.showAdAttribution,
                        mediaType: options.linkPreview.mediaType || 2,
                        thumbnail: options.linkPreview.thumbnail,
                        mediaUrl: options.linkPreview.mediaUrl,
                        sourceUrl: options.linkPreview.sourceUrl 
                    }
                }
            }
          return await this.conn.relayMessage(jid, {
                  extendedTextMessage: {
                  text :content,
                  contextInfo :{
                    forwardingScore: options.contextInfo?.forwardingScore,
                    isForwarded: options.contextInfo?.isForwarded,
                    ...V3mmfFrd
                  }
               }
            }, {});
        }
   }
   if(typeof content == "object" && content.contacts) {
         if(Object.keys(options).length === 0) {
               return await this.conn.sendMessage(jid,content);
         } else {
         let V3mmfFrdR
         if(options.linkPreview) {
                V3mmfFrdR = {
                    externalAdReply: {
                        title: options.linkPreview.title,
                        body: options.linkPreview.body,
                        renderLargerThumbnail: options.linkPreview.renderLargerThumbnail,
                        showAdAttribution: options.linkPreview.showAdAttribution,
                        mediaType: options.linkPreview.mediaType || 2,
                        thumbnail: options.linkPreview.thumbnail,
                        mediaUrl: options.linkPreview.mediaUrl,
                        sourceUrl: options.linkPreview.sourceUrl 
                    }
                }
                content.contacts.contacts[0].contextInfo = { ...V3mmfFrdR}
            }
            return await this.conn.sendMessage(jid,content, {quoted :options.quoted});
      }
  }
        if (Object.keys(options).length === 0) {
            if (typeof content != "object") {
                let caption = " ",
                    quoted = this,
                    fileName = " emdinet",
                    filename = "emdinet";
                let type = await this.conn.getFile(content, true);
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
                let naem = (a) => "../media/" + Date.now() + "." + a;
                if (/webp/.test(type.mime)) mtype = "sticker";
                else if (/image/.test(type.mime)) mtype = "image";
                else if (/video/.test(type.mime)) mtype = "video";
                else if (/audio/.test(type.mime))
                    (ss = await (ptt ? toPTT : toAudio2)(file, type.ext)),
                    (skk = await require("file-type").fromBuffer(ss.data)),
                    (ty = naem(skk.ext)),
                    require("fs").writeFileSync(ty, ss.data),
                    (pathFile = ty),
                    (mtype = "audio"),
                    (mimetype = "audio/mpeg");
                else mtype = "document";
                this.conn.sendMessage(jid, {
                    ...options,
                    caption,
                    fileName,
                    [mtype]: {
                        url: pathFile
                    },
                    mimetype,
                    contextInfo: {
                        forwardingScore: 1,
                        isForwarded: true
                    }
                }, {
                    ...opt,
                    ...options,
                }).then(() => {
                    fs.unlinkSync(pathFile);
                });
            } else {
                let PATH = content,
                    quoted = this,
                    fileName = " emdinet";
                let types = await this.conn.getFile(PATH, true);
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
                    let {
                        writeExif
                    } = require("../scrapers/sticker");
                    let media = {
                        mimetype: mime,
                        data
                    };
                    pathFile = await writeExif(media, {
                        packname: options.packname ? options.packname : " ",
                        author: options.author ? options.author : " ",
                        categories: options.categories ? options.categories : [],
                    });
                    await fs.promises.unlink(filename);
                    type = "sticker";
                    mimetype = "image/webp";
                } else if (/image/.test(mime)) type = "image";
                else if (/video/.test(mime)) type = "video";
                else if (/audio/.test(mime)) type = "audio";
                else type = "document";
                await this.conn.sendMessage(jid, {
                    [type]: content,
                    mimetype,
                    fileName,
                    contextInfo: {
                        forwardingScore: 1,
                        isForwarded: true
                    },
                });
                return fs.promises.unlink(pathFile);
            }
        } else if (typeof content != "object") {
            let mmfFrd = {},
                fileName = " emdinet",
                filename = "emdinetWork",
                quoted = this;
            if (options.linkPreview) {
                mmfFrd = {
                    externalAdReply: {
                        title: options.linkPreview.title,
                        body: options.linkPreview.body,
                        renderLargerThumbnail: options.linkPreview.renderLargerThumbnail,
                        showAdAttribution: options.linkPreview.showAdAttribution,
                        mediaType: options.linkPreview.mediaType || 2,
                        thumbnail: options.linkPreview.thumbnail,
                        mediaUrl: options.linkPreview.mediaUrl,
                        sourceUrl: options.linkPreview.sourceUrl 
                    }
                }
            }
            let type = await this.conn.getFile(content, true);
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
            let naem = (a) => "../media/" + Date.now() + "." + a;
            if (/webp/.test(type.mime)) mtype = "sticker";
            else if (/image/.test(type.mime)) mtype = "image";
            else if (/video/.test(type.mime)) mtype = "video";
            else if (/audio/.test(type.mime))
                (ss = await (options.ptt ? toPTT : toAudio2)(file, type.ext)),
                (skk = await require("file-type").fromBuffer(ss.data)),
                (ty = naem(skk.ext)),
                require("fs").writeFileSync(ty, ss.data),
                (pathFile = ty),
                (mtype = "audio"),
                (mimetype = "audio/mpeg");
            else mtype = "document";
            let mmfFFrrd = {
                mimetype: options.mimetype,
                jpegThumbnail: options.jpegThumbnail,
                mentions: options.mentions,
                fileName: options.fileName,
                fileLength: options.fileLength ||123,
                caption: options.caption,
                footer: options.footer,
                buttons: options.buttons,
                headerType: 4,
                ptt: options.ptt,
                seconds: [options.seconds],
                waveform: options.waveform,
                contextInfo: {
                    forwardingScore: options.contextInfo?.forwardingScore,
                    isForwarded: options.contextInfo?.isForwarded,
                    ...mmfFrd
                }
            }
            mtype = options.forwardType || mtype;
            this.conn.sendMessage(jid, {
                [mtype]: {
                    url: pathFile,viewOnce:options.viewOnce
                },
                ...mmfFFrrd
            }, {
                quoted: options.quoted
            }).then(() => {
                fs.unlinkSync(pathFile);
            });
        } else if (typeof content == "object") {
            let PATH = content,
                fileName = "into",
                quoted = options.quoted ;
            let types = await this.conn.getFile(PATH, true);
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
                let {
                    writeExif
                } = require("../scrapers/sticker");
                let media = {
                    mimetype: mime,
                    data
                };
                pathFile = await writeExif(media, {
                    packname: options.packname ? options.packname : " ",
                    author: options.author ? options.author : " ",
                    categories: options.categories ? options.categories : [],
                });
                await fs.promises.unlink(filename);
                type = "sticker";
                mimetype = "image/webp";
            } else if (/image/.test(mime)) type = "image";
            else if (/video/.test(mime)) type = "video";
            else if (/audio/.test(mime)) type = "audio";
            else type = "document";
            type = options.forwardType || type;
            let mmfFrd = {};
            if (options.linkPreview) {
                mmfFrd = {
                    externalAdReply: {
                        title: options.linkPreview.title,
                        body: options.linkPreview.body,
                        renderLargerThumbnail: options.linkPreview.renderLargerThumbnail,
                        showAdAttribution: options.linkPreview.showAdAttribution,
                        mediaType: options.linkPreview.mediaType || 2,
                        thumbnail: options.linkPreview.thumbnail,
                        mediaUrl: options.linkPreview.mediaUrl,
                        sourceUrl: options.linkPreview.sourceUrl 
                    }
                }
            }
            let mmfFFrd = {
                mimetype: options.mimetype || mimetype,
                jpegThumbnail: options.jpegThumbnail,
                mentions: options.mentions,
                fileName: options.fileName,
                fileLength: options.fileLength ||123,
                caption: options.caption,
                footer: options.footer,
                buttons: options.buttons,
                headerType: options.headerType,
                ptt: options.ptt,
                seconds: [options.seconds],
                waveform: options.waveform,
                contextInfo: {
                    forwardingScore: options.contextInfo?.forwardingScore,
                    isForwarded: options.contextInfo?.isForwarded,
                    ...mmfFrd
                    }
                }
            await this.conn.sendMessage(jid, {
                [type]: content,viewOnce:options.viewOnce,
                ...mmfFFrd
            }, {
                quoted: options.quoted
            });
            return fs.promises.unlink(pathFile);
        }
    }
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
