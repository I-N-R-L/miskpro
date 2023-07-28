const mongoose = require("mongoose")
const verify = new mongoose.Schema({
session : { type: String,required: true },
otp : { type: String, required: true},
user : { type: String, required: true },
reg : { type: String, required: true },
email : { type: String, required: true }
})
const verifyOtp = mongoose.model("verifyOtp", verify)

module.exports = {verifyOtp};
