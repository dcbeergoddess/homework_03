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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// picking criteria options
// First ask for length then criteria options

function getPasswordOptions () {
  // Get User input
  // convert string into number, parsing, from Dan example
  var passwordLength = parseInt(prompt("How may characters would you like your password to be?"));
   // limit length of password
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters")
  } 
  console.log(passwordLength)

  var chooseLowerCase = confirm("Do you want your password to include lowercase letters?");
  var chooseUpperCase = confirm("Do you want your password to include uppercase letters?");
  var chooseNumber = confirm("Do you want your password to include numbers?");
  var chooseSpecialCharacters = confirm("Do you want your password to include special characters?");
    
  // lowerCase Loop
  if(chooseLowerCase){
    for(var i = 0; i < lowerCase.length; i++){
      console.log(i);
    }
  }
    
  // upperCase Loop
  if(chooseUpperCase){
    for(var i = 0; i < upperCase.length; i++){
      console.log(i);
    }
  }
    
  // number loop
  if(chooseNumber){
    for(var i = 0; i < number.length; i++){
      console.log(i);
    }
  }
    
  // specialCharacters loop
  if(chooseSpecialCharacters){
    for(var i = 0; i < specialCharacters.length; i++){
      console.log(i);
    }
  }
}

