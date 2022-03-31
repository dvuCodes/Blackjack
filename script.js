'use strict';

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardEl = document.getElementById('card-el');
const startGameBtn = document.querySelector('.start');
const newCardBtn = document.querySelector('.new-card');
const newGameBtn = document.querySelector('.new-game');

//declare var in global scope
let cards, sum, hasStarted, isAlive, num;

//initial variables
const init = () => {
  cards = [];
  sum = 0;
  hasStarted = false;
  isAlive = true;
  num = Math.floor(Math.random() * 10) + 2;

  messageEl.textContent = 'Want to play a round?';
  sumEl.textContent = 'Sum: ';
  cardEl.textContent = 'Cards: ';
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
    isAlive = false;
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
  }
};

//function to start new game
const newGame = () => {
  init();
};

//Event listeners
startGameBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', newCards);
newGameBtn.addEventListener('click', newGame);
