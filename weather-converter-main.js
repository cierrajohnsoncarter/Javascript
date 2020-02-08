// Temp in kelvin //
const kelvin = 0;
// Temp in celsius //
const celsius = kelvin - 273;
// Temp in newton //
let newton = celsius * (33 / 100);
// Floor value for newton //
newton = Math.floor(newton);
// Temp in farenheit //
let farenheit = celsius * (9 / 5) + 32;
// Floor value for farenheit
farenheit = Math.floor(farenheit);

console.log(`The tempurature is ${farenheit} degrees Farenheit`);

console.log(`The tempurature is ${newton} degrees in Newton`);
