
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
});bots.inrl( { pattern: ["p5"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p6"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p7"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p8"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p9"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p10"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/neon-text-effect-online-879.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p11"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/thunder-text-effect-online-881.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p12"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p13"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-ninja-logo-online-935.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p14"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/advanced-glow-text-effect-873.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p15"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p16"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p17"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p18"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p19"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p20"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p21"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/neon-text-effect-online-963.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p22"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/ice-cold-text-effect-862.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p23"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p24"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p25"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p26"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p27"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p28"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p29"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', [message.client.text, 'inrl-bot'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: bots.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});bots.inrl( { pattern: ["p30"], sucReact: "ðŸ–¼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: bots.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('frendpage.vercel.app', [message.client.text, 'inrl-bot'])
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
