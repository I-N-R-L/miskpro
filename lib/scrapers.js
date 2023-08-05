const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')
const cheerio = require('cheerio')
const {
	spawn
} = require('child_process')
let BodyForm = require('form-data')
let {
	fromBuffer
} = require('file-type')

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
	return new Promise(async (resolve, reject) => {
		try {
			let tmp = path.join(__dirname, './', +new Date + '.' + ext)
			let out = tmp + '.' + ext2
			await fs.promises.writeFile(tmp, buffer)
			spawn('ffmpeg', ['-y', '-i', tmp, ...args,
				out
			]).on('error', reject).on('close', async (code) => {
				try {
					await fs.promises.unlink(tmp)
					if (code !== 0) return reject(code)
					resolve(await fs.promises.readFile(out))
					await fs.promises.unlink(out)
				} catch (e) {
					reject(e)
				}
			})
		} catch (e) {
			reject(e)
		}
	})
}

function toAudio(buffer, ext) {
	return ffmpeg(buffer, ['-vn', '-ac', '2', '-b:a', '128k', '-ar', '44100', '-f', 'mp3'], ext, 'mp3')
}

function toPTT(buffer, ext) {
	return ffmpeg(buffer, ['-vn', '-c:a', 'libopus', '-b:a', '128k', '-vbr', 'on', '-compression_level', '10'], ext, 'opus')
}

function toVideo(buffer, ext) {
	return ffmpeg(buffer, ['-c:v', 'libx264', '-c:a', 'aac', '-ab', '128k', '-ar', '44100', '-crf', '32', '-preset', 'slow'], ext, 'mp4')
}
async function getJson(url, options) {
	try {
		options ? options : {};
		const res = await axios({
			method: "GET",
			url: url,
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
			},
			...options,
		});
		return res.data;
	} catch (err) {
		return err;
	}
}
const isIgUrl = (url) => {
	/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim.test(
		url
	);
}
const isUrl = (url) => {
	return new RegExp(
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
		"gi"
	).test(url);
}
const getUrl = (url) => {
	return url.match(
		new RegExp(
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
			"gi"
		)
	);
}

function isNumber(num) {
	const int = parseInt(num);
	return typeof int === "number" && !isNaN(int);
}
module.exports = {
	ffmpeg,
	toAudio,
	toPTT,
	toVideo,
	getJson,
	isIgUrl,
	isUrl,
	getUrl,
	isNumber
};
