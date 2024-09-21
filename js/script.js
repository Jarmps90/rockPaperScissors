let humanScore = 0;
let computerScore = 0;
const CHOICES = ["rock", "paper", "scissors"];



function getComputerChoice() {
    const computerChoice = CHOICES[(Math.floor(Math.random() * CHOICES.length))];
    console.log(computerChoice)
    return computerChoice;
};

function getPlayerChoice() {
  const playerChoiceBtn = document.querySelectorAll('button');
  playerChoiceBtn.forEach((button) => {
    button.addEventListener('click', () => {
      playGame(button.id)
    });
  });
};

function playGame(playerChoice) {
    const computerChoice = getComputerChoice()
    let result = ''
    if (playerChoice === computerChoice) {
      result = "It's a Tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      result = "Congratulations, you won!";
    } else {
      computerScore++;
      result = "Sorry, computer won!";
    }
  
};
 