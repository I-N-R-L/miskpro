const fs = require("fs");
var aes256 = require('aes256');
let PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});
const mddc=(Config.SESSION_ID)
//const mddc= ('inrl~c771a40a74b71f134142d0893799f7e7:5a51754332536255626d3854362b6351)
var m = (mddc);
let mdm = m.replaceAll("inrl~", "");
var key = 'k!t';
var plaintext = (mdm);
var decryptedPlainText = aes256.decrypt(key, plaintext);

pastebin
  .getPaste(decryptedPlainText)
  .then(function (data) {
   fs.writeFileSync("../session.json" , data);
   return;
  });
