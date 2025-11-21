/** @format */

// variables and DOM
let number;
let attempts = 0;
const numberOfAttempts = 15;

const input = document.getElementById("guess");
const button = document.getElementById("btn");
const feedback = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const reset = document.getElementById("btn-reset");

// Start Function
function start() {
	// random number generator
	number = Math.floor(Math.random() * 50) + 1;
	console.log(number, "is the secret number");

	attempts = 0;
	attemptsDisplay.textContent = attempts;
	feedback.textContent = "Guess a number between 1-50";
	feedback.style.color = "green";

	input.disabled = false;
	button.disabled = false;

	input.value = "";
	input.focus();
}

// game start
start();

// function to check the guess
function check() {
	// get number from input
	const userGuess = Number(input.value);

	// checking input using conditionals
	if (!input.value || isNaN(userGuess)) {
		feedback.textContent = "Please enter a valid number";
		feedback.style.color = "red";

		return;
	}

	if (userGuess < 1 || userGuess > 50) {
		feedback.textContent = "Please enter a number between 1-50";
		feedback.style.color = "red";

		return;
	}

	// loop to count number of attempts
	attempts++;
	attemptsDisplay.textContent = attempts;

	if (userGuess === number) {
		feedback.textContent =
			"You Won! Number was " + number + ". Attempts: " + attempts;
		feedback.style.color = "green";
		endGame();
	} else if (attempts > numberOfAttempts) {
		feedback.textContent = "Game Over! The number was " + number;
		feedback.style.color = "red";
		endGame();
	} else {
		if (userGuess < number) {
			feedback.textContent = "Too low! Try higher number.";
		} else {
			feedback.textContent = "Too high! Try lower.";
		}
		feedback.style.color = "blue";
	}

	// clear input
	input.value = "";
	input.focus();
}

// endGame

function endGame() {
	input.disabled = true;
	button.disabled = true;
}

// event-listener
button.addEventListener("click", check);

reset.addEventListener("click", start);

input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		check();
	}
});
