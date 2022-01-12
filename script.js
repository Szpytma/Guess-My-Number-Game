'use strict';

const generateRandomNo = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateRandomNo();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const changeNumberContent = function (content) {
  document.querySelector('.number').textContent = content;
};

const changeScoreContent = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number!⛔');
  }
  // Number Out of bounbds
  else if (guess < 1 || guess > 20) {
    displayMessage('Out of bounds!!! 👀 Please choose number between 1 and 20');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');

    changeBackground('#60b347');

    changeNumberWidth('30rem');

    changeNumberContent(secretNumber);

    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      score--;
      changeScoreContent(score);
    } else {
      displayMessage('💥You lost the game');
      changeScoreContent(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateRandomNo();

  displayMessage('Start guessing...');

  changeScoreContent(score);

  changeNumberContent('?');

  document.querySelector('.guess').value = '';

  changeNumberWidth('15rem');

  changeBackground('#222');
});
