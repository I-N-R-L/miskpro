const {ytdl} = require('whatsapp-bot-pack')
const { getRandom, getBuffer } = require('./cloud');
let {yts} = require("whatsapp-bot-pack");
const fs = require('fs')
let videotime = 9000 // 200 min
let dlsize = 300 // 300mb
const {getVar}=require('../lib/database/variable');
const got = require('got');

async function getYtV(m, c){
    let data = await getVar();
    let {PREFIX,FOOTER,BOT_INFO,CAPTION} = data.data[0];
    let prefix =PREFIX =='false'?'':PREFIX;
const t = m.client.text;
if(!t.includes('http')){
try {
let search = await yts(t)
listSerch = []
            teskd = `\nResult got from ${t}.\n`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `${FOOTER} / ${i.timestamp}`
                })
            }
const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: FOOTER,
                title: `_your request  will been accepted with reasonable output by${BOT_INFO.split(',')[0]}._`,
                buttonText: "Videos",
                sections
            }
await c.sendMessage( m.from, listMessage, { quoted: m });
          } catch(e){
         m.send(""+e)
        }
    } else {
    let urlYt = t.trim();
            try {
                if (!urlYt.includes("http")) return m.reply(`your youtube link is not valid or not a yt link`);
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return m.reply(` Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let search = await yts(t);
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        thumbnail: await getBuffer(BOT_INFO.split(',')[2]),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `${CAPTION}`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: m.client.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
await c.sendMessage( m.from, buttonMessage, { quoted: m });
   } else {
                    m.reply(`we think File size bigger than 40mb.`);
                        }
                  fs.unlinkSync(`./${randomName}`);
                 } catch (e) {
                 m.send("error\n"+e);
          }
     }
}

async function getYtA(m, c){
    let data = await getVar();
    let {PREFIX,FOOTER,BOT_INFO,CAPTION} = data.data[0];
    let prefix =PREFIX =='false'?'':PREFIX;
let t = m.client.text.trim();
if(!t.includes('http')){
try {
let search = await yts(t)
            listSerch = []
            teskd = `_Result for ${t}.\n+ ${search.all.length} more results._`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `${FOOTER} / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: FOOTER,
                title: ``,
                buttonText: "Songs",
                sections
            }
await c.sendMessage( m.from, listMessage, { quoted: m });
      } catch (e){
      m.send("error\n"+e)
      }
    } else {
    try {
            let urlYt = t;
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(` can't possble to download that long audio!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let search = await yts(t);
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: m.client.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: t,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: t,
                        },
                    },
                }
                return c.sendMessage(m.from, buttonMessage, { quoted: m })
            } else {
                m.send(`we think File size bigger than 40mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            m.send("error\n"+e)
      } 
    }
  }
async function weather(message, client){
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A location'}, { quoted: message });
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await client.sendMessage( message.from, { text:'climet of ' +text+ ' is \n\n' +
		     '🌄 ᴛᴇᴍʀᴀᴛᴜʀᴇ:-' + json.main.temp_max + '\n'+
		     '💖 ᴅᴇꜱᴄʀᴩᴛɪᴏɴ:-' + json.weather[0].description + '\n'+
		     '☀ ʜᴜᴍɪᴅɪᴛy    :-' + json.main.humidity +  '\n'+
		     '💨 ᴡɪɴᴅ            :-' + json.wind.speed + 'm/s\n'+
		     '🎇 ᴄʟᴏᴜᴅ          :-' + json.clouds.all + '\n' }, { quoted: message });
	    } catch {
		     await client.sendMessage( message.from, { text : "no data found on this location"},{ quoted: message });
     }
}

async function movie(message, client){
const text = message.client.text;
	if (!text) return await client.sendMessage( message.from, { text: 'Enter A filim name'}, { quoted: message });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response = 'True') return await client.sendMessage( message.from, { text: 'detiles of'+text+'\n\n'+
	'Title      : ' + json.Title + '\n\n'+
        'Year       : ' + json.Year + '\n\n'+
	'Rated      : ' + json.Rated + '\n\n'+
	'Released   : ' + json.Released + '\n\n'+
	'Runtime    : ' + json.Runtime + '\n\n'+
	'Genre      : ' + json.Genre + '\n\n'+
	'Director   : ' + json.Director + '\n\n'+
	'Writer     : ' + json.Writer + '\n\n'+
	'Actors     : ' + json.Actors + '\n\n'+
	'Plot       : ' + json.Plot + '\n\n'+
	'Language   : ' + json.Language + '\n\n'+
	'Country    : ' + json.Country + '\n\n'+
	'Awards     : ' + json.Awards + '\n\n'+
	'BoxOffice  : ' + json.BoxOffice + '\n\n'+
	'Production : ' + json.Production + '\n\n'+
	'imdbRating : ' + json.imdbRating + '\n\n'+
	'imdbVotes  : ' + json.imdbVotes } ,{ quoted: message });
}

module.exports = { getYtV, getYtA, weather, movie }
