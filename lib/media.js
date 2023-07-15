const yt = require('whatsapp-bot-pack');

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
async function searchYT(q, u=false){
try {
let res = await yt.yts(q);
let aa =[];
if(!u){
res.all.map((r)=>aa.push(r.title))
return aa;
} else {
res.all.map((r)=>aa.push(r.url))
return aa;
}
} catch(e){
return e
}
}
const downloadMp3 = async (url) => {
try {
  const stream = yt.ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio'
  });
  const buffer = await stream2buffer(stream);
  return buffer;
  } catch (e){
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
   } catch (e){
  return e;
  }
};
function GenListMessage(title, options) {
    if (!title) return false;
    if(!options) return false;
    if (!options[0]) return "options must be array and uts have values";
    let response = "*_" + title + "_*\n\n",
        n = 1;
    options.map((o) => {
        response += `*${n++}*. ` + '```' + `${o}` + '```\n'
    });
    return response;
}
module.exports = {stream2buffer,searchYT,downloadMp3,downloadMp4,GenListMessage};
