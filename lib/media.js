const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const https = require('https');
const {
    JSDOM
} = require('jsdom')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require("axios")
const cheerio = require("cheerio")
const {
    fromBuffer
} = require('file-type')
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
//alredy ij
function BufferToFile(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath)).on('error', reject).once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                resolve('error');
            }
        });
    });
}

function GenListMessage(title, options) {
    if (!title || !options) return false;
    if (!options[0]) return "options must be array and uts have values";
    let response = "*_" + title + "_*",
        n = 1;
    options.map((o) => {
        response += `*${n++}*. ` + '```' + `${o}` + '```\n'
    });
    return response;
}

function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

function Y2mate(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            }).then(res => res.json()).then(res => {
                document = (new JSDOM(res.result)).window.document
                yaha = document.querySelectorAll('td')
                filesize = yaha[yaha.length - 23].innerHTML
                id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                thumb = document.querySelector('img').src
                title = document.querySelector('b').innerHTML
                post('https://www.y2mate.com/mates/en60/convert', {
                    type: 'youtube',
                    _id: id[1],
                    v_id: ytId[1],
                    ajax: '1',
                    token: '',
                    ftype: 'mp4',
                    fquality: 360
                }).then(res => res.json()).then(res => {
                    let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                    resolve({
                        dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                        thumb,
                        title,
                        filesizeF: filesize,
                        filesize: KB
                    })
                }).catch(reject)
            }).catch(reject)
        } else reject('URL INVALID')
    })
}
async function ytmp3(m, url) {
    let fn = "./media/media.mp4";
    const res = await Y2mate(url);
    if (!res || !res.dl_link || res.dl_link.length < 100) return await m.send('_requst filed with status code 303_');
    try {
        const file = await BufferToFile(res.dl_link, fn);
        await ffmpeg(file).save('./media/bass.mp3').on('end', async () => {
            await m.conn.sendMessage(m.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp3',
                ptt: false
            }, {
                quoted: m
            })
        });
        fs.unlinkSync(file);
        fs.unlinkSync('./media/bass.mp3');
    } catch (e) {
        return false;
    }
}
async function ytmp4(m, url) {
    try {
        const res = await Y2mate(url);
        if (!res || !res.dl_link || res.dl_link.length < 100) return await m.send('_requst filed with status code 303_');
        return await m.conn.sendMessage(m.from, {
            video: {
                url: dl_link
            },
            mimetype: 'video/mp4',
            caption: res.title
        });
    } catch (e) {
        return await m.send('_requst filed with status code 503_');
    }
}
module.exports = {
    GenListMessage,
    Y2mate,
    ytmp3,
    ytmp4
};
