const mongoose = require("mongoose")
const tog = new mongoose.Schema({
session : { type: String,required: true },
cmd : { type: String },
action : { type: String, required: true, default: true }
})
const togSchema = mongoose.model("togSchema", tog)

async function TogCmd(newcmd, action, id){
if(action == 'off'){
await togSchema.find({ cmd: newcmd,session:id}).then(async(iscmd) => {
 if(!iscmd[0]){
await new togSchema({ session :id, cmd: newcmd, action : newcmd }).save();
     }
  })
  return "succsuss"
  } else if(action == 'on'){
 await togSchema.find({ session :id, cmd: newcmd }).then(async(dltcmd) => {
        if(dltcmd){
            await togSchema.deleteMany({ session :id, cmd: newcmd })
           }
       })
       return "succsuss"
   }
 return false;
}

    async function getTog(id){
        return new Promise(async(resolve,reject) => {
        await togSchema.find({ session : id }).then(async(cmd) => {
            if(cmd[0]){
                resolve(cmd)
               }
           })
           resolve('no data')
        })
    }
module.exports = { togSchema, getTog, TogCmd };
