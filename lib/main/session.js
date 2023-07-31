const fs = require("fs");
const axios = require("axios");

async function connect(session) {
    if(!session) {
    console.log('please provide a session id in config.js\n\nscan from inrl server');
    process.exit(1);
    }
    if (!fs.existsSync("./auth_info_baileys")) {
        let dir = await fs.mkdirSync('auth_info_baileys');
    }
    let decryptedPlainText = "https://api.github.com/gists/" + session;
    let {
        data
    } = await axios(decryptedPlainText)
    let dataForFile = data.files.test.content;
    fs.writeFileSync("./auth_info_baileys/creds.json", JSON.stringify(dataForFile));
}
module.exports = { connect };
