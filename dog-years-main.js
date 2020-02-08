// My age //
let myAge = 25;
// Value for early years //
let earlyYears = 2;

earlyYears = earlyYears *= 10.5;
// My age minus 2 //
let laterYears = myAge - 2;

/* Number of dog years accounted by your later years*/
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Age in dog years//
let myAgeInDogYears = earlyYears + laterYears;

// Making my name lowercase //
myName = "Vallee".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
