const {
    verifyOtp
} = require('./database/keys');
const {
    BASE_URL
} = require('../config');
const axios = require('axios');

function GenrateOtp() {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let characters9 = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters9));
    }
    return result;
}
async function isVerified(num, id) {
let rd = "";
    await verifyOtp.find({
       session: id, user: num
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            rd = false;
        } else {
            if (iscmd[0].reg == 'true') {
                rd  = true;
            } else {
                rd = false;
            }
        }
    });
    return rd
}
async function IsMailed(num, id) {
let rd = "";
    await verifyOtp.find({
       session: id, user: num
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            rd = false;
        } else {
            rd = true
        }
    });
    return rd
}
async function isValidMailid(mail) {
    const {
        data
    } = await axios(BASE_URL + 'api/validmail?mail=' + mail);
    const {
        result
    } = data;
    return result;
}
async function sendMail(mail, pass, user, id) {
let rd = "";
    await axios(`${BASE_URL}sendmail?email=${mail}&subject=VERIFICATION&otp=${pass}`);
    await verifyOtp.find({
        session: id, email: mail
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            await new verifyOtp({
                session: id,
                otp: pass,
                email: mail,
                user: user,
                reg: 'false'
            }).save()
            rd = 'done'
        } else {
            rd = false
        }
    });
    return rd;
}
async function clearUserFromMail(num, id) {
let rd ="";
    await verifyOtp.find({
       session: id,  user: num
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            await verifyOtp.deleteMany({
                session: id, user: num
            })
            rd = true
        } else {
            rd = false;
        }
    });
    return rd;
}

async function getVerifiedUsers(id) {
let rd ="*Total Verified Users*\n\n", tt='```';
    await verifyOtp.find({
       session: id
    }).then(async (iscmd) => {
        if (iscmd[0]) {
           iscmd.map((list)=>{
               rd += `*_user :-_* ${tt}${list.user}${tt}\n*_reg :-_* ${tt}${list.reg}${tt}\n*_email:-_* ${tt}${list.email}${tt}\n\n`;
        })
        } else {
            rd = "no data";
        }
    });
    return rd;
 }
async function verifyUser(pass, user, id) {
let rd = "";
    await verifyOtp.find({
       session: id, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            let otp = iscmd[0].otp;
            if (pass == otp) {
                await verifyOtp.findOneAndUpdate({
                    session: id, user: user
                }, {
                    reg: 'true'
                });
                rd = true;
            } else {
                rd = false
            }
        } else {
            rd = false;
        }
    });
    return rd;
}
module.exports = {
    GenrateOtp,
    isVerified,
    IsMailed,
    isValidMailid,
    sendMail,
    clearUserFromMail,
    getVerifiedUsers,
    verifyUser
  }
