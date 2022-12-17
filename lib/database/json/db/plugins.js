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
const  GenID = decryptedPlainText;

async function installPlugin(fileName, pluginUrl){
let GenWarnId = GenID;
await plugins.findOne({ id: GenWarnId }).then(async(plugin) => {
if(!plugin){
await new plugins({ id: GenWarnId, url : pluginUrl, filename : fileName }).save();
} else {
  await plugins.update(
     { id: GenWarnId, url : pluginUrl, filename : fileName })
          }
    })
}
async function DeletePlugin(fileName, Url){
let GenWarnId = GenID;
await plugins.findOne({ id: GenWarnId }).then(async(dltplugin) => {
if(dltplugin){
await plugins.findOneAndDelete({ id: GenWarnId, url : Url, filename : fileName })
      }
  })
}
module.exports = { plugins, installPlugin, DeletePlugin }
