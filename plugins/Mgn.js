module.exports = async (msg, conn, m, store) => {
    setInterval(async () => {
        let mute = await getAutomutes();
        if (mute !== 'no data') {
            mute.map(async ({
                jid,
                time
            }) => {
                time2 = moment().tz('Asia/Kolkata').format('HH:mm');
                if (time2 == time) {
                  setTimeout(async()=>{
                    return await conn.groupSettingUpdate(jid, "announcement");
                  },12000);
                }
            })
        }
        let unmute = await getAutoUnMutes();
        if (unmute == 'no data') return;
        unmute.map(async ({
            jid,
            time
        }) => {
            time1 = moment().tz('Asia/Kolkata').format('HH:mm');
            if (time1 == time) {
              setTimeout(async()=>{
                return await conn.groupSettingUpdate(jid, "not_announcement");
              },12000);
            }
        })
    }, 1000 * 45);
}
//automaton plugins
inrl({
    pattern: 'amute',
    desc: 'auto mute groups',
    react : "🙃",
    category: ["system", "all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let {
        AUTOMUTE_MSG
    } = await getVar();
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match.match(':')) return message.reply('need time (example :- 23:59)')
    let [hr, mn] = match.split(':');
    if (hr.length == 1) hr = '0' + hr;
    if (mn.length == 1) mn = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return message.reply('need number; ex:- automute 22:22');
    await add_Schedule(message.jid, `${hr}:${mn}`, 'mute')
    let ast = hr > 12 ? `${hr-12}:${mn}PM` : `${hr}:${mn}AM`;
    ast = AUTOMUTE_MSG.replace('@time', ast)
    return message.reply(ast)
});
inrl({
    pattern: 'aunmute',
    desc: 'unmute a group',
    react : "🙂",
    category: ["system", "all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let {
        AUTOUNMUTE_MSG
    } = await getVar();
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match.match(':')) return message.reply('need time (example :- 23:59)')
    let [hr, mn] = match.split(':')
    if (hr.length == 1) hr = '0' + hr;
    if (mn.length == 1) mn = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return message.reply('need number; ex:- autounmute 22:22');
    await add_Schedule(message.jid, `${hr}:${mn}`, 'unmute')
    let ast = hr > 12 ? `${hr-12}:${mn}PM` : `${hr}:${mn}AM`;
    ast = AUTOUNMUTE_MSG.replace('@time', ast)
    return message.reply(ast)
})
inrl({
    pattern: 'pdm',
    desc: ' set pdm, antilink, fake number, badwords',
    react : "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('need action! _ex:-_ pdm on/off');
    if (match != 'on' && match != 'off') return message.reply('give me a proper action? _ex:- pdm on');
    if (match == "on") {
        let isPdmInDb = await getPdm(message.jid)
        if (isPdmInDb == "true") return message.reply('already activated!');
        await setpdm(message.jid)
        return await message.reply('pdm activated!')
    } else if (match == "off") {
        let isPdmInDb = await getPdm(message.jid)
        if (isPdmInDb == "false") return message.reply('already deactivated!');
        await removePdm(message.jid)
        return await message.reply('pdm deactivated!')
    }
});
inrl({
    pattern: 'antilink',
    desc: ' set pdm, antilink, fake number, badwords',
    react : "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('need action! _ex:-_ antilink on/off');
    if (match != 'on' && match != 'off') return message.reply('give me a proper action? _ex:- antilink on');
    if (match == "on") {
        let isInDb = await getAntiLink(message.jid);
        if (isInDb == "true") return message.reply('already activated!');
        await setAntiLink(message.jid)
        return await message.reply('_successfully set antilink on thi group_')
    } else if (match == "off") {
        let isInDb = await getAntiLink(message.jid);
        if (isInDb == "false") return message.reply('already deactivated!');
        await removeAntiLink(message.jid)
        return await message.reply('_successfully removed antilink from this group')
    }
});
inrl({
    pattern: 'antiword',
    desc: ' set pdm, antilink, fake number, badwords',
    react : "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('need word?!')
    let data = await GetWords(message.jid);
    if (data = "no data") {
        await setAntiWord(message.jid, match);
        return await message.reply('_if no action when trying on the word restart the bot_');
    } else if (!data.includes(match)) {
        await setAntiWord(message.jid, match);
        return await message.reply('_success!. \nif no action when trying on the word restart the bot_');
    } else {
        return await message.reply('_given word already set as antiword_');
    }
});
inrl({
    pattern: 'antifake',
    desc: ' set pdm, antilink, fake number, badwords',
    react : "🖕",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    let BotAdmin = await isBotAdmin(message, client);
    if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return await message.reply('_give me the starting of fake Number_');
    match = match.replace(/[^0-9]/g, "");
    if (!match) return message.reply('*need Number!*');
    let data = await GetFake(message.jid);
    await message.reply(data)
    if (data == "no data" || !data) {
        await setFakeNum(message.jid, match);
        return await message.reply('*successfully set fake number!*\n_if no action restart the bot using  . restart cmd_');
    } else if (!data.includes(match)) {
        await setFakeNum(message.jid, match);
        return await message.reply('*successfully set fake number!*\n_if no action restart the bot using  . restart cmd_');
    } else {
        return await message.reply('_given number already set as antifake_');
    }
});
inrl({
    pattern: 'delfake',
    desc: 'remove fake number',
    react : "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('need starting value  of fake number?!')
    if (isNaN(match)) return message.reply('enter a valid data! need Number!');
    let data = await GetFake(message.jid);
    if (data == "no data" || !data) return await message.reply('you not set any fake number');
    if (!match.includes(data)) return await message.reply('you not set this number as fake try getfake to get fake number\ngetfake all to get list of fake number');
    await removeAFake(message.jid, match)
    return await message.reply('successfully removed fake number from db\ntry restart cmd');
});
inrl({
    pattern: 'delword',
    desc: 'remove word',
    react : "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('give me a word?!')
    let data = await GetWords(message.jid);
    if (data == "no data") return await message.reply('you not set any word');
    if (!match.includes(data)) return await message.reply('you not set this word as antiword try getword to get list of words\ngetword all to get list of word');
    await removeWord(message.jid, match)
    return message.reply('successfully removed\ntry restart cmd');
});
inrl({
    pattern: 'delmute',
    desc: 'remove word',
    react : "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('give me a time?!\nex:-delmute 22:15 for 10:15 PM')
    if (!match.includes(':')) return await message.reply('give me a time?!\nex:-delmute 10:15 for 10:15 AM')
    let [hr, mn] = match.replaceAll(' ', '').split(':');
    if (!hr || !mn) return await message.reply('give me a time as hr and minute?!\nex:-delmute 14:15 for 02:15 PM');
    if (hr.length < 2) hr = '0' + hr;
    if (mn.length < 2) hr = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return await message.reply('need time in number format');
    let data = await getAutomutes();
    if (data == "no data") return await message.reply('you not set any time as amute try *amute* 22:22  for 10:22PM');
    let avb = false
    await data.map(async ({
        jid,
        time
    }) => {
        if (!jid.match(message.jid)) return;
        if (!time) return await message.reply('not set any auto mute time in this group try *amute* 22:22  for 10:22PM');
        if (time == `${hr}:${mn}`) {
            avb = true;
            await dlt_Schedule(message.jid, `${hr}:${mn}`, 'mute');
            return await message.reply('successfully remove time shedule from this ' + message.jid + ' jid')
        }
    });
    if (!avb) return await message.reply('you not set any action for given time')
});
inrl({
    pattern: 'delunmute',
    desc: 'remove word',
    react : "🤥",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (!match) return message.reply('give me a time?!\nex:-delunmute 22:15 for 10:15 PM')
    if (!match.includes(':')) return await message.reply('give me a time?!\nex:-delunmute 10:15 for 10:15 AM')
    let [hr, mn] = match.replaceAll(' ', '').split(':');
    if (!hr || !mn) return await message.reply('give me a time as hr and minute?!\nex:-delunmute 14:15 for 02:15 PM');
    if (hr.length < 2) hr = '0' + hr;
    if (mn.length < 2) hr = '0' + mn;
    if (isNaN(hr) || isNaN(mn)) return await message.reply('need time in number format');
    let data = await getAutoUnMutes();
    if (data == "no data") return await message.reply('you not set any time as aunmute try *aunmute* 22:22  for 10:22PM');
    let avb = false
    await data.map(async ({
        jid,
        time
    }) => {
        if (!jid.match(message.jid)) return;
        if (!time) return await message.reply('not set any auto unmute time in this group try *aunmute* 22:22  for 10:22PM');
        if (time == `${hr}:${mn}`) {
            avb = false
            await dlt_Schedule(message.jid, `${hr}:${mn}`, 'unmute')
            return await message.reply('successfully remove time shedule from this ' + message.jid + ' jid')
        }
    });
    if (!avb) return await message.reply('you not set any action for given time')
});
inrl({
    pattern: "getfake",
    desc: 'get datas of, fake number',
    react : "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (match && match != "all") return await message.reply("if you need to get all fake number from all group try *getfake all*");
    if (!match || match != "all") {
        let data = await GetFake(message.jid)
        if(!data) return await message.reply("no data");
        return await message.reply(data);
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getListofFake();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(async ({
            data,
            jid
        }) => {
            if (id == withValue()) {
                T_X_T += `number: ${data} \njid : ${jid.replace(withValue(),'')}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "getword",
    desc: 'get datas of, fake number',
    react : "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (match && match != "all") return await message.reply("if you need to get all words from all group try *getword all*");
    if (!match || match != "all") {
        let data = await GetWords(message.jid);
        if(!data) return await message.reply("no data");
        return await message.reply(data);
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getListOfWord();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(async ({
            data,
            jid
        }) => {
            if (id == withValue()) {
                T_X_T += `word: ${data} \njid : ${jid.replace(withValue(),'')}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "getmute",
    desc: 'get datas of, fake number',
    react : "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (match && match != "all") return await message.reply("if you need to get all mute from all group try *getmute all*");
    if (!match || match != "all") {
        let jidd = message.jid,
            T_X_T = "result for this group\n";
        let data = await getAutomutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(({
            jid,
            time,
            action
        }) => {
            if (jid == jidd) {
                T_X_T += `time : ${time}\naction : ${action} \n\n`
            } else T_X_T += "no data"
        })
        return await message.reply(T_X_T.replace("no data", ""));
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getAutomutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(({
            id,
            jid,
            time,
            action
        }) => {
            if (id == withValue()) {
                T_X_T += `time : ${time}\naction: ${action} \njid : ${jid}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
inrl({
    pattern: "getunmute",
    desc: 'get datas of',
    react : "🥵",
    category: ["all"],
    type: "group",
    onlyGroup: true
}, async (message, match) => {
    let admin = await isAdmin(message, client);
    if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
    if (match && match != "all") return await message.reply("if you need to get all unmute from all group try *getunmute all*");
    if (!match || match != "all") {
        let jidd = message.jid,
            T_X_T = "result for this group\n";
        let data = await getAutoUnMutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(({
            jid,
            time,
            action
        }) => {
            if (jid == jidd) {
                T_X_T += `time : ${time}\naction : ${action} \n\n`
            } else T_X_T += "no data"
        })
        return await message.reply(T_X_T);
    } else if (match == "all") {
        let T_X_T = "result for all group\n";
        let data = await getAutoUnMutes();
        if (!data || data == "no data") return await message.reply("no data");
        await data.map(async ({
            id,
            jid,
            time,
            action
        }) => {
            if (id == withValue()) {
                T_X_T += `time : ${time}\naction: ${action} \njid : ${jid}\n\n`
            } else T_X_T += "no data"
        });
        return await message.reply(T_X_T);
    }
});
