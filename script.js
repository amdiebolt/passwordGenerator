// Assignment Code
// Variables for all possible characters in the password
var numChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["?","!","@","#","$","%","&"];
var alphaLowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var alphaUpperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// Writing out the password generator function
function generatePassword() {
  var passLength = window.prompt("Please enter desired password length between 8 and 128 characters.")
  if (passLength < 8 && passLength > 128){
    window.alert("You must select a valid length")
  }

  var numConfirm = window.confirm("Would you like to include numbers?")
  var specialConfirm = window.confirm("Would you like to include special characters?")
  var lowerConfirm = window.confirm("Would you like to include lowercase letters?")
  var upperConfirm = window.confirm("Would you like to include uppercase letters?")

  // Hashing out every possible combination of input
  if (numConfirm && lowerConfirm && specialChar && upperConfirm){
    var char = numChar.concat(specialChar, alphaLowerChar, alphaUpperChar)
  }
  else if (numConfirm && lowerConfirm && specialConfirm){
    var char = numChar.concat(specialChar, alphaLowerChar)
  }
  else if (numConfirm && lowerConfirm && upperConfirm){
    var char = numChar.concat(alphaLowerChar, alphaUpperChar)
  }
  else if (lowerConfirm && specialConfirm && upperConfirm){
    var char = specialChar.concat(alphaLowerChar, alphaUpperChar)
  }
  else if (numConfirm && specialConfirm && upperConfirm){
    var char = specialChar.concat(alphaLowerChar, alphaUpperChar)
  }
  else if (specialConfirm && lowerConfirm){
    var char = specialChar.concat(alphaLowerChar)
  }
  else if (numConfirm && specialConfirm){
    var char = numChar.concat(specialChar)
  }
  else if (specialConfirm && upperConfirm){
    var char = specialChar.concat(alphaUpperChar)
  }
  else if (upperConfirm && lowerConfirm){
    var char = alphaUpperChar.concat(alphaLowerChar)
  }
  else if (numConfirm && lowerConfirm){
    var char = numChar.concat(alphaLowerChar)
  }
  else if (numConfirm && upperConfirm){
    var char = numChar.concat(alphaUpperChar)
  }
  else if (numConfirm){
    var char = numChar
  }
  else if (specialConfirm){
    var char = specialChar
  }
  else if (lowerConfirm){
    var char = alphaLowerChar
  }
  else if (upperConfirm){
    var char = alphaUpperChar
  }
  
  var blank = []

  for (var i = 0; i < passLength; i++) {
    newPass = char[Math.floor(Math.random()*char.length)]
    blank.push(newPass);
  }

  var finalPass = blank.join("");
  return finalPass

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



