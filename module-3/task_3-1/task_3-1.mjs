"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
printOut("If I wake up at " + wakeUpTime);
if (wakeUpTime == 7) { //Sjekker om klokka er 7//
  printOut("I can take the bus to school:)");
} else if (wakeUpTime == 8) { //Sjekker om klokka er 8//
  printOut ("I have to take the train to school.");
 } else { 
  printOut("I have to take the car to school:(");
  }
printOut(newLine); 

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 5
printOut ("Value: " + number); 
if (number < 0) { //Sjekker om tallet er negativt//
  printOut("The value is negative.")
  } else if (number > 0) { //Sjekker om tallet er positivt//
    printOut("The value is positive.");
    } else { //Sjekker om tallet er 0//
    printOut("The value is zero.");
    }

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let ImageSize = Math.round(Math.random() * 8) + 1; //Gjør om til et heltall mellom 1 og 8//
printOut("The image is " + ImageSize + "MP."); //Printer ut størrelsen på bildet//
 if (ImageSize >= 4) { //Sjekker om bildet er større enn eller lik 4//
  printOut("Thank you!");
 } else { //Sjekker om bildet er mindre enn 4//
  printOut("The images is to small:(");
 }

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let ImageSize1 = Math.round(Math.random() * 8) + 1; //Gjør om til et heltall mellom 1 og 8//
printOut("The images is " + ImageSize1 + "MP."); //Printer ut størrelsen på bildet//
 if (ImageSize1 >= 6) { //Sjekker om bildet er større enn eller lik 6//
  printOut("The image is too large.");
 } else if (ImageSize1 >= 4) { //Sjekker om bildet er større enn eller lik 4//
  printOut("Thank you!");
 } else{ //Sjekker om bildet er mindre enn 4//
  printOut("The images is too small.");
 } 

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["Januar", "Februar", "Mars", "April", "Mai",
"Juni", "Juli", "August", "September", "October", "November", "December"]; //Liste med måneder//
const noOfMonth = monthList.length; //Regner ut antall måneder//
const monthIndex = Math.floor(Math.random() * noOfMonth); //Gjør om til et tilfeldig tall mellom 1 og 12//
const monthName = monthList [monthIndex];
printOut("The month is " + monthName) 
if (monthName.includes ("r")) { //Sjekker om måneden inneholder bokstaven r//
printOut("You must take vitamin D.");
} else { //Hvis måneden ikke inneholder bokstaven r//
  printOut("You do not need to take vitamin D.");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthDays = daysInMonth[monthIndex];

printOut("Current month: " + monthName);
printOut("There are " + monthDays + " days in this month.");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut ("Current month: " + monthName);

if (monthName === "Mars") {
printOut("Sorry, we are closed:(");
} else if (monthName === "Mai"){
printOut("Sorry we are closed.");
} else if (monthName === "April"){
printOut("We have temporary premises in the building next door.");
} else {
printOut("We are open!");
}

printOut(newLine);
