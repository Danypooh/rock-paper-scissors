//Rock-paper-scissors GAME
let playerSelection = window.prompt("Enter Rock, Paper or Scissors: ");
let computerSelection = getComputerChoice();

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
        return ("You Lose! Paper beats Rock");
    }
    else if (playerSelection=='rock' && computerSelection=='scissors') {
        return ("You Win! Rock beats Scissors");
    }
    else if (playerSelection=='paper' && computerSelection=='rock') {
        return ("You Win! Paper beats Rock");
    }
    else if (playerSelection=='paper' && computerSelection=='scissors') {
        return ("You Lose! Scissors beats Paper");
    }
    else if (playerSelection=='scissors' && computerSelection=='rock') {
        return ("You Lose! Rock beats Scissors");
    }
    else if (playerSelection=='scissors' && computerSelection=='paper') {
        return ("You Win! Scissors beats Paper");
    }
    else {
        return ("It's a tie!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());

    }
}