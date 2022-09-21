const simpleGit = require('simple-git');
const git = simpleGit();
const bots = require('../lib/perfix');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
bots.inrl({pattern: ['update'], fromMe: true, desc: "to update bot", sucReact: "⚒️",  category: ["all"]}, (async (message, client) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await client.sendMessage(message.from, { text :" you got no update"},{ quoted: message })
    } else {
        var degisiklikler = "new update";
        commits['all'].map(
            (commit) => {
                degisiklikler += '⚙️ [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
        await client.sendMessage(message.from, {text : degisiklikler },{ quoted: message })
    }
}));

bots.inrl({pattern: ['updatenow'], fromMe: true, desc: "updating you bot", sucReact: "⚒️",  category: ["all"]}, (async (message, client) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await client.sendMessage(message.from, { text :"already up-to-date"},{ quoted: message })
    } else {
        var guncelleme = await message.reply("updating");
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await client.sendMessage(message.from, { text :"invalid data frome heroku " },{ quoted: message })
                await new Promise(r => setTimeout(r, 1000));
                return await client.sendMessage(message.from, { text :"updated"},{ quoted: message })
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await client.sendMessage(message.from, { text :"bot compleatly up-to-date"},{ quoted: message })

        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await client.sendMessage(message.from, { text :"updation is not possble now due to an error"},{ quoted: message })
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await client.sendMessage(message.from, { text : " undefined error "+err},{ quoted: message })
                }
            }));
            await guncelleme.delete();
        }
    }
}));
