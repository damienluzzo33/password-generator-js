// Create arrays of chars: lowercase, uppercase, numbers, special chars
var numberCharacters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = [ '!', '@', '#', '$', '%', '^', '&', '*' ];
var randomPassword = "";
var passwordCharacters = [];
var passwordLength = 0;
var newRandomCharacter = "";

// Assignment Code
var generateBtn = document.querySelector('#generate');
// Create generate password function
function generatePassword() {
	// Prompt user to type in a number between 8 and 128 to determine the length of the random password
	while (passwordLength < 8 || passwordLength > 128) {
		passwordLength = prompt('How long would you like your new password to be? (choose a number between 8 and 128)');
	}

	var uppercaseBoolean = confirm('Would you like to add UPPERCASE letters to your password?');
	var lowercaseBoolean = confirm('Would you like to add lowercase letters to your password?');
	var numberBoolean = confirm('Would you like to add numbers to your password?');
	var specialBoolean = confirm('Would you like to add special characters to your password?');

	if (uppercaseBoolean) {
		passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
	}
	if (lowercaseBoolean) {
		passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
	}
	if (numberBoolean) {
		passwordCharacters = passwordCharacters.concat(numberCharacters);
	}
	if (specialBoolean) {
		passwordCharacters = passwordCharacters.concat(specialCharacters);
	}

	for (i = 0; i < passwordLength; i++) {
		var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
		newRandomCharacter = passwordCharacters[randomIndex];
		randomPassword = randomPassword.concat(newRandomCharacter);
	}
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// When generate button is clicked, prompt user with a series of prompts for password criteria

// This length will be used in a for loop to iterate through the array of characters determined by their responses to the

// Prompt user to select wither they want to add lowercase letters to the random password

// Prompt user to select wither they want to add uppercase letters to the random password

// Prompt user to select wither they want to add numeric characters to the random password

// Prompt user to select wither they want to add special characters to the random password

// When all prompts are answered by user, then generate a random password that meets all criteria specified

// When password is generate, display the randomized password in the text area so that user can use it
