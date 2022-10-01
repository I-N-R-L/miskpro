const bots = require('../lib/perfix');

   bots.inrl({pattern: ['status'], desc: "to make a vote with pepoles", sucReact: "🙄", category: ['all'], }, (async (message, client) => {

   //  var reply = await message.client.sendMessage(message.jid,'*꧁•⊹٭D͙O͙W͙N͙L͙O͙A͙D͙I͙N͙G͙ W͙H͙A͙T͙S͙A͙P͙P͙ S͙T͙A͙T͙U͙S͙٭⊹•꧂*', MessageType.text);
 
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[9] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[10] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[11] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[12] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[13] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[14] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[15] = "https://imgur.com/64FWq3W.mp4";
        r_text[16] = "https://imgur.com/aZlS1bV.mp4";
        r_text[17] = "https://imgur.com/ed0X9m5.mp4";
        r_text[18] = "https://imgur.com/nDlrBug.mp4";
        r_text[19] = "https://imgur.com/3AczL5y.mp4";
        r_text[20] = "https://imgur.com/CeizCwC.mp4";
        r_text[21] = "https://imgur.com/XQNNBxg.mp4";
        
        var i = Math.floor(22*Math.random())

        const vMsg = client.sendMessage( message.from, { video: { url: i }, mimetype: "video/mp4", fileName: `${Config.FREE_TXT}.mp4`, caption: bots.config.exif.cap,}, { quoted: message });
        
       await client.sendMessage( message.from, vMsg,{ quoted: message })
    });
