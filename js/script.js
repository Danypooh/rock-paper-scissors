//Rock-paper-scissors GAME
let match;
let playerScore = 0;
let computerScore = 0;
let round = 0;

let container = document.querySelector('div');

function getComputerChoice() {
    let adversary = Math.floor(Math.random() * 3);
    switch (adversary) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console.log('Sorry something went wrong');
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection=='rock' && computerSelection=='paper') {
        computerScore ++;
        match = "You Lose! Paper beats Rock";
    }
    else if (playerSelection=='rock' && computerSelection=='scissors') {
        playerScore ++;
        match = "You Win! Rock beats Scissors";
    }
    else if (playerSelection=='paper' && computerSelection=='rock') {
        playerScore ++;
        match = "You Win! Paper beats Rock";
    }
    else if (playerSelection=='paper' && computerSelection=='scissors') {
        computerScore ++;
        match = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection=='scissors' && computerSelection=='rock') {
        computerScore ++;
        match = "You Lose! Rock beats Scissors";
    }
    else if (playerSelection=='scissors' && computerSelection=='paper') {
        playerScore ++;
        match = "You Win! Scissors beats Paper";
    }
    else {
        match = "It's a tie!";
    }
    printCurrentResults();
}

function printCurrentResults() {
  let roundResult = document.createElement('div');
  roundResult.textContent = match;
  container.appendChild(roundResult);
  let playerCurrentScore = document.createElement('div');
  playerCurrentScore.textContent = "Player Score: " + playerScore + '\n';
  container.appendChild(playerCurrentScore);
  let computerCurrentScore = document.createElement('div');
  computerCurrentScore.textContent = "Computer Score: " + computerScore + '\n';
  container.appendChild(computerCurrentScore);
  round ++;
  if (round == 5) {
      printFinalResult();
  }
}

function printFinalResult() {
  let finalScore = document.createElement('div');
  if (playerScore > computerScore) {
    finalScore.textContent = "\n ***Congratulations! You won!***"
  }
  else {
    finalScore.textContent = "\n ***Sorry! You lose!***";
  }
  container.appendChild(finalScore);
  restart();
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  //document.getElementsByTagName('div').value = ""; 
}

function bootGame() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.addEventListener('click', function () { 
    playRound(button.textContent);
  }));
}

bootGame();
