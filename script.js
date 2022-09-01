// Assignment Code
//arrays that will be used
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specCharater = ['%', '!', '#', '$', '&', '+', '!', '?', '(', ')']
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let charSet = []
let generatedPassword = []

var generateBtn = document.querySelector("#generate");


//promting the user which options they would like to use. 
function generatePasswordOptions() {

    var passwordLength = prompt('How long do you want your passward? Choose between 8 and 128 charaters');
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Invalid entry, please try again");
        return null;
    } else {
        var number = confirm('Do you want numbers in your passward?');
        if (number) {

            console.log("Number applied");

        }
        var specCharater = confirm('Do you want special charaters?');
        if (specCharater) {
            console.log("specCharater applied");

        }
        var upperLetters = confirm('Do you want uppercase letters in your passward?');
        if (upperLetters) {
            console.log("upperletters applied");

        }
        var lowerLetter = confirm('Do you want lowercase letters in your passward?');
        if (lowerLetter) {

            console.log("lowerletters applied");

        }
        var passwordOptions = {
            passwordLength, number, specCharater, upperLetters, lowerLetter


        }
    } return passwordOptions;
}

//generating password based on if they answered true. allows the true statements to be stored in the charset array and pushed all the arrays into the passward array to be used in the password. 
function generatePassword() {
    var options = generatePasswordOptions();
    var charSet = [];
    var password = [];

    if (options.number === true) {

        for (let i = 0; i < options.passwordLength; i++) {
            var index = Math.floor(Math.random() * number.length);
            var char = number[index];
            charSet.push(char)
        }
    }
    if (options.specCharater === true) {

        for (let i = 0; i < options.passwordLength; i++) {
            var index = Math.floor(Math.random() * specCharater.length);
            var char = specCharater[index];
            charSet.push(char)
        }
    }
    if (options.upperLetters === true) {

        for (let i = 0; i < options.passwordLength; i++) {
            var index = Math.floor(Math.random() * upperLetters.length);
            var char = upperLetters[index];
            charSet.push(char)
        }
    }
    if (options.lowerLetter === true) {

        for (let i = 0; i < options.passwordLength; i++) {
            var index = Math.floor(Math.random() * lowerLetter.length);
            var char = lowerLetter[index];
            charSet.push(char)
        }
    }


    for (let i = 0; i < options.passwordLength; i++) {
        var index = Math.floor(Math.random() * charSet.length);
        var char = charSet[index];
        password.push(char)
    }

    return password.join("");

}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


