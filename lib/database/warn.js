const mongoose = require("mongoose")
const BlockSchema = new mongoose.Schema({
id: { type: String,required: true },
reason : { type: String, default: "No Reason" },
group : { type: String, default: "In Private chat" },
user : { type: String, default: "bot" },
count : { type: String }
})
const warndb = mongoose.model("warndb", BlockSchema)


async function setWarn(user, group, reson, id){
return new Promise(async(resolve,reject) => {
let newUser = user.includes(":") ? user.split(":")[0] : user.split("@")[0];
let newjid = group.split("@")[0];
await warndb.findOne({ id: id, group: newjid,user: newUser }).then(async(warn) => {
  if (!warn) {
   await new warndb({ id: id, reason: reson, group: newjid, user: newUser, count: "1" }).save();
   } else {
   let counding = (warn.count)- -(1);
     await warndb.findOneAndUpdate({id:id, group: newjid, user:newUser},
     { id: id, reason: reson, group: newjid, user: newUser, count: counding })
   }
})
   await warndb.findOne({ id: id, group: newjid, user: newUser }).then(async(send) => {
if(send){
   resolve(send)
} else {
resolve('no data')
}
        })
   })
}
async function ResetWarn(user, group, id){
return new Promise(async(resolve,reject) => {
let newUser = user.includes(":") ? user.split(":")[0] : user.split("@")[0];
let newjid = group.split("@")[0];
await warndb.findOne({ id: id, group: newjid,user: newUser  }).then(async(warn) => {
  if (warn) {
     await warndb.deleteMany(
     { id: id, group: newjid,user: newUser  })
     resolve("success");
   } else {
   resolve("Failed");
   }
})
   })
}
async function ListWarn(group, id){
let newjid = group.split("@")[0];
return new Promise(async(resolve,reject) => {
await warndb.find({ group: newjid, id:id }).then(async(getgrp) => {
  if (!getgrp) {
   resolve("no data");
   } else {
     resolve(getgrp)
            }
       })
  })
}
module.exports = { setWarn, ResetWarn, ListWarn }
