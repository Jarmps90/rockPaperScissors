

function getComputerChoice() {
    const gameChoices = ["rock", "paper", "scissors"];
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
 console.log(getComputerChoice());
    
