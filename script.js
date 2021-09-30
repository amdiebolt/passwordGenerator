// Assignment Code
// Variables for all possible characters in the password
var numChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["?","!","@","#","$","%","&"];
var alphaLowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var alphaUpperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


function generatePassword() {
  var passLength = window.prompt("Please enter desired password length between 8 and 128 characters.")
  if (passLength < 8 && passLength > 128){
    window.alert("You must select a valid length")
  }

  var numConfirm = window.confirm("Would you like to include numbers?")
  var specialConfirm = window.confirm("Would you like to include special characters?")
  var lowerConfirm = window.confirm("Would you like to include lowercase letters?")
  var upperConfirm = window.confirm("Would you like to include uppercase letters?")

  if (numConfirm){
    var char = numChar
  }
  else if (numConfirm && specialConfirm){
    var char = numChar.concat(specialChar)
  }
  else if (numConfirm && lowerConfirm && specialChar){
    var char = numChar.concat(specialChar, alphaLowerChar)
  }
  else if (numConfirm && lowerConfirm && specialChar && upperConfirm){
    var char = numChar.concat(specialChar, alphaLowerChar, alphaUpperChar)
  }
  else if (specialConfirm){
    var char = specialChar
  }
  else if (lowerConfirm && specialChar){
    var char = specialChar.concat(alphaLowerChar)
  }
  else if (lowerConfirm && specialChar && upperConfirm){
    var char = specialChar.concat(alphaLowerChar, alphaUpperChar)
  }
  else if (lowerConfirm){
    var char = alphaLowerChar
  }
  else if (lowerConfirm && upperConfirm){
    var char = numChar.concat(alphaLowerChar, alphaUpperChar)
  }
  else if (upperConfirm){
    var char = alphaUpperChar
  }
  for (var i = 0; i < passLength; i++) {
    newPass = char[Math.floor(Math.random()*char.length)]
    }

}

//  //var newPass = char[Math.floor(Math.random()*char.length)]
//   if (window.confirm("Would you like to include numbers?")){
//     char.concat(numChar)
// }
//   if (window.confirm("Would you like to include spcial characters?")){
//     char.concat(specialChar)
// }
//   if (window.confirm("Would you like to include upper case letters?")){
//     char.concat(alphaUpperChar)
// }
//   if (window.confirm("Would you like to include lower case letters?")){
//     char.concat(alphaLowerChar)
//     return newPass 
// }
// }


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

