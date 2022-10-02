const InrLbOtS = require('./perfix');
module.exports = {
    Collection: require("./Base"),
    Function: require("./Function"),
    Simple: require("./ReplyMessage"),
    Scrape: require("./Scraper"),
    Sticker: require("./Sticker"),
    Store: require("./Store"),
    inrl : InrLbOtS,
 //getString, reactArry, successfullMessage, infoMessage, errorMessage, categories, config, commands, Commands: InrLbOtS,
    upsert: require('./status'),
    eziofunc: require('./Message'),
}
