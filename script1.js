let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const messageDiv = document.getElementById('message');
    const guess = Number(guessInput.value);
    attempts++;

    if (guess < 1 || guess > 100) {
        messageDiv.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (guess === secretNumber) {
        messageDiv.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessInput.disabled = true;
    } else if (guess < secretNumber) {
        messageDiv.textContent = 'Too low! Try again.';
    } else {
        messageDiv.textContent = 'Too high! Try again.';
    }
}
