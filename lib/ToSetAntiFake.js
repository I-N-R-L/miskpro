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
var faketext = split[0]
var IsJid = split[1]


if(IsJid.match(/m.from/g)){
if(m.isGroup && m.client.isCreator){
let isText = (m.client.displayText.toLowerCase());
if(faketext.match(/isText/g)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
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

if(isJid.match(/m.from/g)){
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
var Sender = split[0]
var ForJid = split[1]


if(ForJid.match(/m.from/g)){
if(Sender.startsWith(m.sender)){
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
var split = ThenBad.split(';')
var badtext = split[0]
var IsJid = split[1]


if(IsJid.match(/m.from/g)){
let isText = (m.client.displayText.toLowerCase());
if(badtext.match(/isText/g)){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
             }
        }
    }
}
module.exports = { IsFake, AllLinkBan, FakeRemove, IsBadWord };
