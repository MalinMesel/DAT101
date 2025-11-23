"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printtodaysdate() {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const norwegiantime = today.toLocaleDateString("no-NB", options);
  printOut(norwegiantime);
} 
const norwegiantime = printtodaysdate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function daysUntilRelease() {
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const release = new Date(2025, 4, 14); // month 4 = mai (0-indeksert)
  const msPerDay = 24 * 60 * 60 * 1000;
  const diffMs = release - todayStart;
  // Hvis allerede passert, returner 0 eller negativt tall 
  return Math.ceil(diffMs / msPerDay);
}

const daysLeft = daysUntilRelease();
if (daysLeft > 0) {
  printOut("Dager til lanseringen av 2XKO (14. mai 2025): " + daysLeft);
} else if (daysLeft === 0) {
  printOut("2XKO lanseres i dag!");
} else {
  printOut("(: 2XKO ble lansert for " + Math.abs(daysLeft) + " dager siden! :)");
}

function getTodaysDate(){
    return new Date();
}
printOut(norwegiantime);

const dagensDatoObjekt = getTodaysDate();
printOut("Året er: " + dagensDatoObjekt.getFullYear());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const radius = 5;
function printCircleMetrics(radius) {
    
const diameter = radius * 2;
const circumference = Math.PI * radius * 2;
const area = Math.PI * radius * radius;

printOut("Radius: " + radius);
printOut("Diamter: " + diameter.toFixed(2));
printOut("Omkrets: " + circumference.toFixed(2));
printOut("Areal: " + area.toFixed(2));
}

printCircleMetrics(radius);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const height = 3;
const width = 4;
function printRectangelMetrics(height, width) {
    const circumference = 2 * (height + width);
    const area = height * width;

printOut("Høyde: " + height);
printOut("Lengde: " + width);
printOut("Omkrets: " + circumference);
printOut("Areal: " + area);
}

printRectangelMetrics(height, width);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Fahrenheit = (Kelvin - 273.15) * 9/5 + 32
// Celsius = Kelvin - 273.15 */ 
// Celsius = (Fahrenheit - 32) * 5/9

const ETempType = {
    kelvin: 1, 
    celsius: 2,
    fahrenheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
  let kelvin = 0, celsius = 0, fahrenheit = 0;
  let tempTypeName = "";

  switch(aTempType){
    case ETempType.kelvin:
        kelvin = aTemp;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        tempTypeName = "Kelvin";
    break;
    case ETempType.celsius:
        celsius = aTemp;
        kelvin = celsius + 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        tempTypeName = "Celsius";
    break;
    case ETempType.fahrenheit:
        fahrenheit = aTemp;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
        tempTypeName = "Fahrenheit";
    break;
    default:
        tempTypeName = "Unknown";
  }
  printOut("Convert from " + aTemp + " " + ETempType[aTempType] + ":");
  printOut("Kelvin: " + Math.round(kelvin));
  printOut("Celsius: " + Math.round(celsius));
  printOut("Fahrenheit: " + Math.round(fahrenheit));
  printOut("");   
}

Part5ConvertTemp(300, ETempType.kelvin);
Part5ConvertTemp(47, ETempType.celsius);
Part5ConvertTemp(100, ETempType.fahrenheit);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// formula: net = (100 * gross) / (vat + 100)
function Part6Calculate(grossAmount, aTaxGroup){
   const taxGroup = aTaxGroup.toLowerCase();
   let taxRate = 0;
   switch (taxGroup){
    case "normal":
        taxRate = 25;
        break;
    case "food":
        taxRate = 15;
        break;
    case "hotel":
    case "transport":
    case "cinema":
        taxRate = 10;
        break;
    default:
        printOut("Error: Uknown tax group");
        return;
   }
   const netAmount = ( 100 * grossAmount) / (taxRate + 100);
    printOut("Gross amount: " + grossAmount);
    printOut("Tax rate: " + taxRate + "%");
    printOut("Net amount: " + netAmount.toFixed(2));
   printOut("");
}
Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculate(distance, time, speed) {
    // Count missing values
    const missing = [distance, time, speed].filter(v => v === null || v === undefined).length;

    // If more than one parameter is missing → return NaN
    if (missing > 1) return NaN;

    // Calculate the missing parameter
    if (speed === null || speed === undefined) {
        return distance / time;             // speed
    } else if (time === null || time === undefined) {
        return distance / speed;            // time
    } else if (distance === null || distance === undefined) {
        return speed * time;                // distance
    }

    // If nothing is missing, you can either return speed or the full object
    return speed;
}
printOut("Calculate speed (distance=150 km, time=3 h): " + calculate(150, 3, null) + " km/h");
printOut("Calculate time (distance=150 km, speed=50 km/h): " + calculate(150, null, 50) + " h");
printOut("Calculate distance (time=3 h, speed=50 km/h): " + calculate(null, 3, 50) + " km");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testConsecutiveExpression(lines = 200) {
  let current = 1;
  for (let line = 1; line <= lines; line++) {
    const leftCount = line + 1;
    const rightCount = line;

    let leftSum = 0;
    let leftNums = [];
    for (let i = 0; i < leftCount; i++) {
      leftSum += current;
      leftNums.push(current);
      current++;
    }

    let rightSum = 0;
    let rightNums = [];
    for (let i = 0; i < rightCount; i++) {
      rightSum += current;
      rightNums.push(current);
      current++;
    }

     if (leftSum !== rightSum) {
      printOut(
        "Mismatch on line " +
          line +
          ": left (" +
          leftNums.join("+") +
          ") = " +
          leftSum +
          " !== right (" +
          rightNums.join("+") +
          ") = " +
          rightSum
      );
      return;
    }
  }
  printOut("Maths fun!");
}

testConsecutiveExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1); 
}

function printFactorial(n) {
  const result = factorial(n);
  if (Number.isNaN(result)) {
    printOut("Invalid input for factorial: " + n);
  } else {
    printOut("Factorial of " + n + " is " + result);
  }
}

printFactorial(9); 
printOut(newLine);