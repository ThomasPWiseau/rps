

function getComputerChoice() {
    switch(Math.floor((Math.random() * 3) + 1)) {
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3: 
            return("Scissors");
    }

}

function playRound(playerSelection, computerSelection) {
    let lowerPS = playerSelection.toLowerCase();
    let lowerCS = computerSelection.toLowerCase();
    switch(lowerPS){
        case "rock":
            console.log(lowerCS === lowerPS ? "Tie!": lowerCS === "scissors" ? "You Win! Rock beats Scissors." : "You lose! Rock loses to Paper.");
            return(lowerCS === lowerPS ? 0 : lowerCS === "scissors" ? 1 : -1);
        case "paper":
            console.log(lowerCS === lowerPS ? "Tie!" : lowerCS === "rock" ? "You Win! Paper beats Rock." : "You lose! Paper loses to Scissors.");
            return(lowerCS === lowerPS ? 0 : lowerCS === "rock" ? 1 : -1);
        case "scissors":
            console.log(lowerCS === lowerPS ? "Tie!" : lowerCS === "paper" ? "You Win! Scissors beats Paper." : "You lose! Scissors loses to Rock.");
            return(lowerCS === lowerPS ? 0 : lowerCS === "paper" ? 1 : -1);
        default:
            console.log("Please enter a valid section of either Rock, Paper, or Scissors.")
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice of Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        console.log("Result is..." + result);
        if(result == 1){
            playerScore++;
        }else if(result == -1){
            computerScore++;
        }
        console.log("Current Score. You:" + playerScore + ", Computer Score: " + computerScore);
    }
    console.log("Final Score. You:" + playerScore + ", Computer Score: " + computerScore);
}

game();