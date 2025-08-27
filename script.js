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
  console.log(randomNum);

  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt('Rock, Paper, or Scissors?');
  return choice;
}

console.log(getHumanChoice());
