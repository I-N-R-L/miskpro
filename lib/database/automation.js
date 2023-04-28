const Config = require('../../config');
const {decrypt} = require("../decrypt");
let GenID = decrypt(Config.SESSION_ID.replaceAll("inrl~", ""))

const mongoose = require("mongoose")
const automation = new mongoose.Schema({
id: { type: String,required: true },
jid: { type: String},
time: { type: String},
action: { type: String}
})
const automationDB = mongoose.model("automation", automation);

async function isInAutoDb(id){
  let isInDb = false;
  await automationDB.find({ id: GenID }).then(async(isUndo) => {
 if(isUndo[0]){
   isInDb = true;
     }
  })
  return isInDb;
}
async function getAutomutes(){
return new Promise(async(resolve,reject) => {
  await automationDB.find({ id: GenID, action : 'mute'}).then(async(isUndo) => {
 if(isUndo[0]){
resolve(isUndo)
   }else{
   resolve('no data')
        }
     })
  });
}
async function getAutoUnMutes(){
return new Promise(async(resolve,reject) => {
  await automationDB.find({ id: GenID, action : 'unmute'}).then(async(isUndo) => {
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
  await automationDB.find({ id :GenID, jid: jid, time : time, action :action}).then(async(isUndo) => {
    if(isUndo[0]){
      resolve('already exist')
    }else{
    await new automationDB({ id :GenID, jid: jid, time : time, action : action }).save();
      resolve('success')
       }})
   })
}
async function dlt_Schedule(jid, time, action){
  return new Promise(async(resolve,reject) => {
  await automationDB.find({ id:GenID,jid: jid, time : time, action :action}).then(async(isUndo) => {
    if(isUndo[0]){
  await automationDB.deleteMany({jid:jid, time:time, action:action});
  await resolve('success')
} else resolve('no data')
     })
  })
}
module.exports = {isInAutoDb,getAutomutes,getAutoUnMutes,add_Schedule,dlt_Schedule}
