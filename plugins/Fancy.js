const { inrl , styletext, listall, tiny , randomStyle} = require("../lib/");

inrl(
	   {
		pattern: ['faancy'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = message.client.text;
if(!text){
let NewText =`
Enter A Text Quary
_ex_ : Enter a text like this *faancy 55,hi*
1 Fᴀɴᴄʏ
2 ʎɔuɐℲ
3 F⃣   a⃣   n⃣   c⃣   y⃣
4 F⃞    a⃞    n⃞    c⃞    y⃞
5 ʏɔᴎɒꟻ
6 F̸̧̥̠͔̯̻̱̋̏̾͗̈́͝a̵̟̠̯̐n̷̡̤̪͓͖̹̯̙͂̊͋̊̈́̐͑̋̏c̴̯̒͆́y̶͖̘̹̦͆̎̑͗͝
7 Ⓕⓐⓝⓒⓨ
8 F̶a̶n̶c̶y̶
9 F̴a̴n̴c̴y̴
10 F̷a̷n̷c̷y̷
11 F̲a̲n̲c̲y̲
12 F̳a̳n̳c̳y̳
13 F♥a♥n♥c♥y
14 F͎a͎n͎c͎y͎
15 F͓̽a͓̽n͓̽c͓̽y͓̽
16 ☞︎♋︎■︎♍︎⍓︎
17 Fａncｙ
18 ҒΔΠCΨ
19 千卂几匚ㄚ
20 ꎇꍏꈤꏳꌩ
21 ቻልክርሃ
22 𝐅𝐚𝐧𝐜𝐲
23 𝑭𝒂𝒏𝒄𝒚
24 𝐹𝑎𝑛𝑐𝑦
25 ᠻꪖꪀᥴꪗ
26 𝙵𝚊𝚗𝚌𝚢
27 fคຖ¢ฯ
28 ʄąŋƈყ
29 ｷﾑ刀ᄃﾘ
30 千卂几匚ㄚ
31 🄵🄰🄽🄲🅈
32 ᎦᏗᏁፈᎩ
33 ᖴᗩᑎᑕY
34 ʄǟռƈʏ
35 𝙵𝚊𝚗𝚌𝚢
36 𝙁𝙖𝙣𝙘𝙮
37 𝗙𝗮𝗻𝗰𝘆
38 𝐅𝐚𝐧𝐜𝐲
39 𝘍𝘢𝘯𝘤𝘺
40 Fαɳƈყ
41 ₣₳₦₵Ɏ
42 £åñ¢¥
43 ƒαη¢у
44 FΛПᄃY
45 Ƒąղçվ
46 Fₐₙcy
47 ᶠᵃⁿᶜʸ
48 Ŧคภςץ
49 𝔽𝕒𝕟𝕔𝕪
50 𝕱𝖆𝖓𝖈𝖞
51 🅵🅰🅽🅲🆈
52 𝓕𝓪𝓷𝓬𝔂
53 𝔉𝔞𝔫𝔠𝔶
54 Ｆａｎｃｙ
55 𝑭𝒂𝒏𝒄𝒚
56 𝐹𝛥𝛮𝐶𝑌
57 𝙁𝞓𝞜𝘾𝙔
58 𝐅𝚫𝚴𝐂𝐘
59 ᖴᗩᑎᑕᎩ
_ex_ : Enter a text like this *faancy 55,hi*`
return await client.sendMessage(message.from, { text : NewText });
    }
  // if (text.includes(',')) {
         var split = text.split(',');
         Num = split[0] || "25";
         Text = split[1] || "enter A text with number ex 31,text";
//}
let ThenText = await styletext(Text, Num)

return await client.sendMessage(message.from, { text : ThenText });
    }
);
inrl(
	   {
		pattern: ['rand'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = message.client.text;
let ThenText = await randomStyle(text)
return await client.sendMessage(message.from, { text : ThenText });
    }
);
