const mongoose = require("mongoose")
const truecaller = new mongoose.Schema({
session : { type: String,required: true },
id : { type: String },
apikey : { type: String,  },
number : { type: String,  }
})
const truecallerDB = mongoose.model("truecaller", truecaller)

async function setTrueId(number, id, uid){
await truecallerDB.find({ number, id, session :uid }).then(async(iscmd) => {
 if(!iscmd[0]){
await new truecallerDB({ number, id, session : uid }).save();
} else {
  await truecallerDB.findOneAndUpdate(
     { session :uid},{ id, number })
     }
  })
  return "succsuss"
}

async function setTrueKey(key, id){
    await truecallerDB.find({ apikey:key,  session :id }).then(async(dltcmd) => {
        if(dltcmd){
            await truecallerDB.findOneAndUpdate(
     { session :id},{ apikey:key })
     }
  })
       return "succsuss"
    }
    
    async function getTruekey(uid){
        return new Promise(async(resolve,reject) => {
        await truecallerDB.find({ session: uid }).then(async(cmd) => {
            if(cmd[0] && !cmd[0].apikey){
                resolve({id:cmd[0].id, number : cmd[0].number});
               } else {
               resolve({apikey:cmd[0].apikey});
               }
           })
        })
    }
    module.exports = { setTrueId, setTrueKey, getTruekey };
