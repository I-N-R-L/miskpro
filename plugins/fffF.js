const _0x144f77=_0x130f;(function(_0x2e067b,_0x4940ae){const _0x5680d1=_0x130f,_0x3ef73e=_0x2e067b();while(!![]){try{const _0x58a563=-parseInt(_0x5680d1(0xb2))/0x1+parseInt(_0x5680d1(0xac))/0x2*(-parseInt(_0x5680d1(0xa9))/0x3)+-parseInt(_0x5680d1(0xad))/0x4+-parseInt(_0x5680d1(0xb6))/0x5+-parseInt(_0x5680d1(0xb4))/0x6+-parseInt(_0x5680d1(0xb3))/0x7*(-parseInt(_0x5680d1(0xb7))/0x8)+parseInt(_0x5680d1(0xae))/0x9*(parseInt(_0x5680d1(0xa4))/0xa);if(_0x58a563===_0x4940ae)break;else _0x3ef73e['push'](_0x3ef73e['shift']());}catch(_0x99a8e5){_0x3ef73e['push'](_0x3ef73e['shift']());}}}(_0x47ae,0x84264));function _0x47ae(){const _0x2fdc43=['downloadMediaMessage','1332575KyTLtT','2296RxynCB','261090GBuntN','76a050f031972d9f27e329d767dd988f','from','sendMessage','imageMessage','3279XeeqCt','videoMessage','quoted','534eyxMBY','1820792lWHmCM','549ICSSfL','imgbb-uploader','client','urli','226426WBFCsA','6860HsmnNV','555930SKNssJ'];_0x47ae=function(){return _0x2fdc43;};return _0x47ae();}function _0x130f(_0x2ebd00,_0x4b6dd7){const _0x47ae15=_0x47ae();return _0x130f=function(_0x130f31,_0x5b2326){_0x130f31=_0x130f31-0xa4;let _0x5cb580=_0x47ae15[_0x130f31];return _0x5cb580;},_0x130f(_0x2ebd00,_0x4b6dd7);}const imgbbUploader=require(_0x144f77(0xaf)),bots=require('../events'),api=_0x144f77(0xa5);bots['addCommand']({'pattern':[_0x144f77(0xb1)],'desc':'set\x20full\x20size\x20profile\x20picture','sucReact':'⛰️','category':['all']},async(_0x190a79,_0x3a9d8a)=>{const _0x355c32=_0x144f77;let _0x119aaa=_0x190a79[_0x355c32(0xab)][_0x355c32(0xa8)]||_0x190a79[_0x355c32(0xb0)][_0x355c32(0xaa)];if(!_0x119aaa)return await _0x3a9d8a['sendMessage'](_0x190a79[_0x355c32(0xa6)],{'text':'*Reply\x20to\x20a\x20image/video\x20to\x20url.*'},{'quoted':_0x190a79});let _0x180744=await _0x3a9d8a[_0x355c32(0xb5)](_0x119aaa);return imgbbUploader(api,_0x180744)['then'](_0x254665=>console['log'](_0x254665['url'])),await _0x3a9d8a[_0x355c32(0xa7)](_0x190a79[_0x355c32(0xa6)],{'text':inrl},{'quoted':_0x190a79});});
