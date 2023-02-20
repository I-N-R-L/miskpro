const aes256 = require('aes256');
const Config = require('../../config');
let plaintext = Config.SESSION_ID.replaceAll("inrl~", "");
let key = 'k!t';
let GenID = aes256.decrypt(key, plaintext);

const mongoose = require("mongoose")
const automation = new mongoose.Schema({
jid: { type: String,required: true },
time: { type: String},
action : { type: String}
})
const automationDB = mongoose.model("automation", automation);

async function isInAutoDb(jid){
  jid = GenID+jid;
  let isInDb = false;
  await automationDB.find({ jid: jid }).then(async(isUndo) => {
 if(isUndo[0]){
   isInDb = true;
     }
  })
  return isInDb;
}
async function getAutomutes(jid){
return new Promise(async(resolve,reject) => {
  jid = GenID+jid;
  let vaules = ''
  await automationDB.find({ jid: jid, action : 'mute'}).then(async(isUndo) => {
 if(isUndo[0]){
resolve(isUndo)
   }else{
   resolve('no data')
        }
     })
  });
}
async function getAutoUnMutes(jid){
return new Promise(async(resolve,reject) => {
  jid = GenID+jid;
  let vaules = ''
  await automationDB.find({ jid: jid, action : 'unmute'}).then(async(isUndo) => {
 if(isUndo[0]){
resolve(isUndo)
   }else{
   resolve('no data')
        }
     })
  });
}
async function add_Schedule(jid,time, action){
return new Promise(async(resolve,reject) => {
  jid = GenID+jid;
  await automationDB.find({ jid: jid, time : time, action :action}).then(async(isUndo) => {
    if(isUndo[0]){
      resolve('already exist')
    }else{
    await new automationDB({ jid: jid, time : time, action : action }).save();
      resolve('success')
       }})
   })
}
async function dlt_Schedule(ji, time, action){
  return new Promise(async(resolve,reject) => {
  jid = GenID+jid;
  await automationDB.find({ jid: jid, time : time, action :action}).then(async(isUndo) => {
    if(isUndo[0]){
  await automationDB.deleteMany({jid:jid, time:time, action:action});
  await resolve('success')
} else resolve('no data')
     })
  })
}
module.exports = {isInAutoDb,getAutomutes,getAutoUnMutes,add_Schedule,dlt_Schedule}
