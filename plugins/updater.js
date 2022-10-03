const simpleGit = require('simple-git');
const git = simpleGit();
const { inrl }= require('../lib/');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })


inrl({ pattern: ['update'], desc: "to create ff logo",sucReact: "⚒️",  category: ["all"]}, (async (message, client) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await client.sendMessage( message.from,{ text :"already-up-to-date"},{ quoted: message })
    } else {
        var inrlbotmd = "have some updates";
                commits['all'].map(
                    (commit) => {
                        inrlbotmd += '│➩ [' + commit.date.substring(0, 10) + '] ➠  *' + commit.message + '*   ↱ ' + commit.author_name + ' ↲\n';
                    }
                );
        
               await client.sendMessage( message.from,{ text :
            '╭──────────────────────────╮\n│➣ 𝐁𝐨𝐭 𝐔𝐩𝐝𝐚𝐭𝐞  \n│\n```│' + inrlbotmd + '│\n│ ☞ 𝚃𝚢𝚙𝚎 .𝐮𝐩𝐝𝐚𝐭𝐞 𝐧𝐨𝐰 𝚝𝚘 𝚄𝚙𝚍𝚊𝚝𝚎 𝚈𝚘𝚞𝚛 𝙱𝚘𝚝\n╰──────────────────────────╯\n◩ 𝐂𝐨𝐝𝐞𝐝 𝐁𝐲 inrl\n╭──────────────────────────╮\n➣ 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐎𝐰𝐧𝐞𝐫...\n✆ wa.me/7070707070?text=Hi\n╰──────────────────────────╯'},{ quoted: message })
    }
}));

inrl({ pattern: ['updatenow'], desc: "to create ff logo",sucReact: "⚒️",  category: ["all"]}, (async (message, client) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await client.sendMessage( message.from,{ text  : "already -up-yo-date"},{ quoted: message })
    } else {
        var guncelleme = await client.sendMessage( message.from,{ text  : "w8 a few minuts to update "},{ quoted: message })
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await client.sendMessage( message.from,{ text  : "invalid data from heroku "},{ quoted: message })
                await new Promise(r => setTimeout(r, 1000));
                return await client.sendMessage( message.from,{ text  : "a-up-to-date"},{ quoted: message })
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

            client.sendMessage( message.from,{ text  : "successfully updated"},{ quoted: message })
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    client.sendMessage( message.from,{ text  : "eerror"},{ quoted: message })
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await client.sendMessage( message.from,{ text  : err},{ quoted: message })
                }
            }));
            await guncelleme.delete();
        }
    }
}));
