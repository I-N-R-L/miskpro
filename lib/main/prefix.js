const fs = require("fs");
const path = require("path");
let Commands = [];
//const config = require("./Data");
const successfullMessage = (msg) => { return "💗 *Successful*:-  ```" + msg + "```"; };
const errorMessage = (msg) => { return "```" + msg + "```"; };
const infoMessage = (msg) => { return "```" + msg + "```"; };
const categories = ["search", "all", "downloade", "chat", "system", 'fun', '18+', 'apk','ff','owner', 'create', 'group', "logo","photo","sticker","anime" ];
function inrl(info, func) {
  let types = ["video","image","text","all","sticker","audio"];
  let infos = {
    type: info["type"] === undefined || undefined ? "others" : info["type"],
    DismissPrefix: info["DismissPrefix"] === undefined ? false : info["DismissPrefix"],
    isLimited : info["isLimited"] === undefined ? false : info["isLimited"],
    fromMe: info["fromMe"] === undefined ? false : info["fromMe"],
    onlyGroup: info["onlyGroup"] === undefined ? false : info["onlyGroup"],
    onlyPinned: info["onlyPinned"] === undefined ? false : info["onlyPinned"],
    react : info["react"] === undefined ? "💖" : info["react"],
    onlyPm: info["onlyPm"] === undefined ? false : info["onlyPm"],
    deleteCommand: info["deleteCommand"] === undefined ? true : info["deleteCommand"],
    desc: info["desc"] === undefined ? "" : info["desc"],
    usage: info["usage"] === undefined ? "" : info["usage"],
    dontAddCommandList: info["dontAddCommandList"] === undefined ? false : info["dontAddCommandList"],
    warn: info["warn"] === undefined ? "" : info["warn"],
    media: info["media"] === undefined ? "all" : info["media"],
    function: func,
  };
  if (info["on"] === undefined && info["pattern"] === undefined) { infos.on = "message"; infos.fromMe = false;} 
  else if (info["on"] !== undefined && types.includes(info["on"])) { infos.on = info["on"]; if (info["pattern"] !== undefined) infos.pattern = info["pattern"] === undefined ? [] : info["pattern"];} 
  else infos.pattern = info["pattern"] === undefined ? [] : info["pattern"];
  Commands.push(infos);
  return infos;
}
module.exports = { inrl, successfullMessage, infoMessage, errorMessage, categories, commands: Commands};
