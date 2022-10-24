'use strict';
let minNumber = 1;
let maxNumber = 20;
let secretNum = generateRandomNumber(minNumber, maxNumber);
let score = 20;
let highScore = 0;

//check button pressed
document.querySelector('.check').addEventListener('click', checkNumber);
// again button pressed
document.querySelector('.again').addEventListener('click', againClicked);
// change button pressed
document.querySelector('.range').addEventListener('click', changeValue);
console.log(secretNum);
function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (guess > maxNumber || guess < minNumber) {
    displayMessage('Number out of range of ' + minNumber + ' ' + maxNumber);
    // When the num is wrong
  } else if (guess !== secretNum) {
    if (score > minNumber) {
      displayMessage(guess > secretNum ? '📈Too high!' : '📉Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('❌You lost the game!');
      displayScore(0);
    }
  } else if (guess === secretNum) {
    displayMessage('🎉Correct number🎉');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
}

function againClicked() {
  secretNum = generateRandomNumber(minNumber, maxNumber);
  console.log(secretNum);
  score = 20;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('h2').textContent =
    'From ' + minNumber + ' to ' + maxNumber;
}

function changeValue() {
  minNumber = document.querySelector('.min').value;
  maxNumber = document.querySelector('.max').value;
  if (minNumber > maxNumber || maxNumber < minNumber) {
    alert('Minimum number needs to be smaller then maximum');
    minNumber = 1;
    maxNumber = 20;
  } else {
    secretNum = generateRandomNumber(minNumber, maxNumber);
    againClicked();
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function displayScore(scoreMessage) {
  document.querySelector('.score').textContent = scoreMessage;
}

function generateRandomNumber(minNumber, maxNumber) {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
