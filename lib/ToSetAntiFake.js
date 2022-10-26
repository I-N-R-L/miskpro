//created by @inrl
//Thanks to all who helped to reedit this
//copyright © inrl

const Config = require('../config');

async function IsFake(m, conn){
let fake = Config.SET_ANTI_LINK;
let isnext = (fake.trim());
let Isnext = isnext.replaceAll(" ","");
let IsNext = (Isnext.toLowerCase());

var split = IsNext.split(';')
var faketext = split[0] || "&&#&#©©€";
var IsJid = split[1] || "&&#&¥£¥%";


if(IsJid.match(m.from)){
if(m.isGroup && m.client.isCreator){
let isText = (m.client.displayText.toLowerCase());
if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[0] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[1] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[2] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[3] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[4] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[5] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[6] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[7] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[8] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[9] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[10] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[11] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[12] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[13] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[14] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[15] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[16] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[17] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[18] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[19] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(faketext.includes(",")){
var split = faketext.split(",");
var isFakeText = split[20] || "$¥¥%#5&#*";
if(isText.match(isFakeText)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
        }
      }
    }
  }
}

async function AllLinkBan(m, conn){
if(m.isGroup && m.client.isCreator){
let IsNext = Config.ALL_LINK_BAN;
let toNext = (IsNext.trim());
let isSplit = (toNext.toLowerCase());
var isJid = isSplit
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
const FakeNum = Config.FACK_REMOVE;
let isfake = (FakeNum.trim());
let Isfake = isfake.replaceAll(" ","");
let IsFake = (Isfake.toLowerCase());
var split = IsFake.split(';');
var Sender = split[0] || "%%#©£©₹";
var ForJid = split[1] || "£©©%#&#*";
if(ForJid.match(m.from)){

if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[0] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[1] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[2] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[3] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[4] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[5] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[6] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[7] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[8] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[9] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[10] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[11] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[12] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[13] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[14] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[15] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[16] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[17] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[18] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[19] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(Sender.includes(",")){
var split = Sender.split(",");
var isSender = split[20] || "$¥¥%#5&#*";
if(isSender.startsWith(m.sender)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
        }
      }
    }
  }
}

async function IsBadWord(m, conn){
//if(m.client.isCreator){

let BadWords = Config.BAD_WORD_TEXT;
let thenbad = (BadWords.trim());
let Thenbad = thenbad.replaceAll(" ","");
let ThenBad = (Thenbad.toLowerCase());
var split = ThenBad.split(';')
var badtext = split[0] || "#%&&£©£%@";
var IsJid = split[1] || "£¥£¥#&&#&&";

console.log(badtext)
console.log(IsJid)
if(IsJid.match(m.from)){
console.log ("matching")
let isText = (m.client.displayText.toLowerCase())

if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[0] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[1] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[2] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[3] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[4] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[5] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[6] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[7] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[8] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[9] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[10] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[11] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[12] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[13] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[14] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[15] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[16] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[17] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[18] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[19] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
  }
}else if(badtext.includes(",")){
var split = badtext.split(",");
var isBad = split[20] || "$¥¥%#5&#*";
if(isText.match(isBad)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
      }
    }
  }
}
module.exports = { IsFake, AllLinkBan, FakeRemove, IsBadWord };
