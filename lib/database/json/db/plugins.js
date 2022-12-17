const mongoose = require("mongoose")
const aes256 = require('aes256');
const Config = require('../../../../config')
const mddc=(Config.SESSION_ID);
let m = (mddc);
let mdm = m.replaceAll("inrl~", "");
let key = 'k!t';
let plaintext = (mdm);
let decryptedPlainText = aes256.decrypt(key, plaintext);

const PluginSchema = new mongoose.Schema({
id: { type: String,required: true },
url : { type: String, default: "https://github.com/inrl-official" },
filename : { type: String, default: "inrlmd" }
})
const plugins = mongoose.model("plugins", PluginSchema)

async function installPlugin(fileName, pluginUrl){
await plugins.findOne({ id: decryptedPlainText }).then(async(plugin) => {
if(!plugin){
await new plugins({ id: decryptedPlainText, url : pluginUrl, filename : fileName }).save();
} else {
  await plugins.update(
     { id: decryptedPlainText, url : pluginUrl, filename : fileName })
          }
    })
}
async function DeletePlugin(fileName, Url){
await plugins.findOne({ id: decryptedPlainText }).then(async(dltplugin) => {
if(dltplugin){
await plugins.findOneAndDelete({ id: decryptedPlainText, url : Url, filename : fileName })
      }
  })
}
module.exports = { plugins, installPlugin, DeletePlugin }
