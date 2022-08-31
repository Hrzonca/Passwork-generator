// Assignment Code
//TODO: include lowercase, uppercase, numeric, and special charaters
const Number = ['1','2','3','4','5','6','7','8','9','0']
const SpecCharater = ['%','!','#','$','&','+','!','?', '(', ')']
const UpperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const LowerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

let charSet = []
let generatedPassword = []

//problems: only displaying 72 so the user input isnt working or linked to something. password length not showing up in console log. password not generating in box


var generateBtn = document.querySelector("#generate");


//TODO: click button to generate passward. 
function generatePassword(){
    charSet =[];
//1. propmt user

var passwordLength = prompt('How long do you want your passward? Choose between 8 and 128 charaters'); {
    if (passwordLength <= 8 || passwordLength >= 128) {
        window.alert("Invalid entry, please try again");
    } else { 
var number = confirm('Do you want numbers in your passward?'); {
        if (number) {
            charSet.push.apply(charSet, Number);
            //const random = Math.floor(Math.random() * Number.length)
            console.log("Number applied");
            //return number;
        } 
var specCharater = confirm('Do you want special charaters?'); {
    if (specCharater) {
        charSet.push.apply(charSet, SpecCharater);
        console.log("specCharater applied");
        //return specCharater;
    }
var upperLetters = confirm('Do you want uppercase letters in your passward?');
    if (upperLetters) {
    charSet.push.apply(charSet, UpperLetters);
    console.log("upperletters applied");
    //return upperLetters;
    }
var lowerLetter = confirm('Do you want lowercase letters in your passward?');
    if (lowerLetter) {
    charSet.push.apply(charSet, LowerLetter);
    console.log("lowerletters applied");
    //return lowerLetter
}
}
function index(passwordLength, number, specCharater, upperLetters, lowerLetter) {
    return index;

}
    console.log(charSet)
   
}
}}}

// Write password to the #password input
 function writePassword() {
    var password = generatePassword();
var passwordText = document.querySelector("#password");

//need help right here 
passwordText.value = password;
    for (let i = 0; i < index; i++) {
        var index = Math.floor(Math.random() * charSet.passwordLength)
        generatedPassword[i] = index
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
    //const length = passwordLength.apply(passwordLength, Number, SpecCharater, UpperLetters, LowerLetter)

 