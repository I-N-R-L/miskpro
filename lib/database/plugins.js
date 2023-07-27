const mongoose = require("mongoose")
const pluginSchema = new mongoose.Schema({
id: { type: String,required: true },
url : { type: String },
name : { type : String }
})
const  pluginDB = mongoose.model("pluginDB", pluginSchema)

async function add_plugin(name, url, id){
await pluginDB.find({ name : name, id :id }).then(async(plugin) => {
if(!plugin[0]){
await new pluginDB({ id: id, url : url, name : name }).save();
   } else {
    pluginDB.findOneAndUpdate(
     { name : name, id:id },{ url: url })
      }
  })
}
async function dlt_plugin(name, id){
await pluginDB.find({
    name: name.trim(), id:id
}).then(async(und) => {
if(und[0]){
await pluginDB.deleteMany({ name:name.trim(), id : id});
   }});
}
async function getListOfPlugin(id){
return new Promise(async(resolve,reject) => {
await pluginDB.find({ id: id }).then(async(isPlugin) => {
if(isPlugin[0]){
resolve(isPlugin);
} else resolve('no data')
       })
   })
}
module.exports = { pluginDB, add_plugin, dlt_plugin, getListOfPlugin }
