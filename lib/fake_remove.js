const { setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake } = require('./database/groupdbs');
async function AllLinkBan(m, conn){
if(m.isGroup){
let jid = m.from;
let text = m.client.displayText.toLowerCase() || 'ßßßßß';
let isInDb = await getAntiLink(jid);
if(isInDb=='true'&& !m.client.isCreator){
if(text.includes('http')){
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
m.reply('links not allowed in this group')
   }
  }
 }
}
async function removeByWord(m, conn){
let values = await GetWords(m.from)
if(m.isGroup && values!=='no data'){
let text = m.client.displayText.toLowerCase() || 'ßßßßß';
if(values.includes(',')){
let value = values.split(',')
await value.map(async(v) => {
if(v&&text.includes(v)&&!m.client.isCreator){
m.reply('please follow the group rules')
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
       }
    })
  } else if(values){
if(text.includes(values)&&!m.client.isCreator){
m.reply('please follow the group rules')
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
      }
    }
  }
}
async function actByPdm(m, conn){
let gParticipants = m.participants;
let isPdmOn = await getPdm(m.id);
if(isPdmOn =='true'){
for (let num of gParticipants) {
if(m.action == 'promote') {
conn.sendMessage(m.id, { text: '_'+`${num.split("@")[0]} promoted`+'_', contextInfo: { mentionedJid: [num] }})
} else if (m.action == 'demote') {
conn.sendMessage(m.id, { text:  '_'+`${num.split("@")[0]} demoted`+'_', contextInfo: { mentionedJid: [num] }})
	       }
      }
   }
}
async function isFakeNumber(m, conn){
let values = await GetFake(m.from)
if(m.isGroup && values!=='no data'){
let sender = m.sender || 'ßßß';
if(values.includes(',')){
let value = values.split(',')
await value.map(async(v) => {
if(v&&sender.startsWith(v)&&!m.client.isCreator){
m.reply("this group isn't allowed your number format")
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
       }
    })
  } else if(values){
if(sender.startsWith(values)&&!m.client.isCreator){
m.reply("this group isn't allowed your number format")
await conn.groupParticipantsUpdate(m.from, [m.sender], "remove" );
      }
    }
  }
}
module.exports={AllLinkBan,removeByWord,actByPdm,isFakeNumber}
