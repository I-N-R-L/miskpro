const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.ANTILINK;
var split = fake.split(',');
link1 = split[0] || "owowkwnwnsjjsisiis";
link2 = split[1] || "owowkwnwnsjjsisiis";
link3 = split[2] || "owowkwnwnsjjsisiis";
link4 = split[3] || "owowkwnwnsjjsisiis";
link5 = split[4] || "owowkwnwnsjjsisiis";
link6 = split[5] || "owowkwnwnsjjsisiis";
link7 = split[6] || "owowkwnwnsjjsisiis";

let isMix = link7 || link6 || link5 || link4 || link3 || link2 || link1;
if(m.isGroup && !m.client.isCreator){
if(m.client.displayText == isMix){
console.log(FakeAr)
console.log("item found but how responce");
console.log(m.client.text);
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
          }
     }
}
module.exports = { IsFake };
