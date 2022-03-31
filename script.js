'use strict';
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardEl = document.getElementById('card-el');
const startButton = document.querySelector('.start');
const newButton = document.querySelector('.new');

//default values
let firstCard = 10;
let secondCard = 11;
// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

const cards = [];
let sum = 0;

console.log(sum);

const sumCards = () => {
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
};

const startGame = () => {
  if (sum <= 20) {
    messageEl.textContent = 'Do you want to draw a new card? 🙂';
  } else if (sum === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You're out of the game! 😭";
    isAlive = false;
  }

  cardEl.textContent = `First card: ${firstCard} Second card: ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
};

//function to draw cards
const newCards = () => {
  let num = Math.floor(Math.random() * 10) + 2;
  cards.push(num);

  sumCards();

  //   isNaN(sum);
  console.log(cards);
  console.log(sum);
  return sum;
};

startButton.addEventListener('click', startGame);
newButton.addEventListener('click', newCards);
