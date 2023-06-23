const {
    verifyOtp
} = require('./database/keys');
const {
    BASE_URL,
    SESSION_ID
} = require('../config');
const got = require('got');
const {decrypt} = require("./decrypt");
let decryptedPlainText = decrypt(SESSION_ID.replaceAll("inrl~", ""))

function GenrateOtp() {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let characters9 = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters9));
    }
    return result;
}
async function isVerified(num) {
let rd = "";
    await verifyOtp.find({
       session: decryptedPlainText, user: num
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            rd = false;
        } else {
            if (iscmd[0].reg) {
                rd  = true;
            } else {
                rd = false;
            }
        }
    });
    return rd
}
async function IsMailed(num) {
let rd = "";
    await verifyOtp.find({
       session: decryptedPlainText, user: num
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
        body
    } = await got(BASE_URL + 'api/validmail?mail=' + mail);
    const {
        result
    } = JSON.parse(body);
    return result;
}
async function sendMail(mail, pass, user) {
let rd = "";
    await got(`${BASE_URL}sendmail?email=${mail}&subject=VERIFICATION&otp=${pass}`);
    await verifyOtp.find({
        session: decryptedPlainText, email: mail
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            await new verifyOtp({
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
async function clearUserFromMail(num) {
let rd ="";
    await verifyOtp.find({
       session: decryptedPlainText,  user: num
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            await verifyOtp.deleteMany({
                user: num
            })
            rd = true
        } else {
            rd = false;
        }
    });
    return rd;
}
async function verifyUser(pass, user) {
let rd = "";
    await verifyOtp.find({
       session: decryptedPlainText, user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            let otp = iscmd[0].otp;
            if (pass = otp) {
                await verifyOtp.findOneAndUpdate({
                    user: user
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
    verifyUser
}
