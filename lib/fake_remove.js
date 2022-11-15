//created by @inrl
//Thanks to all who helped to reedit this
//copyright © inrl

const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.SET_ANTI_LINK || "26#&#©£®®£&&#*";
let IsNext = (fake.toLowerCase()) || "2662727&&#&&#&&";
if(IsNext.includes(' ')){ Isnext = IsNext.replaceAll(" ","");IsNext = (Isnext.toLowerCase()) || "°±£©©£®62g";}
let split = IsNext.split(';') || "2727#&&#&s";
let faketext = split[0] || "&&#&#©©€";
let IsJid = split[1] || "&&#&¥£¥%";
if(IsJid.match(m.from)){
if(m.isGroup && m.client.isCreator){
let isText = (m.client.displayText.toLowerCase());

if(faketext.includes(",")){
let split = faketext.split(",");
if(split[0]){
if(isText.match(split[0])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(split[1]){
if(isText.match(split[1])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}if(split[2]){
if(isText.match(split[2])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[3]){
if(isText.match(split[3])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[4]){
if(isText.match(split[4])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[5]){
if(isText.match(split[5])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[6]){
if(isText.match(split[6])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[7]){
if(isText.match(split[7])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[8]){
if(isText.match(split[8])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[9]){
if(isText.match(split[9])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[10]){
if(isText.match(split[10])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[11]){
if(isText.match(split[11])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[12]){
if(isText.match(split[12])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[13]){
if(isText.match(split[13])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[14]){
if(isText.match(split[14])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[15]){
if(isText.match(split[15])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[16]){
if(isText.match(split[16])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[17]){
if(isText.match(split[17])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[18]){
if(isText.match(split[18])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[19]){
if(isText.match(split[19])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(faketext[20]){
if(isText.match(split[20])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
       }
      }
     }else if(faketext.match(isText)){
    	await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
   }
  }
 }
}

async function AllLinkBan(m, conn){
if(m.isGroup && m.client.isCreator){
let Istext = Config.ALL_LINK_BAN || "#%#©£©&26gh";
let isSplit = (Istext.toLowerCase()) || "6262627#&#&&vsh";
if(isSplit.includes(' ')){ isSplit = isSplit.replaceAll(" ","") }
let isJid = isSplit
if(isJid.match(m.from)){;
let isText = (m.client.displayText.toLowerCase());
if(isText.startsWith('http')){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
      }
    }
  }
}

async function FakeRemove(m, conn){
if(m.isGroup && m.client.isCreator){
const FakeNum = Config.FACK_REMOVE || "±•±÷÷±÷&@&#&€¥©";
let IsFake = FakeNum || "#7272727&yyw";
if(IsFake.includes(' ')){ IsFake = IsFake.replaceAll(" ","");
IsFake = (IsFake.toLowerCase()) || "wywyw52626&₹&₹&₹"; }
let split = IsFake.split(';') || "&#&#¥£¥£©±××";
let Sender = split[0] || "%%#©£©₹";
let ForJid = split[1] || "£©©%#&#*";
if(ForJid.match(m.from)){

if(Sender.includes(",")){
let split = Sender.split(",");
if(split[0]){
if(m.sender.startsWith(split[0])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[1]){
if(m.sender.startsWith(split[1])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[2]){
if(m.sender.startsWith(split[2])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[3]){
if(m.sender.startsWith(split[3])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[4]){
if(m.sender.startsWith(split[4])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[5]){
if(m.sender.startsWith(split[5])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[6]){
if(m.sender.startsWith(split[6])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[7]){
if(m.sender.startsWith(split[7])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[8]){
if(m.sender.startsWith(split[8])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[9]){
if(m.sender.startsWith(split[9])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[10]){
if(m.sender.startsWith(split[10])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[11]){
if(m.sender.startsWith(split[11])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[12]){
if(m.sender.startsWith(split[12])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[13]){
if(m.sender.startsWith(split[13])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[14]){
if(m.sender.startsWith(split[14])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[15]){
if(m.sender.startsWith(split[15])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[16]){
if(m.sender.startsWith(split[16])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[17]){
if(m.sender.startsWith(split[17])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[18]){
if(m.sender.startsWith(split[18])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[19]){
if(m.sender.startsWith(split[19])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
 if(split[20]){
if(m.lsender.startsWith(split[20])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
     }
    }
   }else if (m.sender.startsWith(Sender){
  	await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
   }
  }
 }
}
async function IsBadWord(m, conn){
if(m.isGroup && m.client.isCreator){
let BadWords = Config.BAD_WORD_TEXT || "#&&#©©£©£÷×±¥£";
let ThenBad = (BadWords.toLowerCase()) || "sjsjjsjs*##**#©£©";
if(BadWords.includes(' ')){ Isnext = BadWords.replaceAll(" ","");ThenBad = (Isnext.toLowerCase()) || "2727fs#&&"; }
let split = ThenBad.split(';') || "shah#&#¥£©£©£©£";
let badtext = split[0] || "#%&&£©£%@";
let IsJid = split[1] || "£¥£¥#&&#&&";
if(IsJid.match(m.from)){
let isText = (m.client.displayText.toLowerCase())

if(badtext.includes(","])){
let split = badtext.split(",");
if(spli[0]){
if(isText.match(split[0])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[1]){
if(isText.match(split[1])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[2]){
if(isText.match(split[2])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[3]){
if(isText.match(split[3])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[4]){
if(isText.match(split[4])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[5]){
if(isText.match(split[5])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[6]){
if(isText.match(split[6])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[7]){
if(isText.match(split[7])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[8]){
if(isText.match(split[8])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[9]){
if(isText.match(split[9])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[10]){
if(isText.match(split[10])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[11]){
if(isText.match(split[11])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[12]){
if(isText.match(split[12])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[13]){
if(isText.match(split[13])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[14]){
if(isText.match(split[14])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[15]){
if(isText.match(split[15])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[16]){
if(isText.match(split[16])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[17]){
if(isText.match(split[17])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[18]){
if(isText.match(split[18])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[19]){
if(isText.match(split[19])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}
if(spli[20]){
if(isText.match(split[20])){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
      }
     }
    }else if(isText.match(badtext)){
  	await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
   }
  }
 }
}
module.exports = { IsFake, AllLinkBan,  FakeRemove, IsBadWord };
