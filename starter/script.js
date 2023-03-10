// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// 
function getPasswordOptions() {
  var upperCase = confirm("Would you like to have uppercase letters?");
  if (upperCase === true ) {
    possibleCharacters.push(upperCasedCharacters);
    passwordCharacters.push(getRandom(upperCasedCharacters));
  }
  var lowerCase = confirm("Would you like to have lowercase letters?");
  if (lowerCase === true ) {
    possibleCharacters.push(lowerCasedCharacters);
    passwordCharacters.push(getRandom(lowerCasedCharacters));
  }
  var special = confirm("Would you like to have special characters?");
  if (special === true ) {
    possibleCharacters.push(specialCharacters);
    passwordCharacters.push(getRandom(specialCharacters));
  }
  var numeric = confirm("Would you like to have numbers?");
  if (numeric === true ) {
    possibleCharacters.push(numericCharacters);
    passwordCharacters.push(getRandom(numericCharacters));
  }
  var length = prompt("How many characters would you like to have?")
  while(length>128 || length <8){
    //repeat prompt
    alert("Password length must be between 8 and 128 characters, please try again.");
    length = prompt("How many characters would you like to have?");
  }

// If statement to verify if all of your confirms are false, and if so then it would recall the function if none of the prompts are selected
//if all the confirm are true, run this function
if (confirm) {
  // code that runs the next step of the generating password here}
  // if any of them are false, go to else, and run function again
} else {
  getPasswordOptions()
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}

// Function to generate password with user input
// function generatePassword() {}
// Loop method?

// For loops and then output the password
//// --------- For loop to take in passwordCharacters --------- ////
// 1st option
for (let i = 0; i < passwordCharacters.length; i++) {
  text += passwordCharacters[i] + "<br>";
}

// 2nd option
for (let i = 0; index < passwordCharacters.length; i++) {
  const element = passwordCharacters[i];
  
}

//// --------- For loop to take in  possibleCharacters --------- ////
for (let i = 0; i < possibleCharacters.length; i++) {
  text += possibleCharacters[i] + "<br>";
}






// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Add event listener to getPasswordOptions
generateBtn.addEventListener("click", getPasswordOptions);