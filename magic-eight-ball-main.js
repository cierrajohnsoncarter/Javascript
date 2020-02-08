let userName = "";

userName = "Jane" ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

userQuestion = "Will I become a Fullstack Developer?";
console.log("Will I become a Fullstack Developer?");

const randomNumber = Math.floor(Math.random() * 8);

eightBall = "";

switch (randomNumber) {
  case 0:
    eightball = "It is certain";
    break;
  case 2:
    eightball = "It is decidedly so";
    break;
  case 3:
    eightball = "Reply hazy try again";
    break;
  case 4:
    eightball = "Cannot predict now";
    break;
  case 5:
    eightball = "Do not count on it";
    break;
  case 6:
    eightball = "My sources say so";
    break;
  case 7:
    eightball = "Outlook not so good";
    break;
  case 8:
    eightball = "Signs point to yes";
    break;
}

console.log(`The eightball answered: ${eightball}`);
