

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
    const result = document.querySelector('.result');
    let resultText = '';
    switch(lowerPS){
        case "rock":
            result.innerHTML = (lowerCS === lowerPS ? "Tie!": lowerCS === "scissors" ? "You Win! Rock beats Scissors." : "You lose! Rock loses to Paper.");
            return(lowerCS === lowerPS ? 0 : lowerCS === "scissors" ? 1 : -1);
        case "paper":
            result.innerHTML = (lowerCS === lowerPS ? "Tie!" : lowerCS === "rock" ? "You Win! Paper beats Rock." : "You lose! Paper loses to Scissors.");
            return(lowerCS === lowerPS ? 0 : lowerCS === "rock" ? 1 : -1);
        case "scissors":
            result.innerHTML = (lowerCS === lowerPS ? "Tie!" : lowerCS === "paper" ? "You Win! Scissors beats Paper." : "You lose! Scissors loses to Rock.");
            return(lowerCS === lowerPS ? 0 : lowerCS === "paper" ? 1 : -1);
        default:
            result.innerHTML = "Please enter a valid section of either Rock, Paper, or Scissors.";
    }
}

function game() {
    
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.innerHTML,getComputerChoice())));