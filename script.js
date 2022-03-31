'use strict';

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardEl = document.getElementById('card-el');
const startButton = document.querySelector('.start');
const newButton = document.querySelector('.new');

//declare var in global scope
let cards, sum, hasStarted, isAlive, num;

//initial variables
const init = () => {
  cards = [];
  sum = 0;
  hasStarted = false;
  isAlive = true;
  num = Math.floor(Math.random() * 10) + 2;
};

init();

//function to generates first 2 cards
const firstTwo = () => {
  for (let i = 0; i < 2; i++) {
    num = Math.floor(Math.random() * 10) + 2;
    cards.push(num);
  }
  sum = cards[0] + cards[1];
  console.log(cards);
  console.log(sum);
};

//function to add all cards in array
const sumCards = () => {
  for (let i = 2; i < cards.length; i++) {
    sum += cards[i];
    sumEl.textContent = `Sum: ${sum}`;
  }
};

//function to chanmge on screen game message
const gameMessage = () => {
  if (sum <= 20) {
    messageEl.textContent = 'Do you want to draw a new card? 🙂';
  } else if (sum === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";
    hasStarted = false;
  } else {
    messageEl.textContent = "You're out of the game! 😭";
    isAlive = false;
  }
};

const startGame = () => {
  if (hasStarted != true && isAlive === true) {
    hasStarted = true;
    firstTwo();
    gameMessage();

    cardEl.textContent = `First card: ${cards[0]} Second card: ${cards[1]}`;
    sumEl.textContent = `Sum: ${sum}`;
  }
};

//function to draw cards
const newCards = () => {
  if (hasStarted != false && isAlive === true) {
    num = Math.floor(Math.random() * 10) + 2;
    cards.push(num);

    sumCards();

    gameMessage();

    console.log(cards);
    console.log(sum);
  }
};

//Event listeners
startButton.addEventListener('click', startGame);
newButton.addEventListener('click', newCards);
