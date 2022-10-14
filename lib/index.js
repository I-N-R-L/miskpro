//██╗███╗░░██╗██████╗░██╗░░░░░░░░░░░██████╗░░█████╗░████████╗░░░░░░███╗░░░███╗██████╗░
//██║████╗░██║██╔══██╗██║░░░░░░░░░░░██╔══██╗██╔══██╗╚══██╔══╝░░░░░░████╗░████║██╔══██╗
//██║██╔██╗██║██████╔╝██║░░░░░█████╗██████╦╝██║░░██║░░░██║░░░█████╗██╔████╔██║██║░░██║
//██║██║╚████║██╔══██╗██║░░░░░╚════╝██╔══██╗██║░░██║░░░██║░░░╚════╝██║╚██╔╝██║██║░░██║
//██║██║░╚███║██║░░██║███████╗░░░░░░██████╦╝╚█████╔╝░░░██║░░░░░░░░░██║░╚═╝░██║██████╔╝
//╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝░░░░░░╚═════╝░░╚════╝░░░░╚═╝░░░░░░░░░╚═╝░░░░░╚═╝╚═════╝░
const Inrlmd = require('./perfix');
const INRLbot = require('./Base');
const INRLmd = require('./Correct');
const inrlBOTS = require("./Function");
const Inrlbots = require("./ReplyMessage");
const inrlbotS = require("./Scraper");
const InrLBOTs = require("./Sticker");
const inrlbots = require("./Store");
const INRLBOTS = require('./Message');
const inRllOts = require('./cloud');
const inRlBOts = require('./status');
const inrlbOts = require('./converter');
const iNRLBots = require('./uploader');
const InRlBoTs = require('./y2Mate');
//sepsion calls after sy. argumentsðŸ˜‚
const Collections =INRLbot.Collections;
const correct = INRLmd.correct;
const smsg =Inrlbots.smsg;
const serialize =Inrlbots.serialize;
const WAConnection =Inrlbots.WAConnection;
const pinterest = inrlbotS.pinterest;
const wallpaper = inrlbotS.wallpaper;
const wikimedia = inrlbotS.wikimedia;
const quotesAnime = inrlbotS.quotesAnime;
const aiovideodl = inrlbotS.aiovideodl;
const umma = inrlbotS.umma;
const ringtone = inrlbotS.ringtone;
const styletext = inrlbotS.styletext;
const imageToWebp = InrLBOTs.imageToWebp;
const videoToWebp = InrLBOTs.videoToWebp;
const writeExifImg = InrLBOTs.writeExifImg;
const writeExifVid =InrLBOTs.writeExifVid;
const writeExif = InrLBOTs.writeExif;
const bind = inrlbots.bind;
const unixTimestampSeconds = inRllOts.unixTimestampSeconds;
const generateMessageTag = inRllOts.generateMessageTag;
const processTime = inRllOts.processTime;
const getRandom = inRllOts.getRandom;
const getBuffer = inRllOts.getBuffer;
const fetchJson = inRllOts.fetchJson;
const runtime = inRllOts.runtime;
const clockString = inRllOts.clockString;
const sleep = inRllOts.sleep;
const isUrl = inRllOts.isUrl;
const getTime = inRllOts.getTime;
const formatDate = inRllOts.formatDate;
const tanggal = inRllOts.tanggal;
const rexdl = inRllOts.rexdl;
const rexdldown = inRllOts.rexdldown;
const formatp = inRllOts.formatp;
const jsonformat = inRllOts.jsonformat;
const logic = inRllOts.logic;
const generateProfilePicture = inRllOts.generateProfilePicture;
const bytesToSize = inRllOts.bytesToSize;
const getSizeMedia = inRllOts.getSizeMedia;
const toAudio = inrlbOts.toAudio;
const toPTT = inrlbOts.toPTT;
const toVideo = inrlbOts.toVideo;
const inrl = Inrlmd.inrl;
const getString = Inrlmd.getString;
const reactArry = Inrlmd.reactArry;
const successfullMessage = Inrlmd.successfullMessage;
const infoMessage = Inrlmd.infoMessage;
const errorMessage = Inrlmd.errorMessage;
const commands = Inrlmd.commands;
const Commands = Inrlmd.commands;
const categories = Inrlmd.categories;
const config = Inrlmd.config;
const TelegraPh = iNRLBots.TelegraPh;
const UploadFileUgu = iNRLBots.UploadFileUgu;
const webp2mp4File = iNRLBots.webp2mp4File;
//end inrl spesiol func
const  { add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, textProImg1, textProImg2, textProImg3, textProImg4, textProImg5, textProImg6, textProImg7, textProImg8, textProImg9, textProImg10, textProImg11, textProImg12, textProImg13, textProImg14, textProImg15, textProImg16, textProImg17, textProImg18, textProImg19, textProImg20, textProImg21, textProImg22, textProImg23, textProImg24, textProImg25, textProImg26, textProImg27, textProImg28, textProImg29, textProImg30, inrlQuita, insult } = require('./INrlFunc');
module.exports = {
    Collection: require("./Base"),
    Function: require("./Function"),
    Simple: require("./ReplyMessage"),
    Scrape: require("./Scraper"),
    Sticker: require("./Sticker"),
    Store: require("./Store"),
    pass : require("./password"),
    upsert: require('./status'),
    eziofunc: require('./Message'),
Collections, correct, smsg, serialize, WAConnection, pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext, imageToWebp, videoToWebp, writeExifImg, writeExifVid, bind, unixTimestampSeconds, generateMessageTag, processTime, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, rexdl, rexdldown, formatp, jsonformat, logic, generateProfilePicture, bytesToSize, getSizeMedia, toAudio, toPTT, toVideo, inrl, successfullMessage, infoMessage, errorMessage, commands, Commands, categories, config, TelegraPh, UploadFileUgu, webp2mp4File, add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, textProImg1, textProImg2, textProImg3, textProImg4, textProImg5, textProImg6, textProImg7, textProImg8, textProImg9, textProImg10, textProImg11, textProImg12, textProImg13, textProImg14, textProImg15, textProImg16, textProImg17, textProImg18, textProImg19, textProImg20, textProImg21, textProImg22, textProImg23, textProImg24, textProImg25, textProImg26, textProImg27, textProImg28, textProImg29, textProImg30, inrlQuita, insult
}
