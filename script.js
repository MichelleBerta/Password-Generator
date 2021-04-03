//create prompt to ask user if he wants to include upper case letters
//user replies
//create prompt to ask user if he wants to include lower case letters
//user replies
//create prompt to ask user if he wants to include numbers
//user replies

//create prompt to ask user if he wants to include symbols
//user replies
//write function to select random character from each of those categories
//write function to determine how many times selection of characters will need to be performed (looped)
//write function to concatinate returned characters
//write function to log the password

// looks for the generate button on html and listens for click, calls generatePassword function

var generateBtn = document.querySelector("#generate");

// generate characters for password

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecialChar() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// creates an object to store characters
const randomFunction = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumbers,
  special: getRandomSpecialChar,
};

// sets the variables for the generatePassword function
function generatePassword() {
  var passwordLength = 0;

  var shouldContainLowercase = true;

  var shouldContainUppercase = true;

  var shouldContainSpecialChars = true;

  var shouldContainNumbers = true;

  var password = "";

  // asks user for desired length of password and stores response
  passwordLength = prompt(
    "What length of password would you like, enter a number between 8-128",
    ""
  );

  //  makes sure password length meets requirements
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    generatePassword();
  } else {
    shouldContainLowercase = confirm("Would you like to include lower case?");

    shouldContainUppercase = confirm("Would you like to include uppercase?");

    shouldContainSpecialChars = confirm(
      "Would you like to include special characters?"
    );

    shouldContainNumbers = confirm("Would you like to include numbers?");
  }

  // ensures character option is chosen
  if (
    !shouldContainLowercase &&
    !shouldContainUppercase &&
    !shouldContainNumbers &&
    !shouldContainSpecialChars
  ) {
    alert("You must choose at least one option");
  }

  // pulls random option from chosen characters and loops through to desired password length
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * Math.floor());

    // pulls requested characters and stops the loop when criteria is met
    if (shouldContainLowercase && password.length < passwordLength) {
      password = password + getRandomLowerCase();
    }

    if (shouldContainUppercase && password.length < passwordLength) {
      password = password + getRandomUpperCase();
    }

    if (shouldContainNumbers && password.length < passwordLength) {
      password = password + getRandomNumbers();
    }

    if (shouldContainSpecialChars && password.length < passwordLength) {
      password = password + getRandomSpecialChar();
    }
  }

  return password;
}

// Write returned password to the #password input

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener for generate button
generateBtn.addEventListener("click", writePassword);
