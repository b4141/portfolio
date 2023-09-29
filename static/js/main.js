let gamePageWrapperEl = document.getElementById("game-page-wrapper");
let startGameEl = document.getElementById("start-game");
let gamePlayEl = document.getElementById("game-play");
let gameResultWinEl = document.getElementById("game-result-win");
let gameResultLoseEl = document.getElementById("game-result-lose");
let gameResultTiedEl = document.getElementById("game-result-tied");
let infoPageWrapperEl = document.getElementById("info-page-wrapper");

const CARDS = ["rock", "paper", "scissors"];
let playerChosenCard = "";
let aiChosenCard = "";


function showElement(element, display) {
  element.style.display = display;
}

function hideElement(element) {
  element.style.display = "none";
}

function hideAllElements() {
  gamePageWrapperEl.style.display = "none";
  startGameEl.style.display = "none";
  gamePlayEl.style.display = "none";
  gameResultWinEl.style.display = "none";
  gameResultLoseEl.style.display = "none";
  gameResultTiedEl.style.display = "none";
  infoPageWrapperEl.style.display = "none";
}

function loadGame() {
  hideAllElements();
  showElement(gamePageWrapperEl, "block");
  showElement(startGameEl, "grid");
}

function startGame() {
  hideAllElements();
  showElement(gamePageWrapperEl, "block");
  showElement(gamePlayEl, "grid");
}

function gameResult(result) {
  console.log(result);
}

function chooseCard(card) {
  if (playerChosenCard === "") {
    playerChosenCard = card;
  }
  if (aiChosenCard === "") {
    aiChosenCard = CARDS[Math.floor(Math.random() * CARDS.length)];
  }

  console.log(playerChosenCard, aiChosenCard);

  switch (playerChosenCard) {
    case "rock":
      switch (aiChosenCard) {
        case "rock":
          gameResult("tie");
          return;
        case "paper":
          gameResult("lose")
          return;
        case "scissors":
          gameResult("win");
          return;
      }

    case "paper":
      switch (aiChosenCard) {
        case "rock":
          gameResult("win");
          return;
        case "paper":
          gameResult("tie");
          return;
        case "scissors":
          gameResult("lose");
          return;
      }

    case "scissors":
      switch (aiChosenCard) {
        case "rock":
          gameResult("lose");
          return;
        case "paper":
          gameResult("win");
          return;
        case "scissors":
          gameResult("tie");
          return;
      }
  }
}

function main() {
  loadGame();
  // startGame();
}

main();