function add(num1,num2){
let result = -(-num1 - num2)
data = num1+"+"+num2"="result;
return data;
};

function subtract(num1,num2){
let result = num1 - num2
data = num1+"-"+num2"="result;
return data;
};

function multiply(num1,num2){
let result = num1 * num2
data = num1+"×"+num2"="result;
return data;
};

function division(num1,num2){
let result = num1 / num2
data = num1+"÷"+num2"="result;
return data;
};

function qrcode(text){
           return = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`;
};

function base64e(text){
           return = btoa(text);
}

function base64d(text){
           return = atob(text);
}

module.exports = { add, subtract, multiply, division, qrcode, base64e, base64d }
