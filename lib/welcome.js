const os = require('os');

function MediaUrls(text) {
        let array = [];
        const regexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;
        let urls = text.match(regexp);
        if (urls) {
                urls.map(url => {
                        if (['jpg', 'jpeg', 'png', 'gif', 'mp4', 'webp'].includes(url.split('.').pop().toLowerCase())) {
                                array.push(url);
                        }
                });
                return array;
        } else {
                return false;
        }
}
async function send(m, conn, text, data) {
        let {
                id,
                subject,
                desc,
                size,
                participants
        } = await conn.groupMetadata(m.id)
        let admins = participants.filter(v => v.admin !== null).map(v => v.id).length;
        let msg = {
                contextInfo: {}
        }
        let extractions = text.match(/#(.*?)#/g);
        let URL, message;
        if (extractions) {
                message = text.replace(/#([^#]+)#/g, '');
                extractions = extractions.map(m => m.slice(1, -1));
                let arra = [];
                URL = MediaUrls(message)[0];
                msg.contextInfo.externalAdReply = {
                        containsAutoReply: true,
                        mediaType: 1,
                        previewType: "PHOTO"
                };
                extractions.map(extraction => {
                        if (extraction.match(/adattribution/gi)) msg.contextInfo.externalAdReply.showAdAttribution = true;
                        if (extraction.match(/adreply/gi)) msg.contextInfo.externalAdReply.showAdAttribution = true;
                        if (extraction.match(/largerthumbnail/gi)) msg.contextInfo.externalAdReply.renderLargerThumbnail = true;
                        if (extraction.match(/largethumb/gi)) msg.contextInfo.externalAdReply.renderLargerThumbnail = true;
                        if (extraction.match(/title/gi)) msg.contextInfo.externalAdReply.title = extraction.replace(/title\\/gi, '');
                        if (extraction.match(/body/gi)) msg.contextInfo.externalAdReply.body = extraction.replace(/body\\/gi, '');
                        if (extraction.match(/thumbnail/gi) && !extraction.match(/largerthumbnail/gi)) msg.contextInfo.externalAdReply.thumbnailUrl = extraction.replace(/thumbnail\\/gi, '');
                        if (extraction.match(/thumb/gi) && !extraction.match(/largerthumbnail/gi) && !extraction.match(/largethumb/gi) && !extraction.match(/thumbnail/gi)) msg.contextInfo.externalAdReply.thumbnailUrl = extraction.replace(/thumb\\/gi, '');
                        if (extraction.match(/sourceurl/gi)) msg.contextInfo.externalAdReply.sourceUrl = extraction.replace(/sourceurl\\/gi, '');
                        if (extraction.match(/mediaurl/gi)) msg.contextInfo.externalAdReply.mediaUrl = extraction.replace(/mediaurl\\/gi, '');
                });
        } else {
                URL = MediaUrls(text)[0]
        }
        let date = new Date().toLocaleDateString("EN", {
                year: "numeric",
                month: "long",
                day: "numeric",
        });
        let time = new Date().toLocaleString("LK", {
                timeZone: data.TIME_ZONE
        }).split(" ")[1];
        const platform = os.platform();
        const message = text.replace(/&jid/gi, `${id}`).replace(/&gname/gi, `${subject}`).replace(/&mode/gi, `${data.WORKTYPE}`).replace(/&gdesc/gi, `${desc}`).replace(/&size/gi, `${size}`).replace(/&admins/gi, `${admins}`).replace(/&platform/gi, `${platform}`).replace(/&mention/gi, `@${m.participants[0].replace(/[^0-9]/g,'')}`).replace(/&platform/gi, `${platform}`).replace(/&time/gi, `${time}`).replace(/&date/gi, `${date}`).replace(/&gif/g, '').replace(/&gpp/g, '').replace(/&pp/g, '');
        if (message.includes('&mention')) msg.contextInfo.mentionedJid = m.participants;
        if (message.includes('&gif')) msg.gifPlayback = true;
        if (URL && URL.endsWith('.mp4')) {
                msg.video = {
                                url: URL
                        },
                        msg.caption = message.replace(URL, '').trim();
        } else if (URL) {
                msg.image = {
                                url: URL
                        },
                        msg.caption = message.replace(URL, '').trim();
        } else if (message.includes('&pp') && !message.includes('&gpp')) {
                msg.image = (await conn.profilePictureUrl(m.participants[0], 'image') || "https://i.ibb.co/sFjZh7S/6883ac4d6a92.jpg");
                msg.caption = message.trim();
        } else if (message.includes('&gpp')) {
                msg.image = (await conn.profilePictureUrl(m.id, 'image') || "https://i.ibb.co/sFjZh7S/6883ac4d6a92.jpg");
                msg.caption = message.trim();
        } else msg.text = message.trim();
        return await conn.sendMessage(m.id, msg);
}
module.exports = async (m, conn, data) => {
        let {
                WELCOME_MSG,
                EXIT_MSG
        } = data;
        if (EXIT_MSG == "false" && WELCOME_MSG == "false") return;
        try {
                if (m.action == 'add') {
                        if (WELCOME_MSG == "false") return;
                        return await send(m, conn, WELCOME_MSG, data)
                } else if (m.action == 'remove') {
                        if (EXIT_MSG == "false") return;
                        return await send(m, conn, EXIT_MSG, data)
                }
        } catch (err) {
                console.log(err)
        }
}
