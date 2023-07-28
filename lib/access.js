const {
    limit
} = require('./database/limit');
const {
    BASE_URL
} = require('../config');


async function remainLimit(user, id) {
let rd = false;
    await limit.find({
       session: id, user: user
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
async function giveLimit(user, limitt ="5", id) {
    let rd = false;
     await limit.find({
        session: id, user: user
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
       await new limit({
                session: id,
                user: user,
                limit: limitt
            }).save()
            rd = true;
       } else {
       await limit.findOneAndUpdate({
                    session: id, user: user
                }, {
                    limit: limitt
                });
      rd = true
      }
      });
      return rd;
}
async function resetLimit(user, id) {
let rd = false;
     await limit.find({
        session: id, user: user
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            rd = false
        } else {
        await limit.findOneAndUpdate({
                    session: id, user: user
                }, {
                    count: "1"
                });
            rd = false
        }
    });
    return rd;
}
async function getLimit(user, id) {
let rd = undefined;
    await limit.find({
       session: id,  user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            rd = iscmd[0].count
        } else {
            rd = false;
        }
    });
    return rd;
}
async function getLimitV2(user, id) {
let rd = "*Users List*";
    await limit.find({
       session: id, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
                rd += `*_user_* : _${iscmd[0].user}_\n`;
                rd += `*_limit_* : _${iscmd[0].limit}_\n`;
                rd += `*_count_* : _${iscmd[0].count}_`;
            } else {
                rd = "no data"
            }
    });
    return rd;
}
async function removeUserLimit(user, id) {
let rd = false;
    await limit.find({
       session: id, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
        await limit.deleteMany({
                user: user, session: id
            })
        rd = true;
       } else {
      rd = false;
      }
      });
      return rd;
}
async function UpdateLimit(user, count, id) {
let rd = false;
    await limit.find({
       session: id, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
                await limit.findOneAndUpdate({
                    session: id, user: user
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
module.exports = {
    remainLimit,
    giveLimit,
    resetLimit,
    getLimit,
    getLimitV2,
    removeUserLimit,
    UpdateLimit
}
