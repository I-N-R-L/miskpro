const cfonts = require('cfonts');


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
function inrlFont(text){
cfonts.say(text, {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 0,           // define letter spacing
	lineHeight: 0,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});
}

module.exports = { add, subtract, multiply, division, qrcode, base64e, base64d, age, inrlFont }
//end
