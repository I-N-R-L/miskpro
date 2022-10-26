//created by @inrl
//Thanks to all who helped to reedit this
//copyright © inrl

const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.SET_ANTI_LINK;
let isnext = (fake.trim());
let Isnext = isnext.replaceAll(" ","");
let IsNext = (Isnext.toLowerCase());
var SusLink = [];

var split = IsNext.split(',');
var link1 = split[0] || "#₹#₹#₹";
link1 = link1.includes(";") ? split[0].split(";")[0] : split[0];
var link2 = split[1] || "#₹#₹#₹";
link2 = link2.includes(";") ? split[1].split(";")[0] : split[1];
var link3 = split[2] || "#₹#₹#₹";
link3 = link3.includes(";") ? split[2].split(";")[0] : split[2];
var link4 = split[3] || "#₹#₹#₹";
link4 = link4.includes(";") ? split[3].split(";")[0] : split[3];
var link5 = split[4] || "#₹#₹#₹";
link5 = link5.includes(";") ? split[4].split(";")[0] : split[4];
var link6 = split[5] || "#₹#₹#₹";
link6 = link6.includes(";") ? split[5].split(";")[0] : split[5];
var link7 = split[6] || "#₹#₹#₹";
link7 = link7.includes(";") ? split[6].split(";")[0] : split[6];

var isJid = IsNext.split(';');
jid1 = isJid[1]
jid2 = isJid[2]
jid3 = isJid[3]
jid4 = isJid[4]
jid5 = isJid[5]
jid6 = isJid[6]
var JidArray =[];
JidArray.push(jid1,jid2,jid3,jid4,jid5,jid6);

if(JidArray.includes(m.from)){
SusLink.push(link1,link2,link3,link4,link5,link6,link7)
//let isMix = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(m.isGroup && m.client.isCreator){
let isText = (m.client.displayText.toLowerCase());
if(SusLink.includes(isText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
                }
          }
     }
}

async function AllLinkBan(m, conn){
if(m.isGroup && m.client.isCreator){
let DiscSp = Config.ALL_LINK_BAN || "€£©@±";
if(DiscSp.includes('true')){
let IsNext = Config.ALL_LINK_BAN;
let toNext = (IsNext.trim());
let issplit = toNext.replaceAll("true;", "");
let isSplit = (issplit.toLowerCase());
var isJid = isSplit.split(';');
jid1 = isJid[1] || 
jid2 = isJid[2]
jid3 = isJid[3]
jid4 = isJid[4]
jid5 = isJid[5]
jid6 = isJid[6]
var JidArray =[];
JidArray.push(jid1,jid2,jid3,jid4,jid5,jid6);
console.log(JidArray);
console.log(m.from);
if(JidArray.includes(m.from)){
console.log("ys")
let isText = (m.client.displayText.toLowerCase());
if(isText.startsWith('http')){
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
let isfake = (FakeNum.trim());
let Isfake = isfake.replaceAll(" ","");
let IsFake = (Isfake.toLowerCase());
var split = IsFake.split(',');
var link1 = "+"+split[0] || "#&%₹*₹";
link1 = link1.includes(";") ? split[0].split(";")[0] : split[0];
var link2 = "+"+split[1] || "91";
link2 = link2.includes(";") ? split[1].split(";")[0] : split[1];
var link3 = "+"+split[2] || "#&%₹*₹";
link3 = link3.includes(";") ? split[2].split(";")[0] : split[2];
var link4 = "+"+split[3] || "#&%₹*₹";
link4 = link4.includes(";") ? split[3].split(";")[0] : split[3];
var link5 = "+"+split[4] || "#&%₹*₹";
link5 = link5.includes(";") ? split[4].split(";")[0] : split[4];
var link6 = "+"+split[5] || "#&%₹*₹";
link6 = link6.includes(";") ? split[5].split(";")[0] : split[5];
var link7 = "+"+split[6] || "#&%₹*₹";
link7 = link7.includes(";") ? split[6].split(";")[0] : split[6];
var FakeArray =[];
FakeArray.push(link7,link6,link5,link4,link3,link2,link1)
var isJid = IsFake.split(';');
jid1 = isJid[1]
jid2 = isJid[2]
jid3 = isJid[3]
jid4 = isJid[4]
jid5 = isJid[5]
jid6 = isJid[6]
var JidArray =[];
JidArray.push(jid1,jid2,jid3,jid4,jid5,jid6);

if(JidArray.includes(m.from)){
//let FakeData = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(FakeArray.startsWith('+'+m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
            }
        }
    }
}

async function IsBadWord(m, conn){
if(m.client.isCreator){
let BadWords = Config.BAD_WORD_TEXT;
let thenbad = (BadWords.trim());
let Thenbad = thenbad.replaceAll(" ","");
let ThenBad = (Thenbad.toLowerCase());
console.log(BadWords,ThenBad);
var split = ThenBad.split(',');
link1 = split[0];
link2 = split[1];
link3 = split[2];
link4 = split[3];
link5 = split[4];
link6 = split[5];
link7 = split[6];
link8 = split[7];
link9 = split[8];
link10 = split[9];
link11 = split[10];
link12 = split[11];
link13 = split[12];
link14 = split[13];
link15 = split[14];
link16 = split[15];
link17 = split[16];
link18 = split[17];
link19 = split[18];
link20 = split[19];
link21 = split[20];
var BadArray = [];
await BadArray.push(link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,link11,link12,link13,link14,link15,link16,link17,link18,link19,link20,link21)
//let BadArray = link7 || link6 || link5 || link4 || link3 || link2 || link1;
let isText = (m.client.displayText.toLowerCase());
if(BadArray.includes(isText)){
console.log(BadArray,m.client.displayText,ThenBad)
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
        }
    }
}
module.exports = { IsFake, AllLinkBan, FakeRemove, IsBadWord };
