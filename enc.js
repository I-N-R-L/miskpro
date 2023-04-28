let a = "sdhfghdgfhdfyeagrhdbfhkdgrkagfkjasdgfkjfd"
let b = a.split("")
let c = "",l="",d=""
b.map((m)=>{
    if(c.length<5){
        c += m;
        l += m;
    } else {
        c = l +"inrl"
        //d = l;
    }
    d =c+a.replace(l,'')
})
