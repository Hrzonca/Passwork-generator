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

function passwordLength(){
8 < i <128
}
//TODO: click button to generate passward. 
function generatePassword(){
    charSet =[];
//1. propmt user

let passwordLength = prompt('How long do you want your passward? Choose between 8 and 128 charaters'); {
    if (passwordLength <= 8 || passwordLength >= 128) {
        window.alert("Invalid entry, please try again");
    } else { 
let number = confirm('Do you want numbers in your passward?'); {
        if (number) {
            charSet.push.apply(charSet, Number);
            console.log("Number applied");
        } 
let specCharater = confirm('Do you want special charaters?'); {
    if (specCharater) {
        charSet.push.apply(charSet, SpecCharater);
        console.log("specCharater applied");
    }
let upperLetters = confirm('Do you want uppercase letters in your passward?');
    if (upperLetters) {
    charSet.push.apply(charSet, UpperLetters);
    console.log("upperletters applied");

let lowerLetter = confirm('Do you want lowercase letters in your passward?');
    if (lowerLetter) {
    charSet.push.apply(charSet, LowerLetter);
    console.log("lowerletters applied");

    return "not sure how to link this";   
}
}
    console.log(charSet)
}
}}}}
// Write password to the #password input
 function writePassword() {
    var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
    for (let i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * charSet.passwordLength)
        generatedPassword[i] = charSet[index]
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
    const length = passwordLength.apply(passwordLength, Number, SpecCharater, UpperLetters, LowerLetter)

 