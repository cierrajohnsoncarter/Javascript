/* Verifies that user input is either 'rock, paper, scissors or bomb' then makes all user input lowercase. If the user input is verified it is returned, otherwise an error message will pop up */

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  )
    return userInput;
  else console.log("You must enter either rock, paper or scissors.");
};

/* This function assigns 'rock, paper and scissors' to a number 0-2. The computer will then generate a random number and 'rock, paper or scissors' will return based on the number the computer generates */

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

/* This function handles all the edge cases based on the rules of 'rock, paper, scissors'. For example if there is a tie, the phrase 'It's a tie will be returned*/

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Its a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, you lost.";
    } else {
      return "Congratulations! You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, you lost.";
    } else {
      return "Congratulations! You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, you lost.";
    } else {
      return "Congratulations! You won!";
    }
  }

  if (userChoice === "bomb") {
    return "Congratulations! You won!";
  }
};

/* This function illustrates the game play */

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You thew: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
