// Let DOM content load first
document.addEventListener('DOMContentLoaded'), function () {

// Generate random number between 1-6
const correctNumber = Math.floor(Math.random() * 6) + 1;

// Get DOM elements
const answerBox = document.getElementById('answer-box');
const submitButton = document.querySelector('[data-type="submit"]');
const scoreElement = document.getElementById('score');
const incorrectElement = document.getElementById('incorrect');

//Start scores
let correctGuesses = 0;
let incorrectGuesses = 0;

// Click event listner to submit button
submitButton.addEventListener('click', function () {

//User guess
    const userGuess = parseInt(answerBox.value);
}
}