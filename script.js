const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialCha: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
}

// First, input prompt for character length. Then bool prompt for character types. 

// Assignment Code
var generateBtn = document.querySelector("#generate");  // connects to ID on the button so we can listen for a button click. 
var lowBool = true 
var upBool = true 
var numBool = true 
var specBool = true 
var passwordLength = 8


function generatePassword() { 
  var passwordPrompt = (parseInt(prompt ("How many characters would you like your password to be?", "8 to 128"))) // creates window prompt for character limit and changes user input to an int
  if (passwordPrompt >= 8 && passwordPrompt <= 128 ) {
    passwordLength = passwordPrompt
    lowBool = confirm ("Do you want lowercase letters in your password?")
    upBool = confirm ("Do you want uppercase letters in your password?")
    numBool = confirm ("Do you want numbers in your password?")
    specBool = confirm ("Do you want special characters in your password?")
  }
  else {
    alert ("Please check that you picked a number between 8 and 128 and try again.")
  }
  return ;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password"); // targets password id 
  passwordText.value = password; //rewrites placeholder text to generated password 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   // This listens for button click, the runs writePassword function. 


// window.confirm("sometext");     
// if (confirm("Press a button!")) {
// txt = "You pressed OK!";
// } else {
//  txt = "You pressed Cancel!";
// }
