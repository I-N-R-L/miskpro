const simpleGit = require('simple-git');
const git = simpleGit();
const bots = require('../lib/perfix');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
bots.inrl( { pattern: ["update"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
     await git.fetch();
    var commits = await git.log(['master' + '..origin/' + 'master']);
    var mss = '';
    if (commits.total === 0) {
        mss = "_Bot up to date!_"
        return await client.sendMessage(message.from, buttonMessage, { quoted: message })
    } else {
        var changelog = "_Pending updates:_\n\n";
        for (var i in commits.all){
        changelog += `${(parseInt(i)+1)}• *${commits.all[i].message}*\n`
    }
        mss = changelog;
        var buttons = [{buttonId: 'update-now', buttonText: {displayText: 'START UPDATE'}, type: 1}]
    }
          const buttonMessage = {
              text: mss,
              footer: 'Feel free to update!',
              buttons: buttons,
              headerType: 1
          }
    return await client.sendMessage(message.from, buttonMessage, { quoted: message })
});
bots.inrl( { pattern: ["update-now"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
    await git.fetch();
    var commits = await git.log(['master' + '..origin/' + 'master']);
    if (commits.total === 0) {
        return await message.client.sendMessage(message.from, { text:"_Bot up to date_"},{ quoted: message })

    } else {
        await client.sendMessage(message.from, { text:"_Started update.._"},{ quoted: message })

            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await client.sendMessage(message.from, { text:"_Heroku information wrong!_"},{ quoted: message })

                await new Promise(r => setTimeout(r, 1000));
            }
            git.fetch('upstream', 'master');
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', 'master');

            await client.sendMessage(message.from, { text:"_Successfully updated_"},{ quoted: message })
           await client.sendMessage(message.from, { text:"_Restarting_"},{ quoted: message })
            }
});
