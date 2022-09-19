var generateBtn = document.querySelector("#generate");  // connects to ID on the button so we can listen for a button click. 
var lowercase
var uppercase
var numbers
var specialCharacters

function generateCharacters() {  // Combines variables to get character list. This function is called by and returned to the generatePassword function
  var passwordCha = ""
   if (lowercase) {
     passwordCha += "abcdefghijklmnopqrstuvwxyz"
   }

   if (uppercase) {
     passwordCha += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   }

   if (numbers) {
     passwordCha += "0123456789"
   }

   if (specialCharacters) {
     passwordCha += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
   }

   if (!lowercase && !uppercase && !numbers && !specialCharacters) {  // Stops function and warns user they didn't select any character types
     alert("No character types selected. Please try again.")
   }

   if (lowercase || uppercase || numbers || specialCharacters) { // Sends string with user desired characters only if at least one character type selected
     return passwordCha;
   }
}

function generatePassword() { 
  var passwordLength = (parseInt(prompt ("How many characters would you like your password to be?\n(Please input a number between 8 and 128)", "8 to 128"))) // creates window prompt for character limit and changes user input to an int
  if (passwordLength >= 8 && passwordLength <= 128 ) { // If user submits valid number, continues on to generate password 

    // Confirms which characters the user wants
    lowercase = confirm ("Do you want lowercase letters in your password?\n(Press okay for yes, press cancel for no.)")
    uppercase = confirm ("Do you want uppercase letters in your password?\n(Press okay for yes, press cancel for no.)")
    numbers = confirm ("Do you want numbers in your password?\n(Press okay for yes, press cancel for no.)")
    specialCharacters= confirm ("Do you want special characters in your password?\n(Press okay for yes, press cancel for no.)")

    var passwordCharacters = generateCharacters() // Runs a function to create a string based on user input
    var generatedPassword = ""

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }

    return generatedPassword; // sends a string to writePassword function
  }
  else { // Returns a try again message instead of a password if the user gave an invalid length
    return "Please check that you picked a number between 8 and 128 and try again.";
  }
} 

// Function that calls generate password function, then writes the returned value into the html file
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password"); // targets password id 
  passwordText.value = password; //rewrites placeholder text to generated password 

}

generateBtn.addEventListener("click", writePassword);   // This listens for "generate password" button click, the runs writePassword function. 