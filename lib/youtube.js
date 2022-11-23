const ytdl = require('ytdl-core')
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
            teskd = `_Result From ${t}.\n_+ ${search.all.length} more results._`
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

module.exports = { getYtV, getYtA }
