const fs = require("fs");
const axios = require("axios");

async function connect(session) {
    if (!fs.existsSync("./auth_info_baileys")) {
        let dir = await fs.mkdirSync('auth_info_baileys');
    }
    let decryptedPlainText = "https://api.github.com/gists/" + session;
    let {
        data
    } = await axios(decryptedPlainText)
    let dataForFile = data.files.test.content;
    fs.writeFileSync("./auth_info_baileys/creds.json", dataForFile);
}
module.exports = { connect };
