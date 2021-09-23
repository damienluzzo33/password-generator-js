// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// When generate button is clicked, prompt user with a series of prompts for password criteria

// Prompt user to type in a number between 8 and 128 to determine the length of the random password

// This length will be used in a for loop to iterate through the array of characters determined by their responses to the 

// Prompt user to select wither they want to add lowercase letters to the random password

// Prompt user to select wither they want to add uppercase letters to the random password

// Prompt user to select wither they want to add numeric characters to the random password

// Prompt user to select wither they want to add special characters to the random password

// When all prompts are answered by user, then generate a random password that meets all criteria specified

// When password is generate, display the randomized password in the text area so that user can use it