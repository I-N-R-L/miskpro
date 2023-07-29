const mongoose = require("mongoose")
const filter = new mongoose.Schema({
session : { type: String,required: true },
jid : { type: String, required: true},
chat : { type: String, required: true},
prefix : { type: String, required: true},
type: { type: String, required: true, default: "text"},
})
const filterDB= mongoose.model("filterDB", filter)

module.exports = {filterDB};
