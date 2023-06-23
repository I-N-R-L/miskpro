const {
    limit
} = require('./database/limit');
const {
    BASE_URL,
    SESSION_ID
} = require('../config');
const {decrypt} = require("./decrypt");
let decryptedPlainText = decrypt(SESSION_ID.replaceAll("inrl~", ""))

async function remainLimit(user) {
let rd = false;
    await limit.find({
       session: decryptedPlainText, user: user
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            rd = false;
        } else {
         let count = iscmd[0].count;
         let limitt =  iscmd[0].limit;
         if(count == limitt){
            rd = false
            } else {
            rd = true
            }
        }
    });
    return rd
}
async function giveLimit(user, limit ="5") {
    let rd = false;
     await limit.find({
        session: decryptedPlainText, user: user
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
       await new limit({
                user: user,
                limit: limit
            }).save()
            rd = true;
       } else {
       await limit.findOneAndUpdate({
                    user: user
                }, {
                    limit: limit
                });
      rd = true
      }
      return rd;
}
async function resetLimit(user) {
let rd = false;
     await limit.find({
        session: decryptedPlainText, user: user
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            rd = false
        } else {
        await limit.findOneAndUpdate({
                    user: user
                }, {
                    count: "1"
                });
            rd = false
        }
    });
    return rd;
}
async function getLimit(user) {
let rd = undefined;
    await limit.find({
       session: decryptedPlainText,  user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            rd = iscmd[0].count
        } else {
            rd = false;
        }
    });
    return rd;
}
async function UpdateLimit(user, count) {
let rd = false;
    await limit.find({
       session: decryptedPlainText, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
                await limit.findOneAndUpdate({
                    user: user
                }, {
                    count: count
                });
                rd = true;
            } else {
                rd = false
            }
    });
    return rd;
}
async function removeUserLimit(user) {
let rd = false;
    await limit.find({
       session: decryptedPlainText, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
        await limit.deleteMany({
                user: user
            })
        rd = true;
       } else {
      rd = false;
      }
      return rd;
}
module.exports = {
    remainLimit,
    giveLimit,
    resetLimit,
    getLimit,
    UpdateLimit,
    removeUserLimit
}
