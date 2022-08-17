//Rock-paper-scissors GAME
let match;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let adversary = Math.floor(Math.random() * 3);
    switch (adversary) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            console.log('Sorry something went wrong');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection=='rock' && computerSelection=='paper') {
        computerScore ++;
        return match = "You Lose! Paper beats Rock";
    }
    else if (playerSelection=='rock' && computerSelection=='scissors') {
        playerScore ++;
        return match = "You Win! Rock beats Scissors";
    }
    else if (playerSelection=='paper' && computerSelection=='rock') {
        playerScore ++;
        return match = "You Win! Paper beats Rock";
    }
    else if (playerSelection=='paper' && computerSelection=='scissors') {
        computerScore ++;
        return match = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection=='scissors' && computerSelection=='rock') {
        computerScore ++;
        return match = "You Lose! Rock beats Scissors";
    }
    else if (playerSelection=='scissors' && computerSelection=='paper') {
        playerScore ++;
        return match = "You Win! Scissors beats Paper";
    }
    else {
        return match = "It's a tie!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter Rock, Paper or Scissors: ");
        let computerSelection = getComputerChoice();
        playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        console.log(match);
        console.log("your score: " + playerScore);
        console.log("computer score: " + computerScore);
    }
}

game();
if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
}
else {
    console.log("Sorry! You lose!");
}