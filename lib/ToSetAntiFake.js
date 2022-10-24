const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.SET_ANTI_LINK;
let IsNext = (fake.trim());
var SusLink = [];

var split = IsNext.split(',');
link1 = split[0] //|| "#+%&#-";
link2 = split[1] //|| "#+%&#-";
link3 = split[2] //|| "#+%&#-";
link4 = split[3] //|| "#+%&#-";
link5 = split[4] //|| "#+%&#-";
link6 = split[5] //|| "#+%&#-";
link7 = split[6] //|| "#+%&#-";

var isJid = IsNext.split(';');
jid1 = isJid[0] //|| "#+%&#-";
jid2 = isJid[1] //|| "#+%&#-";
jid3 = isJid[2] //|| "#+%&#-";
jid4 = isJid[3] //|| "#+%&#-";
jid5 = isJid[4] //|| "#+%&#-";
jid6 = isJid[5] //|| "#+%&#-";
var JidArray =[];
JidArray.push(jid1,jid2,jid3,jid4,jid5,jid6);

if(JidArray.includes(m.from)){
SusLink.push(link1,link2,link3,link4,link5,link6,link7)
//let isMix = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(m.isGroup && m.client.isCreator){
if(SusLink.includes(m.client.displayText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
                }
          }
     }
}

async function AllLinkBan(m, conn){
if(m.isGroup /*&& !m.client.isCreator*/){
if(Config.ALL_LINK_BAN.includes('true')){
let IsNext = Config.ALL_LINK_BAN;
let toNext = (IsNext.trim());
isSplit = toNext.replace("true;", "");
var isJid = isSplit.split(';');
jid1 = isJid[0] //|| "#+%&#-";
jid2 = isJid[1] //|| "#+%&#-";
jid3 = isJid[2] //|| "#+%&#-";
jid4 = isJid[3] //|| "#+%&#-";
jid5 = isJid[4] //|| "#+%&#-";
jid6 = isJid[5] //|| "#+%&#-";
var JidArray =[];
JidArray.push(jid1,jid2,jid3,jid4,jid5,jid6);
console.log(JidArray);
console.log(m.from);
if(JidArray.includes(m.from)){
console.log("ys")
if(m.client.displayText.includes('http')){
console.log("ys")
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
                    }
               }
          }
     }
}

async function FakeRemove(m, conn){
if(m.isGroup && m.client.isCreator){
const FakeNum = Config.FACK_REMOVE;
let IsFake = (FakeNum.trim());
var split = IsFake.split(',');
link1 = "+"+split[0] //|| "#+%&#-";
link2 = "+"+split[1] //|| "#+%&#-";
link3 = "+"+split[2] //|| "#+%&#-";
link4 = "+"+split[3] //|| "#+%&#-";
link5 = "+"+split[4] //|| "#+%&#-";
link6 = "+"+split[5] //|| "#+%&#-";
link7 = "+"+split[6] //|| "#+%&#-";
var FakeArray =[];
FakeArray.push(link7,link6,link5,link4,link3,link2,link1)
var isJid = IsFake.split(';');
Jid1 = isJid[0] //|| "#+%&#-";
jid2 = isJid[1] //|| "#+%&#-";
jid3 = isJid[2] //|| "#+%&#-";
jid4 = isJid[3] //|| "#+%&#-";
jid5 = isJid[4] //|| "#+%&#-";
jid6 = isJid[5] //|| "#+%&#-";
var JidArray =[];
JidArray.push(Jid1,jid2,jid3,jid4,jid5,jid6);

if(JidArray.includes(m.from)){
//let FakeData = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(FakeArray.includes('+'+m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
            }
        }
    }
}

async function IsBadWord(m, conn){
if(m.client.isCreator){
let BadWords = Config.BAD_WORD_TEXT;
let ThenBad = (BadWords.trim());
var split = ThenBad.split(',');
link1 = split[0] //|| "#+%&#-";
link2 = split[1] //|| "#+%&#-";
link3 = split[2] //|| "#+%&#-";
link4 = split[3] //|| "#+%&#-";
link5 = split[4] //|| "#+%&#-";
link6 = split[5] //|| "#+%&#-";
link7 = split[6] //|| "#+%&#-";
link8 = split[7] //|| "#+%&#-";
link9 = split[8] //|| "#+%&#-";
link10 = split[9] //|| "#+%&#-";
link11 = split[10] //|| "#+%&#-";
link12 = split[11] //|| "#+%&#-";
link13 = split[12] //|| "#+%&#-";
link14 = split[13] //|| "#+%&#-";
link15 = split[14] //|| "#+%&#-";
link16 = split[15] //|| "#+%&#-";
link17 = split[16] //|| "#+%&#-";
link18 = split[17] //|| "#+%&#-";
link19 = split[18] //|| "#+%&#-";
link20 = split[19] //|| "#+%&#-";
link21 = split[20] //|| "#+%&#-";
var BadArray = [];
await BadArray.push(link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,link11,link12,link13,link14,link15,link16,link17,link18,link19,link20,link21)
if(BadArray.includes(m.client.displayText)){
console.log(BadArray,m.client.displayText,ThenBad)
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
        }
    }
}
module.exports = { IsFake, AllLinkBan, FakeRemove, IsBadWord };
