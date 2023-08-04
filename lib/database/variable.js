const Config = require('../../config');


const mongoose = require("mongoose")
const variable = new mongoose.Schema({
SESSION : { type: String, default: "inrl"  },
REACT : { type: String, default: Config.REACT },
WARNCOUND : { type: String, default: Config.WARNCOUND },
ALIVE_DATA : { type: String, default: Config.ALIVE_DATA },
AUTO_BIO : { type: String, default: Config.AUTO_BIO },
READ_CHAT : { type: String, default: Config.READ_CHAT },
BOT_INFO : { type: String, default: Config.BOT_INFO },
BGMBOT : { type: String, default: Config.BGMBOT },
WORKTYPE : { type: String, default: Config.WORKTYPE },
PM_BLOCK : { type: String, default: Config.PM_BLOCK },
PREFIX : { type: String, default: Config.PREFIX },
ANTI_SPAM : { type: String, default: Config.ANTI_SPAM },
WELCOME_MSG : { type: String, default: Config.WELCOME_MSG },
EXIT_MSG : { type: String, default: Config.EXIT_MSG },
CALL_BLOCK : { type: String, default: Config.CALL_BLOCK },
STATUS_VIEW : { type: String, default: Config.STATUS_VIEW },
LANG : { type: String, default: Config.LANG },
PROFILE_STATUS : { type: String, default: Config.PROFILE_STATUS },
BLOCK_CHAT : { type: String,default: Config.BLOCK_CHAT },
AUTO_CHAT_PM : { type: String, default: Config.AUTO_CHAT_PM },
AUTO_CHAT_GRP : { type: String, default: Config.AUTO_CHAT_GRP },
BOT_PRESENCE : { type: String, default: Config.BOT_PRESENCE },
PMB_MSG : { type: String, default: Config.PMB_MSG },
PMBC_MSG : { type: String, default: Config.PMBC_MSG },
SPAM_BLOCK : { type: String, default: Config.SPAM_BLOCK },
REJECT_CALL : { type: String, default: Config.REJECT_CALL },
ALLWAYS_ONLINE : { type: String, default: Config.ALLWAYS_ONLINE },
AUDIO_DATA : { type: String, default: Config.AUDIO_DATA },
STICKER_DATA : { type: String, default: Config.STICKER_DATA },
WA_GRP : { type: String, default: Config.WA_GRP },
SUDO: { type: String, default: Config.SUDO },
TIME_ZONE : { type: String, default: "Asia/Kolkata"}
})
const variableDb = mongoose.model("variableDb", variable);

async function CreateDb(num){
  await variableDb.find({SESSION:num}).then(async(data)=> {
  if(!data[0]){
      await new variableDb({ SESSION : num }).save();
    } else {
    }});
}
async function UpdateVariable(id, value, num){
return new Promise(async(resolve,reject) => {
let ID = id.toUpperCase(), update={};
let INBUILT_ID = ["ANTI_SPAM","REACT","WARNCOUND","ALIVE_DATA","AUTO_BIO","READ_CHAT","BOT_INFO","BGMBOT","WORKTYPE","PM_BLOCK","PREFIX","WELCOME_MSG","EXIT_MSG","CALL_BLOCK","STATUS_VIEW","LANG","OWNER","PROFILE_STATUS","BLOCK_CHAT","AUTO_CHAT_PM","AUTO_CHAT_GRP","BOT_PRESENCE","AUDIO_DATA","STICKER_DATA","WA_GRP","SUDO","FOOTER","ALLWAYS_ONLINE","PMB_MSG","PMBC_MSG","SPAM_BLOCK", "REJECT_CALL","TIME_ZONE"]
let confjs = false
INBUILT_ID.forEach((i)=>{
if(i.match(ID)){
confjs = true
ID = i;
update[ID] = value;
      }
});
if(!confjs) resolve('no id found for your request');
let filter = { SESSION: num };
await variableDb.findOneAndUpdate(filter, update);
resolve('success');
                  });
}
async function getVar(num, match){
return new Promise(async(resolve,reject) => { 
await variableDb.find({SESSION: num}).then(async(data)=> {
    if(!match){
const {ANTI_SPAM,FOOTER,REACT,WARNCOUND,ALIVE_DATA,AUTO_BIO,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,WA_GRP,SUDO,PMB_MSG,PMBC_MSG,SPAM_BLOCK, REJECT_CALL,ALLWAYS_ONLINE,TIME_ZONE} = data[0];
resolve({ANTI_SPAM,FOOTER,REACT,WARNCOUND,ALIVE_DATA,AUTO_BIO,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,WA_GRP,SUDO,PMB_MSG,PMBC_MSG,SPAM_BLOCK, REJECT_CALL,ALLWAYS_ONLINE,data,TIME_ZONE})
  } else if(match){
const {match} = data[0];
    resolve(match)
      }
     });
  });
}
module.exports = {variableDb,CreateDb,UpdateVariable,getVar};
