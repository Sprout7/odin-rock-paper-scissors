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

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

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
    if (humanScore === 5 || computerScore === 5) return;

    if (humanChoice === computerChoice) {
      result.textContent = "It's a tie!";
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      ++humanScore;
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      ++computerScore;
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // update score display
    score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;

    // end messages
    if (humanScore === 5) {
      score.textContent = 'You win!';
      result.textContent = '';
    } else if (computerScore === 5) {
      score.textContent = 'Computer wins!';
      result.textContent = '';
    }
  }

  rock.addEventListener('click', function () {
    playRound('rock', getComputerChoice());
  });

  paper.addEventListener('click', function () {
    playRound('paper', getComputerChoice());
  });

  scissors.addEventListener('click', function () {
    playRound('scissors', getComputerChoice());
  });
}

playGame();
