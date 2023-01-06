const { getBuffer } = require('../../lib/cloud');

async function mensionMp3(mP3){
mP3 = mP3.replaceAll(' ','')
return new Promise(async(resolve,reject) => {
let StoreMp3, Smp3;
if(!mP3.includes(',')){
StoreMp3 = await getBuffer(mP3);
await resolve(StoreMp3)
} else {
StoreMp3 = mP3.split(',');
Smp3 = StoreMp3[Math.floor(Math.random() * StoreMp3.length)]
Smp3 = await getBuffer(Smp3);
await resolve(Smp3)
    }});
}

async function mensionImg(jPg){
jPg = jPg.replaceAll(' ','')
return new Promise(async(resolve,reject) => {
let StoreJpg, SJpG;
if(!jPg.includes(',')){
StoreJpg = await getBuffer(jPg);
await resolve(StoreJpg)
} else {
StoreJpg = jPg.split(',');
SJpG = StoreJpg[Math.floor(Math.random() * StoreJpg.length)]
SJpG = await getBuffer(SJpG);
await resolve(SJpG)
   }});
}
module.exports = { mensionMp3 , mensionImg }
