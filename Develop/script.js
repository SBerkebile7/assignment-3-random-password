// Assignment code here
var pUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var uppperChoice;
var pLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lowerChoice;
var pNumbers = [1,2,3,4,5,6,7,8,9];
var numbersChoice;
var pCharacters = ['!','@','#','%','-','+','='];
var charChoice;
var passwordChoice
var passwordLength

//You'll need to pull random numbers from here, do a Math.random using the length +1 and grab a value
//Create a for loop that makes the 'i' in it the length of the password length
//Maybe allow the user to choose the value of their choices? When choosing lowercase characters it'll ask for an amount? We shall see.
//If not doing this, make sure that each option is cycled through - do this as a switch or something! Have them select from options
//

function generatePassword () {
  passwordLength = parseInt(window.prompt("What length should the password be? Please choose a length between 8 characters and 128 characters.")); //between 8 and 128
  var password="";

  if(!passwordLength) {
    window.alert("You must choose a length between 8 and 128!");
  }
  else if(passwordLength < 8 || passwordLength > 128) {
    passwordlength = parseInt(window.alert("You must choose a length between 8 and 128!"));
  }
  else {
    uppperChoice = confirm("Will this contain upper case letters?");
    lowerChoice = confirm("Will this contain lower case letters?");
    numbersChoice = confirm("Will this contain numeric values?");
    charChoice = confirm("Will this contain special characters?");
  };

  //None selected
  if(!uppperChoice && !lowerChoice && !numbersChoice && !charChoice) {
    passwordChoice = window.alert("You must choose at least one option");
  }
  //All selected
  else if(uppperChoice && lowerChoice && numbersChoice && charChoice) {
    passwordChoice = pUpperCase.concat(pLowerCase, pNumbers, pCharacters);
  }
  //Three selected
  else if(uppperChoice && lowerChoice && numbersChoice)
  {
    passwordChoice = pUpperCase.concat(pLowerCase, pNumbers);
  }
  else if(uppperChoice && lowerChoice && charChoice){
    passwordChoice = pUpperCase.concat(pLowerCase, pCharacters);
  }
  else if(uppperChoice && numbersChoice && charChoice) {
    passwordChoice = pUpperCase.concat(pNumbers, pCharacters);
  }
  else if(lowerChoice && numbersChoice && charChoice) {
    passwordChoice = pLowerCase.concat(pNumbers, pCharacters);
  }
  //Two selected
  else if(uppperChoice && lowerChoice) {
    passwordChoice = pUpperCase.concat(pLowerCase);
  }
  else if(uppperChoice && numbersChoice) {
    passwordChoice = pUpperCase.concat(pNumbers);
  }
  else if(uppperChoice && charChoice) {
    passwordChoice = pUpperCase.concat(pCharacters);
  }
  else if(lowerChoice && numbersChoice) {
    passwordChoice = pLowerCase.concat(pNumbers);
  }
  else if(lowerChoice && charChoice) {
    passwordChoice = pLowerCase.concat(pCharacters);
  }
  else if(numbersChoice && charChoice) {
    passwordChoice = pNumbers.concat(pCharacters);
  }
  //One selected
  else if(uppperChoice) {
    passwordChoice = pUpperCase;
  }
  else if(lowerChoice) {
    passwordChoice = pLowerCase;
  }
  else if(numbersChoice) {
    passwordChoice = pNumbers;
  }
  else if(charChoice) {
    passwordChoice = pCharacters;
  }

  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var chosenOptions = passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
    password.push(chosenOptions);
    
  }
  var pw = password.join("");
  console.log(pw);
  return pw;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

