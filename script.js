function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  const sign = num === 0 ? "rock" : num === 1 ? "paper" : "scissors";

  return sign;
}

function getHumanChoice() {
  const choice = prompt("Enter either rock, paper or scissors:");

  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  )
    return console.log("wrong input");

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    ++humanScore;
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    ++computerScore;
  }
}

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(humanScore, computerScore);
}

playGame(3);
