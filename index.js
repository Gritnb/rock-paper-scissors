const choicePool = ["Rock", "Paper", "Scissors"];
NUMBER_OF_ROUNDS = 5;

function capitalizer(str) {
  let letter = str.slice(0, 1).toUpperCase();
  let rest = str.slice(1).toLowerCase();
  return letter.concat(rest);
}
function getComputerChoice() {
  return choicePool[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let input = prompt("What is your choice?").toLowerCase();
  return capitalizer(input);
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let round = 0;

  function playRound(computer, human) {
    if (computer === human) {
      console.log(`It's a tie!`);
    } else if (computer === "Paper" && human === "Rock") {
      console.log(`You lose! ${computer} beats ${human}`);
      computerScore++;
    } else if (computer === "Scissors" && human === "Paper") {
      console.log(`You lose! ${computer} beats ${human}`);
      computerScore++;
    } else if (computer === "Rock" && human === "Scissors") {
      console.log(`You lose! ${computer} beats ${human}`);
      computerScore++;
    } else {
      console.log(`You Win! ${human} beats ${computer}`);
      humanScore++;
    }
  }

  do {
    playRound(getComputerChoice(), getHumanChoice());
    round++;
  } while (round < NUMBER_OF_ROUNDS);

  if (humanScore > computerScore) {
    console.log(`You won the game!`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins this time!`);
  } else {
    console.log(`Game's a tie!`);
  }
}

playGame();
