const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialCha: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
}

// First, input prompt for character length. Then bool prompt for character types. 

// Assignment Code
var generateBtn = document.querySelector("#generate");  // connects to ID on the button so we can listen for a button click. 
var lowBool = true;
var upBool = true;
var numBool = true;
var speBool = true;
var passwordLength = 8

// window.confirm("sometext");     
// if (confirm("Press a button!")) {
// txt = "You pressed OK!";
// } else {
//  txt = "You pressed Cancel!";
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword({  // generate password here. 

  });
  var passwordText = document.querySelector("#password"); // targets password id 
  passwordText.value = password; //rewrites placeholder text to generated password 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   // This listens for button click, the runs writePassword function. 


// 