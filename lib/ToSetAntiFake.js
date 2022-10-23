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
let isMix = link1 || link2 || link3 || link4 || link5 || link6 || link7;
if(m.client.displayText == isMix){
await conn.groupParticipantsUpdate(m.from, [m.client.pushName], "remove" );
     }
}
module.exports = { IsFake };
