const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.SET_ANTI_LINK;
let IsNext = (fake.trim());
var SusLink = [];

var split = IsNext.split(',');
link1 = split[0];
link2 = split[1];
link3 = split[2];
link4 = split[3];
link5 = split[4];
link6 = split[5];
link7 = split[6];

var isJid = IsNext.split(';');
Jid1 = isJid[0];
jid2 = isJid[1];
jid3 = isJid[2];
jid4 = isJid[3];
jid5 = isJid[4];
jid6 = isJid[5];
var JidArray =[];
JidArray.push(Jid1,jid2,jid3,jid4,jid5,jid6);

if(m.from.includes(JidArray)){
SusLink.push(link1,link2,link3,link4,link5,link6,link7)
//let isMix = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(m.isGroup && !m.client.isCreator){
if(m.client.displayText.includes(SusLink)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
                }
          }
     }
}

async function AllLinkBan(m, conn){
if(m.isGroup && !m.client.isCreator){
if(Config.ALL_LINK_BAN == "true"){
let IsNext = Config.ALL_LINK_BAN;
let toNext = (IsNext.trim());
isSplit = toNext.replace("true,", "");
var isJid = isSplit.split(';');
Jid1 = isJid[0];
jid2 = isJid[1];
jid3 = isJid[2];
jid4 = isJid[3];
jid5 = isJid[4];
jid6 = isJid[5];
var JidArray =[];
JidArray.push(Jid1,jid2,jid3,jid4,jid5,jid6);
if(m.from.includes(JidArray)){
if(m.client.displayText.includes('http')){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
                    }
               }
          }
     }
}

async function FakeRemove(m, conn){
if(m.isGroup && !m.client.isCreator){
const FakeNum = Config.FACK_REMOVE;
let IsFake = (FakeNum.trim());
var split = IsFake.split(',');
link1 = "+"+split[0];
link2 = "+"+split[1];
link3 = "+"+split[2];
link4 = "+"+split[3];
link5 = "+"+split[4];
link6 = "+"+split[5];
link7 = "+"+split[6];
var FakeArray =[];
FakeArray.push(link7,link6,link5,link4,link3,link2,link1)
var isJid = IsFake.split(';');
Jid1 = isJid[0];
jid2 = isJid[1];
jid3 = isJid[2];
jid4 = isJid[3];
jid5 = isJid[4];
jid6 = isJid[5];
var JidArray =[];
JidArray.push(Jid1,jid2,jid3,jid4,jid5,jid6);

if(m.from.includes(JidArray)){
//let FakeData = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if('+'+m.sender.includes(FakeArray)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
            }
        }
    }
}

async function IsBadWord(m, conn){


}
module.exports = { IsFake, AllLinkBan, FakeRemove, IsBadWord};
