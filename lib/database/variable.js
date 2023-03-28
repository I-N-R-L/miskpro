const aes256 = require('aes256');
const {SESSION_ID} = require('../../config')
let plaintext = SESSION_ID.replaceAll("inrl~", "");
let key = 'k!t';
let decryptedPlainText = aes256.decrypt(key, plaintext);

const mongoose = require("mongoose")
const variable = new mongoose.Schema({
SESSION : { type: String, default: decryptedPlainText  },
PASSWORD: { type: String },
REACT : { type: String, default: "false" },
WARNCOUND : { type: String, default: "5" },
ALIVE_DATA : { type: String },
U_STATUS : { type: String, default: "false" },
READ_CHAT : { type: String, default: "false" },
BOT_INFO : { type: String, default: "INRL-BOT-MD,INRL,https://i.imgur.com/DyLAuEh.jpg" },
BGMBOT : { type: String, default: "false" },
WORKTYPE : { type: String, default: "private" },
PM_BLOCK : { type: String, default: "false" },
PREFIX : { type: String, default: "." },
WELCOME_MSG : { type: String },
EXIT_MSG : { type: String},
CALL_BLOCK : { type: String, default: "false" },
STATUS_VIEW : { type: String, default: "true" },
MENSION_TEXT : { type: String, default: "inrl-md,edit this and set your data, https://chat.whatsapp.com/CUJuk1xPEpR8av9h7DDGNO" },
LANG : { type: String, default: "EN" },
OWNER : { type: String, default: "917593919575" },
PROFILE_STATUS : { type: String, default: "💗 ᴀᴜᴛᴏ ᴍᴀᴛɪᴄ ʙɪᴏ ʙy ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ" },
BLOCK_CHAT : { type: String,default:"false"},
FOOTER : { type: String,default:"ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ"},
AUTO_CHAT_PM : { type: String, default: "false" },
AUTO_CHAT_GRP : { type: String, default: "false" },
BOT_PRESENCE : { type: String, default: "recording" },
PMB_MSG : { type: String, default: "pm msgs isn't allowed" },
PMBC_MSG : { type: String, default: "pm call isn't allowed" },
AUTOMUTE_MSG : { type: String, default: "group will been muted at @time" },
AUTOUNMUTE_MSG : { type: String, default: "group will unmute at @time" },
ALLWAYS_ONLINE : { type: String, default: "false" },
AUDIO_DATA : { type: String, default: "inrl, inrl,https://i.imgur.com/DyLAuEh.jpg" },
STICKER_DATA : { type: String, default: "inrl, inrl" },
INSTAGRAM : { type: String },
GIT : { type: String, default: "https://github.com/inrl-official/inrl-bot-md" },
CAPTION : { type: String, default: "_created by @inrl_" },
SUDO: { type: String, default: "917593919575" },
MENSION_IMG : { type: String },
MENSION_AUDIO : { type: String }
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
let INBUILT_ID = ["MENSION_IMG","MENSION_AUDIO","PASSWORD", "REACT","WARNCOUND","ALIVE_DATA","U_STATUS","READ_CHAT","BOT_INFO","BGMBOT","WORKTYPE","PM_BLOCK","PREFIX","WELCOME_MSG","EXIT_MSG","CALL_BLOCK","STATUS_VIEW","MENSION_TEXT","LANG","OWNER","PROFILE_STATUS","BLOCK_CHAT","AUTO_CHAT_PM","AUTO_CHAT_GRP","BOT_PRESENCE","AUDIO_DATA","STICKER_DATA","INSTAGRAM","GIT","CAPTION","SUDO","FOOTER","ALLWAYS_ONLINE","PMB_MSG","PMBC_MSG","AUTOMUTE_MSG","AUTOUNMUTE_MSG"]
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
const {MENSION_AUDIO,MENSION_IMG,FOOTER,PASSWORD,REACT,WARNCOUND,ALIVE_DATA,U_STATUS,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,MENSION_TEXT,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO,PMB_MSG,PMBC_MSG,AUTOMUTE_MSG,AUTOUNMUTE_MSG,ALLWAYS_ONLINE} = data[0];
resolve({MENSION_IMG,MENSION_AUDIO,FOOTER,PASSWORD,REACT,WARNCOUND,ALIVE_DATA,U_STATUS,READ_CHAT,BOT_INFO,BGMBOT,WORKTYPE,PM_BLOCK,PREFIX,WELCOME_MSG,EXIT_MSG,CALL_BLOCK,STATUS_VIEW,MENSION_TEXT,LANG,OWNER,PROFILE_STATUS,BLOCK_CHAT,AUTO_CHAT_PM,AUTO_CHAT_GRP,BOT_PRESENCE,AUDIO_DATA,STICKER_DATA,INSTAGRAM,GIT,CAPTION,SUDO,PMB_MSG,PMBC_MSG,AUTOMUTE_MSG,AUTOUNMUTE_MSG,ALLWAYS_ONLINE,data})
  } else if(match){
const {match} = data[0];
    console.log(match);
    resolve(match)
      }
     });
  });
}
module.exports = {variableDb,CreateDb,UpdateVariable,getVar};
