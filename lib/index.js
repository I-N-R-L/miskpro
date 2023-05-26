
//database
const {isInAutoDb,getAutomutes,getAutoUnMutes,add_Schedule,dlt_Schedule} = require("./database/automation");
const { cmdDB, setCmd, DeleteCmd,getCmd } = require("./database/cmd");
const { linkDB, WordDB, pdmDB, setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake } = require("./database/group");
const { pluginDB, add_plugin, dlt_plugin, getListOfPlugin } = require("./database/plugins");
const { variableDb,CreateDb,UpdateVariable, getVar} = require("./database/variable");
const { setWarn, ResetWarn, ListWarn } = require("./database/warn");
const { togSchema, getTog, TogCmd } = require("./database/togcmd");
const {insertOrUpdate,getDataFromJson} = require('./database/store/getOrInsert');
//infos
const {smsg} = require("./infos/Info");
//main
const {unixTimestampSeconds,generateMessageTag,processTime,getRandom,getBuffer,fetchJson,clockString,sleep,isUrl,getTime,formatDate,tanggal,jsonformat,logic,bytesToSize,getSizeMedia} = require("./main/func");
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
    const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;
    let urls = text.match(regexp);
    if (urls) {
      return urls;
    } else {
      return false;
    }
},
    isBotAdmin : async function isBotADmin(m,conn){
    if(!m.isGroup) return false;
    const groupMetadata = await conn.groupMetadata(m.from).catch(e => {}),
    participants = await groupMetadata.participants,
    admins = await participants.filter(v => v.admin !== null).map(v => v.id);
    if(!admins.includes(conn.user.jid)) return false;
    return true;
},
    getCompo : function getCompo(digit){
if(!digit.includes("x")) return false
let num = digit.replace(/[0-9]/g,'');
if(num.length > 3) return false
if(num.length === 3){
	let chart = ["000","001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061","062","063","064","065","066","067","068","069","070","071","072","073","074","075","076","077","078","079","080","081","082","083","084","085","086","087","088","089","090","091","092","093","094","095","096","097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246","247","248","249","250","251","252","253","254","255","256","257","258","259","260","261","262","263","264","265","266","267","268","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","319","320","321","322","323","324","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","343","344","345","346","347","348","349","350","351","352","353","354","355","356","357","358","359","360","361","362","363","364","365","366","367","368","369","370","371","372","373","374","375","376","377","378","379","380","381","382","383","384","385","386","387","388","389","390","391","392","393","394","395","396","397","398","399","400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","432","433","434","435","436","437","438","439","440","441","442","443","444","445","446","447","448","449","450","451","452","453","454","455","456","457","458","459","460","461","462","463","464","465","466","467","468","469","470","471","472","473","474","475","476","477","478","479","480","481","482","483","484","485","486","487","488","489","490","491","492","493","494","495","496","497","498","499","500","501","502","503","504","505","506","507","508","509","510","511","512","513","514","515","516","517","518","519","520","521","522","523","524","525","526","527","528","529","530","531","532","533","534","535","536","537","538","539","540","541","542","543","544","545","546","547","548","549","550","551","552","553","554","555","556","557","558","559","560","561","562","563","564","565","566","567","568","569","570","571","572","573","574","575","576","577","578","579","580","581","582","583","584","585","586","587","588","589","590","591","592","593","594","595","596","597","598","599","600","601","602","603","604","605","606","607","608","609","610","611","612","613","614","615","616","617","618","619","620","621","622","623","624","625","626","627","628","629","630","631","632","633","634","635","636","637","638","639","640","641","642","643","644","645","646","647","648","649","650","651","652","653","654","655","656","657","658","659","660","661","662","663","664","665","666","667","668","669","670","671","672","673","674","675","676","677","678","679","680","681","682","683","684","685","686","687","688","689","690","691","692","693","694","695","696","697","698","699","700","701","702","703","704","705","706","707","708","709","710","711","712","713","714","715","716","717","718","719","720","721","722","723","724","725","726","727","728","729","730","731","732","733","734","735","736","737","738","739","740","741","742","743","744","745","746","747","748","749","750","751","752","753","754","755","756","757","758","759","760","761","762","763","764","765","766","767","768","769","770","771","772","773","774","775","776","777","778","779","780","781","782","783","784","785","786","787","788","789","790","791","792","793","794","795","796","797","798","799","800","801","802","803","804","805","806","807","808","809","810","811","812","813","814","815","816","817","818","819","820","821","822","823","824","825","826","827","828","829","830","831","832","833","834","835","836","837","838","839","840","841","842","843","844","845","846","847","848","849","850","851","852","853","854","855","856","857","858","859","860","861","862","863","864","865","866","867","868","869","870","871","872","873","874","875","876","877","878","879","880","881","882","883","884","885","886","887","888","889","890","891","892","893","894","895","896","897","898","899","900","901","902","903","904","905","906","907","908","909","910","911","912","913","914","915","916","917","918","919","920","921","922","923","924","925","926","927","928","929","930","931","932","933","934","935","936","937","938","939","940","941","942","943","944","945","946","947","948","949","950","951","952","953","954","955","956","957","958","959","960","961","962","963","964","965","966","967","968","969","970","971","972","973","974","975","976","977","978","979","980","981","982","983","984","985","986","987","988","989","990","991","992","993","994","995","996","997","998","999"]
	let number = []
	chart.map((n)=>{
		number.push(digit.replaceAll(num, n))
		})
		return number
	} else if(num.length === 2){
		let chart = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"]
		let number = []
		chart.map((n)=>{
			number.push(digit.replaceAll(num, n))
			})
			return number
		} else if(num.length === 1){
			let chart = ["1","2","3","4","5","6","7","8","9","0"]
			let number = []
			chart.map((n)=>{
				number.push(digit.replaceAll(num, n))
				})
				return number
			}
},
   runtime : function runtime(){
   let ut_sec = require("os").uptime(); 
   let ut_min = ut_sec/60; 
   let ut_hour = ut_min/60; 
  ut_sec = Math.floor(ut_sec); 
  ut_min = Math.floor(ut_min); 
  ut_hour = Math.floor(ut_hour); 
  ut_hour = ut_hour%60; 
  ut_min = ut_min%60; 
  ut_sec = ut_sec%60; 
   let sec_num = parseInt(process.uptime(), 10);
   let hours   = Math.floor(sec_num / 3600);
   let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
   let seconds = sec_num - (hours * 3600) - (minutes * 60);
   return uptime_process = (`Runtime: ${ut_hour} Hour  ${ut_min} minute ${ut_sec} second`)  
},
isInAutoDb,getAutomutes,getAutoUnMutes,add_Schedule,dlt_Schedule,
cmdDB, setCmd, DeleteCmd,getCmd,
linkDB, WordDB, pdmDB, setAntiLink, removeAntiLink, getAntiLink, setAntiWord, removeAntiWord, getListOfWord, GetWords, removeWord, withValue, setpdm, removePdm, getPdm, setFakeNum, setFake, removeFake, getListofFake, GetFake, removeAFake,
pluginDB, add_plugin, dlt_plugin, getListOfPlugin,
variableDb,CreateDb,UpdateVariable,getVar,
setWarn, ResetWarn, ListWarn,
togSchema, getTog, TogCmd,
insertOrUpdate,getDataFromJson,
smsg,
unixTimestampSeconds,generateMessageTag,processTime,getRandom,getBuffer,fetchJson,clockString,sleep,isUrl,getTime,formatDate,tanggal,jsonformat,logic,bytesToSize,getSizeMedia,
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
