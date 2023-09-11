// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random character from a given character set
function getRandomCharacter(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

// Function to generate a secure password based on user criteria
function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  var passwordChars = '';
  var password = '';

  // Prompt for password length and validate it
  var passwordLength = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }

  // Prompt for character types to include and validate at least one is selected
  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('At least one character type must be selected.');
    return;
  }

  // Build the character set based on selected criteria
  if (includeLowercase) passwordChars += lowercaseChars;
  if (includeUppercase) passwordChars += uppercaseChars;
  if (includeNumeric) passwordChars += numericChars;
  if (includeSpecial) passwordChars += specialChars;

  // Generate the password
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(passwordChars);
  }

  return password;
}

// Function to write the generated password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
