const mongoose = require("mongoose")
const cmdSchema = new mongoose.Schema({
session : { type: String,required: true },
id: { type: String,required: true },
cmd : { type: String, default: "inrl" },
})
const cmdDB = mongoose.model("cmdDB", cmdSchema)
const  GenID = decryptedPlainText;

async function setCmd(cmdID, newcmd, id){
let setcmD =id+cmdID;
await cmdDB.find({ cmd: newcmd, session :id }).then(async(iscmd) => {
 if(!iscmd[0]){
await new cmdDB({ id: setcmD, cmd : newcmd, session :id }).save();
} else {
  await cmdDB.findOneAndUpdate(
     { id: setcmD, session :id},{ cmd: newcmd })
     }
  })
  return "succsuss"
}

async function DeleteCmd(cmdName, id){
    await cmdDB.find({ cmd: cmdName, session :id }).then(async(dltcmd) => {
        if(dltcmd){
            await cmdDB.deleteMany({ session :id, cmd:cmdName })
           }
       })
       return "succsuss"
    }
    async function getCmd(id){
        return new Promise(async(resolve,reject) => {
        await cmdDB.find({ session: id }).then(async(cmd) => {
            if(cmd[0]){
                resolve(cmd)
               }
           })
           resolve('no data')
        })
    }
module.exports = { cmdDB, setCmd, DeleteCmd,getCmd };
