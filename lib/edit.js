const {
        textpro
} = require('mumaker');
async function imageEdit(id, text) {
        const message = text.match(/[,|;]/) ? text.split(/[,|;]/) : [text.trim(), "generated by inrl"]
        let image_buff, status = true;
        switch (id) {
                case "dragon":
                        image_buff = await (await textpro("https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html", message)).image;
                        break;
                case "pornhub":
                        image_buff = await (await textpro("https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html", message)).image;
                        break;
                case "blood":
                        image_buff = await (await textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", message)).image;
                        break;
                case "1917":
                        image_buff = await (await textpro("https://textpro.me/1917-style-text-effect-online-980.html", message)).image;
                        break;
                case "marvel":
                        image_buff = await (await textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", message)).image;
                        break;
                case "spooky":
                        image_buff = await (await textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", message)).image;
                        break;
                case "toxic":
                        image_buff = await (await textpro("https://textpro.me/toxic-text-effect-online-901.html", message)).image;
                        break;
                case "avengers":
                        image_buff = await (await textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", message)).image;
                        break;
                case "gameover":
                        image_buff = await (await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", message)).image;
                        break;
                case "window":
                        image_buff = await (await textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", message)).image;
                        break;
                case "summer":
                        image_buff = await (await textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", message)).image;
                        break;
                case "forework":
                        image_buff = await (await textpro("https://textpro.me/firework-sparkle-text-effect-930.html", message)).image;
                        break;
                case "sliced":
                        image_buff = await (await textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", message)).image;
                        break;
                case "naruto":
                        image_buff = await (await textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", message)).image;
                        break;
                case "3dbox":
                        image_buff = await (await textpro("https://textpro.me/3d-box-text-effect-online-880.html", message)).image;
                        break;
                case "batman":
                        image_buff = await (await textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", message)).image;
                        break;
                case "dropwater":
                        image_buff = await (await textpro("https://textpro.me/dropwater-text-effect-872.html", message)).image;
                        break;
                case "sand":
                        image_buff = await (await textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", message)).image;
                        break;
                case "palm":
                        image_buff = await (await textpro("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html", message)).image;
                        break;
                case "lava":
                        image_buff = await (await textpro("https://textpro.me/lava-text-effect-online-914.html", message)).image;
                        break;
                case "pottery":
                        image_buff = await (await textpro("https://textpro.me/create-3d-pottery-text-effect-online-1088.html", message)).image;
                        break;
                case "wall":
                        image_buff = await (await textpro("https://textpro.me/break-wall-text-effect-871.html", message)).image;
                        break;
                case "slime":
                        image_buff = await (await textpro("https://textpro.me/create-green-slime-text-effect-online-1097.html", message)).image;
                        break;
                case "skeleton":
                        image_buff = await (await textpro("https://textpro.me/skeleton-text-effect-online-929.html", message)).image;
                        break;
                case "business":
                        image_buff = await (await textpro("https://textpro.me/3d-business-sign-text-effect-1078.html", message)).image;
                        break;
                case "star":
                        image_buff = await (await textpro("https://textpro.me/decorate-green-text-effect-918.html", message)).image;
                        break;
                case "typography":
                        image_buff = await (await textpro("https://textpro.me/create-artistic-typography-online-1086.html", message)).image;
                        break;
                case "natural":
                        image_buff = await (await textpro("https://textpro.me/natural-leaves-text-effect-931.html", message)).image;
                        break;
                case "birthday":
                        image_buff = await (await textpro("https://textpro.me/foil-balloon-text-effect-for-birthday-987.html", message)).image;
                        break;
                case "road":
                        image_buff = await (await textpro("https://textpro.me/road-warning-text-effect-878.html", message)).image;
                        break;
                case "pokemon":
                        image_buff = await (await textpro("https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html", message)).image;
                        break;
                case "magma":
                        image_buff = await (await textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", message)).image;
                        break;
                case "carbon":
                        image_buff = await (await textpro("https://textpro.me/carbon-text-effect-833.html", message)).image;
                        break;
                case "giraffe":
                        image_buff = await (await textpro("https://textpro.me/create-3d-giraffe-text-effect-online-1069.html", message)).image;
                        break;
                case "metallic":
                        image_buff = await (await textpro("https://textpro.me/create-3d-metallic-text-with-details-online-1108.html", message)).image;
                        break;
                case "eroded":
                        image_buff = await (await textpro("https://textpro.me/eroded-metal-text-effect-834.html", message)).image;
                        break;
                case "gold":
                        image_buff = await (await textpro("https://textpro.me/text-logo-3d-metal-gold-944.html", message)).image;
                        break;
                case "deep":
                        image_buff = await (await textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", message)).image;
                        break;
                case "scary":
                        image_buff = await (await textpro("https://textpro.me/create-scary-halloween-text-effects-online-1090.html", message)).image;
                        break;
                case "ancient":
                        image_buff = await (await textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", message)).image;
                        break;
                case "captain":
                        image_buff = await (await textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", message)).image;
                        break;
                case "whitegold":
                        image_buff = await (await textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", message)).image;
                        break;
                default:
                        status = false;
        }
        if (!status) return false;
        return image_buff;
}
module.exports = {
        imageEdit
};
