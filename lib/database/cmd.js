const aes256 = require('aes256');
const Config = require('../../config');
let plaintext = Config.SESSION_ID.replaceAll("inrl~", "");
let key = 'k!t';
let decryptedPlainText = aes256.decrypt(key, plaintext);

const mongoose = require("mongoose")
const cmdSchema = new mongoose.Schema({
session : { type: String,required: true, default: decryptedPlainText },
id: { type: String,required: true },
cmd : { type: String, default: "inrl" },
})
const cmdDB = mongoose.model("cmdDB", cmdSchema)
const  GenID = decryptedPlainText;

async function setCmd(cmdID, newcmd){
let setcmD =GenID+cmdID;
await cmdDB.find({ cmd: newcmd }).then(async(iscmd) => {
 if(!iscmd[0]){
await new cmdDB({ id: setcmD, cmd : newcmd }).save();
} else {
  await cmdDB.findOneAndUpdate(
     { id: setcmD },{ cmd: newcmd })
     }
  })
  return "succsuss"
}

async function DeleteCmd(cmdName){
    await cmdDB.find({ cmd: cmdName }).then(async(dltcmd) => {
        if(dltcmd){
            await cmdDB.deleteMany({ cmd:cmdName })
           }
       })
       return "succsuss"
    }
    async function getCmd(){
        return new Promise(async(resolve,reject) => {
        await cmdDB.find({ session: GenID }).then(async(cmd) => {
            if(cmd[0]){
                resolve(cmd)
               }
           })
           resolve('no data')
        })
    }
module.exports = { cmdDB, setCmd, DeleteCmd,getCmd };
