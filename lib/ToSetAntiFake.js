const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.SET_ANTI_LINK;
let IsNext = (fake.trim());
var split = IsNext.split(',');
link1 = split[0];
link2 = split[1];
link3 = split[2] || "owowkwnwnsjjsisiis";
link4 = split[3] || "owowkwnwnsjjsisiis";
link5 = split[4] || "owowkwnwnsjjsisiis";
link6 = split[5] || "owowkwnwnsjjsisiis";
link7 = split[6] || "owowkwnwnsjjsisiis";

let isMix = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(m.isGroup && !m.client.isCreator){
if(m.client.displayText.includes(isMix)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
          }
     }
}

async function AllLinkBan(m, conn){
if(m.isGroup && !m.client.isCreator){
if(Config.ALL_LINK_BAN == "true" && m.client.displayText.includes('http')){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
          }
     }
}

async function FakeRemove(m, conn){
if(m.isGroup/* && !m.client.isCreator*/){
const FakeNum = Config.FACK_REMOVE;
let IsFake = (FakeNum.trim());
var split = IsFake.split(',');
link1 = split[0];
link2 = split[1];
link3 = split[2];
link4 = split[3];
link5 = split[4];
link6 = split[5];
link7 = split[6];
var FakeArray =[];
FakeArray.push(link7,link6,link5,link4,link3,link2,link1)
console.log(
let FakeData = link7 || link6 || link5 || link4 || link3 || link2 || link1;
//console.log(FakeData, m.from);
if(m.sender.startsWith(FakeData)){
console.log("thets data to much perfect");
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
          }
     }
}

module.exports = { IsFake, AllLinkBan, FakeRemove };
