const choicePool = ["Rock", "Paper", "Scissors"];
TIE_COLOR = "coral";
LOSE_COLOR = "crimson";
WIN_COLOR = "lightgreen";
MAX_POINTS = 5;

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".round-btn");
const userText = document.querySelector("#user-score");
const computerText = document.querySelector("#computer-score");

const resetButton = document.querySelector("#reset-btn");
resetButton.style.display = "none";
resetButton.addEventListener("click", () => {
    resetGame();
});

const resultsContainer = document.querySelector("#results");
const options = document.querySelector(".options");
const instruction = document.querySelector("#instruction");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        playRound(getComputerChoice(), playerSelection);
    });
});

function getComputerChoice() {
    return choicePool[Math.floor(Math.random() * 3)];
};

function playRound(computer, human) {

    if (computer === human) {
        resultsContainer.textContent = `It's a tie!`;
        resultsContainer.setAttribute("style", `color: ${TIE_COLOR};`);
    
    } else if (
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")) {
    
        resultsContainer.textContent = `You Win! ${human} beats ${computer}`;
        resultsContainer.setAttribute("style", `color: ${WIN_COLOR};`);
        humanScore++;
        userText.textContent = humanScore;
    
        if (humanScore === MAX_POINTS) {

            declareWinner();
        };

    } else {

        resultsContainer.textContent = `You lose! ${computer} beats ${human}.`;
        resultsContainer.setAttribute("style", `color: ${LOSE_COLOR};`);
        computerScore++;
        computerText.textContent = computerScore;

        if (computerScore === MAX_POINTS) {

            declareWinner();
        };
    };
};

function declareWinner() {
    if (computerScore > humanScore) {

        resultsContainer.textContent =`You lost! Try again?`;
        resultsContainer.setAttribute("style", `color: ${LOSE_COLOR}; font-size: 40px`);

    } else if (humanScore > computerScore) {

        resultsContainer.textContent =`You win! Go for another round?`;
        resultsContainer.setAttribute("style", `color: ${WIN_COLOR}; font-size: 52px`);

    };

    resetButton.style.display = "block";
    instruction.style.display = "none";
    options.style.display = "none";
};

function resetGame() {

    humanScore = 0;
    userText.textContent = `${humanScore}`;
    computerScore = 0;
    computerText.textContent = `${computerScore}`;

    resultsContainer.textContent = ``;
    resetButton.style.display = "none";
    instruction.style.display = "block";
    options.style.display = "flex";
};
