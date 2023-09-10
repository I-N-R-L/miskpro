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


const { Innertube, UniversalCache, Utils } = require('youtubei.js');
const { existsSync, mkdirSync, writeFileSync } = require('fs');

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(false), generate_session_locally: true });
 // const yt = await Innertube.create();

  async function getVideoInfo(videoId) {
   /* const stream = await yt.download('/player', {
      // You can add any additional payloads here, and they'll merge with the default payload sent to InnerTube.
      videoId,
      client: 'ANDROID', // InnerTube client options: ANDROID, YTMUSIC, 

    return videoInfo;*/
    const stream = await yt.download(videoId, {
      type: 'audio', // audio, video or video+audio
      quality: 'bestefficiency', // best, bestefficiency, 144p, 240p, 480p, 720p and so on.
      format: 'mp4' // media container format 
    });
    const buffers = [];

// node.js readable streams implement the async iterator protocol
for await (const data of stream) {
  buffers.push(data);
}

const finalBuffer = Buffer.concat(buffers);
    return writeFileSync("mp.mp3",finalBuffer);
  }

  const videoInfo = await getVideoInfo('jLTOuvBTLxA');
  console.info(videoInfo)//.streaming_data.formats[0].decipher(yt.session.player))//.formats);

})()

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
            filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
        const buffer = await stream2buffer(stream);
        return buffer;
    } catch (e) {
        return e;
    }
};
const downloadMp4 = async (url) => {
    try {
        const stream = yt.ytdl(url, {
            filter: (info) => info.itag == 22 || info.itag == 18,
           })
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
const video_id = await yt.ytdl.getURLVideoID(url);
                 const res = await yt.ytdl.getBasicInfo(video_id);
                            const {
                                title,
                                description,
                                publishDate,
                                viewCount,
                                thumbnails
                            } = res.videoDetails
                            return ({
                                title,
                                description,
                                publishDate,
                                viewCount,
                                thumbnail:thumbnails[0]
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
