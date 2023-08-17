let heightInches = prompt(`Please enter your height in inches.`);
let weightPounds = prompt(`Please enter your weight in pounds.`);

const convertPoundsToKilo = 2.2046;
const convertInchesToCM = 2.54;

let heightCM = heightInches * convertInchesToCM;
let heightM = heightCM/100;
let weightKilos = weightPounds * convertInchesToCM;

let calcBMI = weightKilos / (Math.pow(heightM,2));


alert(`Your height of ${heightInches} Inches is ${heightCM} Centimetres. Your weight of ${weightPounds} Pounds is ${weightKilos} Kilos. Your BMI is ${calcBMI}.`);