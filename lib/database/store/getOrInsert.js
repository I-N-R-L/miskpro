
const fs = require('fs');

function insertOrUpdate(name, data){
if(name!='ytlist'&&name!='iglist')return false
let datas = require('./'+name+'.json');
const fs = require('fs')
let insertCount = "1", insert = {}
let a = 'in'
let b = require('./'+a+'.json')
if(!Object.keys(b).length) {
  console.log(b)
  if(data) {
 data.map((rslt)=>{
 insert[(insertCount++).toString()] = rslt
    });
    fs.writeFileSync('./'+name+'json', JSON.stringify(insert))
  }
} else {
let lastKey;
for(let key in b){
    if(b.hasOwnProperty(key)){
        lastKey = key;
    }
}
let newRslt = -(-lastKey-"1")
  if(data) {
 data.map((rslt)=>{
   console.log(rslt)
 b[(newRslt++).toString()] = rslt
    });
}
fs.writeFileSync('./'+name+'.json', JSON.stringify(b))
   }
   return true
}

function getDataFromJson(name, number){
if(name!='ytlist'&&name!='iglist')return false
  let ret = "no data"
let datas = require('./'+name+'.json');
if(!Object.keys(datas).length) return false
if(datas[number.toString()]){
 ret = datas[number.toString()]
    }
   return ret
}
module.exports = {insertOrUpdate,getDataFromJson}
