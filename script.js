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

// console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt('Rock, Paper, or Scissors?');
  return choice;
}

// console.log(getHumanChoice());

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

  const humanSelection = getHumanChoice().toLowerCase();
  const computerSelection = getComputerChoice().toLowerCase();

  playRound(humanSelection, computerSelection);

  const humanSelection2 = getHumanChoice().toLowerCase();
  const computerSelection2 = getComputerChoice().toLowerCase();

  playRound(humanSelection2, computerSelection2);

  const humanSelection3 = getHumanChoice().toLowerCase();
  const computerSelection3 = getComputerChoice().toLowerCase();

  playRound(humanSelection3, computerSelection3);

  const humanSelection4 = getHumanChoice().toLowerCase();
  const computerSelection4 = getComputerChoice().toLowerCase();

  playRound(humanSelection4, computerSelection4);

  const humanSelection5 = getHumanChoice().toLowerCase();
  const computerSelection5 = getComputerChoice().toLowerCase();

  playRound(humanSelection5, computerSelection5);

  console.log(humanScore, computerScore);
}

playGame();
