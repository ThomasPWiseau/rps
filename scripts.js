

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
    ++numRounds; 
    let lowerPS = playerSelection.toLowerCase();
    let lowerCS = computerSelection.toLowerCase();
    const result = document.querySelector('.result');
    switch(lowerPS){
        case "rock":
            result.innerHTML = (lowerCS === lowerPS ? "Tie!": lowerCS === "scissors" ? "You Win! Rock beats Scissors." : "You lose! Rock loses to Paper.");
            return(lowerCS === lowerPS ? updateScores(playerScore,computerScore, numRounds) : lowerCS === "scissors" ? updateScores(++playerScore,computerScore, numRounds) : updateScores(playerScore,++computerScore, numRounds));
        case "paper":
            result.innerHTML = (lowerCS === lowerPS ? "Tie!" : lowerCS === "rock" ? "You Win! Paper beats Rock." : "You lose! Paper loses to Scissors.");
            return(lowerCS === lowerPS ? updateScores(playerScore,computerScore, numRounds) : lowerCS === "rock" ? updateScores(++playerScore,computerScore, numRounds) : updateScores(playerScore,++computerScore, numRounds));
        case "scissors":
            result.innerHTML = (lowerCS === lowerPS ? "Tie!" : lowerCS === "paper" ? "You Win! Scissors beats Paper." : "You lose! Scissors loses to Rock.");
            return(lowerCS === lowerPS ? updateScores(playerScore,computerScore, numRounds) : lowerCS === "paper" ? updateScores(++playerScore,computerScore, numRounds) : updateScores(playerScore,++computerScore, numRounds));
        default:
            result.innerHTML = "Please enter a valid section of either Rock, Paper, or Scissors.";
    }
}

function updateScores(playerScore, computerScore, numRounds) {
    const scores = document.querySelector('.scores');
    if(numRounds == 5){
        scores.innerHTML = "Round: " + numRounds.toString() + " Player Score: " + playerScore.toString() + " Computer Score: " + computerScore.toString() + (playerScore == computerScore ? "After 5 rounds, it's a draw." : playerScore > computerScore ? "After 5 rounds, you're winner!" : "After 5 rounds, you LOST.")
    }else{
        scores.innerHTML = "Round: " + numRounds.toString() + " Player Score: " + playerScore.toString() + " Computer Score: " + computerScore.toString();
    }
}

let numRounds = 0;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.innerHTML,getComputerChoice())));


