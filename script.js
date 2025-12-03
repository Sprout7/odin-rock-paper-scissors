// Psuedocode
// 1. Write function getComputerChoice() that returns "rock", "paper", "scissors"
// 2. Write player choice that return player choice of "rock", "paper", "scissors" using prompt
// 3. Keep track of players score
//  - compare the two choices
//  - return a string declaing the round winner
// 4. Keep track of score (player vs computer)
// 5. Write function game() that plays the game five rounds
//  - Each round, call playRound()
//  - Update and show score
//  - Announce overall winner

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      ++humanScore;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      ++computerScore;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');
  const score = document.querySelector('.score');

  rock.addEventListener('click', function () {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
  });

  paper.addEventListener('click', function () {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
  });

  scissors.addEventListener('click', function () {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
  });
}

playGame();
