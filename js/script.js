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
    const outcomeDisplay = document.getElementById('outcomeDisplay');
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    
    let result = ''
    
    if (playerChoice === computerChoice) {
      result = "It's a Tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      result = "Congratulations, you won!";
      playerScore++;
      playerScoreDisplay.textContent = `Player score: ${playerScore} `;
      
    } else {
      result = "Sorry, computer won!";
      computerScore++;
      computerScoreDisplay.textContent = `Computer score: ${computerScore}`
      
    }
    playerChoiceDisplay.innerText = `Player: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    computerChoiceDisplay.innerText = `Computer: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    outcomeDisplay.innerText = result;
    

    if (result === "Congratulations, you won!") {
      outcomeDisplay.style.color = 'green';
    } else if (result === "Sorry, computer won!") {
      outcomeDisplay.style.color = 'red';
    } else {
      outcomeDisplay.style.color = 'black';
    }
    
  };


getPlayerChoice();