const axios = require('axios')
const cheerio = require('cheerio')


function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function aiovideodl(link) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://aiovideodl.ml/',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
            }
        }).then((src) => {
            let a = cheerio.load(src.data)
            let token = a('#token').attr('value')
            axios({
                url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
                method: 'POST',
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
                },
                data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
            }).then(({ data }) => {
                resolve(data)
            })
        })
    })
}

function umma(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let image = []
            $('#article-content > div').find('img').each(function (a, b) {
                image.push($(b).attr('src')) 
            })
            let hasil = {
                title: $('#wrap > div.content-container.font-6-16 > h1').text().trim(),
                author: {
                    name: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw').text().trim(),
                    profilePic: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo').attr('src')
                },
                caption: $('#article-content > div > p').text().trim(),
                media: $('#article-content > div > iframe').attr('src') ? [$('#article-content > div > iframe').attr('src')] : image,
                type: $('#article-content > div > iframe').attr('src') ? 'video' : 'image',
                like: $('#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12').text(),
            }
            resolve(hasil)
        })
    })
}

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://meloboom.com/en/search/'+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
                hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
            })
            resolve(hasil)
        })
    })
}
/*
module.exports = new StyleText();
function StyleText() {
  this.tools = {
    flip: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = [],
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);
          if (
            i > 0 &&
            (ch == "\u0324" ||
              ch == "\u0317" ||
              ch == "\u0316" ||
              ch == "\u032e")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          ret.push(ch);
        }

        return ret.reverse().join("");
      },

      decode: function (text) {
        var ret = [],
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);
          if (
            i > 0 &&
            (ch == "\u0324" ||
              ch == "\u0317" ||
              ch == "\u0316" ||
              ch == "\u032e")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          ret.push(ch);
        }
        return ret.reverse().join("");
      },

      map: {
        a: "\u0250",
        b: "q",
        c: "\u0254",
        d: "p",
        e: "\u01DD",
        f: "\u025F",
        g: "\u0253",
        h: "\u0265",
        i: "\u0131",
        j: "\u027E",
        k: "\u029E",
        l: "\u006C",
        m: "\u026F",
        n: "u",
        r: "\u0279",
        t: "\u0287",
        v: "\u028C",
        w: "\u028D",
        y: "\u028E",
        A: "\u2200",
        B: "ᙠ",
        C: "\u0186",
        D: "ᗡ",
        E: "\u018e",
        F: "\u2132",
        G: "\u2141",
        J: "\u017f",
        K: "\u22CA",
        L: "\u02e5",
        M: "W",
        P: "\u0500",
        Q: "\u038C",
        R: "\u1D1A",
        T: "\u22a5",
        U: "\u2229",
        V: "\u039B",
        Y: "\u2144",
        1: "\u21c2",
        2: "\u1105",
        3: "\u0190",
        4: "\u3123",
        5: "\u078e",
        6: "9",
        7: "\u3125",
        "&": "\u214b",
        ".": "\u02D9",
        '"': "\u201e",
        ";": "\u061b",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "\u00BF",
        "!": "\u00A1",
        "'": ",",
        "<": ">",
        "\u203E": "_",
        "\u00AF": "_",
        "\u203F": "\u2040",
        "\u2045": "\u2046",
        "\u2234": "\u2235",
        "\r": "\n",
        ß: "ᙠ",

        "\u0308": "\u0324",
        ä: "ɐ" + "\u0324",
        ö: "o" + "\u0324",
        ü: "n" + "\u0324",
        Ä: "\u2200" + "\u0324",
        Ö: "O" + "\u0324",
        Ü: "\u2229" + "\u0324",

        "´": " \u0317",
        é: "\u01DD" + "\u0317",
        á: "\u0250" + "\u0317",
        ó: "o" + "\u0317",
        ú: "n" + "\u0317",
        É: "\u018e" + "\u0317",
        Á: "\u2200" + "\u0317",
        Ó: "O" + "\u0317",
        Ú: "\u2229" + "\u0317",

        "`": " \u0316",
        è: "\u01DD" + "\u0316",
        à: "\u0250" + "\u0316",
        ò: "o" + "\u0316",
        ù: "n" + "\u0316",
        È: "\u018e" + "\u0316",
        À: "\u2200" + "\u0316",
        Ò: "O" + "\u0316",
        Ù: "\u2229" + "\u0316",

        "^": " \u032E",
        ê: "\u01DD" + "\u032e",
        â: "\u0250" + "\u032e",
        ô: "o" + "\u032e",
        û: "n" + "\u032e",
        Ê: "\u018e" + "\u032e",
        Â: "\u2200" + "\u032e",
        Ô: "O" + "\u032e",
        Û: "\u2229" + "\u032e",
      },
    },

    mirror: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = [],
          ch,
          newLines = [];

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);

          if (
            i > 0 &&
            (ch == "\u0308" ||
              ch == "\u0300" ||
              ch == "\u0301" ||
              ch == "\u0302")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          if (ch == "\n") {
            newLines.push(ret.reverse().join(""));
            ret = [];
          } else {
            ret.push(ch);
          }
        }
        newLines.push(ret.reverse().join(""));
        return newLines.join("\n");
      },

      decode: function (text) {
        var ret = [],
          ch,
          newLines = [];

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);

          if (
            i > 0 &&
            (ch == "\u0308" ||
              ch == "\u0300" ||
              ch == "\u0301" ||
              ch == "\u0302")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          if (ch == "\n") {
            newLines.push(ret.reverse().join(""));
            ret = [];
          } else {
            ret.push(ch);
          }
        }

        newLines.push(ret.reverse().join(""));
        return newLines.join("\n");
      },

      map: {
        a: "ɒ",
        b: "d",
        c: "ɔ",
        e: "ɘ",
        f: "Ꮈ",
        g: "ǫ",
        h: "ʜ",
        j: "ꞁ",
        k: "ʞ",
        l: "|",
        n: "ᴎ",
        p: "q",
        r: "ɿ",
        s: "ꙅ",
        t: "ƚ",
        y: "ʏ",
        z: "ƹ",
        B: "ᙠ",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "ꟻ",
        G: "Ꭾ",
        J: "Ⴑ",
        K: "⋊",
        L: "⅃",
        N: "Ͷ",
        P: "ꟼ",
        Q: "Ọ",
        R: "Я",
        S: "Ꙅ",
        Z: "Ƹ",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        "&": "",
        ";": "",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "⸮",
        "<": ">",

        ä: "ɒ" + "\u0308",
        ß: "ᙠ",

        "´": "`",
        é: "ɘ" + "\u0300",
        á: "ɒ" + "\u0300",
        ó: "ò",
        ú: "ù",
        É: "Ǝ" + "\u0300",
        Á: "À",
        Ó: "Ò",
        Ú: "Ù",

        "`": "´",
        è: "ɘ" + "\u0301",
        à: "ɒ" + "\u0301",
        È: "Ǝ" + "\u0301",

        ê: "ɘ" + "\u0302",
        â: "ɒ" + "\u0302",
        Ê: "Ǝ" + "\u0302",

        Ø: "ᴓ",
        ø: "ᴓ",
      },
    },

    creepify: {
      init: function () {
        for (var i = 768; i <= 789; i++) {
          this.diacriticsTop.push(String.fromCharCode(i));
        }

        for (var i = 790; i <= 819; i++) {
          if (i != 794 && i != 795) {
            this.diacriticsBottom.push(String.fromCharCode(i));
          }
        }
        this.diacriticsTop.push(String.fromCharCode(794));
        this.diacriticsTop.push(String.fromCharCode(795));

        for (var i = 820; i <= 824; i++) {
          this.diacriticsMiddle.push(String.fromCharCode(i));
        }

        for (var i = 825; i <= 828; i++) {
          this.diacriticsBottom.push(String.fromCharCode(i));
        }

        for (var i = 829; i <= 836; i++) {
          this.diacriticsTop.push(String.fromCharCode(i));
        }
        this.diacriticsTop.push(String.fromCharCode(836));
        this.diacriticsBottom.push(String.fromCharCode(837));
        this.diacriticsTop.push(String.fromCharCode(838));
        this.diacriticsBottom.push(String.fromCharCode(839));
        this.diacriticsBottom.push(String.fromCharCode(840));
        this.diacriticsBottom.push(String.fromCharCode(841));
        this.diacriticsTop.push(String.fromCharCode(842));
        this.diacriticsTop.push(String.fromCharCode(843));
        this.diacriticsTop.push(String.fromCharCode(844));
        this.diacriticsBottom.push(String.fromCharCode(845));
        this.diacriticsBottom.push(String.fromCharCode(846));
        this.diacriticsTop.push(String.fromCharCode(848));
        this.diacriticsTop.push(String.fromCharCode(849));
        this.diacriticsTop.push(String.fromCharCode(850));
        this.diacriticsBottom.push(String.fromCharCode(851));
        this.diacriticsBottom.push(String.fromCharCode(852));
        this.diacriticsBottom.push(String.fromCharCode(853));
        this.diacriticsBottom.push(String.fromCharCode(854));
        this.diacriticsTop.push(String.fromCharCode(855));
        this.diacriticsTop.push(String.fromCharCode(856));
        this.diacriticsBottom.push(String.fromCharCode(857));
        this.diacriticsBottom.push(String.fromCharCode(858));
        this.diacriticsTop.push(String.fromCharCode(859));
        this.diacriticsBottom.push(String.fromCharCode(860));
        this.diacriticsTop.push(String.fromCharCode(861));
        this.diacriticsTop.push(String.fromCharCode(861));
        this.diacriticsBottom.push(String.fromCharCode(863));
        this.diacriticsTop.push(String.fromCharCode(864));
        this.diacriticsTop.push(String.fromCharCode(865));
      },

      encode: function (text) {
        var newText = "",
          newChar;
        for (i in text) {
          newChar = text[i];
          if (this.options.middle) {
            newChar +=
              this.diacriticsMiddle[
                Math.floor(Math.random() * this.diacriticsMiddle.length)
              ];
          }

          if (this.options.top) {
            var diacriticsTopLength = this.diacriticsTop.length - 1;
            for (
              var count = 0,
                len =
                  this.options.maxHeight -
                  Math.random() *
                    ((this.options.randomization / 100) *
                      this.options.maxHeight);
              count < len;
              count++
            ) {
              newChar +=
                this.diacriticsTop[
                  Math.floor(Math.random() * diacriticsTopLength)
                ];
            }
          }

          if (this.options.bottom) {
            var diacriticsBottomLength = this.diacriticsBottom.length - 1;
            for (
              var count = 0,
                len =
                  this.options.maxHeight -
                  Math.random() *
                    ((this.options.randomization / 100) *
                      this.options.maxHeight);
              count < len;
              count++
            ) {
              newChar +=
                this.diacriticsBottom[
                  Math.floor(Math.random() * diacriticsBottomLength)
                ];
            }
          }

          newText += newChar;
        }
        return newText;
      },

      decode: function (text) {
        var newText = "",
          charCode;

        for (i in text) {
          charCode = text[i].charCodeAt(0);
          if (charCode < 768 || charCode > 865) {
            newText += text[i];
          }
        }
        return newText;
      },

      diacriticsTop: [],
      diacriticsMiddle: [],
      diacriticsBottom: [],

      options: {
        top: true,
        middle: true,
        bottom: true,
        maxHeight: 15,
        randomization: 100,
      },
    },

    bubbles: {
      init: function () {
        for (var i = 49; i <= 57; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9263);
        }
        this.map["0"] = "\u24ea";

        for (var i = 65; i <= 90; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9333);
        }

        for (var i = 97; i <= 122; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9327);
        }

        for (i in this.map) {
          this.mapInverse[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = "",
          ch,
          first = true;

        for (i in text) {
          ch = this.map[text[i]];

          if (typeof ch == "undefined") {
            if (text[i].charCodeAt(0) >= 33) {
              ch = text[i] + String.fromCharCode(8413);
              if (!first) {
                ch =
                  String.fromCharCode(8239) +
                  String.fromCharCode(160) +
                  String.fromCharCode(160) +
                  String.fromCharCode(8239) +
                  ch;
              }
            } else {
              ch = text[i];
            }
          }
          ret += ch;
          first = ch == "\n";
        }
        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch,
          newRet = "";

        for (i in text) {
          ch = this.mapInverse[text[i]];
          ret += typeof ch == "undefined" ? text[i] : ch;
        }

        for (i in ret) {
          ch = ret[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8413) {
            newRet += ret[i];
          }
        }

        return newRet;
      },

      map: {},
      mapInverse: {},
    },

    squares: {
      init: function () {},

      encode: function (text) {
        var ret = "",
          ch,
          first = true;

        for (i in text) {
          if (text[i].charCodeAt(0) >= 33) {
            ch = text[i] + String.fromCharCode(8414);
            if (!first) {
              ch =
                String.fromCharCode(8239) +
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                String.fromCharCode(8239) +
                ch;
            }
          } else {
            ch = text[i];
          }

          ret += ch;
          first = ch == "\n";
        }
        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (i in text) {
          ch = text[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8414) {
            ret += text[i];
          }
        }

        return ret;
      },
    },

    // Same as squares, just round.
    roundsquares: {
      init: function () {},

      encode: function (text) {
        var ret = "",
          ch,
          first = true;

        for (i in text) {
          if (text[i].charCodeAt(0) >= 33) {
            ch = text[i] + String.fromCharCode(8419);
            if (!first) {
              ch =
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                ch;
            }
          } else {
            ch = text[i];
          }

          ret += ch;
          first = ch == "\n";
        }
        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (i in text) {
          ch = text[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8419) {
            ret += text[i];
          }
        }

        return ret;
      },
    },

    bent: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = "",
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }

        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }
        return ret;
      },

      map: {
        a: "ą",
        b: "ҍ",
        c: "ç",
        d: "ժ",
        e: "ҽ",
        f: "ƒ",
        g: "ց",
        h: "հ",
        i: "ì",
        j: "ʝ",
        k: "ҟ",
        l: "Ӏ",
        m: "ʍ",
        n: "ղ",
        o: "օ",
        p: "ք",
        q: "զ",
        r: "ɾ",
        s: "ʂ",
        t: "է",
        u: "մ",
        v: "ѵ",
        w: "ա",
        x: "×",
        y: "վ",
        z: "Հ",
        A: "Ⱥ",
        B: "β",
        C: "↻",
        D: "Ꭰ",
        E: "Ɛ",
        F: "Ƒ",
        G: "Ɠ",
        H: "Ƕ",
        I: "į",
        J: "ل",
        K: "Ҡ",
        L: "Ꝉ",
        M: "Ɱ",
        N: "ហ",
        O: "ට",
        P: "φ",
        Q: "Ҩ",
        R: "འ",
        S: "Ϛ",
        T: "Ͳ",
        U: "Ա",
        V: "Ỽ",
        W: "చ",
        X: "ჯ",
        Y: "Ӌ",
        Z: "ɀ",
        0: "⊘",
        1: "������",
        2: "ϩ",
        3: "Ӡ",
        4: "५",
        5: "Ƽ",
        6: "Ϭ",
        7: "7",
        8: "������",
        9: "९",
        "&": "⅋",
        "(": "{",
        ")": "}",
        "{": "(",
        "}": ")",

        ä: "ą" + "\u0308",
        ö: "օ" + "\u0308",
        ü: "մ" + "\u0308",
        Ä: "Ⱥ" + "\u0308",
        Ö: "ට" + "\u0308",
        Ü: "Ա" + "\u0308",

        é: "ҽ" + "\u0301",
        á: "ą" + "\u0301",
        ó: "օ" + "\u0301",
        ú: "մ" + "\u0301",
        É: "Ɛ" + "\u0301",
        Á: "Ⱥ" + "\u0301",
        Ó: "ට" + "\u0301",
        Ú: "Ա" + "\u0301",

        è: "ҽ" + "\u0300",
        à: "ą" + "\u0300",
        ò: "օ" + "\u0300",
        ù: "մ" + "\u0300",
        È: "Ɛ" + "\u0300",
        À: "Ⱥ" + "\u0300",
        Ò: "ට" + "\u0300",
        Ù: "Ա" + "\u0300",

        ê: "ҽ" + "\u0302",
        â: "ą" + "\u0302",
        ô: "օ" + "\u0302",
        û: "մ" + "\u0302",
        Ê: "Ɛ" + "\u0302",
        Â: "Ⱥ" + "\u0302",
        Ô: "ට" + "\u0302",
        Û: "Ա" + "\u0302",
      },
    },

    tiny: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = "",
          ch;
        text = text.toUpperCase();
        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }

        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }
        return ret;
      },

      map: {
        A: "ᴀ",
        B: "ʙ",
        C: "ᴄ",
        D: "ᴅ",
        E: "ᴇ",
        F: "ꜰ",
        G: "ɢ",
        H: "ʜ",
        I: "ɪ",
        J: "ᴊ",
        K: "ᴋ",
        L: "ʟ",
        M: "ᴍ",
        N: "ɴ",
        O: "ᴏ",
        P: "ᴘ",
        Q: "Q",
        R: "ʀ",
        S: "ꜱ",
        T: "ᴛ",
        U: "ᴜ",
        V: "ᴠ",
        W: "ᴡ",
        X: "x",
        Y: "ʏ",
        Z: "ᴢ",
      },
    },
  };

  for (i in this.tools) {
    this.tools[i].init();
  }

  this.getHTML = function (text) {
    var html = "",
      ch,
      lastSpaceWasNonBreaking = true,
      highSurrogate = 0,
      codepoint = 0;

    for (var i = 0, len = text.length; i < len; i++) {
      ch = text.charCodeAt(i);

      if (ch == 10 || ch == 13) {
        html += "<br>\n";
        lastSpaceWasNonBreaking = true;
      } else if (ch == 32) {
        if (lastSpaceWasNonBreaking) {
          html += " ";
          lastSpaceWasNonBreaking = false;
        } else {
          html += "&nbsp;";
          lastSpaceWasNonBreaking = true;
        }
      } else {
        if (ch >= 0xd800 && ch <= 0xdbff) {
          highSurrogate = ch;
          codepoint = 0;
        } else if (highSurrogate > 0) {
          if (ch >= 0xdc00 && ch <= 0xdfff) {
            codepoint =
              (highSurrogate - 0xd800) * 1024 + (ch - 0xdc00) + 0x10000;
          }
          highSurrogate = 0;
        } else {
          codepoint = ch;
        }

        if (codepoint != 0) {
          html += "&#x" + codepoint.toString(16) + ";";
          lastSpaceWasNonBreaking = true;
        }
      }
    }

    return html;
  };
}
*/
module.exports = { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone }
