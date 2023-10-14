const speed = require('performance-now');
const os = require('os');
const {
	commands
} = require('./main/prefix');
const package = require('../package.json');
const {
	getBuffer
} = require("./main/func");
>const os = require('os');
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
        }else {
        return false;
}
}
async function send_alive(m, data) {
                const sstart = new Date().getTime();
                let msg = {
                                contextInfo: {}
                        }
                        let {
                                ALIVE_DATA,
                                TIME_ZONE
                        } = data;
                        let extractions = ALIVE_DATA.match(/#(.*?)#/g);
                        let URL;
                        if (extractions) {
                        	ALIVE_DATA = ALIVE_DATA.replace( /#([^#]+)#/g,'');
                        	extractions = extractions.map(m => m.slice(1, -1));
                                let arra = [];
                                URL = MediaUrls(ALIVE_DATA)[0]; 
                                msg.contextInfo.externalAdReply = {
                                        containsAutoReply: true,
                                        mediaType: 1,
                                        previewType: "PHOTO"
                                };
                                extractions.map(extraction=>{
                                if (extraction.match(/adattribution/gi)) msg.contextInfo.externalAdReply.showAdAttribution = true;
                                if (extraction.match(/adreply/gi)) msg.contextInfo.externalAdReply.showAdAttribution = true;
                                if (extraction.match(/largerthumbnail/gi)) msg.contextInfo.externalAdReply.renderLargerThumbnail = true;
                                if (extraction.match(/largethumb/gi)) msg.contextInfo.externalAdReply.renderLargerThumbnail = true;
                                if (extraction.match(/title/gi)) msg.contextInfo.externalAdReply.title = extraction.replace(/title\\/gi,'');
                                if (extraction.match(/body/gi)) msg.contextInfo.externalAdReply.body = extraction.replace(/body\\/gi,'');
                                if (extraction.match(/thumbnail/gi) &&!extraction.match(/largerthumbnail/gi)) msg.contextInfo.externalAdReply.thumbnailUrl = extraction.replace(/thumbnail\\/gi,'');
                                if (extraction.match(/thumb/gi)&&!extraction.match(/largerthumbnail/gi)&&!extraction.match(/largethumb/gi) &&!extraction.match(/thumbnail/gi)) msg.contextInfo.externalAdReply.thumbnailUrl = extraction.replace(/thumb\\/gi,'');
                                if (extraction.match(/sourceurl/gi)) msg.contextInfo.externalAdReply.sourceUrl = extraction.replace(/sourceurl\\/gi,'');
                                if (extraction.match(/mediaurl/gi)) msg.contextInfo.externalAdReply.mediaUrl = extraction.replace(/mediaurl\\/gi,'');
                                });
                        } else {
                                URL = MediaUrls(ALIVE_DATA)[0]
                        }
                                let date = new Date().toLocaleDateString("EN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                });
                                let time = new Date().toLocaleString("LK", {
                                        timeZone: TIME_ZONE
                                }).split(" ")[1];
                                const platform = os.platform();
                                const sender = m.sender;
                                const user = m.pushName;
                                const text = ALIVE_DATA.replace(/&sender/gi, `@${sender.replace(/[^0-9]/g,'')}`).replace(/&user/gi, `${user}`).replace(/&platform/gi, `${platform}`).replace(/&time/gi, `${time}`).replace(/&date/gi, `${date}`).replace(/&speed/gi, `${sstart-new Date().getTime()}`).replace(/&gif/g,'');
                                if (ALIVE_DATA.includes('&sender')) msg.contextInfo.mentionedJid = [sender];
                                if (ALIVE_DATA.includes('&gif')) msg.gifPlayback = true;
                                if (URL && URL.endsWith('.mp4')) {
                                        msg.video = {
                                                url: URL
                                        },
                                        msg.caption = text.replace(URL,'').trim();
                                } else if(URL) {
                                        msg.image = {
                                                url: URL
                                        },
                                        msg.caption = text.replace(URL,'').trim();
                                } else msg.text = text.trim();
                                return await m.conn.sendMessage(m.jid,msg);
                        }
 await send_alive(m, data);

const imgbbUploader = require("imgbb-uploader");
const ID3Writer = require('browser-id3-writer');
const FormData = require('form-data');
const https = require('https')
const axios = require('axios');
const api = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
const imgur = require('imgur');
const clientId = '3ca8036b07e0f25';
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg');
imgur.setClientId(clientId)
const {
	removeBackgroundFromImageBase64,
	removeBackgroundFromImageUrl,
	removeBackgroundFromImageFile
} = require('remove.bg')
const {
	BASE_URL
} = require('../config');
let apikeys = ['zNKnayDFH1nugtA81fkPMzXn', '5CyygkXiT5vrki2Z6ZsUCE8u', 'Mz4yJkagrCLotdgsr4Ms39ud', 'vEeWnzQws9kJoYNMYKhbT1s6', '2arViktax9HUdMqy9U7wFLKT', 'sfZpRHNwVPAG57nZVHijYZ9v', 'oqVVyQ2rBDYdUrxThg4GdjhA', 'rGp4axHpQ56Y5tRLX7J789QC', 'NfPx6NgTkpVYLnKUZHCAM1P3']

function apply(text) {
	let map = {
		"a": "ᴀ",
		"b": "ʙ",
		"c": "ᴄ",
		"d": "ᴅ",
		"e": "ᴇ",
		"f": "ғ",
		"g": "ɢ",
		"h": "ʜ",
		"i": "ɪ",
		"j": "ᴊ",
		"k": "ᴋ",
		"l": "ʟ",
		"m": "ᴍ",
		"n": "ɴ",
		"o": "ᴏ",
		"p": "ᴘ",
		"q": "ǫ",
		"r": "ʀ",
		"s": "s",
		"t": "ᴛ",
		"u": "ᴜ",
		"v": "ᴠ",
		"w": "ᴡ",
		"x": "x",
		"y": "ʏ",
		"z": "ᴢ",
		"A": "ᴀ",
		"B": "ʙ",
		"C": "ᴄ",
		"D": "ᴅ",
		"E": "ᴇ",
		"F": "ғ",
		"G": "ɢ",
		"H": "ʜ",
		"I": "ɪ",
		"J": "ᴊ",
		"K": "ᴋ",
		"L": "ʟ",
		"M": "ᴍ",
		"N": "ɴ",
		"O": "ᴏ",
		"P": "ᴘ",
		"Q": "ǫ",
		"R": "ʀ",
		"S": "s",
		"T": "ᴛ",
		"U": "ᴜ",
		"V": "ᴠ",
		"W": "ᴡ",
		"X": "x",
		"Y": "ʏ",
		"Z": "ᴢ"
	};
	let result = "";
	for (let character of text.split("")) {
		if (map[character] !== undefined) result += map[character];
		else if (map[character.toLowerCase()] !== undefined) result += map[character.toLowerCase()];
		else result += character
	}
	return result
}
async function AudioMetaData(imgFile, audio, text, data) {
	let {
		AUDIO_DATA,
		STICKER_DATA
	} = data
	let title = text.split(/[;,|]/)[0] || AUDIO_DATA.split(/[;,|]/)[0] || "ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ";
	let body = text.split(/[;,|]/)[1] || AUDIO_DATA.split(/[;,|]/)[1] || "ɪɴʀʟ-ʙᴏᴛ";
	const writer = new ID3Writer(audio);
	writer
		.setFrame("TIT2", title.trim())
		.setFrame("TPE1", [body.trim()])
		.setFrame("APIC", {
			type: 3,
			data: imgFile,
			description: "INRL-BOT-MD",
		});
	writer.addTag();
	return Buffer.from(writer.arrayBuffer);
}

let remove = async (input) => {
	try {
		const apis = apikeys
		const response = await removeBackgroundFromImageBase64({
			base64img: input.toString('base64'),
			apiKey: apis[Math.floor(Math.random() * apis.length)],
			size: 'auto',
			type: 'auto',
		})
		return Buffer.from(response.base64img, 'base64')
	} catch (error) {
		console.log(error)
	}
}

let unscreen = async (input) => {
	const UNSCREEN_API_VIDEOS_URL = "https://api.unscreen.com/v1.0/videos";
	let API = apikeys[Math.floor(Math.random() * apikeys.length)]
	try {
		const form = new FormData();

		var headers = form.getHeaders();
		headers['X-Api-Key'] = API;

		const data = await axios({
				url: UNSCREEN_API_VIDEOS_URL,
				method: "POST",
				headers: {
					headers
				},
				data: input,
				'maxContentLength': Infinity,
				'maxBodyLength': Infinity,
			})
			.then(function(response) {
				// handle success
				console.log(response.data);
			})
	} catch (err) {
		console.log(err)
	}
}

function addSpace(text, length = 8, align = "right") {
	if (text.length >= length) return text;
	let space = " ",
		div,
		rText = "",
		edd;
	div = length - text.toString().length;
	if (div % 2 != 0) div = div + 1;
	div = div / 2;
	for (let i = 1; i <= div; i++) {
		rText += space;
	}
	if (align == "left") {
		return rText + rText + text.toString();
	} else if (align == "right") {
		return text.toString() + rText + rText;
	} else {
		return rText + text.toString() + rText;
	}
}

async function sendUrl(message) {
	let _message = message.quoted.imageMessage || message.quoted.stickerMessage;
	if (_message) {
		let download = await message.client.downloadAndSaveMediaMessage(_message)
		let idata = await imgbbUploader(api, download)
		return await message.send(idata.url);
	} else if (message.quoted.videoMessage) {
		let _essage = message.quoted.videoMessage;
		let urvideo = await message.client.downloadAndSaveMediaMessage(_essage)
		await imgur
			.uploadFile(urvideo)
			.then(async (json) => {
				return await message.send(json.link);
			})
	} else if (message.quoted.audioMessage) {
		let _essage = message.quoted.audioMessage;
		let urvideo = await message.client.downloadAndSaveMediaMessage(_essage)
		await ffmpeg(urvideo)
			.outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
			.save('output.mp4')
			.on('end', async () => {
				await imgur
					.uploadFile('output.mp4')
					.then((json) => {
						message.send(json.link)
					})
			});
	}
}

async function tinyUrl(message) {
	const text = message.client.text;
	if (message.quoted) {
		text = message.quoted.text || message.client.text;
	}
	if (!text) return await message.send('*_Give Me a Url to convert Tiny Url_*');
	const url = `${BASE_URL}api/tinyurl?url=${text}`;
	try {
		const {
			data
		} = await axios(url);
		return await message.send('_' + data.result + '_');
	} catch (e) {
		return await message.send('*Failed*');
	}
}

async function webSs(message) {
	if (!message.client.text) return await client.sendMessage(message.from, {
		text: "_need Url_"
	}, {
		quoted: message
	})
	let ttinullimage = `${BASE_URL}api/ssweb?url=${message.client.text}`;
	return await message.sendReply(ttinullimage, {}, 'image').catch((e) => message.reply('*Failed*'));
};

async function pdfGen(message) {
	const text = message.client.text;
	if (!text.startsWith('http')) message.reply('need a valid url!');
	if (!text) return await message.reply('_Need Url_');
	let inrlmx = await getBuffer(`https://api.html2pdf.app/v1/generate?url=${text}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`)
	return await message.client.sendMessage(message.from, {
		document: inrlmx,
		mimetype: 'application/pdf'
	}, {
		quoted: message
	})
}

function BufferToFile(url, filepath) {
	return new Promise((resolve, reject) => {
		client.get(url, (res) => {
			if (res.statusCode === 200) {
				res.pipe(fs.createWriteStream(filepath))
					.on('error', reject)
					.once('close', () => resolve(filepath));
			} else {
				// Consume response data to free up memory
				resolve('error');
			}
		});
	});
}

async function send_menu(m, data) {
	let {
		BOT_INFO,
		PREFIX,
		WORKTYPE,
		TIME_ZONE,
		WA_GRP
	} = data;
	const info_vars = BOT_INFO.split(/[;,]/);
	let img_url = info_vars[2] || "https://i.ibb.co/9H2bHZP/0478bd8b748a.jpg";
	img_url = img_url.trim();
	if (img_url.endsWith('.mp4')) img_url = "https://i.ibb.co/9H2bHZP/0478bd8b748a.jpg";
	let date = new Date().toLocaleDateString("EN", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	let time = new Date().toLocaleString("LK", {
		timeZone: TIME_ZONE
	}).split(" ")[1];
	try {
		const prefix = PREFIX == "false" ? '' : PREFIX;
		let cmnd = [];
		let cmd;
		let category = [],
			type, countcmdOfCmd = 0;
		let menu = `╭━〔 ${info_vars[0]} 〕━◉
┃╭━━━━━━━━━━━━━━◉
┃┃ Plugins : ${commands.length.toString()}
┃┃ User :- @${m.number}
┃┃ Owner : ${info_vars[1]}
┃┃ Version: ${package.version}
┃┃ Prefix:- ${prefix}
┃┃ MOD :- ${WORKTYPE}
┃┃ Date :- ${date}
┃┃ Time :- ${time}
┃╰━━━━━━━━━━━━━◉`;
		commands.map((command, num) => {
			if (command.pattern) {
				cmd = command.pattern;
				type = command.type
			}
			if (!command.type) {
				type = "others";
			} else {
				type = command.type.toLowerCase()
			}
			cmnd.push({
				cmd,
				type: type
			});

			if (!category.includes(type)) category.push(type);

		});
		category.forEach((cmmd) => {
			menu += `
┠┌─⭓『 ${addSpace("*"+cmmd.toUpperCase()+"*",14,"both")} 』`;
			let comad = cmnd.filter(({
				type
			}) => type == cmmd);
			comad.forEach(async ({
				cmd
			}, num) => {
				menu += `\n┃│◦ ${apply(cmd.replace(/[^a-zA-Z0-9-+]/g,''))}`;
			});
			menu += `\n┃└──────────⭓`;
		});
		menu += '\n╰━━━━━━━━━━━━━◉'
		return await m.conn.sendMessage(m.from, {
			text: menu,
			contextInfo: {
				mentionedJid: [m.sender],
				externalAdReply: {
					showAdAttribution: true,
					containsAutoReply: true,
					title: info_vars[0],
					renderLargerThumbnail: true,
					mediaType: 1,
					previewType: "PHOTO",
					thumbnail: await getBuffer(img_url),
					sourceUrl: WA_GRP
				}
			}
		});
	} catch (e) {
		return await m.send(e);
	}
}

async function send_alive(m, data) {
	const sstart = new Date().getTime();
	try {
		const {
			ALIVE_DATA,
			BOT_INFO,
			TIME_ZONE
		} = data;
		let date = new Date().toLocaleDateString("EN", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		let time = new Date().toLocaleString("LK", {
			timeZone: TIME_ZONE
		}).split(" ")[1];
		const platform = os.platform();
		const eendd = new Date().getTime();
		const speed = sstart - eendd;
		let responseMsg = {};
		let ALIVE_VALUE = ALIVE_DATA.split(/['$;']/);
		let typo = "inrlmddd",
			extent,
			consolor,
			title = "hey👋🏿",
			body = "hey vroh/sis👋🏿",
			mediatype = 1,
			thumbnail = "https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg",
			sourceurl = undefined,
			mediaurl = undefined,
			vidOrImgOrSticker = 'image';
		for (let i = 0; i < ALIVE_VALUE.length; i++) {
			if (ALIVE_VALUE[i].match("sticker")) {
				typo = "sticker";
			}
			if (typo != "sticker" && ALIVE_VALUE[i].match('image>')) {
				typo = true
			} else if (typo != "sticker" && ALIVE_VALUE[i].match('video>')) {
				typo = true;
			} else if (typo != "sticker" && typo != true) {
				typo = false;
			}
			if (ALIVE_VALUE[i].match('text')) {
				consolor = ALIVE_VALUE[i].replaceAll('text', '').replaceAll('>', '');
				if (consolor.includes('&platform')) {
					consolor = consolor.replaceAll('&platform', `${platform}`);
				}
				if (consolor.includes('&date')) {
					consolor = consolor.replaceAll('&date', `${date}`);
				}
				if (consolor.includes('&time')) {
					consolor = consolor.replaceAll('&time', `${time}`);
				}
				if (consolor.includes('&speed')) {
					consolor = consolor.replaceAll('&speed', `${speed}`);
				}
				if (consolor.includes('&sender')) {
					consolor = consolor.replaceAll('&sender', `${m.client.pushName}`);
				}
			}
			//check media is video or image or sticker!
			if (ALIVE_VALUE[i].match('image>')) {
				let iamgeano = 'alla';
				if (ALIVE_VALUE[i].replace('image>', '').trim().endsWith('jpg') || ALIVE_VALUE[i].replace('image>', '').trim().endsWith('jpeg')) iamgeano = "anu";
				let newimgg = iamgeano.match("anu") ? ALIVE_VALUE[i].replace('image>', '').trim() : 'https://i.ibb.co/gdp7HrS/8390ad4fefbd.jpg';
				responseMsg = {
					...responseMsg,
					[vidOrImgOrSticker]: {
						url: newimgg.trim()
					}
				}
			} else if (ALIVE_VALUE[i].match('video>')) {
				vidOrImgOrSticker = 'video'
				let videoeano = 'alla';
				if (ALIVE_VALUE[i].replace('video>', '').trim().endsWith('mp4')) videoeano = "anu";
				let newVideoo = videoeano.match("anu") ? ALIVE_VALUE[i].replace('video>', '').trim() : "https://i.imgur.com/0jQFPXK.mp4";
				responseMsg = {
					...responseMsg,
					[vidOrImgOrSticker]: {
						url: newVideoo.trim()
					}
				}
			} else if (ALIVE_VALUE[i].match('sticker>')) {
				vidOrImgOrSticker = 'sticker'
				let atickerAno = "alla";
				if (ALIVE_VALUE[i].replace('sticker>', '').trim().endsWith('webp')) atickerAno = "anu";
				let newSticker = atickerAno.match("anu") ? ALIVE_VALUE[i].replace('sticker>', '').trim() : "https://i.ibb.co/mS7Vqfk/4fa704a84ce1.webp";
				responseMsg = {
					...responseMsg,
					[vidOrImgOrSticker]: {
						url: newSticker.trim()
					}
				}
			}
			// objcet concurrection for its externel requierd or not
			if (ALIVE_VALUE[i].match('title')) {
				extent = true
				title = ALIVE_VALUE[i].replace('title', '').replace('>', '').trim();
			}
			if (ALIVE_VALUE[i].match('body')) {
				extent = true
				body = ALIVE_VALUE[i].replace('body', '').replace('>', '').trim();
			}
			if (ALIVE_VALUE[i].match('mediatype')) {
				extent = true
				mediatype = ALIVE_VALUE[i].replace('mediatype', '').replace('>', '').trim();
			}
			if (ALIVE_VALUE[i].match('thumbnail')) {
				extent = true
				thumbnail = ALIVE_VALUE[i].replace('thumbnail', '').replace('>', '').trim();
			}
			if (ALIVE_VALUE[i].match('sourceurl')) {
				extent = true
				sourceurl = ALIVE_VALUE[i].replace('sourceurl', '').replace('>', '').trim();
			}
			if (ALIVE_VALUE[i].match('mediaurl')) {
				extent = true
				mediaurl = ALIVE_VALUE[i].replace('mediaurl', '').replace('>', '').trim();
			}
			//fix the ends!"
			if (extent) {
				responseMsg = {
					...responseMsg,
					contextInfo: {
						externalAdReply: {
							containsAutoReply: true,
							previewType: "PHOTO",
							title: title,
							body: body,
							mediaType: mediatype,
							thumbnailUrl: thumbnail,
							sourceUrl: sourceurl,
							mediaUrl: mediaurl
						}
					}
				}
			}
		}
		if (typo == true) {
			responseMsg = {
				...responseMsg,
				caption: consolor || 'iam alive vroh to set custom alive!, type :- alive help'
			}
		} else if (typo == false) {
			responseMsg = {
				text: consolor || 'iam alive vroh to set custom alive!, type :- alive help'
			}
		} else if (typo == "sticker") {
			responseMsg = responseMsg;
		}
		return await m.conn.sendMessage(m.from, responseMsg)
	} catch (e) {
		return await m.conn.sendMessage(m.from, {
			text: '_' + `your alive msg have an error:-_\n*${e}*\n_try to type :-_ alive help _to set new alive msg!_`
		})
	}
}

function isValidTimeZone(tz) {
	if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
		throw new Error('Time zones are not available in this environment');
	}

	try {
		Intl.DateTimeFormat(undefined, {
			timeZone: tz
		});
		return true;
	} catch (ex) {
		return false;
	}
}

module.exports = {
	AudioMetaData,
	remove,
	unscreen,
	addSpace,
	sendUrl,
	tinyUrl,
	webSs,
	pdfGen,
	BufferToFile,
	send_menu,
	send_alive,
	isValidTimeZone
};
