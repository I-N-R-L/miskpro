const { inrl,getString,reactArry,successfullMessage,infoMessage,errorMessage,commands,Commands,categories,config } = require('./perfix');
const { smsg,serialize,WAConnection } = require("./ReplyMessage");
const { pinterest,wallpaper,wikimedia,quotesAnime,aiovideodl,umma,ringtone } = require("./Scraper");
const { imageToWebp,videoToWebp,writeExifImg,writeExifVid,writeExif } = require("./Sticker");
const { unixTimestampSeconds,generateMessageTag,processTime,getRandom,getBuffer,fetchJson,runtime,clockString,sleep,isUrl,getTime,formatDate,tanggal,rexdl,rexdldown,formatp,jsonformat,logic,generateProfilePicture,bytesToSize,getSizeMedia } = require('./cloud');
const { toAudio,toPTT,toVideo } = require('./converter');
const { TelegraPh,UploadFileUgu,webp2mp4File } = require('./uploader');
const { getYtV,getYtA,ytmp4,ytmp3,weather,movie } = require('./youtube');
//sepsion calls after sy. argumentsðŸ˜‚
const { add,subtract,multiply,division,qrcode,base64e,base64d,age,anime,ffpack,ff1,ff2,ff3,ff4,ff5,ff6,ff7,ff8,ff9,ff10,ff11,ff12,ff13,ff14,ff15,ff16,ff17,ff18,ff19,ff20,ff21,ff22,ff23,ff24,ff25,ff26,ff27,ff28,ff29,ff30,ff31,ff32,ff33,ff34,ff35,ff36,ff37,ff38,ff39,ff40,ff41,ff42,ff43,ff44,ff45,ff46,ff47,ff48,ff49,ff50,animepack,an1,an2,an3,an4,an5,an6,an7,an8,an9,an10,an11,an12,an13,an14,an15,an16,an17,bts,robote,spiderman,tentacion,youAreBad,ansay,ch,trumb,inrlQuita,insult } = require('./INrlFunc');
const { listall, strikeThrough, wingdings, vaporwave, typewriter, analucia, tildeStrikeThrough, underline, doubleUnderline, slashThrough, sparrow, heartsBetween, arrowBelow, crossAboveBelow, creepify, bubbles, mirror, squares, roundsquares, flip, tiny, createMap, serif_I, manga, ladybug, runes, serif_B, serif_BI } = require("./database/ThisFancy/fancy");
const { remove,unscreen,sendUrl,tinyUrl,webSs,pdfGen,BufferToFile,AudioMetaData,send_alive,send_menu,sendRepeat,toGroup } = require('./database/semifunction/send_buffer_data');
const { animewifu,animenom,animefox,animesmug,hentaiWifu,hentaiNeko,hentaiTrap,animeawoo,animemegumin,animemehold,animehighfive,animecringe,animedance,animehappy,animeblush,animeglomp,animewave,animepoke,animewink,animebonk,animebully,animeyeet,animeneko,animecuddle,animeslap,animepat,animegood,animehug,animekiss,animewlp,animespank,animecry,animekill,animelick,animebite } = require('./database/semifunction/anime_api_pack');
const { dogphoto,lovephoto,cartoonphoto } = require('./database/semifunction/fun_photos');
const { googleIt,wikiMedia,ringTone } = require('./database/semifunction/serch_query');
const { stickersearch } = require('./set_mension');
const { quoted,hentaivideo,send_vote,send_poll,truecaller } = require('./database/semifunction/is_ext');
const { sendPhoto,sendVideo,sendVoice,sendGif,sendBassAudio,sendSlowAudio,sendBlownAudio,sendDeepAudio,sendErrapeAudio,sendFastAudio,sendFatAudio,sendNightcoreAudio,sendReverseAudio,sendSquirrelAudio,sendMp4AsMp3,mediafire } = require('./database/semifunction/fFmpeg');
const { cmdDB,setCmd,DeleteCmd } = require('./database/cmddb');
const { setWarn,ResetWarn,ListWarn } = require('./database/warndb');
module.exports = {
    Simple: require("./ReplyMessage"),
    pass : require("./password"),
    upsert: require('./status'),
    smsg,serialize,WAConnection,pinterest,wallpaper,wikimedia,quotesAnime,aiovideodl,umma,ringtone,imageToWebp,videoToWebp,writeExifImg,writeExifVid,unixTimestampSeconds,generateMessageTag,processTime,getRandom,getBuffer,fetchJson,runtime,clockString,sleep,isUrl,getTime,formatDate,tanggal,rexdl,rexdldown,formatp,jsonformat,logic,generateProfilePicture,bytesToSize,getSizeMedia,toAudio,toPTT,toVideo,inrl,successfullMessage,infoMessage,errorMessage,commands,Commands,categories,config,TelegraPh,UploadFileUgu,webp2mp4File,add,subtract,multiply,division,qrcode,base64e,base64d,age,anime,ffpack,ff1,ff2,ff3,ff4,ff5,ff6,ff7,ff8,ff9,ff10,ff11,ff12,ff13,ff14,ff15,ff16,ff17,ff18,ff19,ff20,ff21,ff22,ff23,ff24,ff25,ff26,ff27,ff28,ff29,ff30,ff31,ff32,ff33,ff34,ff35,ff36,ff37,ff38,ff39,ff40,ff41,ff42,ff43,ff44,ff45,ff46,ff47,ff48,ff49,ff50,animepack,an1,an2,an3,an4,an5,an6,an7,an8,an9,an10,an11,an12,an13,an14,an15,an16,an17,bts,robote,spiderman,tentacion,youAreBad,ansay,ch,trumb,inrlQuita,insult,
    styletext: (text,index) => {
    index = index - 1;
    return listall(text)[index];
},
    randomStyle:(text)=>{
    let list = listall(text)
    return list[Math.floor(Math.random()*list.length)]
},
    listall,strikeThrough,wingdings,vaporwave,typewriter,analucia,tildeStrikeThrough,underline,doubleUnderline,slashThrough,sparrow,heartsBetween,arrowBelow,crossAboveBelow,creepify,bubbles,mirror,squares,roundsquares,flip,tiny,createMap,serif_I,manga,ladybug,runes,serif_B,serif_BI,remove,unscreen,sendUrl,tinyUrl,webSs,pdfGen,BufferToFile,AudioMetaData,send_alive,send_menu,sendRepeat,toGroup,getYtV,getYtA,ytmp4,ytmp3,weather,movie,animewifu,animenom,animefox,animesmug,hentaiWifu,hentaiNeko,hentaiTrap,animeawoo,animemegumin,animemehold,animehighfive,animecringe,animedance,animehappy,animeblush,animeglomp,animewave,animepoke,animewink,animebonk,animebully,animeyeet,animeneko,animecuddle,animeslap,animepat,animegood,animehug,animekiss,animewlp,animespank,animecry,animekill,animelick,animebite,dogphoto,lovephoto,cartoonphoto,googleIt,wikiMedia,ringTone,quoted,hentaivideo,send_vote,send_poll,truecaller,stickersearch,sendPhoto,sendVideo,sendVoice,sendGif,sendBassAudio,sendSlowAudio,sendBlownAudio,sendDeepAudio,sendErrapeAudio,sendFastAudio,sendFatAudio,sendNightcoreAudio,sendReverseAudio,sendSquirrelAudio,sendMp4AsMp3,mediafire,cmdDB,setCmd,DeleteCmd,setWarn,ResetWarn,ListWarn
}
