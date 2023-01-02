const aes256 = require('aes256');
const Config = require('../../config')
const mddc=(Config.SESSION_ID);
let m = (mddc);
let mdm = m.replaceAll("inrl~", "");
let key = 'k!t';
let plaintext = (mdm);
let decryptedPlainText = aes256.decrypt(key, plaintext);

const mongoose = require("mongoose")
const cmdSchema = new mongoose.Schema({
id: { type: String,required: true },
cmd : { type: String, default: "inrl" },
})
const cmdDB = mongoose.model("cmdDB", cmdSchema)
const  GenID = decryptedPlainText;

async function setCmd(cmdID, newcmd){
let setcmD = GenID+cmdID;
await cmdDB.findOne({ id: setcmD }).then(async(iscmd) => {
if(!iscmd){
await new cmdDB({ id: setcmD, cmd : newcmd }).save();
} else {
  await cmdDB.update(
     { id: setcmD, cmd: newcmd })
     }
  })
}
async function DeleteCmd(cmdName){
await cmdDB.find({ cmd: cmdName }).then(async(dltcmd) => {
	if(dltcmd){
		await cmdDB.deleteMany({ cmd:cmdName })
	   }
   })
 }
module.exports = { cmdDB, setCmd, DeleteCmd };
