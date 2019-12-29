
const firstPlayerDice = document.querySelectorAll(".player-one-dice div");
const secondPlayerDice = document.querySelectorAll(".player-two-dice div");
const leftFlag = document.querySelector(".left-flag");
const rightFlag = document.querySelector(".right-flag");
const firstWins = document.querySelector(".first-wins");
const secondWins = document.querySelector(".second-wins");
const draw = document.querySelector(".draw");
const pressKey = document.querySelector(".press-key-header");

/* render initial view */

renderInitView();

document.getElementById("initial1").classList.remove("hidden");
document.getElementById("initial2").classList.remove("hidden");


/* if key pressed in browser */
document.addEventListener('keypress', roll);
/* if tapped on touchscreen */
document.addEventListener('touchstart', roll);


/* Roll! */
function roll(){

renderInitView();

const number1 = Math.floor(Math.random()*6 + 1);
const number2 = Math.floor(Math.random()*6 + 1);

let firstLanded = firstPlayerDice[number1 - 1];
let secondLanded = secondPlayerDice[number2 - 1];



firstPlayerDice.forEach((element) => element.classList.add("hidden"));
secondPlayerDice.forEach((element) => element.classList.add("hidden"));
firstLanded.classList.remove("hidden");
secondLanded.classList.remove("hidden");
pressKey.classList.add("hidden");

if(number1 > number2){
  leftFlag.classList.remove("invisible");
  firstWins.classList.remove("hidden");
 
}

else if(number2 > number1){

  rightFlag.classList.remove("invisible");
  secondWins.classList.remove("hidden");
  

}

else
  draw.classList.remove("hidden");

    
}

function renderInitView(){
  firstPlayerDice.forEach((element) => element.classList.add("hidden"));
  secondPlayerDice.forEach((element) => element.classList.add("hidden"));
  pressKey.classList.remove("hidden");
  leftFlag.classList.add("invisible");
  rightFlag.classList.add("invisible");
  firstWins.classList.add("hidden");
  secondWins.classList.add("hidden");
  draw.classList.add("hidden");

}

  
