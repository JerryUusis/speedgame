// DOM variables

const startButton = document.querySelector("#start-button");
const endButton = document.querySelector("#end-button");
const circles = document.querySelectorAll(".circle");
const scoreDisplay = document.querySelector(".score");
let score = 0;

circles.forEach((circle, i) => {
    circle.addEventListener("click", () => clickCircle(i));
})

// Functions

function startGame() {
    console.log("Game started");
}

function endGame() {
    console.log("Game ended");
}

function clickCircle(i) {
    console.log("Circle was clicked " + i);
    score += 1;
    scoreDisplay.textContent = score;
}

const getRandomNumber = (min, max) => {
    Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1,4));

// Event listeners

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);