const yt = require('whatsapp-bot-pack');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const googleTTS = require('google-tts-api');
const {
    translate
} = require('@vitalets/google-translate-api');
const stream2buffer = async (stream) => {
    const chunks = [];
    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => {
            chunks.push(chunk);
        });
        stream.on('end', () => {
            const buffer = Buffer.concat(chunks);
            resolve(buffer);
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
};
async function searchYT(q, u = false) {
    try {
        let res = await yt.yts(q);
        let aa = [];
        if (!u) {
            res.all.map((r) => aa.push(r.title))
            return aa;
        } else {
            res.all.map((r) => aa.push(r.url))
            return aa;
        }
    } catch (e) {
        return e
    }
}
const downloadMp3 = async (url) => {
    try {
        const stream = yt.ytdl(url, {
            filter: 'audioonly',
            quality: 'lowestaudio'
        });
        const buffer = await stream2buffer(stream);
        return buffer;
    } catch (e) {
        return e;
    }
};
const downloadMp4 = async (url) => {
    try {
        const stream = yt.ytdl(url, {
            filter: 'videoonly',
            quality: 'lowestvideo'
        });
        const buffer = await stream2buffer(stream);
        return buffer;
    } catch (e) {
        return e;
    }
};

function GenListMessage(title, options, desc, footer) {
    if (!title) return false;
    if (!options) return false;
    if (!options[0]) return "options must be array and uts have values";
    let response = "*_" + title + "_*\n\n",
        n = 1;
        if(desc) response += desc +'\n\n';
    options.map((o) => {
        response += `*${n++}*. ` + '```' + `${o}` + '```\n'
    });
    if(footer) response += footer;
    return response;
}
const TTS = async (text, lang) => {
    try {
        const options = {
            lang: lang,
            slow: false,
            host: 'https://translate.google.com'
        };
        const audioBase64Array = await googleTTS.getAllAudioBase64(text, options);
        const base64Data = audioBase64Array.map((audio) => audio.base64).join();
        const fileData = Buffer.from(base64Data, 'base64');
        fs.writeFileSync('tts.mp3', fileData, {
            encoding: 'base64'
        });
        return new Promise((resolve) => {
            ffmpeg('tts.mp3').audioCodec('libopus').save('tts.opus').on('end', async () => {
                resolve(fs.readFileSync('tts.opus'));
            });
        });
    } catch (error) {
        throw new Error(error.message);
    }
};
const TRT = async (text, lang = 'en') => {
    const res = await translate(text, {
        to: lang,
        autoCorrect: true
    }).catch(_ => null)
    return res;
}
const getYTInfo = async (url) => {
            return new Promise((resolve) => {
                   yt.ytdl.getBasicInfo(yt.ytdl.getURLVideoID(url)).then((m) => {
                            const {
                                title,
                                description,
                                publishDate,
                                viewCount,
                                thumbnails
                            } = m.videoDetails
                            resolve({
                                title,
                                description,
                                publishDate,
                                viewCount,
                                thumbnail:thumbnails[0]
                            });
                        })
                    });
                  }
                    module.exports = {
                        stream2buffer,
                        searchYT,
                        downloadMp3,
                        downloadMp4,
                        GenListMessage,
                        TTS,
                        TRT,
                        getYTInfo
                    };
