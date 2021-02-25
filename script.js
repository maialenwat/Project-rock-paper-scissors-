const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else {
    console.log('Error, please type either rock, paper or scissors');
  }
}
/*console.log(getUserChoice('rock')); => print 'rock'
console.log(getUserChoice('knife')); => print 'Error!' and 'undefined'
*/
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
     return 'paper';
    case 2:
      return 'scissors';
  }
};
//console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'This game is a tie';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!'; // vs. scissors
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
       return 'Sorry, computer won!';
    } else {
       return 'Congratulations, you won!'; // vs. rock
      }
    }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!'; // vs. paper
    }
  }
  if (userChoice === 'bomb'){
    return 'Congratulations, you won!';
  }
};
/*
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));
*/
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  // console.log(`You threw ${userChoice}`);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();








