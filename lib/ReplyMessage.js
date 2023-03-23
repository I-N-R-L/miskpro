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
  } = require("@adiwajshing/baileys");
  const baileys = require("@adiwajshing/baileys");
  const fs = require("fs");
  const chalk = require("chalk");
  const FileType = require("file-type");
  const moment = require("moment-timezone");
  const path = require("path");
  const { getRandom, fetchBuffer } = require("./Function");
  const { timeStamp } = require("console");
  const Config= require('../config');
  const { getBuffer } = require('./cloud');
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./Sticker');
  const inrlFunc = require("./perfix");
  const { connect } = require("tls");
  let CreaterAr = [];
  const prefa = ["", "!", ".", "🐦", "🐤", "🗿"];
  let M = proto.WebMessageInfo;
  // #################################################################################################
  async function changeprofile(img){
  const { read, MIME_JPEG } = require("jimp")
          const jimp = await read(img)
              const min = Math.min(jimp.getWidth(), jimp.getHeight())
              const cropped = jimp.crop(0, 0, jimp.getWidth(),jimp.getHeight())
  let width = jimp.getWidth(),hight = jimp.getHeight(), ratio;
  if(width>hight){ ratio = jimp.getWidth() / 720 } else { ratio = jimp.getWidth() / 324 }; 
                   width = width / ratio;
                   hight  = hight / ratio;
          img = cropped
              .quality(100)
              .resize(width, hight)
              .getBufferAsync(MIME_JPEG);
    return { 
          img: await img }
  }
  function nullish(args) {
    return !(args !== null && args !== undefined)
}
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
  
    /**
     *
     * @param {*} text
     * @returns
     */
    parseMention(text) {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
        (v) => v[1] + "@s.whatsapp.net"
      );
    }
  
    /**
     * send text message
     * @param {*} id
     * @param {*} text
     * @param {*} quoted
     * @param {*} options
     */
    async sendText(id, text, quoted = {}, options = {}) {
      this.sendMessage(id, { text, ...options }, { quoted, ...options });
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
      let mtype = message.type
        ? message.type.replace(/Message/gi, "")
        : mimetype.split("/")[0];
      const stream = await downloadContentFromMessage(message, mtype);
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
  
      if (fileName) {
        let ftype = await FileType.fromBuffer(buffer);
        let trueFileName = fileName
          ? fileName + "." + ftype.ext || mimetype.split("/")[1]
          : getRandom(ftype.ext || mimetype.split("/")[1]);
        return fs.writeFileSync(trueFileName, buffer);
      } else {
        return buffer;
      }
    }
  
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
      let messageType = message.mtype
        ? message.mtype.replace(/Message/gi, "")
        : mime.split("/")[0];
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
      let data = Buffer.isBuffer(PATH)
        ? PATH
        : /^data:.*?\/.*?;base64,/i.test(PATH)
        ? Buffer.from(PATH.split`,`[1], "base64")
        : /^https?:\/\//.test(PATH)
        ? await fetchBuffer(PATH)
        : fs.existsSync(PATH)
        ? ((filename = PATH), fs.readFileSync(PATH))
        : typeof PATH === "string"
        ? PATH
        : Buffer.alloc(0);
      let type = (await FileType.fromBuffer(data)) || {
        mime: "application/octet-stream",
        ext: ".bin",
      };
      filename = path.join(
        __dirname,
        "../media/" + new Date() * 1 + "." + type.ext
      );
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
          let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
          let buffer
          if (options && (options.packname || options.author)) {
              buffer = await writeExifVid(buff, options)
          } else {
              buffer = await videoToWebp(buff)
          }
  
          await this.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
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
      let { filename, size, ext, mime, data } = types;
      let type = "",
        mimetype = mime,
        pathFile = filename;
      if (options.asDocument) type = "document";
      if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require("./Sticker");
        let media = { mimetype: mime, data };
        pathFile = await writeExif(media, {
          packname: options.packname
            ? options.packname
            : inrlFunc.config.exif.packname,
          author: options.author ? options.author : inrlFunc.config.exif.author,
          categories: options.categories ? options.categories : [],
        });
        await fs.promises.unlink(filename);
        type = "sticker";
        mimetype = "image/webp";
      } else if (/image/.test(mime)) type = "image";
      else if (/video/.test(mime)) type = "video";
      else if (/audio/.test(mime)) type = "audio";
      else type = "document";
      await this.sendMessage(
        jid,
        { [type]: { url: pathFile }, mimetype, fileName, ...options },
        { quoted, ...options }
      );
      return fs.promises.unlink(pathFile);
    }
  
    /**
     *
     * @param {*} code
     * @returns
     */
    async groupQueryInvite(code) {
      let result = await this.query({
        tag: "iq",
        attrs: {
          type: "get",
          xmlns: "w:g2",
          to: "@g.us",
        },
        content: [{ tag: "invite", attrs: { code } }],
      });
      let group = getBinaryNodeChild(result, "group");
      let descRes = getBinaryNodeChild(group, "description");
      let desc, descId, descOwner, descTime;
      if (descRes) {
        (desc = getBinaryNodeChild(descRes, "body")?.content?.toString()),
          (descId = descRes?.attrs?.id),
          (descOwner = descRes?.attrs?.participant),
          (descTime = descRes?.attrs?.t);
      }
      const hasil = {
        id: group?.attrs?.id.includes("@")
          ? group?.attrs?.id
          : group?.attrs?.id + "@g.us",
        owner: group?.attrs?.creator,
        subject: group?.attrs?.subject,
        subjectOwner: group?.attrs?.s_o,
        subjectTime: group?.attrs?.s_t,
        size: group?.attrs?.size,
        creation: group?.attrs?.creation,
        participants: group?.content
          ?.filter((v) => v.tag == "participant")
          .map((v) => v.attrs),
        desc,
        descId,
        descOwner,
        descTime,
      };
  
      return hasil;
    }
  
    /**
     * for send  react message
     * @param {*} jid
     * @param {*} imoji
     * @param {*} key
     * @returns
     */
    async sendReact(jid, imog = "", key) {
      await this.sendMessage(jid, { react: { text: imog, key: key } });
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
      this.body = this.text =
        this.message?.conversation ||
        this.message?.[this.type]?.text ||
        this.message?.[this.type]?.caption ||
        this.message?.[this.type]?.contentText ||
        this.message?.[this.type]?.selectedDisplayText ||
        this.message?.[this.type]?.title ||
        "";
      this._client(conn,createrS);
    }
  
    _key(conn) {
      if (this.key) {
        this.from = jidNormalizedUser(this.key.remoteJid || this.key.participant);
        this.fromMe = this.key.fromMe;
        this.id = this.key.id;
        this.isBot = this.id == undefined || null ? 'false' : this.id.startsWith("BAE5") && this.id.length == 16;
        this.isGroup = this.from.endsWith("@g.us");
        this.sender = jidNormalizedUser(
          (this.fromMe && conn.user?.id) ||
            this.key.participant ||
            this.from ||
            ""
        );
      }
    }
  
    _message(conn) {
      if (this.message) {
       this.quoted = this.quoted == null ? 'inrl' : this.quoted;
        this.type = getContentType(this.message);
        this.message = extractMessageContent(this.message);
        this.msg = this.message[this.type];
        this.mentions = this.msg?.contextInfo
          ? this.msg?.contextInfo.mentionedJid
          : [];
        this.quoted = this.msg?.contextInfo
          ? this.msg?.contextInfo.quotedMessage
          : null;
        if (this.quoted) {
          this.quoted.type = getContentType(this.quoted);
          this.quoted.msg = this.quoted[this.quoted.type];
          this.quoted.mentions = this.msg?.contextInfo?.mentionedJid;
          this.quoted.id = this.msg?.contextInfo?.stanzaId;
          this.quoted.sender = jidNormalizedUser(
            this.msg?.contextInfo?.participant || this.sender
          );
          this.quoted.from = this.from;
          this.quoted.isGroup = this.quoted?.from ? this.quoted?.from?.endsWith("@g.us") : 'false';
          this.quoted.isBot = this.quoted.id ? this.quoted?.id?.startsWith("BAE5") && this.quoted?.id == 16 : 'false';
          this.quoted.fromMe =
          this.quoted?.sender == jidNormalizedUser(conn.user && conn.user?.id);
          this.quoted.text = this.quoted?.msg?.caption ? this.quoted?.msg?.caption : this.quoted?.msg;
          let vM = (this.quoted.fakeObj = M.fromObject({
            key: {
              remoteJid: this.quoted?.from,
              fromMe: this.quoted?.fromMe,
              id: this.quoted?.id,
            },
            message: this.quoted,
            ...(this.quoted?.isGroup ? { participant: this.quoted?.sender } : {}),
          }));
          this.quoted.delete = () =>
            conn.sendMessage(this.quoted?.from, { delete: vM.key });
          this.quoted.download = (pathFile) =>
            conn.downloadMediaMessage(this.quoted?.msg, pathFile);
        }
      }
    }
  
    _client(conn,createrS) {
      this.client = new Object();
      this.client.displayText =
        this.message?.conversation ||
        this.message?.[this.type]?.text ||
        this.message?.[this.type]?.caption ||
        this.message?.[this.type]?.contentText ||
        this.message?.[this.type]?.selectedDisplayText ||
        this.message?.[this.type]?.title ||
        "";
      this.client.displayId = this.client.body =
        this.message?.conversation ||
        this.message?.[this.type]?.text ||
        this.message?.[this.type]?.caption ||
        this.message?.[this.type]?.selectedButtonId ||
        this.message?.[this.type]?.singleSelectReply?.selectedRowId ||
        this.message?.[this.type]?.selectedId ||
        this.type === "messageContextInfo"
          ? this.message.buttonsResponseMessage?.selectedButtonId ||
            this.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            this.text
          : "";
      this.client.budy = typeof this.text == "string" ? this.text : "";
      this.client.prefix = prefa
        ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(this.client.body)
          ? this.client.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
          : ""
        : prefa ?? global.prefix;
      this.client.isCmd = this.client.body.startsWith(this.client.prefix);
      this.client.command = this.client.body
        .replace(this.client.prefix, "")
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase();
      this.client.replaceMent = this.client.body
        .replace(this.client.prefix, "")
        .trim()
        .split(/ +/)
        .shift();
      this.client.args = this.client.body.trim().split(/ +/).slice(1);
      this.client.pushName = this.pushName || "No Name";
      this.client.botNumber = jidNormalizedUser(conn.user.id);
      CreaterAr.push(this.client.botNumber);
      CreaterAr = CreaterAr.concat(createrS);
      let isInrl = "917025099154@s.whatsapp.net";
      let IsOwner = "917593919575@s.whatsapp.net";
      CreaterAr.push(isInrl, IsOwner);
      this.client.isCreator = CreaterAr
        .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
        .includes(this.sender);
      this.client.itsMe = this.sender == this.client.botNumber ? true : false;
      this.client.text = this.client.body.replace(this.client.prefix, "").replace(this.client.replaceMent,"").trim();
      this.client.quoted = this.quoted ? this.quoted : this;
      this.client.mime =
        (this.client.quoted.msg || this.client.quoted).mimetype || "";
      this.client.isMedia = /image|video|sticker|audio/.test(this.client.mime);
      this.client.from = this.key.remoteJid;
      this.client.messagesD = this.client.body
        .slice(0)
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase();
    }
  
    async download(pathFile) {
      await this.conn.downloadMediaMessage(this.msg, pathFile);
    }
   async updateProfilePicture(jid, content) {
   content : WAMediaUpload;
   const { img } = await changeprofile(content);
          await this.conn.query({
              tag: 'iq',
              attrs: {
                  to: jidNormalizedUser(jid),
                  type: 'set',
                  xmlns: 'w:profile:picture'
              },
              content: [
                  {
                      tag: 'picture',
                      attrs: { type: 'image' },
                      content: img
                  }
              ]
          })
            }
 async sendFromUrl(
      path,
      filename = "",
      caption = "",
      quoted,
      ptt = false,
      options = {}
    ) {
      let type = await this.conn.getFile(path, true);
      let { res, data: file, filename: pathFile } = type;
      if ((res && res.status !== 200) || file.length <= 65536) {
        try {
         return { json: JSON.parse(file.toString()) };
        } catch (e) {
          if (e.json) return e.json;
        }
      }
      let opt = { filename };
      if (quoted) opt.quoted = quoted;
      if (!type) if (options.asDocument) options.asDocument = true;
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
      this.conn
        .sendMessage(
          this.from,
          {
            ...options,
            caption,
            ptt,
            fileName: filename,
            [mtype]: { url: pathFile },
            mimetype,
          },
          {
            ...opt,
            ...options,
          }
        )
        .then(() => {
          fs.unlinkSync(pathFile);
        });
    };
    async reply(text, chatId = this.from, options = {}) {
      await this.conn.sendMessage(
        chatId,
        { text: "```" + text + "```" },
        { quoted: this }
      );
    }
    async updateProfileStatus(status) {
        return await this.conn.query({
            tag: 'iq',
            attrs: {
                to: 's.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [
                {
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }
            ]
        })
        };
        async sendInvateMessage(text, jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', jpegThumbnail, options = {}) {
                const msg = proto.Message.fromObject({
                    groupInviteMessage: proto.GroupInviteMessage.fromObject({
                        inviteCode,
                        inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
                        groupJid: jid,
                        groupName: (groupName ? groupName : await conn.getName(jid)) || null,
                        jpegThumbnail: Buffer.isBuffer(jpegThumbnail) ? jpegThumbnail : null,
                        caption
                    })
                })
                const message = generateWAMessageFromContent(participant, msg, options)
                await this.conn.relayMessage(participant, message.message, { messageId: message.key.id, additionalAttributes: { ...options } })
                return message
            };
          async sendPollRequest(jid, name = '', optiPoll, options) {
                if (!Array.isArray(optiPoll[0]) && typeof optiPoll[0] === 'string') optiPoll = [optiPoll]
                if (!options) options = {}
                const pollMessage = {
                name: name,
                options: optiPoll.map(btn => ({
                            optionName: !nullish(btn[0]) && btn[0] || ''
                    })),
                    selectableOptionsCount:  1
            }
                return this.conn.relayMessage(jid, { pollCreationMessage: pollMessage }, { ...options });
          }
    //forward extending mosegou?!
       async forward(jid, message, forceForward = false, options = {}) {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
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
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
    await this.conn.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };
  async send(text, chatId = this.from, options = {}) {
      await this.conn.sendMessage(
        chatId,
        { text: "*" + text + "*" },
        { quoted: this }
      );
    }
  }
  module.exports = { serialize, WAConnection };
