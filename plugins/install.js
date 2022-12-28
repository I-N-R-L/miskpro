const { inrl } = require("../lib")
const { exec } = require("child_process");
const Config = require('../config')
const got = require("got");
const fs = require("fs");
const { add_plugin, dlt_plugin, getListOfPlugin } = require('../lib/database/pluginsdb')
let perfix  = Config.PERFIX == 'false' ? '' : Config.PERFIX;
const aes256 = require('aes256');
let plaintext = Config.SESSION_ID.replaceAll("inrl~", "");
let key = 'k!t';
let decryptedPlainText = aes256.decrypt(key, plaintext);

inrl(
	   {
		pattern: ['restart'],
		desc: 'to install externel Plugin ',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
	if(!message.client.isCreator) return await message.replay("action only for owner!");
	message.reply('Restarting')
    exec('pm2 restart all')
	})
inrl(
	   {
		pattern: ['install'],
		desc: 'to install externel Plugin ',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
	if(!match) return message.send("need url");
	if(!match.startsWith("http")) return message.reply("need Url!");
       message.reply("wait a minut!")
	let plugin_name, url = match.trim();
    let { body, statusCode } = await got(url).catch((e)=>{
message.reply('not valid!')
       })
    if (statusCode == 200) {
    plugin_name = body.split("pattern")[1].split('[')[1].split(']')[0];
      plugin_name = plugin_name.includes("'") ? plugin_name.replaceAll("'", "") : plugin_name.replaceAll('"',"");
   plugin_name = plugin_name+"test";
      
fs.writeFileSync(__dirname + "/" + plugin_name + ".js", body);
      try {
        require("./" + plugin_name);
      } catch (e) {
        fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
       return await message.reply(e);
        }
     await message.reply("newly installed plugin are "+plugin_name.split('test')[0])
  await add_plugin(plugin_name.split('test')[0], url)
          fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
    }    
});
inrl(
	   {
		pattern: ['remove'],
		desc: 'to remove externel Plugin ',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
       if(!match) return message.send("need name of plugin!")
       match = decryptedPlainText+match.trim();
       let list = await getListOfPlugin(),dltName;
       list.map(async(name)=>{
        dltName = name.name
    if(!dltName.includes(match)) {
        return await message.reply("no such plugin in your db!")
         }
await dlt_plugin(match)
fs.unlinkSync(__dirname + "/" + match + ".js");
const buttons = [
        { buttonId: perfix+"restart", buttonText: { displayText: "restart"}, type: 1, }
      ]
const caption = match.split(decryptedPlainText)[1]+" plugin deleted from the database\nbut the plugins work for befor restarting\nthe project, as you want to remove this \nplugin permently from the code at this \nmomment! clieck the below \nrestart button"
const templateButtons = {
      text:caption,
      footer:Config.FOOTER,
      buttons: buttons,
      headerType: 1

    };
return await client.sendMessage(message.from,templateButtons, { quoted: message});
    })
})
inrl(
	   {
		pattern: ['plugins'],
		desc: 'to get all externel Plugin ',
        sucReact: "😛",
        category: ["system", "all"],
        type : "system"
	   }, async (message, client, match, cmd) => {
let text, name, urls;
  if(!match){
   let list = await getListOfPlugin();
  
for (let i=0;i<list.length;i++) {
name = list[i].name.split(decryptedPlainText)[1];
urls = list[i].url;
  text += await name+"\n"+urls+"\n";
    }
if(text){
    text = text.includes('undefined')?text.split('undefined')[1]:text
await message.reply(text)
}else{
  message.send('no externel plugins!')
}
  }
})
