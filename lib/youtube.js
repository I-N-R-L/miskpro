const ytdl = require('ytdl-core')
const { getRandom, getBuffer } = require('./cloud');
let yts = require("yt-search");
const fs = require('fs')
let videotime = 6000 // 100 min
let dlsize = 100 // 100mb
const Config = require('../config');

async function getYtV(m, c){
const t = m.client.text;
let search = await yts(t)
listSerch = []
            teskd = `\nResult got from ${t}.\n`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `ytmp4 ${i.url}`,
                    description: `${Config.FOOTER} / ${i.timestamp}`
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
                footer: Config.FOOTER,
                title: `_your request  will been accepted reasonable output by${Config.BOT_INFO.split(',')[0]}._`,
                buttonText: "Videos",
                sections
            }
await c.sendMessage( m.from, listMessage, { quoted: m });
}

async function getYtA(m, c){
let t = m.client.text;
let search = await yts(t)
            listSerch = []
            teskd = `_Result for ${t}.\n+ ${search.all.length} more results._`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `ytmp3 ${i.url}`,
                    description: `${Config.FOOTER} / ${i.timestamp}`
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
                footer: Config.FOOTER,
                title: ``,
                buttonText: "Songs",
                sections
            }
await c.sendMessage( m.from, listMessage, { quoted: m });
}

async function ytmp4(m, c){
let t = m.client.text;
let urlYt = t;
            try {
                if (!urlYt.startsWith("http")) return c.reply(`your youtube link is not valid or not a yt link`);
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return c.reply(` Video file too big!`);
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
                        thumbnail: await getBuffer(Config.BOT_INFO.split(',')[2]),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `${Config.CAPTION}`,
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
                    c.reply(`we think File size bigger than 40mb.`);
                }
                fs.unlinkSync(`./${randomName}`);
           } catch (e) {
                console.log(e)
     }
  }
async function ytmp3(m, c){
let t = m.client.text;
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
            console.log(e)
    }
}

module.exports = { getYtV, getYtA, ytmp4, ytmp3 }
