/*
   const bots = require("../lib/perfix");
const maker = require("mumaker");
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"
bots.inrl( { pattern: ["p1"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 12) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [message.client.text, 'inrl'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p2"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 30) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [message.client.text, 'inrl'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p3"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [message.client.text, 'inrl'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p4"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p5"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p6"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p6"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p7"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p8"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p9"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/neon-text-effect-online-879.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p10"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/thunder-text-effect-online-881.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p11"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p12"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-ninja-logo-online-935.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p13"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/advanced-glow-text-effect-873.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p14"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p15"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p16"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});




bots.config.api.textpro.takes1.map(logo => {
  const { pattern, textLenth, id } = logo; 
  const url = bots.config.api.textpro.domain + id;
  bots.inrl( { pattern, sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
    if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
    if (message.client.text.length >= textLenth) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
    await maker.textpro( url, [message.client.text, 'inrl'])
    .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
    .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
  });});
*/
