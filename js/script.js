let playerScore = 0;
let computerScore = 0;
const CHOICES = ["rock", "paper", "scissors"];



function getComputerChoice() {
    const computerChoice = CHOICES[(Math.floor(Math.random() * CHOICES.length))];
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
    const computerChoice = getComputerChoice();
    const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
    const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
    const outcomeDisplay = document.getElementById('outcomeDisplay')
    let result = ''
    
    if (playerChoice === computerChoice) {
      result = "It's a Tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      playerScore++;
      result = "Congratulations, you won!";
    } else {
      computerScore++;
      result = "Sorry, computer won!";
    }

    playerChoiceDisplay.innerText = `Player: ${playerChoice}`;
    computerChoiceDisplay.innerText = `Computer: ${computerChoice}`;
    outcomeDisplay.innerText = result;
  };
getPlayerChoice();