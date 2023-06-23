const Config = require('../../config');
const {decrypt} = require("../decrypt");
let decryptedPlainText = decrypt(Config.SESSION_ID.replaceAll("inrl~", ""))

const mongoose = require("mongoose")
const premium = new mongoose.Schema({
session : { type: String,required: true, default: decryptedPlainText },
user : { type: String, required: true},
limit : { type: String, required: true, default: "5"},
count : { type: String, required: true, default: "1"}
})
const limit= mongoose.model("limit", premium)

module.exports = {limit};
