// DOM variables

const startButton = document.querySelector("#start-button");
const endButton = document.querySelector("#end-button");
const circles = document.querySelectorAll(".circle");
const scoreDisplay = document.querySelector(".score");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
let score = 0;
let timer;
let timerSpeed = 1000;
let activeNumber = 0;
let rounds = 0;

// Functions

const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

function clickCircle(i) {
    if (i !== activeNumber) {
        return endGame();
    }
    rounds--;
    score += 1;
    scoreDisplay.textContent = score;
}

circles.forEach((circle, i) => {
    circle.addEventListener("click", () => clickCircle(i));
})

function enableEvents() {
    circles.forEach(circle => {
        circle.style.pointerEvents = "auto";
    })
}

function startGame() {
    if (rounds >= 3) {
        return endGame();
    }
    
    enableEvents();
    // Sets the active circle as a random number
    const newActive = pickNewNumber(activeNumber);

    // Adds .active for .circle with the active number and takes active class away from previous active number
    circles[newActive].classList.toggle("active");
    circles[activeNumber].classList.remove("active");

    // Resets the active number using pickNewNumber function
    activeNumber = newActive;

    timer = setTimeout(startGame, timerSpeed);

    timerSpeed -= 10;
    rounds++;

    function pickNewNumber(activeNumber) {
        const newActive = getRandomNumber(0, 3);

        if (newActive !== activeNumber) {
            console.log(newActive);
            return newActive;
        } else {
            return pickNewNumber(activeNumber)
        }
    }
}

function endGame() {
    clearTimeout(timer);
    circles.forEach(item => item.classList.remove("active"));
    overlay.style.display = "flex";
}

function resetGame() {
    window.location.reload();
}

function closeModal() {
    resetGame();
}

// Event listeners

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
closeButton.addEventListener("click", closeModal);