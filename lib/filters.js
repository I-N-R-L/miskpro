function extractUrlsFromString(text) {
    if (!text) return false
    const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;
    let urls = text.match(regexp);
    if (urls) {
        return urls;
    } else {
        return false;
    }
};
const {
    filterDB
} = require('./database/filter');
const types = ["image", "video", "audio", "sticker"];
const {
    SESSION_ID
} = require('../config');
const {
    decrypt
} = require("./decrypt");
let decryptedPlainText = decrypt(SESSION_ID.replaceAll("inrl~", ""))
async function addFilterV2(jid, keys) {
    let pattern = keys.split('=')[0].trim();
    let key = keys.split('=')[1].trim();
    let rd = "";
    let type, url;
    if (key.includes('/')) {
        url = key.split('/')[0];
        type = key.split('/')[1];
        if (!extractUrlsFromString(url)) {
            type = "text"
        } else {
            url = extractUrlsFromString(url)[0];
        }
    } else {
        url = key;
        type = "text";
    }
    if (!types.includes(type)) {
        type = "text";
    }
    await filterDB.find({
        session: decryptedPlainText,
        jid: jid,
        prefix: pattern,
        type: type
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            await new filterDB({
                jid: jid,
                prefix: pattern,
                chat: url,
                type: type
            }).save()
            rd = true
        } else {
            rd = false
        }
    });
    return rd;
}
async function removeFilter(jid, match) {
    let rd = false;
    await filterDB.find({
        session: decryptedPlainText,
        jid: jid,
        prefix: match
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            await filterDB.deleteMany({
                jid: jid,
                prefix: match
            })
            rd = true
        } else {
            rd = false;
        }
    });
    return rd;
}
async function isFilter(jid) {
    let rd = false;
    await filterDB.find({
        session: decryptedPlainText,
        jid: jid
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            rd = true
        } else {
            rd = false
        }
    });
    return rd;
}
async function sendFilterMessage(jid, match, msg) {
    rd = false;
    await filterDB.find({
        session: decryptedPlainText,
        jid: jid
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            iscmd.map(({
                prefix,
                chat,
                type
            }) => {
                if (match.includes(prefix)) {
                    if (type == "audio") {
                        msg.conn.sendMessage(jid, {
                            [type]: {
                                url: chat
                            },
                            mimetype: "audio/mp4",
                            ptt: true,
                            seconds: [9999999]
                        }, {
                            quoted: msg
                        });
                    } else if (type == "video") {
                        msg.conn.sendMessage(jid, {
                            [type]: {
                                url: chat
                            }
                        }, {
                            quoted: msg
                        });
                    } else if (type == "image") {
                        msg.conn.sendMessage(jid, {
                            [type]: {
                                url: chat
                            }
                        }, {
                            quoted: msg
                        });
                    } else if (type == "sticker") {
                        msg.conn.sendMessage(jid, {
                            [type]: {
                                url: chat
                            }
                        }, {
                            quoted: msg
                        });
                    } else if (type == "text") {
                        msg.conn.sendMessage(jid, {
                            [type]: chat
                        }, {
                            quoted: msg
                        });
                    }
                }
                rd = true;
            })
        } else {
            rd = false;
        }
    });
    return rd;
}
async function getFilterV2(jid, all = false) {
    let res = "";
    if (all) {
        await filterDB.find({
            session: decryptedPlainText
        }).then(async (iscmd) => {
            if (iscmd[0]) {
                iscmd.map(({
                    jid,
                    chat,
                    prefix
                }) => {
                    res += `jid: ${jid}\nmedia: ${chat}\npettern: ${prefix}\n`;
                })
            } else {
                res = "no data";
            }
        });
    } else {
        await filterDB.find({
            session: decryptedPlainText,
            jid: jid
        }).then(async (iscmd) => {
            if (iscmd[0]) {
                iscmd.map(({
                    chat,
                    prefix
                }) => {
                    res += `media: ${chat}\npettern: ${prefix}\n`;
                })
            } else {
                res = "no data";
            }
        });
    }
    return res;
}
module.exports = {
    addFilterV2,
    removeFilter,
    isFilter,
    sendFilterMessage,
    getFilterV2
}
