//Rock-paper-scissors GAME
let match;
let playerScore = 0;
let computerScore = 0;
let round = 0;

let container = document.querySelector('div');

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors']  
  return choices [Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice()  

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'rock')) {
      
    playerScore ++;
    match = 'You win! ' + playerSelection + ' beats ' + computerSelection +
            "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore;
    if (playerScore == 5) {
      result += "<br><br>You won the game!<br><br> (Reload the page to play again)";
      restart();
    }
  }

  else if (playerSelection == computerSelection) {
    match = "It's a tie! Both chose " + playerSelection +
            "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore;
  }

  else {
    computerScore ++;
    match = 'You lose! ' + computerSelection + ' beats ' + playerSelection +
            "<br><br>Player score : " + playerScore + "<br>Computer score: " + computerScore;
    if (computerScore == 5) {
      match += "<br><br>Sorry! You lost the game! <br><br>(Reload the page to play again)";
      restart();
    }
  }

  document.getElementById('result').textContent = match;
  return;
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  //document.getElementsByTagName('div').value = ""; 
}

function bootGame() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => { 
    button.addEventListener('click', function () { 
      playRound(button.textContent);
    });
  });
}

bootGame();