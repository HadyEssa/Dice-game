"use strict";
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const curren0 = document.querySelector("#current--0");
const curren1 = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const dice0 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
score0.textContent = 0;
score1.textContent = 0;
dice0.classList.add("hidden");
let scores = [0, 0];
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
let currentScore = 0;
let activePlayer = 0;
let play = true;
btnRoll.addEventListener("click", function () {
  if (play === true) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    dice0.classList.remove("hidden");
    dice0.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#score--${activePlayer}`).textContent =
        currentScore;
      //error lline
      // curren0.textContent = currentScore;
      /* Switching player when dice is 1: When the dice result is 1, you are updating the current score for both players, which causes the wrong player's score to be displayed. The active player's current score should be reset to 0 after a roll of 1.*/
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (play) {
    scores[activePlayer] += currentScore;
    document;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      play = false;
      dice0.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  play = true;
  score0.textContent = 0;
  score1.textContent = 0;
  curren0.textContent = 0;
  curren1.textContent = 0;
  dice0.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
});
