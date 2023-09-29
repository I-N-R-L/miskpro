>
const axios = require("axios");
const {
        BASE_URL
} = require('../config');
const mongoose = require("mongoose")
const WcgScheema = new mongoose.Schema({
        id: {
                type: String,
                required: true
        },
        jid: {
                type: String,
                required: true
        },
        active: {
                type: String,
                default: "false"
        },
        start: {
                type: String,
                default: "false"
        },
        sremains: {
                type: String,
                default: "45"
        },
        success: {
                type: String,
                default: "false"
        },
        user: {
                type: String
        },
        letter: {
                type: String
        },
        totalUser: {
                type: String
        },
        runout: {
                type: String,
                default: "false"
        },
        round: {
                type: String,
                default: "1"
        },
        wlength: {
                type: String,
                default: "3"
        },
        lengthWsender: {
                type: String
        },
        outuser: {
                type: String,
                default: "0"
        },
        warns: {
                type: String,
                default: "1"
        },
        total: {
                type: String,
                default: "0"
        },
        word: {
                type: String,
                default: "undefined"
        }
})
const wcg = mongoose.model("wcgScheema", WcgScheema);
const {
        sleep
} = require('../lib');
class WCG {
        constructor(message) {
                this.jid = message.jid;
                this.sender = message.sender;
                this.word = (message.client.body || "").toLowerCase().replace('wcg', '').trim();
                this.group = message.isGroup;
                this.id = message.conn.user.number;
                this.m = message;
                this.possible = message.client.isCreator;
                this.bot = message.isBot;
        }
        getTime() {
                return Date.now()
        }
        async start() {
                if (this.bot) return;
                if (this.word == "start" && !this.possible) return;
                if (this.word == "start" && await this.isGame()) return await this.m.send("_⚠️Another game cannot continue because one game is currently in progress⚠️_");
                if (this.word != "start" && !await this.isGame()) return;
                if (!this.group) return await this.m.send("_word chaine game only works in group_");
                if (!await this.isGame()) {
                        await new wcg({
                                jid: this.jid,
                                id: this.id,
                                user: this.sender,
                                start: "true",
                                letter: this.letter()
                        }).save();
                        await this.m.conn.sendMessage(this.jid, {
                                text: `_@${this.sender.replace(/[^0-9]/g,'')} joined to the game!_`,
                                mentions: [this.sender]
                        });
                        let msg = await this.m.send("*🎮 game starts in 60s*\n```type``` *join* ```to join the game```");
                        await sleep(15000);
                        await this.m.editMessage(this.m.jid, "*🎮 game starts in 45s*\n```type``` *join* ```to join the game```", msg.key);
                        await sleep(15000);
                        msg = await this.m.send("*🎮 game starts in 30s*\n```type``` *join* ```to join the game```");
                        await sleep(15000);
                        await this.m.editMessage(this.m.jid, "*🎮 game starts in 15s*\n```type``` *join* ```to join the game```", msg.key);
                        await sleep(7000);
                        await await this.m.send("*🎮 game starts in 07s*\n```type``` *join* ```to join the game```");
                        await sleep(7000);
                        const {
                                key
                        } = await this.m.send("*🎮 generating game!*");
                        await wcg.find({
                                id: this.id,
                                jid: this.jid
                        }).then(async (u) => {
                                if (u.length >= 2) {
                                        let msg = `
*player: @${u[0].user.replace(/[^0-9]/g,'')}*
*turn: @${u[1].user.replace(/[^0-9]/g,'')}*
*round: 1*
*·* _word must be starts with_ *${u[0].letter}*
*·* _word must been includes_ *${u[0].wlength}* _letters_
*· time remaining: 45 seconds*
*· total players: ${u.length}*`
                                        await this.m.conn.sendMessage(this.jid, {
                                                text: msg,
                                                mentions: [u[0].user, u[1].user]
                                        });
                                         await wcg.updateMany({
                                                id: this.id,
                                                jid: this.jid
                                        }, {
                                                active: "true",
                                                total: u.length.toString()
                                        });
                                        setTimeout(async () => {
                                        let reslt = await this.turn();
                                        if (u[0].user != reslt.user) return;
                                        let next = await this.nextPlayer(reslt.user);
                                        await wcg.updateMany({
                                                jid: this.jid,
                                                id: this.id,
                                                user: reslt.user
                                        }, {
                                                runout: "true"
                                        });
                                        let ext = await this.noUsersRemain();
                                        if (ext) {
                                                let getWord = await this.getGreatest(next);
                                                if (getWord == "undefined") {
                                                        await this.m.send("_🚫The game is terminated as there are no more players to continue the game_");
                                                        return await wcg.deleteMany({
                                                                id: this.id,
                                                                jid: this.jid
                                                        });
                                                } else {
                                                        await this.m.conn.sendMessage(this.jid, {
                                                                text: `_@${next.replace(/[^0-9]/g,'')} won in this game by longest word : *${getWord}* with *(${getWord.length})* letters_`,
                                                                mentions: [next]
                                                        });
                                                        return await wcg.deleteMany({
                                                                id: this.id,
                                                                jid: this.jid
                                                        });
                                                }
                                        } else {
                                                let {
                                                        time,
                                                        length,
                                                        user,
                                                        warn,
                                                        round,
                                                        remains,
                                                        total
                                                } = await this.turn();
                                                let next = await this.nextPlayer(user);
                                                let letter = this.letter();
                                                await wcg.updateOne({
                                                        id: this.id,
                                                        jid: this.jid,
                                                        active: "true",
                                                        user: user,
                                                        success: "false",
                                                }, {
                                                        letter: letter
                                                });
                                                await this.m.conn.sendMessage(this.jid, {
                                                        text: `
*player:  @${user.replace(/[^0-9]/g, "")}*
*turn: @${next.replace(/[^0-9]/g,'')}*
*round: ${round}*
*·* _word must be starts with_ *${letter}*
*·* _word must been includes_ *${length}* _letters_
*· time remaining: ${time} seconds*
*· total players: ${remains+'/'+total}*`,
                                                        mentions: [user, next]
                                                });
                                        }
                                }, 45000);
                                } else {
                                        await this.m.editMessage(this.jid, "_The game is over as there are no more players to continue🚫_", key);
                                        return await wcg.deleteMany({
                                                id: this.id,
                                                jid: this.jid
                                        });
                                }
                        });
                } else {
                        return this.run_game()
                }
        }
        async run_game() {
                try {
                        if (!await this.started() && await this.isGame() && this.word == "join") {
                                if (!await this.isAlready()) {
                                        await new wcg({
                                                jid: this.jid,
                                                id: this.id,
                                                start: "true",
                                                user: this.sender,
                                                letter: this.letter(),
                                                total: await wcg.find({
                                                        jid: this.jid,
                                                        id: this.id
                                                }).length
                                        }).save();
                                        return await this.m.conn.sendMessage(this.jid, {
                                                text: `_@${this.sender.replace(/[^0-9]/g,'')} joined to the game!_`,
                                                mentions: [this.sender]
                                        });
                                } else {
                                        return await this.m.conn.sendMessage(this.jid, {
                                                text: `_@${this.sender.replace(/[^0-9]/g,'')} already joined to the game!_`,
                                                mentions: [this.sender]
                                        });
                                }
                        } else if (await this.started()) {
                                let {
                                        time,
                                        length,
                                        user,
                                        warn,
                                        round,
                                        letter,
                                        total
                                } = await this.turn();
                                setTimeout(async () => {
                                        let reslt = await this.turn();
                                        if (user != reslt.user) return;
                                        let next = await this.nextPlayer(user);
                                        await wcg.updateMany({
                                                jid: this.jid,
                                                id: this.id,
                                                user: user
                                        }, {
                                                runout: "true"
                                        });
                                        let ext = await this.noUsersRemain();
                                        if (ext) {
                                                let getWord = await this.getGreatest(next);
                                                if (getWord == "undefined") {
                                                        await this.m.send("_🚫The game is terminated as there are no more players to continue the game_");
                                                        return await wcg.deleteMany({
                                                                id: this.id,
                                                                jid: this.jid
                                                        });
                                                } else {
                                                        await this.m.conn.sendMessage(this.jid, {
                                                                text: `_@${next.replace(/[^0-9]/g,'')} won in this game by longest word : *${getWord}* with *(${getWord.length})* letters_`,
                                                                mentions: [next]
                                                        });
                                                        return await wcg.deleteMany({
                                                                id: this.id,
                                                                jid: this.jid
                                                        });
                                                }
                                        } else {
                                                let {
                                                        time,
                                                        length,
                                                        user,
                                                        warn,
                                                        round,
                                                        remains,
                                                        total
                                                } = await this.turn();
                                                let next = await this.nextPlayer(user);
                                                let letter = this.letter();
                                                await wcg.updateOne({
                                                        id: this.id,
                                                        jid: this.jid,
                                                        active: "true",
                                                        user: user,
                                                        success: "false",
                                                }, {
                                                        letter: letter
                                                });
                                                await this.m.conn.sendMessage(this.jid, {
                                                        text: `
*player:  @${user.replace(/[^0-9]/g, "")}*
*turn: @${next.replace(/[^0-9]/g,'')}*
*round: ${round}*
*·* _word must be starts with_ *${letter}*
*·* _word must been includes_ *${length}* _letters_
*· time remaining: ${time} seconds*
*· total players: ${remains+'/'+total}*`,
                                                        mentions: [user, next]
                                                });
                                        }
                                }, parseInt(time + "000"));
                                if (user != this.sender) return;
                                if (warn >= "3") {
                                        await this.m.conn.sendMessage(this.jid, {
                                                text: `_@${user.replace(/[^0-9]/g,'')} ren out from this game_`,
                                                mentions: [user]
                                        });
                                        let next = await this.nextPlayer(user);
                                        await wcg.updateMany({
                                                jid: this.jid,
                                                id: this.id,
                                                user: user
                                        }, {
                                                runout: "true"
                                        });
                                        let ext = await this.noUsersRemain();
                                        if (ext) {
                                                let getWord = await this.getGreatest(next);
                                                if (getWord == "undefined") {
                                                        await this.m.send("_🚫The game is terminated as there are no more players to continue the game_");
                                                        return await wcg.deleteMany({
                                                                id: this.id,
                                                                jid: this.jid
                                                        });
                                                } else {
                                                        await this.m.conn.sendMessage(this.jid, {
                                                                text: `_@${next.replace(/[^0-9]/g,'')} won in this game by longest word : *${getWord}* with *(${getWord.length})* letters_`,
                                                                mentions: [next]
                                                        });
                                                        return await wcg.deleteMany({
                                                                id: this.id,
                                                                jid: this.jid
                                                        });
                                                }
                                        } else {
                                                let {
                                                        time,
                                                        length,
                                                        user,
                                                        warn,
                                                        round,
                                                        remains,
                                                        total
                                                } = await this.turn();
                                                let next = await this.nextPlayer(user);
                                                let letter = this.letter();
                                                await wcg.updateOne({
                                                        id: this.id,
                                                        jid: this.jid,
                                                        active: "true",
                                                        user: user,
                                                        success: "false",
                                                }, {
                                                        letter: letter
                                                });
                                                await this.m.conn.sendMessage(this.jid, {
                                                        text: `
*player:  @${user.replace(/[^0-9]/g, "")}*
*turn: @${next.replace(/[^0-9]/g,'')}*
*round: ${round}*
*·* _word must be starts with_ *${letter}*
*·* _word must been includes_ *${length}* _letters_
*· time remaining: ${time} seconds*
*· total players: ${remains+'/'+total}*`,
                                                        mentions: [user, next]
                                                });
                                        }
                                } else if (!this.word.startsWith(letter)) {
                                        await wcg.updateOne({
                                                jid: this.jid,
                                                id: this.id,
                                                success: "false",
                                                user: this.sender
                                        }, {
                                                warns: (parseInt(warn) + 1).toString()
                                        });
                                        await this.m.send(`_given word must be start with *${letter}* letter!_`);
                                } else if (this.word.length < length) {
                                        await wcg.updateOne({
                                                jid: this.jid,
                                                id: this.id,
                                                success: "false",
                                                user: this.sender
                                        }, {
                                                warns: (parseInt(warn) + 1).toString()
                                        });
                                        await this.m.send(`_The given word must have *${length}* or more letters!_`);
                                } else if (await this.isalreadyUsed()) {
                                        await wcg.updateOne({
                                                jid: this.jid,
                                                id: this.id,
                                                success: "false",
                                                user: this.sender
                                        }, {
                                                warns: (parseInt(warn) + 1).toString()
                                        });
                                        await this.m.send(`_given word is already used!_`);
                                } else if (!await this.checkWord()) {
                                        await wcg.updateOne({
                                                jid: this.jid,
                                                id: this.id,
                                                success: "false",
                                                user: this.sender
                                        }, {
                                                warns: (parseInt(warn) + 1).toString()
                                        });
                                        await this.m.send(`_given word is not in my word list!_`);
                                } else {
                                        await wcg.updateMany({
                                                jid: this.jid,
                                                id: this.id,
                                                user: this.sender,
                                                success: "false",
                                        }, {
                                                warns: "0",
                                                success: "true",
                                                word: this.word
                                        });
                                        await this.repeat(this.sender)
                                        let {
                                                time,
                                                length,
                                                user,
                                                warn,
                                                round,
                                                letter,
                                                remains,
                                                total
                                        } = await this.turn();
                                        let next = await this.nextPlayer(user);
                                        await wcg.updateOne({
                                                id: this.id,
                                                jid: this.jid,
                                                active: "true",
                                                user: user,
                                                success: "false",
                                        }, {
                                                letter: this.word.split("").pop()
                                        });
                                        await this.m.conn.sendMessage(this.jid, {
                                                text: `
*player:  @${user.replace(/[^0-9]/g, "")}*
*turn: @${next.replace(/[^0-9]/g,'')}*
*round: ${round}*
*·* _word must be starts with_ *${this.word.split("").pop()}*
*·* _word must been includes_ *${length}* _letters_
*· time remaining: ${time} seconds*
*· total players: ${remains+'/'+total}*`,
                                                mentions: [user, next]
                                        });
                                        setTimeout(async () => {
                                                let reslt = await this.turn();
                                                if (user != reslt.user) return;
                                                await this.m.conn.sendMessage(this.jid, {
                                                text: `_@${user.replace(/[^0-9]/g,'')} ren out from this game_`,
                                                mentions: [user]
                                        });
                                                let next = await this.nextPlayer(user);
                                                await wcg.updateMany({
                                                        jid: this.jid,
                                                        id: this.id,
                                                        user: user
                                                }, {
                                                        runout: "true"
                                                });
                                                let ext = await this.noUsersRemain();
                                                if (ext) {
                                                        let getWord = await this.getGreatest(next);
                                                        if (getWord == "undefined") {
                                                                await this.m.send("_🚫The game is terminated as there are no more players to continue the game_");
                                                                return await wcg.deleteMany({
                                                                        id: this.id,
                                                                        jid: this.jid
                                                                });
                                                        } else {
                                                                await this.m.conn.sendMessage(this.jid, {
                                                                        text: `_@${next.replace(/[^0-9]/g,'')} won in this game by longest word : *${getWord}* with *(${getWord.length})* letters_`,
                                                                        mentions: [next]
                                                                });
                                                                return await wcg.deleteMany({
                                                                        id: this.id,
                                                                        jid: this.jid
                                                                });
                                                        }
                                                } else {
                                                        let {
                                                                time,
                                                                length,
                                                                user,
                                                                warn,
                                                                round,
                                                                remains,
                                                                total
                                                        } = await this.turn();
                                                        let next = await this.nextPlayer(user);
                                                        let letter = this.letter();
                                                        await wcg.updateOne({
                                                                id: this.id,
                                                                jid: this.jid,
                                                                active: "true",
                                                                user: user,
                                                                success: "false",
                                                        }, {
                                                                letter: letter
                                                        });
                                                        await this.m.conn.sendMessage(this.jid, {
                                                                text: `
*player:  @${user.replace(/[^0-9]/g, "")}*
*turn: @${next.replace(/[^0-9]/g,'')}*
*round: ${round}*
*·* _word must be starts with_ *${letter}*
*·* _word must been includes_ *${length}* _letters_
*· time remaining: ${time} seconds*
*· total players: ${remains+'/'+total}*`,
                                                                mentions: [user, next]
                                                        });
                                                }
                                        }, parseInt(time + "000"));
                                }
                        }
                } catch (e) {
                        return await this.m.send(`word list cracked our\n-·—_-_-_¡_≠ inavlid keys found!`);
                }
        }
        async isGame() {
                if (!this.group) return false;
                let md = false;
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        start: "true"
                }).then(i => {
                        if (i[0]) md = true
                });
                return md
        }
        async isAlready() {
                if (!this.group) return false;
                let md = false;
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        user: this.sender,
                        start: "true"
                }).then(i => {
                        if (i[0]) md = true
                });
                return md
        }
        async turn() {
                if (!this.group) return false;
                let md = {};
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        active: "true",
                        runout: "false"
                }).then(users => {
                        let arra = [];
                        users.map(u => {
                                if (!arra.includes(u.user)) {
                                        arra.push(u.user);
                                }
                        });
                        for (let i = 0; i < users.length; i++) {
                                if (users[i].success == "false") {
                                        let {
                                                sremains,
                                                wlength,
                                                letter,
                                                user,
                                                warns,
                                                round,
                                                total
                                        } = users[i];
                                        md.time = sremains;
                                        md.remains = arra.length;
                                        md.length = wlength;
                                        md.letter = letter;
                                        md.user = user;
                                        md.warn = warns;
                                        md.round = round;
                                        md.total = total;
                                        break;
                                }
                        }
                });
                return md;
        }
        async noUsersRemain() {
                let total,
                        arra = [];
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        runout: "false"
                }).then(users => {
                        users.map(u => {
                                if (!arra.includes(u.user)) {
                                        arra.push(u.user);
                                }
                        });
                })
                total = arra.length;
                return ((total == 1) || (total < 1))
        }
        async isalreadyUsed() {
                if (!this.group) return false;
                let used = false;
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        runout: "false"
                }).then(async (users) => {
                        for (let i = 0; i < users.length; i++) {
                                if (users[i]?.word == this.word) {
                                        used = true;
                                        break;
                                }
                        }
                })
                return await used;
        }
        async getGreatest(user) {
                let longestWord, ae = [];
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        user
                }).then(async (rd) => {
                        rd.map(a => ae.push(a.word));
                        longestWord = ae.sort(function(a, b) {
                                if (a != "undefined") {
                                        return b.length - a.length;
                                }
                        });
                });
                return longestWord[0]
        }
        async nextPlayer(user) {
                let player;
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        runout: "false"
                }).then(async (rd) => {
                        for (let i = 0; i < rd.length; i++) {
                                if (rd[i].user == user) {
                                        player = rd[i + 1]?.user ? rd[i + 1]?.user : rd[0]?.user;
                                        break;
                                }
                        }
                });
                return player;
        }
        async repeat(user) {
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        user: user
                }).then(async (rd) => {
                        let get_last;
                        for (let i = 0; i < rd.length; i++) {
                                if (rd[i].success == "true" && rd[i].runout == "false") {
                                        get_last = rd[i];
                                }
                        }
                        let round = parseInt(get_last.round) + 1
                        await new wcg({
                                id: this.id,
                                jid: this.jid,
                                user: user,
                                round: round.toString(),
                                start: "true",
                                active: "true",
                                success: "false",
                                total: get_last.total,
                                sremains: round <= 2 ? 45 : round <= 4 ? 40 : round <= 6 ? 35 : round <= 8 ? 30 : round <= 9 ? 25 : 20,
                                wlength: round <= 2 ? 3 : round <= 4 ? 5 : round <= 6 ? 6 : round <= 8 ? 7 : round <= 9 ? 8 : 9
                        }).save();
                });
        }
        isEven(num) {
                return (num % 2) == 0
        }
        async started() {
                if (!this.group) return false;
                let md = false;
                await wcg.find({
                        id: this.id,
                        jid: this.jid,
                        active: "true"
                }).then(i => {
                        if (i[0]) md = true
                });
                return md
        }
        letter() {
                const ar = "abcdefghijklmnopqrstuvwxyz";
                return ar[Math.floor(Math.random() * ar.length)]
        }
        async checkWord() {
                let {
                        data
                } = await axios(BASE_URL + 'api/validword?word=' + this.word);
                return data.result;
        }
}
inrl({
        on: "text",
        pattern: "wcg"
}, async (m, match) => {
        let gen_OR_exist = new WCG(m);
        gen_OR_exist.start();
});
