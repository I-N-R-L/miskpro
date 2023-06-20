const {
    verifyOtp
} = require('./database/keys');
const {
    BASE_URL
} = require('../config');
const got = require('got');

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
    await verifyOtp.find({
        user: num
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            return false;
        } else {
            if (iscmd[0].reg) {
                return true;
            } else {
                return false;
            }
        }
    });
}
async function IsMailed(num) {
    await verifyOtp.find({
        user: num
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            return false;
        } else {
            return true
        }
    });
}
async function isValidMailid(mail) {
    const {
        body
    } = await got(BASE_URL + '/validmail?mail=' + mail);
    const {
        result
    } = JSON.parse(body);
    return result;
}
async function sendMail(mail, pass, user) {
    await got(`${BASE_URL}/sendmail?email=${mail}&subject=VERIFICATION&otp=${pass}`);
    await verifyOtp.find({
        email: mail
    }).then(async (iscmd) => {
        if (!iscmd[0]) {
            await new verifyOtp({
                otp: pass,
                email: mail,
                user: user,
                reg: 'false'
            }).save()
            return 'done'
        } else {
            return false
        }
    });
}
async function clearUserFromMail(num) {
    await verifyOtp.find({
        user: num
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            verifyOtp.deleteMany({
                user: num
            })
        } else {
            return false;
        }
    });
}
async function verifyUser(pass, user) {
    await verifyOtp.find({
        user: user
    }).then(async (iscmd) => {
        if (iscmd[0]) {
            let otp = iscmd[0].otp;
            if (pass = otp) {
                await verifyOtp.findOneAndUpdate({
                    user: user
                }, {
                    reg: 'true'
                });
                return true;
            } else {
                return false
            }
        } else {
            return false;
        }
    });
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
