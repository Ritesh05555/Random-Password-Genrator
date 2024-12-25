let passBox= document.querySelector("#password");
let length =12;

const UpperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="!@#$%^&*()_+-";

const allChars = UpperCase+LowerCase+number+symbol;

function genratePass(){
    let password = "";

    while(length>password.length){
        password=password+allChars[Math.floor(Math.random()* allChars.length)]
    }
    passBox.value=password;
};