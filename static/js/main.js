let gamePageWrapperEl = document.getElementById("game-page-wrapper");
let startGameEl = document.getElementById("start-game");
let gamePlayEl = document.getElementById("game-play");
let gameResultWinEl = document.getElementById("game-result-win");
let gameResultLooseEl = document.getElementById("game-result-loose");
let gameResultTiedEl = document.getElementById("game-result-tied");
let infoPageWrapperEl = document.getElementById("info-page-wrapper");


function showElements(element, display){
  element.style.display = display;
}

function hideElements(element){
  element.style.display = "none";
}

function hideAllElements(){
  // gamePageWrapperEl.style.display = "none";
  // startGameEl.style.display = "none";
  gamePlayEl.style.display = "none";
  gameResultWinEl.style.display = "none";
  gameResultLooseEl.style.display = "none";
  gameResultTiedEl.style.display = "none";
  infoPageWrapperEl  .style.display = "none";
}

function startGame(){
  hideAllElements();
  // showElements(gamePageWrapperEl, "block");
  // showElements(startGameEl, "grid");
}

function main(){
  startGame();
}

main();