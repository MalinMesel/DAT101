"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textline1 = ""
let textline2 = ""

for (let countto10 = 0, countfrom10 = 10; countto10 <= 10, countfrom10 >= 0; countto10 ++, countfrom10 --){
    textline1 += " " + countto10.toString(); 
    textline2 += " " + countfrom10.toString();   
} 
printOut(textline1);
printOut(textline2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 38;
let guessagain = 0

while (guessagain !== number){
  guessagain = Math.floor(Math.random()*60)+1;
}

printOut("Tallet du tenkte på var " + guessagain);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const number2 = 980643;
let guessagain2 = 0
let guesses = 0;
const start = Date.now(); 

while (guessagain2 !== number2) {
  guessagain2 = Math.floor(Math.random()*1000000)+1;
  guesses++;
} 

const end = Date.now();
const time = (end - start);

printOut("Tallet du tenkte på var " + guessagain2 );
printOut("Jeg brukte " + guesses + " Forsøk på å gjette tallet ditt.");
printOut("Jeg brukte " + time + " millisekunder på å gjette tallet ditt.")
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primenumbrstring = ""; //Tom streng for å lagre primtallene//

for (let num = 2; num <= 200; num++) { //Sjekker alle tall fra 2 til 200//
   let isprime = true; //Sant hvis tallet er et primtall//
   let i = 2; //Starter å sjekke fra 2//
   let sqrtofnum = Math.sqrt(num); //Tar kvadratroten av tallet//


 while(i <= sqrtofnum){ 
  if (num % i === 0) { //Sjekker om tallet er delelig med i//
    isprime = false;
    break; //Bryter løkken hvis tallet ikke er et primtall//
  }
  i++; //Øker i med 1//
}
   
if (isprime){ //Sjekker om tallet er et primtall//
  if (primenumbrstring !== "") { //Sjekker om strengen ikke er tom//
  primenumbrstring += ","; 
  }
  primenumbrstring += num; //Legger til tallet i strengen hvis det er et primtall//
 }
}
printOut(primenumbrstring);  
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) { //Løkke for hver rad//
  let line = ""; //Tom streng for å lagre hver rad//
  for (let colum = 1; colum <= 9; colum++){ //Løkke for hver kolonne//
    line += "K" + colum + "R" + row + " "; //Legger til kolonne og rad i strengen//
  }
  printOut(line);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function findgrade(point) {
const percent = (point / 236) * 100;
if (percent >= 89) return "A";
if (percent >= 77) return "B";
if (percent >= 65) return "C";
if (percent >= 53) return "D";
if (percent >= 41) return "E";
else return "F";
}

let grade1 = Math.floor(Math.random() * 236) + 1;
let grade2 = Math.floor(Math.random() * 236) + 1;
let grade3 = Math.floor(Math.random() * 236) + 1;
let grade4 = Math.floor(Math.random() * 236) + 1;
let grade5 = Math.floor(Math.random() * 236) + 1;

printOut("Studentet fikk " + grade1 + " poeng. Dette gir karakteren " + findgrade(grade1));
printOut("Studentet fikk " + grade2 + " poeng. Dette gir karakteren " + findgrade(grade2));
printOut("Studentet fikk " + grade3 + " poeng. Dette gir karakteren " + findgrade(grade3));
printOut("Studentet fikk " + grade4 + " poeng. Dette gir karakteren " + findgrade(grade4));
printOut("Studentet fikk " + grade5 + " poeng. Dette gir karakteren " + findgrade(grade5));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function diceroll() {
const dice = []; // Array for å lagre terningkast
  for (let i = 0; i < 6; i++) { // Kast 6 terninger
    dice.push(Math.floor(Math.random() * 6) + 1); // Legg til terningkast i array
  }
  return dice;
}
let throws = 0;
let found = false; // Variabel for å sjekke om vi har funnet en "straight"
let dice = []; 

while (!found) {
  throws++; // Kast 6 terninger
  dice = diceroll();
  const unique = new Set(dice); // Bruk et sett for å finne unike verdier
  
  if (unique.size === 6) { // Sjekk om vi har en "straight"
    found = true;
  }
}

printOut("Terningene viste " + dice.join(", ")); 
printOut("Du brukte " + throws + " kast for å få full straight.");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 3 pairs
function countPairs(diceResult) {
  const counts = [0, 0, 0, 0, 0, 0];
  for (let value of diceResult) {
    if (value >= 1 && value <= 6) counts[value - 1]++; // index 0..5
  }
  let pairs = 0;
  for (let c of counts) {
    pairs += Math.floor(c / 2); // hvert par teller 1
  }
  return pairs >= 3; // true hvis minst 3 par
}

let attempts = 0;
let result;
do {
  attempts++;
  result = diceroll();
} while (!countPairs(result));

printOut("Terningene viste " + result.join(", "));
printOut("Du brukte " + attempts + " kast for å få 3 par.");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function isfullhouse(diceresult) {
  const counts = [0, 0, 0, 0, 0, 0];
  for (let value of diceresult) 
    if (value >= 1 && value <= 6) counts[value - 1]++;

  let hasfour = false;
  let hastwo = false;
  for (let c of counts) {
    if (c === 4) hasfour = true;
    if (c === 2) hastwo = true;
  }
  return hasfour && hastwo;
}
let tries = 0;
let diceresult;
do {
  tries++;
  diceresult = diceroll();
} while (!isfullhouse(diceresult));

printOut("Terningene viste " + diceresult.join(", "));
printOut("Du brukte " + tries + " kast for å få tower");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function yahtzee(diceresult2) {
  const first = dicereult2[0];
  for (let value of diceresult2) {
    if (value !== first) return false;
  }
  return true;
}
let attempts2 = 0;
let dicereult2;
do {
  attempts2++;
  dicereult2 = diceroll();
} while (!yahtzee(dicereult2));

printOut("Terningene viste " + dicereult2.join(", "));
printOut("Du brukte " + attempts2 + " kast for å få yahtzee");
printOut(newLine);
