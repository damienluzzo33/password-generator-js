// Create arrays of chars: lowercase, uppercase, numbers, special chars
var numberCharacters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = [ '!', '@', '#', '$', '%', '^', '&', '*' ];
// Declare variable for the final "random password" result, for the desired password length, for the characters to be randomly selected from to construct final random password, and for the random characters that will be chosen at random to construct final password string, respectively
var randomPassword, passwordLength, passwordCharacters, newRandomCharacter;
// Select button element with id og #generate and store in variable generateBtn
var generateBtn = document.querySelector('#generate');
// Create generate password function to generate a random password for user based on specified criteria
function generatePassword() {
	// Assign declared variable to be empty stings, empty arrays, or zero based on desired built-in type. We do this here so that if the user wants to generate a new password without refreshing the page, they can just click the button again and the values will be reset each time
	passwordCharacters = [];
	randomPassword = "";
	passwordLength = 0;
	newRandomCharacter = "";
	// Prompt user to type in a number between 8 and 128 to determine the length of the random password. If they don't, the while loop will prompt them with the same question until they properly follow the instructions
	while (passwordLength < 8 || passwordLength > 128) {
		// This length will be used in a for loop to iterate through the array of characters
		passwordLength = prompt('How long would you like your new password to be? (choose a number between 8 and 128)');
	}
	// Prompt user to select wither they want to add uppercase letters to the random password
	var uppercaseBoolean = confirm('Would you like to add UPPERCASE letters to your password?');
	// Prompt user to select wither they want to add lowercase letters to the random password
	var lowercaseBoolean = confirm('Would you like to add lowercase letters to your password?');
	// Prompt user to select wither they want to add numeric characters to the random password
	var numberBoolean = confirm('Would you like to add numbers to your password?');
	// Prompt user to select wither they want to add special characters to the random password
	var specialBoolean = confirm('Would you like to add special characters to your password?');
	// When all prompts are answered by user, we generate an array of possible password characters that meet specified criteria
	// if uppercaseBoolean is true, then add uppercase characters to the passwordCharacters array
	if (uppercaseBoolean) passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
	// if lowercaseBoolean is true, then add lowercase characters to the passwordCharacters array
	if (lowercaseBoolean) passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
	// if numberBoolean is true, then add numeric characters to the passwordCharacters array
	if (numberBoolean) passwordCharacters = passwordCharacters.concat(numberCharacters);
	// if specialBoolean is true, then add special characters to the passwordCharacters array
	if (specialBoolean) passwordCharacters = passwordCharacters.concat(specialCharacters);
	// if the user pressed cancel (rejected) all confirm statements, and hence added zero characters to the password characters array, then we return null and break out of the function
	if (passwordCharacters.length === 0) return null;
	else {
		// Otherwise, we iterate through the the password characters array, randomly generating indexes, using those indexes to access password characters, using concatenation to build our randomPassword string
		for (i = 0; i < passwordLength; i++) {
			var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
			newRandomCharacter = passwordCharacters[randomIndex];
			randomPassword = randomPassword.concat(newRandomCharacter);
		}
		// Once the for loop has iterated the amount determined by the desired password length, we return the randomPassword string
		return randomPassword;
	}
}
// Function will write password into the #password textarea with id #password
function writePassword() {
	// Call generate password function and store returned value into variable "password"
	var password = generatePassword();
	// Select textarea with id #password and store reference in variable "passwordText"
	var passwordText = document.querySelector('#password');
	// if the password returned is null, we need to tell the user the unfortunate truth of their decisions... there is no password generated :(
	if (password === null) passwordText.value = "You can't generate a password without characters...";
	// otherwise, we set the value property of textarea HTML tag to be the password that was randomly generated, which will automatically populate the textarea box on the page
	else passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Only used 39 lines of code