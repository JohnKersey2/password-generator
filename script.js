const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specCha: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
}

var generateBtn = document.querySelector("#generate");  // connects to ID on the button so we can listen for a button click. 
var lowBool
var upBool
var numBool
var specBool 
var passwordLength 


function generatePassword() { 
  var passwordPrompt = (parseInt(prompt ("How many characters would you like your password to be?", "8 to 128"))) // creates window prompt for character limit and changes user input to an int
  if (passwordPrompt >= 8 && passwordPrompt <= 128 ) { // If user submits valid number, continues on to generate password 
    passwordLength = passwordPrompt

    // Confirms which characters the user wants
    lowBool = confirm ("Do you want lowercase letters in your password?")
    upBool = confirm ("Do you want uppercase letters in your password?")
    numBool = confirm ("Do you want numbers in your password?")
    specBool = confirm ("Do you want special characters in your password?")



    return ;
  }
  else { // Returns a try again message instead of a password
    return "Please check that you picked a number between 8 and 128 and try again.";
  }
  
} 


// Function that calls generate password function, then writes the returned value into the html file
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password"); // targets password id 
  passwordText.value = password; //rewrites placeholder text to generated password 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   // This listens for button click, the runs writePassword function. 

