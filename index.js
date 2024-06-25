/** @format */

let guestScore = document.getElementById("guest-score");
let homeScore = document.getElementById("home-score");
let home = 0;
let away = 0;

function homAddOne() {
  home += 1;
  homeScore.textContent = home;
}

function homAddTwo() {
  home += 2;
  homeScore.textContent = home;
}

function homAddThree() {
  home += 3;
  homeScore.textContent = home;
}

function awAddOne() {
  away += 1;
  guestScore.textContent = away;
}

function awAddTwo() {
  away += 2;
  guestScore.textContent = away;
}

function awAddThree() {
  away += 3;
  guestScore.textContent = away;
}
