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
//sepsion calls after sy. arguments😂
const Collections =INRLbot.Collections;
const correct = INRLmd.correct;
const smsg =Inrlbots.smsg;
const serialize =Inrlbots.serialize;
const WAConnection =Inrlbots.WAConnection;
const wallpaper = inrlbotS.wallpaper;
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

module.exports = {
    Collection: require("./Base"),
    Function: require("./Function"),
    Simple: require("./ReplyMessage"),
    Scrape: require("./Scraper"),
    Sticker: require("./Sticker"),
    Store: require("./Store"),
    inrl, getString, reactArry, successfullMessage,
    commands ,
    Commands,
    upsert: require('./status'),
    eziofunc: require('./Message'),
}
