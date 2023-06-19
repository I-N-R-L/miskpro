const Config = require('../../config');
const {decrypt} = require("../decrypt");
let decryptedPlainText = decrypt(Config.SESSION_ID.replaceAll("inrl~", ""))

const mongoose = require("mongoose")
const verify = new mongoose.Schema({
session : { type: String,required: true, default: decryptedPlainText },
otp : { type: String, required: true},
user : { type: String, required: true }
})
const verifyOtp = mongoose.model("verifyOtp", verify)

module.exports = {verifyOtp};
