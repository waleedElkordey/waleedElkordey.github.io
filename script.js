"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").innerHTML = 10;
document.querySelector(".guess").value = 22;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
const win = document.querySelector(".win");
console.log(win);
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);
  // const highScore = document.querySelector(".highscore");
  // console.log(highScore);
  if (!guess) {
    //no inputs
    document.querySelector(".message").textContent = "No Number ⚠";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    // player wins
    document.querySelector(".message").textContent = "Correct Number 🎉";
    document.querySelector(".win").textContent = "You win 🕺🕺💃💃";
    document.querySelector("body").style.backgroundColor = "#60b347 ";

    document.querySelector(".number").style.width = "30rem";
    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    console.log(highScore);
  } else if (guess > secretNumber) {
    if (score > 1) {
      //guess too high
      document.querySelector(".message").textContent = "Too high 🙆‍♂️";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 🤡";
      document.querySelector(".score").innerHTML = 0;
    }
    // guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low 👇";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 🤡";
      document.querySelector(".score").innerHTML = 0;
      document.querySelector(".highscore").innerHTML = 0;
      document.querySelector("body").style.backgroundColor = "#222 ";
    }
  }
});
// again button
let againButton = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Sart guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222 ";
    document.querySelector(".number").style.width = "15rem";
  });
