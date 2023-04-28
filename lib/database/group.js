const Config = require('../../config');
const {decrypt} = require("../decrypt");
let decryptedPlainText = decrypt(Config.SESSION_ID.replaceAll("inrl~", ""))
const mongoose = require("mongoose")

//antilink db
const LinkSchema = new mongoose.Schema({
id : { type : String},
status : { type: String },
jid : { type : String }
})
const linkDB = mongoose.model("linkDB", LinkSchema)
//pdm db
const pdmSchema = new mongoose.Schema({
id : { type : String},
status : { type: String },
jid : { type : String }
})
const pdmDB = mongoose.model("pdmDB", pdmSchema)

//antiword Db
const WordSchema = new mongoose.Schema({
id : { type : String},
data : { type: String },
jid : { type : String }
})
const WordDB = mongoose.model("WordDB", WordSchema)

//antiFake Db
const FakeSchema = new mongoose.Schema({
id : { type : String},
data : { type: String },
jid : { type : String }
})
const fakeNumDB = mongoose.model("fakeNumDB", FakeSchema)

async function setAntiLink(jid){
let Jid = decryptedPlainText+jid;
await linkDB.find({ jid: Jid }).then(async(link) => {
if(!link[0]){
await new linkDB({ id : decryptedPlainText, status : 'true', jid: Jid }).save();
   }})
}
async function removeAntiLink(jid){
let Jid = decryptedPlainText+jid;
await linkDB.find({
    jid: Jid 
}).then(async(und) => {
if(und){
await linkDB.deleteOne({ jid: Jid });
   }});
}

async function getAntiLink(jid){
return new Promise(async(resolve,reject) => {
await linkDB.find({ jid: decryptedPlainText+jid }).then(async(getList) => {
if(getList[0]){
resolve(getList[0].status);
            }else {
  resolve('false')
            }
       })
   })
}

//anti Word FUNCTIONS
async function setAntiWord(jid, value){
let Jid = decryptedPlainText+jid;
await WordDB.find({ jid: Jid }).then(async(link) => {
if(!link[0]){
await new WordDB({ id : decryptedPlainText, data : value, jid: Jid }).save();
   } else {
   let values = await GetWords(jid);
   values = values+","+value;
  await WordDB.update(
     { id: decryptedPlainText, data: values, jid: Jid })
     }
})
}
async function setAnti(jid, value){
let Jid = decryptedPlainText+jid;
await WordDB.find({ jid: Jid }).then(async(link) => {
if(!link[0]){
await new WordDB({ id : decryptedPlainText, data : value, jid: Jid }).save();
   } else {
  await WordDB.update(
     { id: decryptedPlainText, data: value, jid: Jid })
     }
})
      }
async function removeAntiWord(jid){
let Jid = decryptedPlainText+jid;
await WordDB.find({
    jid: Jid 
}).then(async(und) => {
  console.log(und)
if(und){
await WordDB.deleteMany({ jid: Jid });
   }});
}
async function getListOfWord(){
return new Promise(async(resolve,reject) => {
await WordDB.find({ id: decryptedPlainText }).then(async(getList) => {
if(getList){
resolve(getList);
            } else {
            resoleve('no data')
            }
       })
   })
}
async function GetWords(jid){
return new Promise(async(resolve,reject) => {
await WordDB.find({ jid: decryptedPlainText+jid }).then(async(getList) => {
if(getList[0]){
getList.map((d)=>{
let values = d.data;
resolve(values);
         })
     }else{
  resolve('no data')
        }
     }) 
  })
}
async function removeWord(jid, value){
let datas = await GetWords(jid);
if(datas.includes(value+",")){
datas = datas.replaceAll(value+",",'');
await setAnti(jid,datas)
    }else if(datas.includes(","+value)){
datas = datas.replaceAll(","+value,'');
await setAnti(jid,datas)
  }else if(datas.includes(value)){
await removeAntiWord(jid);
  }
}
function withValue(){
return decryptedPlainText
}
async function setpdm(jid){
let Jid = decryptedPlainText+jid;
await pdmDB.find({ jid: Jid }).then(async(pdm) => {
if(!pdm[0]){
await new pdmDB({ id : decryptedPlainText, status : 'true', jid: Jid }).save();
   }})
  }
async function removePdm(jid){
let Jid = decryptedPlainText+jid;
await pdmDB.find({
    jid: Jid 
}).then(async(und) => {
if(und){
await pdmDB.deleteOne({ jid: Jid });
   }});
}
async function getPdm(jid){
return new Promise(async(resolve,reject) => {
await pdmDB.find({ jid: decryptedPlainText+jid }).then(async(getpdm) => {
if(getpdm[0]){
resolve(getpdm[0].status);
            }else {
  resolve('false')
            }
       })
   })
}
async function setFakeNum(jid, value){
let Jid = decryptedPlainText+jid;
await fakeNumDB.find({ jid: Jid }).then(async(link) => {
if(!link[0]){
await new fakeNumDB({ id : decryptedPlainText, data : value, jid: Jid }).save();
   } else {
   let values = await GetFake(jid);
   values = values+","+value;
  await fakeNumDB.update(
     { id: decryptedPlainText, data: values, jid: Jid })
     }
})
}
async function setFake(jid, value){
let Jid = decryptedPlainText+jid;
await fakeNumDB.find({ jid: Jid }).then(async(link) => {
if(!link[0]){
await new fakeNumDB({ id : decryptedPlainText, data : value, jid: Jid }).save();
   } else {
  await fakeNumDB.update(
     { id: decryptedPlainText, data: value, jid: Jid })
     }
})
      }
async function removeFake(jid){
let Jid = decryptedPlainText+jid;
await fakeNumDB.find({
    jid: Jid 
}).then(async(und) => {
if(und){
await fakeNumDB.deleteMany({ jid: Jid });
   }});
}
async function getListofFake(){
return new Promise(async(resolve,reject) => {
await fakeNumDB.find({ id: decryptedPlainText }).then(async(getList) => {
if(getList){
resolve(getList);
            } else {
            resoleve('no data')
            }
       })
   })
}
async function GetFake(jid){
return new Promise(async(resolve,reject) => {
await fakeNumDB.find({ jid: decryptedPlainText+jid }).then(async(getList) => {
if(getList[0]){
getList.map((d)=>{
let values = d.data;
resolve(values);
         })
     }else{
  resolve('no data')
        }
     }) 
  })
}
async function removeAFake(jid, value){
let datas = await GetFake(jid);
if(datas.includes(value+",")){
datas = datas.replaceAll(value+",",'');
await setFake(jid,datas)
    }else if(datas.includes(","+value)){
datas = datas.replaceAll(","+value,'');
await setFake(jid,datas)
  }else if(datas.includes(value)){
 await removeFake(jid);
  }
}
module.exports = { linkDB, WordDB, pdmDB, setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake };
