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

var characterOptionsLowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var characterOptionsUppercase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var numberOptions = "0 1 2 3 4 5 6 7 8 9";
var symbolOptionsList = "! @ # $ % ^ & * ( ) _ + - . , ? / \\ : ~";

var charLower = characterOptionsLowercase.split(' ');
var charUpper = characterOptionsUppercase.split(' ');
var specialChars = symbolOptionsList.split(' ');
var numericChars = numberOptions.split(' ');


// document.querySelector("#password").value = ""

function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128.");
  passwordLength = parseInt(passwordLength);
  
  if (!passwordLength) return "Password generation cancelled.";
  
  if (!passwordLength) {
    alert("Please enter a valid number.");
    return generatePassword();
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return generatePassword();
  }

  var allCharacters = [];
  
  var includeLowercase = confirm("Click OK to include lowercase characters");
  if (includeLowercase) {
    allCharacters = allCharacters.concat(charLower);
  }
  
  var includeUppercase = confirm("Click OK to include uppercase characters");
  if(includeUppercase) {
    allCharacters = allCharacters.concat(charUpper);
  }
  
  var includeSpecial = confirm("Click OK to include special characters");
  if (includeSpecial) {
    allCharacters = allCharacters.concat(specialChars);
  }
  
  var includeNumbers = confirm("Click OK to include numeric characters");
  if (includeNumbers) {
    allCharacters = allCharacters.concat(numericChars);
  }

 // var randomChoice = Math.floor(Math.random() * allCharacters.length)
  var finalPass = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);

    var character = allCharacters[randomIndex];

    finalPass = finalPass + character;
  }
  
  console.log(finalPass);
  
  return `Your password is ${finalPass}`;
  
}