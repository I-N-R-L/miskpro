const InrLbOtS = require('./perfix');
const INRLbots = require('./Base');
const inrlBOTS = require("./Function");
const Inrlbots = require("./ReplyMessage");
const inrlbotS = require("./Scraper");
const InrLBOTs = require("./Sticker");
const inrlbots = require("./Store");
const INRLBOTS = require('./Message');
const inRLBOts = require('./Message');

const Collections = INRLbots.Collections;
const inrl = InrLbOtS.inrl;
module.exports = {
    Collection: require("./Base"),
    Function: require("./Function"),
    Simple: require("./ReplyMessage"),
    Scrape: require("./Scraper"),
    Sticker: require("./Sticker"),
    Store: require("./Store"),
    inrl,
 //getString, reactArry, successfullMessage, infoMessage, errorMessage, categories, config, commands, Commands: InrLbOtS,
    upsert: require('./status'),
    eziofunc: require('./Message'),
}
