/* This function assigns each day of the week with the amount of hours of sleep you should get each day */

const getSleepHours = day => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 8;
      break;
    case "Sunday":
      return 8;
      break;
  }
};

/* This function calls 'getActualSleepHours' for each day of the week and adds the results together with an implicit return */

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

/* This function takes in the ideal hours of sleep perferred '7' and multiplies it by the number of day in the week */

const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
};

/* This function calculate the amount of sleep you did and did not get based on the ideal number of sleep hours */

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${actualSleepHours -
        idealSleepHours} hours more sleep than needed!`
    );
  } else {
    console.log("Get some rest");
  }
};

console.log(calculateSleepDebt());
