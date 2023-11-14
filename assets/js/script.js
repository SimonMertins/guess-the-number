// Let DOM content load first
document.addEventListener('DOMContentLoaded', function () {

    // Generate random number between 1-6
    let correctNumber = Math.floor(Math.random() * 6) + 1;
  
    // Get DOM elements
    const answerBox = document.getElementById('answer-box');
    const submitButton = document.querySelector('[data-type="submit"]');
    const scoreElement = document.getElementById('score');
    const incorrectElement = document.getElementById('incorrect');
  
    // Start scores
    let correctGuesses = 0;
    let incorrectGuesses = 0;
  
    submitButton.addEventListener('click', function () {
        // User guess
        const userGuess = parseInt(answerBox.value);
    
        // Check if the guess is correct
        if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 6) {
            if (userGuess === correctNumber) {
                // Correct guess
                correctGuesses++;
    
                // Show the correct number
                const correctNumberElement = document.getElementById('correct-number');
                correctNumberElement.textContent = correctNumber;
    
                // Show the correct number message
                const correctNumberMessage = document.querySelector('.correct-number-message');
                correctNumberMessage.style.display = 'block';
            } else {
                // Incorrect guess
                incorrectGuesses++;
            }
    
            // Update the scores
            scoreElement.textContent = correctGuesses;
            incorrectElement.textContent = incorrectGuesses;
    
            // Reset the answer box for the next guess
            answerBox.value = '';
    
            // Generate a new random number for the next round
            correctNumber = Math.floor(Math.random() * 6) + 1;
        } else {
            alert('Please enter a valid number between 1 and 6.');
        }
    });
});
