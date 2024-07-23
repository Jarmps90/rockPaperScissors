let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    console.log(computerChoice)
    return computerChoice
    
};

function getHumanChoice() {
   const humanChoice = window.prompt("Choose rock, paper or scissors ");
   console.log(humanChoice);
   return humanChoice.toLowerCase();
};

function whosWinner(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    return "Tie";
} else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
){
    humanScore++
    return "Player";
} else {
    computerScore++
    return "Computer";
}
};

   
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = whosWinner(humanChoice, computerChoice)
    if (result === "Tie") {
        return "It's a Tie!"
    } else if (result === "Player") {
        return "Congratulations, you won!"
    } else {
        return "Sorry, computer won!"
    }
    }
    
    const rockBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');
    const paperBtn = document.createElement('button');




