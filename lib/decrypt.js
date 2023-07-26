function decrypt(session){
    let b = session.split("")
    let c = "",l="",d="",t;
    b.map((m)=>{
        if(c.length<5){
            c += m;
        } else {
            l = session.replace(c,'');
        }
        let q = l.split("");
        q.map((r)=>{
            if(d.length < 4 ){
                d += r; 
            }
        })
    })
    t = c + session.replace(c,'').replace(d,'');
    return t;
    }
    module.exports = {decrypt};
