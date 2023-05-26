const Config = require('../../config');
const {decrypt} = require("../decrypt");
let decryptedPlainText = decrypt(Config.SESSION_ID.replaceAll("inrl~", ""))

const mongoose = require("mongoose")
const tog = new mongoose.Schema({
session : { type: String,required: true, default: decryptedPlainText },
cmd : { type: String },
action : { type: String, required: true, default: true }
})
const togSchema = mongoose.model("togSchema", tog)

async function TogCmd(newcmd, action){
if(action == 'off'){
await togSchema.find({ cmd: newcmd }).then(async(iscmd) => {
 if(!iscmd[0]){
await new togSchema({ cmd: newcmd, action : newcmd }).save();
     }
  })
  return "succsuss"
  } else if(action == 'on'){
 await togSchema.find({ cmd: newcmd }).then(async(dltcmd) => {
        if(dltcmd){
            await togSchema.deleteMany({ cmd: newcmd })
           }
       })
       return "succsuss"
   }
 return false;
}

    async function getTog(){
        return new Promise(async(resolve,reject) => {
        await togSchema.find({ session : decryptedPlainText }).then(async(cmd) => {
            if(cmd[0]){
                resolve(cmd)
               }
           })
           resolve('no data')
        })
    }
module.exports = { togSchema, getTog, TogCmd };
