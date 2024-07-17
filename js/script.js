let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    return computerChoice
    
};

 

function getHumanChoice() {
   const humanChoice = window.prompt("Choose rock, paper or scissors ");
   return humanChoice.toLowerCase;
};

function whosWinner(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    return "Tie";
} else if(
    (humanChoice === "rock" && computerChoice === "sicssors") ||
    (humanChoice === "sicssors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
){
    return "Player"
 } else {
    return "Computer"
}
};

function playRound(humanChoice, computerChoice) {
    const result = whosWinner(humanChoice, computerChoice);
    if (result === "Tie") {
        return "It's a Tie!"
    } else if (result === "Player") {
        return "Congratulations, you won!"
    } else {
        return "Sorry, computer won!"
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice,computerChoice))

