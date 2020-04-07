// Create Arrays with different character sets include empty one for allowed characters
var allowedCharacters = []
var number = ["0", "1", "2","3","4","5","6","7","8","9"]
console.log(number)
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperCase)
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCase)
//backslash "\"" did not work as special character in array. characters taken from resource provided in homework ReadMe
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",";",":","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
console.log(specialCharacters)

console.log(allowedCharacters);
console.log(number.length);
console.log(upperCase.length);
console.log(lowerCase.length);
console.log(specialCharacters.length);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(allowedCharacters);
  var passwordText = document.querySelector("#password");

  console.log(password)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// picking criteria options
// First ask for length then criteria options

function getPasswordOptions (number, upperCase, lowerCase, specialCharacters) {
  // Get User input
  // convert string into number, parsing, from Dan example, had problems getting any prompt to come up???
  var passwordLength = parseInt(prompt("How may characters would you like your password to be?"));
   // limit length of password
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters")
  } 
  console.log(passwordLength)

  var chooseNumber = confirm("Do you want your password to include numbers?");
  var chooseUpperCase = confirm("Do you want your password to include uppercase letters?");
  var chooseLowerCase = confirm("Do you want your password to include lowercase letters?");
  var chooseSpecialCharacters = confirm("Do you want your password to include special characters?");
    
  // number loop
  if (chooseNumber){
    for(var i = 0; i < number.length; i++){
      // push to allowedCharacter array (will do for all the following loops)
      allowedCharacters.push(i);
      console.log(i);
    }
  }
  
  // upperCase Loop
  if(chooseUpperCase){
    for(var i = 0; i < upperCase.length; i++){
      allowedCharacters.push(i);
      console.log(i);
    }
  }
  
  // lowerCase Loop
  if(chooseLowerCase){
    for(var i = 0; i < lowerCase.length; i++){
      allowedCharacters.push(i);
      console.log(i);
    }
  }
      
  // specialCharacters loop
  if(chooseSpecialCharacters){
    for(var i = 0; i < specialCharacters.length; i++){
      allowedCharacters.push(i);
      console.log(i);
    }
  }
  // generate loop for invalid options
  if(allowedCharacters){
  // figure out what to put here 
  }
}

  /* GARY NOTES:ONE BIG ARRAY that holds all possible characters in the solution
  Create an empty string for the final password
  Loop from 1 to the number of characters in the password  // ex 100
  Determine a random number between 0 and the length-1 of our ONE BIG ARRAY
  Whatever that random index is, grab that value, and add it to the password string */

  // Random index possibilty. 
  var finalPassword = ("")
  var finalPassword = Math.floor(Math.random() * finalPassword.length) + 1;
  console.log(finalPassword)
  return finalPassword