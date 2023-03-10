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

var possibleCharacters = [];
var passwordCharacters = [];


function getPasswordOptions() {
  var upperCase = confirm("Would you like to have uppercase letters?");
  if (upperCase === true ) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    passwordCharacters.push(getRandom(upperCasedCharacters));
  }
  var lowerCase = confirm("Would you like to have lowercase letters?");
  if (lowerCase === true ) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    passwordCharacters.push(getRandom(lowerCasedCharacters));
  }
  var special = confirm("Would you like to have special characters?");
  if (special === true ) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    passwordCharacters.push(getRandom(specialCharacters));
  }
  var numeric = confirm("Would you like to have numbers?");
  if (numeric === true ) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    passwordCharacters.push(getRandom(numericCharacters));
  }

  var length = parseInt(prompt("How many characters would you like to have?"))
  while(length>128 || length <8){
    //repeat prompt
    alert("Password length must be between 8 and 128 characters, please try again.");
    length = prompt("How many characters would you like to have?");
  }

  // For loops and then output the password
//// --------- For loop to take in passwordCharacters --------- ////
var password = [];
for (let i = 0; i < array.length; i++) {
  var character = getRandom[possibleCharacters];
  
  password.push(character);
  }

//// --------- For loop to take in  possibleCharacters --------- ////
for (let i = 0; i < array.length; i++) {
password[i] = passwordCharacters[i];
  
  }

console.log(password)

// const finalPassword = ["length", "upperCase", "lowerCase", "specialCharacters"];
let finalText = password.join();

return finalText

// Return the user's responses
// return {
  // length: length,
  // upperCase: upperCase,
 // lowerCase: lowerCase,
 // specialCharacters: specialCharacters,
//  numericCharacters: numericCharacters
 // }

        // Join the password without commas
  // turns the array into a string
  // return finalPassword let finalPassword = password.join('');

 // return finalPassword

// Return the user's responses


}
// Function for getting a random element from an array
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;

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


