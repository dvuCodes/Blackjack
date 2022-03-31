'use strict';
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardEl = document.getElementById('card-el');
const startButton = document.querySelector('.start');
const newButton = document.querySelector('.new');

// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

const cards = [];
let sum = 0;
let hasStarted = false;
let num = Math.floor(Math.random() * 10) + 2;

//function to generatea first 2 cards
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
  }
};

const startGame = () => {
  if (hasStarted != true) {
    hasStarted = true;
    firstTwo();

    if (sum <= 20) {
      messageEl.textContent = 'Do you want to draw a new card? 🙂';
    } else if (sum === 21) {
      messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";
      hasStarted = false;
    } else {
      messageEl.textContent = "You're out of the game! 😭";
      isAlive = false;
    }

    cardEl.textContent = `First card: ${cards[0]} Second card: ${cards[1]}`;
    sumEl.textContent = `Sum: ${sum}`;
  }
};

//function to draw cards
const newCards = () => {
  if (hasStarted != false) {
    num = Math.floor(Math.random() * 10) + 2;
    cards.push(num);

    sumCards();

    //   isNaN(sum);
    console.log(cards);
    console.log(sum);
  }
};

//Event listeners
startButton.addEventListener('click', startGame);
newButton.addEventListener('click', newCards);
