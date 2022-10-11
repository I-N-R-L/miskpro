const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
const code = "*_50 ff LOGO PACK_*\n\n*🧞‍♂️.ff01 : Makes ff logo*\n\n🧞‍♂️.ff02 : Makes ff logo**\n\n*🧞‍♂️.ff03 : Makes ff logo*\n\n🧞‍♂️.ff04 : Makes ff logo*\n\n🧞‍♂️.ff5 : Makes ff logo*\n\n🧞‍♂️.ff6 : Makes ff logo*\n\n🧞‍♂️.ff07 : Makes ff logo*\n\n🧞‍♂️.ff08 : Makes ff logo*\n\n🧞‍♂️.ff09 : Makes ff logo*\n\n🧞‍♂️.ff10 : Makes ff logo*\n\n🧞‍♂️.ff12 : Makes ff logo*\n\n🧞‍♂️.ff13 : Makes ff logo*\n\n🧞‍♂️.ff14 : Makes ff logo*\n\n🧞‍♂️.ff15 : Makes ff logo*\n\n🧞‍♂️.ff16 : Makes ff logo*\n\n🧞‍♂️.ff17 : Makes ff logo*\n\n🧞‍♂️.ff18 : Makes ff logo*\n\n🧞‍♂️.ff19 : Makes ff logo*\n\n🧞‍♂️.ff20 : Makes ff logo*\n\n🧞‍♂️.ff21 : Makes ff logo*\n\n🧞‍♂️.ff22 : Makes ff logo*\n\n🧞‍♂️.ff23 : Makes ff logo*\n\n🧞‍♂️.ff24 : Makes ff logo*\n\n🧞‍♂️.ff25 : Makes ff logo*\n\n🧞‍♂️.ff26 : Makes ff logo*\n\n🧞‍♂️.ff27 : Makes ff logo*\n\n🧞‍♂️.ff28 : Makes ff logo*\n\n🧞‍♂️.ff29 : Makes ff logo*\n\n🧞‍♂️.ff30 : Makes ff logo*\n\n🧞‍♂️.ff31 : Makes ff logo*\n\n🧞‍♂️.ff32 : Makes ff logo*\n\n🧞‍♂️.ff33 : Makes ff logo*\n\n🧞‍♂️.ff34 : Makes ff logo*\n\n🧞‍♂️.ff35 : Makes ff logo*\n\n🧞‍♂️.ff36 : Makes ff logo*\n\n🧞‍♂️.ff37 : Makes ff logo*\n\n🧞‍♂️.ff38 : Makes ff logo*\n\n🧞‍♂️.ff39 : Makes ff logo*\n\n🧞‍♂️.ff40 : Makes ff logo*\n\n🧞‍♂️.ff41 : Makes ff logo*\n\n🧞‍♂️.ff42 : Makes ff logo*\n\n🧞‍♂️.ff43 : Makes ff logo*\n\n🧞‍♂️.ff44 : Makes ff logo*\n\n🧞‍♂️.ff45 : Makes ff logo*\n\n🧞‍♂️.ff46 : Makes ff logo*\n\n🧞‍♂️.ff47 : Makes ff logo*\n\n🧞‍♂️.ff48 : Makes ff logo*\n\n🧞‍♂️.ff49 : Makes ff logo*\n\n🧞‍♂️.ff50 : Makes ff logo*\n\n"



function add(num1,num2){
let result = -(-num1 - num2)
data = num1+"+"+num2+"="+result;
return data;
};

function subtract(num1,num2){
let result = num1 - num2
data = num1+"-"+num2+"="+result;
return data;
};

function multiply(num1,num2){
let result = num1*num2
data = num1+"×"+num2+"=+"+result;
return data;
};

function division(num1,num2){
let result =( num1 / num2)
data = num1+"÷"+num2+"="+result;
return data;
};

function qrcode(text){
           return `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`;
};

function base64e(text){
           return btoa(text);
}

function base64d(text){
           return atob(text);
}

function age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return "your age is : "+Math.abs(age_dt.getUTCFullYear() - 1970);
}
function anime(){
    var r_text = new Array();
    r_text[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    r_text[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    r_text[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    r_text[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    r_text[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    r_text[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    r_text[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    r_text[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    r_text[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    r_text[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    r_text[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    r_text[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    r_text[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    r_text[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    r_text[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    r_text[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    r_text[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    r_text[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    r_text[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    r_text[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    r_text[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    r_text[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    r_text[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    r_text[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    r_text[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    r_text[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    r_text[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    r_text[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    r_text[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    r_text[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    r_text[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    r_text[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    r_text[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    r_text[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    r_text[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    r_text[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    r_text[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    r_text[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    r_text[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    r_text[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    r_text[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    r_text[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    r_text[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    r_text[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    r_text[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    r_text[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    r_text[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    r_text[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    r_text[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    r_text[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    r_text[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    r_text[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    r_text[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    r_text[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    r_text[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    r_text[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    r_text[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    r_text[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    r_text[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    r_text[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    r_text[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    r_text[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    r_text[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    r_text[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    r_text[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    r_text[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    r_text[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    r_text[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    r_text[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    r_text[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    r_text[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    r_text[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    r_text[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    r_text[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    r_text[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    r_text[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    r_text[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    r_text[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    r_text[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";

    var i = Math.floor(79*Math.random())
    return r_text[i]
}




function ffpack(){
   return code
  };
  
 funtion ff1(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`;

return ttinullimage

        }
 funtion ff2(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`;

return ttinullimage

        }
  funtion ff3(text){

        if (message.client.text === '') return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`;

return ttinullimage

        await client.sendMessage( message.from, Message,{ quoted: message })
    });
 funtion ff4(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`;

return ttinullimage

        }
  funtion ff5(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`;

return ttinullimage

        }
  funtion ff6(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`;

return ttinullimage

        }
  funtion ff7(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`;

return ttinullimage

        }
  funtion ff8(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`;

return ttinullimage

        }
  funtion ff9(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`;

return ttinullimage

        }
  funtion ff10(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`;

return ttinullimage

        }
  funtion ff11(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`;

return ttinullimage

        }
  funtion ff12(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`;

return ttinullimage

        }
  funtion ff13(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`;

return ttinullimage

        }
  funtion ff14(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`;

return ttinullimage

        }
  funtion ff15(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`;

return ttinullimage

        }
  funtion ff16(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`;

return ttinullimage

        }
  funtion ff17(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`;

return ttinullimage

        }
  funtion ff18(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`;

return ttinullimage

        }
  funtion ff19(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/f0145f46dff1ed493e62b.jpg`;

return ttinullimage

        }
  funtion ff20(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`;

return ttinullimage

        }
  funtion ff21(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`;

return ttinullimage

        }
  funtion ff22(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`;

return ttinullimage

        }
  funtion ff23(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`;

return ttinullimage

        }
  funtion ff24(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`;

return ttinullimage

        }
  funtion ff25(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`;

return ttinullimage

        }
  funtion ff26(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`;

return ttinullimage

        }
  funtion ff27(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`;

return ttinullimage

        }
   funtion ff28(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`;

return ttinullimage

        }
 funtion ff29(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`;

return ttinullimage

        }
 funtion ff30(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`;

return ttinullimage

        }
 funtion ff31(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`;

return ttinullimage

        }
 funtion ff32(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`;

return ttinullimage

        }
 funtion ff33(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`;

return ttinullimage

        }
  funtion ff34(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`;

return ttinullimage

        }
 funtion ff35(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`;

return ttinullimage

        }
 funtion ff36(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`;

return ttinullimage

        }
 funtion ff37(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`;

return ttinullimage

        }
  funtion ff38(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`;

return ttinullimage

        }
 funtion ff39(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`;

return ttinullimage

        }
 funtion ff40(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`;

return ttinullimage

       }
 funtion ff41(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`;

return ttinullimage

        }
  funtion ff42(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`;

return ttinullimage

        }
funtion ff43(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`;

return ttinullimage

        }
 funtion ff44(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`;

return ttinullimage

        }
  funtion ff45(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`;

return ttinullimage

        }
 funtion ff46(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`;

return ttinullimage

        }
  funtion ff47(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`;

return ttinullimage


        }
  funtion ff48(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`;

return ttinullimage

        }
 funtion ff49(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/7e99ffe44f490fd5ba4bf.jpg`;

return ttinullimage

        }
funtion ff50(text){

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${text}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`;

return ttinullimage

        }
module.exports = { add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50 }
//end
