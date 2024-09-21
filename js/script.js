let humanScore = 0;
let computerScore = 0;
const CHOICES = ["rock", "paper", "scissors"];



function getComputerChoice() {
    const computerChoice = CHOICES[(Math.floor(Math.random() * CHOICES.length))];
    console.log(computerChoice)
    return computerChoice;
};



function playGame(humanChoice, computerChoice) {
    const computerChoice = getComputerChoice()
    let result = ''
    if (humanChoice === computerChoice) {
      result = "It's a Tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      result = "Congratulations, you won!";
    } else {
      computerScore++;
      result = "Sorry, computer won!";
    }
  
};
 