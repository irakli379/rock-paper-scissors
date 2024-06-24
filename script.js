let humanScore = 0;
let computerScore = 0;
let winText;

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  const sign = num === 0 ? "rock" : num === 1 ? "paper" : "scissors";

  return sign;
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) return alert("no value");

  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  )
    winText = "wrong input";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    winText = `You win! ${humanChoice} beats ${computerChoice}.`;
    ++humanScore;
  } else if (humanChoice === computerChoice) {
    winText = "It's a tie!";
  } else {
    winText = `You lose! ${computerChoice} beats ${humanChoice}`;
    ++computerScore;
  }
}

// DOM manipulation code
const body = document.querySelector("body");
const cont = document.createElement("div");
const winner = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const announce = document.createElement("h1");

body.appendChild(cont);
cont.append(btnPaper, btnRock, btnScissors, winner, announce);

cont.setAttribute("class", "cont");
btnPaper.textContent = "Paper";
btnRock.textContent = "Rock";
btnScissors.textContent = "Scissors";

const buttons = document.querySelectorAll("button");

const btns = Array.from(buttons);
console.log(btns);

btns.forEach((cur) => {
  cur.addEventListener("click", function () {
    playRound(cur.textContent, getComputerChoice());
    winner.textContent = `${winText}. your score is ${humanScore}, computer score is ${computerScore}`;

    if (humanScore >= 5 && computerScore < 5) {
      announce.textContent = "You are the WINNER!";
    } else if (computerScore >= 5 && humanScore < 5) {
      announce.textContent = "Computer wins!";
    }
  });
});
