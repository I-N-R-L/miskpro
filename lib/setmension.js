const Config = require('../config');
let mP3 = Config.MENSION.MENSION_AUDIO;
let jPg = Config.MENSION.MENSION_IMG;
let { mensionMp3, mensionImg } = require('../media/mesion/mp3');
let imag = mensionImg(jPg);
let audio = mensionMp3(mP3);
