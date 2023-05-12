//database
const {isInAutoDb,getAutomutes,getAutoUnMutes,add_Schedule,dlt_Schedule} = require("./database/automation");
const { cmdDB, setCmd, DeleteCmd,getCmd } = require("./database/cmd");
const { linkDB, WordDB, pdmDB, setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake } = require("./database/group");
const { pluginDB, add_plugin, dlt_plugin, getListOfPlugin } = require("./database/plugins");
const {variableDb,CreateDb,UpdateVariable,getVar} = require("./database/variable");
const { setWarn, ResetWarn, ListWarn } = require("./database/warn");
//infos
const {smsg} = require("./infos/Info");
//main
const {unixTimestampSeconds,generateMessageTag,processTime,getRandom,getBuffer,fetchJson,runtime,clockString,sleep,isUrl,getTime,formatDate,tanggal,jsonformat,logic,bytesToSize,getSizeMedia} = require("./main/func");
const {inrl, successfullMessage, infoMessage, errorMessage, categories, commands} = require("./main/prefix");
const {serialize,WAConnection} = require("./main/ReplyMessage");
const { connect } = require("./main/session");
//scrapers
const { listall, strikeThrough, wingdings, vaporwave, typewriter, analucia, tildeStrikeThrough, underline, doubleUnderline, slashThrough, sparrow, heartsBetween, arrowBelow, crossAboveBelow, creepify, bubbles, mirror, squares, roundsquares, flip, tiny, createMap, serif_I, manga, ladybug, runes, serif_B, serif_BI } = require("./scrapers/fancy/fancy");
const { animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite } = require("./scrapers/functions/anime");
const { sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3 } = require("./scrapers/functions/FFmpeg");
const { quoted, hentaivideo, send_vote, send_poll, truecaller } = require("./scrapers/functions/get");
const { remove, unscreen, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu, sendRepeat, toGroup, parse_welcom, parse_exit, addSpace } = require("./scrapers/functions/got");
const {googleIt, wikiMedia, ringTone} = require("./scrapers/functions/res");
const { add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita } = require("./scrapers/addImg");
const { toAudio,toPTT,toVideo } = require("./scrapers/converter");
const { getYtV, getYtA, weather, movie, getFilm, Insta, twitter, FaceBook, mediafireDl } = require("./scrapers/downloader");
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require("./scrapers/scraper");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif } = require("./scrapers/sticker");
const { TelegraPh, UploadFileUgu, webp2mp4File } = require("./scrapers/uploader");
//count
const { mentionMp3 , mentionImg } = require("./count");
//decrypt
const {decrypt} = require("./decrypt")
//exportation below and importaion in abouve😜👀
module.exports = {
    PASS : "inrl-bot~md",
    styletext: (text,index) => {
        index = index - 1;
        return listall(text)[index];
    },
    randomStyle:(text)=>{
    let list = listall(text)
    return list[Math.floor(Math.random()*list.length)]
},
    isAdmin : async function isADmin(m,conn){
    if(!m.isGroup) return false;
    const groupMetadata = await conn.groupMetadata(m.from).catch(e => {}),
    participants = await groupMetadata.participants,
    admins = await participants.filter(v => v.admin !== null).map(v => v.id);
    if(!admins.includes(m.sender)) return false;
    return true;
},
    extractUrlsFromString : function extractUrlsFromString(text){
    if(!text) return false
    const matches = text.match(/\bhttp?:\/\/\S+/gi);
    return matches;
},
    isBotAdmin : async function isBotADmin(m,conn){
    if(!m.isGroup) return false;
    const groupMetadata = await conn.groupMetadata(m.from).catch(e => {}),
    participants = await groupMetadata.participants,
    admins = await participants.filter(v => v.admin !== null).map(v => v.id);
    if(!admins.includes(conn.user.jid)) return false;
    return true;
},
isInAutoDb,getAutomutes,getAutoUnMutes,add_Schedule,dlt_Schedule,
cmdDB, setCmd, DeleteCmd,getCmd,
linkDB, WordDB, pdmDB, setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake,
pluginDB, add_plugin, dlt_plugin, getListOfPlugin,
variableDb,CreateDb,UpdateVariable,getVar,
setWarn, ResetWarn, ListWarn,
smsg,
unixTimestampSeconds,generateMessageTag,processTime,getRandom,getBuffer,fetchJson,runtime,clockString,sleep,isUrl,getTime,formatDate,tanggal,jsonformat,logic,bytesToSize,getSizeMedia,
inrl, successfullMessage, infoMessage, errorMessage, categories, commands,
serialize,WAConnection,
connect,
listall, strikeThrough, wingdings, vaporwave, typewriter, analucia, tildeStrikeThrough, underline, doubleUnderline, slashThrough, sparrow, heartsBetween, arrowBelow, crossAboveBelow, creepify, bubbles, mirror, squares, roundsquares, flip, tiny, createMap, serif_I, manga, ladybug, runes, serif_B, serif_BI,
animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite,
sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3,
quoted, hentaivideo, send_vote, send_poll, truecaller,
remove, unscreen, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu, sendRepeat, toGroup, parse_welcom, parse_exit, addSpace,
googleIt, wikiMedia, ringTone,
add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita,
toAudio,toPTT,toVideo,
getYtV, getYtA, weather, movie, getFilm, Insta, twitter, FaceBook, mediafireDl,
pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone,
imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif,
TelegraPh, UploadFileUgu, webp2mp4File,
mentionMp3 , mentionImg,
decrypt
}
