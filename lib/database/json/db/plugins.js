const mongoose = require("mongoose")
const aes256 = require('aes256');
const Config = require('../../config')
const mddc=(Config.SESSION_ID);
let m = (mddc);
let mdm = m.replaceAll("inrl~", "");
let key = 'k!t';
let plaintext = (mdm);
let decryptedPlainText = aes256.decrypt(key, plaintext);

const PluginSchema = new mongoose.Schema({
id: { type: String,required: true },
url : { type: String, default: "https://github.com/inrl-official" },
cmd : { type: String, default: "inrlmd" }
})
const plugins = mongoose.model("plugins", PluginSchema)
const  GenID = decryptedPlainText;

async function installPlugin(newCmd, pluginUrl){
let GenWarnId = GenID+newCmd
await plugins.findOne({ id: GenWarnId }).then(async(plugin) => {
if(!plugin){
await new plugins({ id: GenWarnId, url : pluginUrl, cmd : newCmd }).save();
} else {
  await plugins.update(
     { id: GenWarnId, url : pluginUrl, cmd : newCmd })
          }
    })
}
aync function DeletePlugin(cmdName, Url){
let GenWarnId = GenID+cmdName
await plugins.findOne({ id: GenWarnId }).then(async(dltplugin) => {
if(dltplugin){
await plugins.findOneAndDelete({ id: GenWarnId, url : Url, cmd : cmdName })
      }
}
module.exports = { plugins, installPlugin, DeletePlugin };
