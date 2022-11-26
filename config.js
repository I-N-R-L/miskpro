const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL =
	process.env.DATABASE_URL === undefined
		? './database.db'
		: process.env.DATABASE_URL
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || 'inrl~jBXClBr6wZOD1OTowD//OCeai4oQ+seP',
    PASSWORD: process.env.PASSWORD || 'inrl-bot~md',
    REACT : process.env.REACT || 'false',
    WELCOME_SET : "true",
    EXIT_MSG : "true",
    GROUP_CHAT : process.env.GROUP_CHAT || 'false',
    FREE_TXT : process.env.FREE_TXT || 'inrlbotmd',
    READ_CHAT : process.env.READ_CHAT || "true", //values are true and false only if true read all chats
    U_STATUS: process.env.U_STATUS || 'true',
    KICK_BOT : "120363044370289918@g.us",
    ALIVE_DATA : process.env.ALIVE_DATA || `alive`,
    ALIVETXT: process.env.ALIVETXT || 'INRL-BOT-MD',
    MENSION: {
        MENSION_AUDIO : process.env.MENSION_AUDIO || "https://i.imgur.com/iUOGcyF.mp4,https://i.imgur.com/e2PKT60.mp4,https://i.imgur.com/5NZDe8m.mp4,https://i.imgur.com/iaHKsGW.mp4, https://i.imgur.com/NGWrUkQ.mp4,https://i.imgur.com/GUtD1hr.mp4, https://i.imgur.com/PBuALN3.mp4, https://i.imgur.com/79YoX98.mp4, https://i.imgur.com/HzIz3ls.mp4, https://i.imgur.com/2jzZauR.mp4, https://i.imgur.com/oKVVwIj.mp4, https://i.imgur.com/AzqHkeV.mp4, https://i.imgur.com/pf1BWXN.mp4, https://i.imgur.com/N2N6S7C.mp4, https://i.imgur.com/IrEdvwL.mp4, https://i.imgur.com/4fdJUoj.mp4, https://i.imgur.com/FaOtaF5.mp4, https://i.imgur.com/wsrdnP8.mp4,https://i.imgur.com/imr3bC8.mp4, https://i.imgur.com/Xgzkbsk.mp4, https://i.imgur.com/0WML13D.mp4, https://i.imgur.com/b491tUX.mp4, https://i.imgur.com/GuAnUuf.mp4, https://i.imgur.com/yVwoqYp.mp4, https://i.imgur.com/WgMgTBP.mp4,https://i.imgur.com/LQBlI1y.mp4,https://i.imgur.com/EQn2BvM.mp4, https://i.imgur.com/SIj26aP.mp4,https://i.imgur.com/IWlTmTE.mp4, https://i.imgur.com/c4E7E1k.mp4, https://i.imgur.com/D5PREWe.mp4,https://i.imgur.com/JL6FWpS.mp4, https://i.imgur.com/rvD8PlZ.mp4, https://i.imgur.com/ChUKdPk.mp4, https://i.imgur.com/z9oQd4N.mp4, https://i.imgur.com/z9oQd4N.mp4, https://i.imgur.com/vkdcGHu.mp4, https://i.imgur.com/vkdcGHu.mp4,https://i.imgur.com/K2QlmTc.mp4, https://i.imgur.com/AeGNKo3.mp4, https://i.imgur.com/Qe5khtL.mp4, https://i.imgur.com/lCZl3Af.mp4, https://i.imgur.com/AsEfT76.mp4, https://i.imgur.com/KraBTPf.mp4, https://i.imgur.com/fbvDI1g.mp4,https://i.imgur.com/uazVUOH.mp4, https://i.imgur.com/YN04ot5.mp4, https://i.imgur.com/YN04ot5.mp4",
        MENSION_IMG : process.env.MENSION_IMG || "https://images.wallpaperscraft.com/image/single/ball_planet_shroud_136916_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_hand_190683_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_hands_glow_166373_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_mask_140903_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_stone_169306_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_reflection_165921_4072x2697.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_silhouette_149491_1920x2304.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_line_light_28298_1680x1050.jpg,  https://images.wallpaperscraft.com/image/single/ball_circles_glow_168614_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_circles_neon_137700_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_neon_backlight_147061_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_reflection_neon_168932_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_reflection_hand_184546_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/crystal_ball_ball_hand_142442_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/building_water_minimalism_198457_3145x4718.jpg,  https://images.wallpaperscraft.com/image/single/triangle_inverted_black_white_92770_2560x1600.jpg,  https://images.wallpaperscraft.com/image/single/lamp_electricity_minimalism_128251_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/lamp_electricity_spiral_luminescence_120309_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/lamp_spiral_electricity_light_119929_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_building_architecture_sky_bottom_view_118409_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_bottom_view_building_187222_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_architecture_bottom_view_123571_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_architecture_bottom_view_136419_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/cherries_cherry_berry_122190_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_hand_sea_horizon_118181_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_hand_stones_148518_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_stream_flow_169694_1440x2560.jpg,        https://images.wallpaperscraft.com/image/single/water_horizon_dusk_175987_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_moon_dusk_191709_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_horizon_sky_164418_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_sky_horizon_140454_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_horizon_sunset_168843_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/moon_phases_black_175210_3648x5472.jpg,  https://images.wallpaperscraft.com/image/single/moon_black_sky_191125_2318x2864.jpg,  https://images.wallpaperscraft.com/image/single/stains_paint_mixing_198500_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_paint_mixing_195514_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_liquid_paint_191590_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_liquid_paint_147522_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_liquid_paint_151928_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_abstraction_texture_157950_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_paint_liquid_146393_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/girl_helmet_cyberpunk_194603_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/girl_alone_autumn_192003_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/girl_loneliness_alone_183388_2160x3840.jpg",
        MENSION_TEXT : process.env.MENSION_TEXT || '𝙳𝚘𝚗𝚝 𝚌𝚘𝚖𝚙𝚊𝚛𝚎 𝚖𝚎 𝚠𝚒𝚝𝚑 𝚊𝚞𝚝𝚑𝚎𝚛𝚜, 𝚒𝚝𝚜𝚖𝚎 𝚒𝚗𝚛𝚕, https://www.instagram.com/reel/CkH8SbUJP16/?igshid=YmMyMTA2M2Y='
    },
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD,INRL,https://i.imgur.com/DyLAuEh.jpg",
    BGMBOT : process.env.BGMBOT || 'false',
    WORKTYPE: process.env.WORKTYPE || 'privet',
    LANG :process.env.LANG || 'EN', //values are ml, en only
    OWNER : process.env.OWNER || "917593919575",
    BRANCH: 'master',
    PROCFILE_DATA : process.env.PROCFILE_DATA || "\n\n💗 ᴀᴜᴛᴏ ᴍᴀᴛɪᴄ ʙɪᴏ ʙy ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    PM_BLOCK : process.env.PM_BLOCK || "false",
    CALL_BLOCK : process.env.CALL_BLOCK || "true",
    SET_ANTI_LINK : process.env.ANTILINK || "instagram.com, chat, xnxx, xxx;27634090203-1632904922@g.us,120363044s370289918@g.us,1203630278s80227564@g.us",
    FACK_REMOVE : process.env.ANTIFAKE || "91;120363044370289918@g.us,1203630278802s27564@g.us",
    ALL_LINK_BAN : process.env.ALL_LINK_BAN || "120363044370289918@g.us,12036302788s0227564@g.us",
    BAD_WORD_TEXT : "xxx, xnxx, fuck, myr, poor, endi, andi;120363044370289918@g.us,12036302788022s7564@g.us",
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    DATABASE:
		DATABASE_URL === './database.db'
			? new Sequelize({
					dialect: 'sqlite',
					storage: DATABASE_URL,
					logging: false,
			  })
			: new Sequelize(DATABASE_URL, {
					dialect: 'postgres',
					ssl: true,
					protocol: 'postgres',
					dialectOptions: {
						native: true,
						ssl: { require: true, rejectUnauthorized: false },
					},
					logging: false,
			  }),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '5c70df7f-b11e-44cd-9b8f-4a67055e66ba',
        APP_NAME: process.env.HEROKU_APP_NAME || 'freetrsr-md'
    },
    BLOCK_CHAT : process.env.BLOCK_CHAT ||[],
    AUTO_CHAT_PM : process.env.AUTO_CHAT_PM || "false",
    AUTO_CHAT_GRP : process.env.AUTO_CHAT_GRP || "false",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    IS_PRESENCE : process.env.IS_PRESENCE || "false",
    CHATBOT : process.env.CHATBOT || 'null',
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ᴍᴅ",
    INFO_URL : process.env.INFO_URL || "https://tinyurl.com/36r3668n",
    AUDIO_DATA : process.env.AUDIO_DATA || "inrl, ibot,https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA: process.env.STICKER_DATA || "inrl, ibot,https://i.imgur.com/DyLAuEh.jpg",
    INSTAGRAM : process.env.INSTAGRAM || "https://instagram.com/_user_not_define",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    GIT : process.env.GIT || "https://tinyurl.com/3ex3e48e",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://tinyurl.com/36r3668n",
    CAPTION : process.env.CAPTION || "_created by inrl-bot_",
    SUDO: process.env.SUDO || "917593919575",
    VIDEO : "https://tinyurl.com/3x38ajmn",
    PERFIX : ".",
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/f5wh55mk',
    };
