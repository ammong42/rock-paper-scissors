const playerScoreHolder = document.querySelector('#player_score');
const computerScoreHolder = document.querySelector('#computer_score');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const winnerHolder = document.querySelector('#winner');

rockButton.addEventListener('click', () => {
    let result = playRound("rock", getComputerChoice());
    updateScore(result);
});
paperButton.addEventListener('click', () => {
    let result = playRound("paper", getComputerChoice());
    updateScore(result);
});
scissorsButton.addEventListener('click', () => {
    let result = playRound("scissors", getComputerChoice());
    updateScore(result);
});


function updateScore(result) {
    if (result == -1) {
        computerScore++;
        computerScoreHolder.textContent = computerScore;
    }
    if (result == 1) {
        playerScore++;
        playerScoreHolder.textContent = playerScore;
    }
    if (playerScore == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        winnerHolder.textContent = "You win!"
    }
    if (computerScore == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        winnerHolder.textContent = "You lose..."
    }
}
function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < .333) {
        //console.log("Rock")
        return "rock";
    }
    else if (randomNum < .666) {
        //console.log("Paper")
        return "paper";
    }
    else {
        //console.log("Scissors")
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    let lowercasePlayerSelection = playerSelection.toLowerCase();
    if (lowercasePlayerSelection == computerSelection) {
        alert(`It's a tie because you both picked ${computerSelection}!`);
        return 0;
    }
    else if (lowercasePlayerSelection == "rock") {
        if (computerSelection == "scissors") {
            alert("You win! Rock beats scissors.");
            return 1;
        }
        else {
            alert("You lose! Paper beats rock.");
            return -1;
        }
    }
    else if (lowercasePlayerSelection == "paper") {
        if (computerSelection == "rock") {
            alert("You win! Paper beats rock.");
            return 1;
        }
        else {
            alert("You lose! Scissors beats paper.");
            return -1;
        }
    }
    else { //player selected scissors
        if (computerSelection == "paper") {
            alert("You win! Scissors beats paper.");
            return 1;
        }
        else {
            alert("You lose! Rock beats scissors.");
            return -1;
        }
    }
}

let playerScore = 0;
let computerScore = 0;
