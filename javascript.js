let playCount = 0;
let userChoices = [];
let winCount = 0;

function playGame(userChoice) {
  if (playCount >= 5) {
    document.getElementById('result').innerText = "Game over! You already played 5 rounds.";
    document.getElementById('user-choices').innerText = `Your choices: ${userChoices.join(', ')}`;
    document.getElementById('wins').innerText = `Total Wins: ${winCount}`;
    return;
  }

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  playCount++;
  userChoices.push(userChoice);

  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    winCount++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById('result').innerText = `Round ${playCount}: ${result}`;

  if (playCount === 5) {
    document.getElementById('result').innerText += "\nGame over! Thanks for playing.";
    document.getElementById('user-choices').innerText = `Choices: ${userChoices.join(', ')}`;
    document.getElementById('wins').innerText = `Wins: ${winCount}`;
  }
}
