// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//TODO: click button to generate passward. 
//TODO: set criteria for passward you want to generate
//TODO: be able to select the different criteria
//TODO: be able to pick the length of the passward (longer than 8 but not longer than 128)
//TODO: include lowercase, uppercase, numeric, and special charaters
//TODO: validation page before generating
//TODO: generated passward matches expected criteria
//TODO: passward is displayed 