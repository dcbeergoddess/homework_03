// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// picking critiers options

function getPasswordOptions () {
  // convert string into number, parsing
  var passwordLength = parseInt(prompt("How may characters would you like your password to be?"));
   // limit length of password
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Pawwso")
  } 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create arrays with differnt character sets

var number = ["0", "1", "2","3","4","5","6","7","8","9"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!","@","#","$","%","^","&","(",")","-","_","+","=","|",";",":"];

console.log(number);
console.log(upperCase);
console.log(lowerCase);
console.log(specialCharacters);

// Do not need to worry about changing dom.... 
// NEED have to have function generatePassword 
    // do you pass anything in??
    // consider using more than one funciton and calling functions within funcitons\
    // maybe use while loops
    // use for loops (looking in Erik's google doc)

    // write simple functions. console.log in to make sure that things are working
    // do little increments and then test that functionality
    // TEST THE LITTLE THINGS

// PSA have homework instruction right next to!!! pay attention to user story is part of acceptance criteria
// maybe create a random  function
// make very long functions and maybe go back and condense
// Interaction with the DOM (code given by homework it is already there but read up on it)
// generate button linking between html and js. FYI. 
// only writing js code for this assignment

// Walk through solutions in lessons and understand what is going on





