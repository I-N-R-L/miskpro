async function send_vote(message, client){
    
      const text = message.client.text;
      if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
      let t0, tl, t2, t3, t4, t5, t6, t7, t8;
         t0 = text.split(',')[0];
         t1 = text.split(',')[1];
         t2 = text.split(',')[2];
         t3 = text.split(',')[3];
         t4 = text.split(',')[4];
         
      }
      
    
  
  const rows = [
 {title: `${bottomText}`, rowId:"rowid1"},
 {title: `${tl}`,  rowId:"rowid2"}
]

const sections = [{title: `${topText}`, rows: rows}]
const button = {
        text: `${topText}`,
        footer: "inrl",
        buttonText: "vote",
        sections,
}

await client.sendMessage( message.from, button, { quoted: message, });
}
