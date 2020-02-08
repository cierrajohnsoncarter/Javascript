let raceNumber = Math.floor(Math.random() * 1000);

let isRegistered = false;

let runnersAge = 17;

if (runnersAge > 18 && isRegistered) {
  raceNumber += 1000;
}

if (runnersAge > 18 && isRegistered) {
  console.log(`${raceNumber}, you will be racing at 9:30 am.`);
} else if (runnersAge > 18 && !isRegistered) {
  console.log(`${raceNumber}, you will be racing at 11:00 am. `);
} else if (runnersAge < 18) {
  console.log(`${raceNumber} you will be racing at 12:30 pm.`);
} else {
  console.log("Please see the registration desk up front to register");
}
