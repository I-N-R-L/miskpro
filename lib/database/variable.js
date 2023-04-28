const Config = require('../../config');
const {decrypt} = require("../decrypt");
let decryptedPlainText = decrypt(Config.SESSION_ID.replaceAll("inrl~", ""))

const mongoose = require("mongoose")
const variable = new mongoose.Schema({
SESSION : { type: String, default: decryptedPlainText  },
PASSWORD: { type: String },
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
WELCOME_MSG : { type: String, default: Config.WELCOME_MSG },
EXIT_MSG : { type: String, default: Config.EXIT_MSG },
CALL_BLOCK : { type: String, default: Config.CALL_BLOCK },
STATUS_VIEW : { type: String, default: Config.STATUS_VIEW },
LANG : { type: String, default: Config.LANG },
PROFILE_STATUS : { type: String, default: Config.PROFILE_STATUS },
BLOCK_CHAT : { type: String,default: Config.BLOCK_CHAT },
FOOTER : { type: String,default: Config.FOOTER },
AUTO_CHAT_PM : { type: String, default: Config.AUTO_CHAT_PM },
AUTO_CHAT_GRP : { type: String, default: Config.AUTO_CHAT_GRP },
BOT_PRESENCE : { type: String, default: Config.BOT_PRESENCE },
PMB_MSG : { type: String, default: Config.PMB_MSG },
PMBC_MSG : { type: String, default: Config.PMBC_MSG },
AUTOMUTE_MSG : { type: String, default: Config.AUTOMUTE_MSG },
AUTOUNMUTE_MSG : { type: String, default: Config.AUTOUNMUTE_MSG },
ALLWAYS_ONLINE : { type: String, default: Config.ALLWAYS_ONLINE },
AUDIO_DATA : { type: String, default: Config.AUDIO_DATA },
STICKER_DATA : { type: String, default: Config.STICKER_DATA },
INSTAGRAM : { type: String , default: Config.INSTAGRAM },
GIT : { type: String, default: Config.GIT },
CAPTION : { type: String, default: Config.CAPTION },
SUDO: { type: String, default: Config.SUDO }
})
const variableDb = mongoose.model("variableDb", variable);

async function CreateDb(){
  await variableDb.find({SESSION:decryptedPlainText}).then(async(data)=> {
  if(!data[0]){
      await new variableDb({ SESSION : decryptedPlainText }).save();
    } else {
    }});
}
async function UpdateVariable(id, value){
return new Promise(async(resolve,reject) => {
let ID = id.toUpperCase(), update={};
let INBUILT_ID = ["PASSWORD", "REACT","WARNCOUND","ALIVE_DATA","AUTO_BIO","READ_CHAT","BOT_INFO","BGMBOT","WORKTYPE","PM_BLOCK","PREFIX","WELCOME_MSG","EXIT_MSG","CALL_BLOCK","STATUS_VIEW","LANG","OWNER","PROFILE_STATUS","BLOCK_CHAT","AUTO_CHAT_PM","AUTO_CHAT_GRP","BOT_PRESENCE","AUDIO_DATA","STICKER_DATA","INSTAGRAM","GIT","CAPTION","SUDO","FOOTER","ALLWAYS_ONLINE","PMB_MSG","PMBC_MSG","AUTOMUTE_MSG","AUTOUNMUTE_MSG"]
INBUILT_ID.forEach((i)=>{
if(!i.match(ID)) resolve('no id found for your request');
if(i.match(ID)){
ID = i;
update[ID] = value;
      }
});
let filter = { SESSION: decryptedPlainText };
await variableDb.findOneAndUpdate(filter, update);
resolve('success');
                  });
}
async function getVar(match){
return new Promise(async(resolve,reject) => { 
await variableDb.find({SESSION:decryptedPlainText}).then(async(data)=> {
    if(!match){
const {FOOTER,PASSWORD,REACT,WARNCOUND,ALIVE_DATA,AUTO_BIO,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO,PMB_MSG,PMBC_MSG,AUTOMUTE_MSG,AUTOUNMUTE_MSG,ALLWAYS_ONLINE} = data[0];
resolve({FOOTER,PASSWORD,REACT,WARNCOUND,ALIVE_DATA,AUTO_BIO,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO,PMB_MSG,PMBC_MSG,AUTOMUTE_MSG,AUTOUNMUTE_MSG,ALLWAYS_ONLINE,data})
  } else if(match){
const {match} = data[0];
    console.log(match);
    resolve(match)
      }
     });
  });
}
module.exports = {variableDb,CreateDb,UpdateVariable,getVar};
