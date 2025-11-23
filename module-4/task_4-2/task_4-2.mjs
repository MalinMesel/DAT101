"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //hardkoder betyr at man legger inn veridene manuelt

let part1Text = "";
for(let i = 0; i < part1Array.length; i++){ // part1Array kan også være 20
    const value = part1Array[i]; // henter alle veridene fra indeksen
    if(i === part1Array.length - 1){
        part1Text += value.toString() + "."; // Legger til punktum etter siste verdi
    } else {
    part1Text += value.toString() + ", "; // konverterer verdiene frat tall til tekst
    }
}

printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// tabell med seperator
const part2Text = part1Array.join(", ");
printOut(part2Text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Greeting = "Hei på deg, hvordan har du det?";
const greetingArray = part3Greeting.split(" "); // splitter opp strengen ved mellomrom
let part3Text = "";
for(let i = 0; i < greetingArray.length; i++){ // looper gjennom alle ordene i arrayet
    const word = greetingArray[i]; // henter hvert enkelt ord
    // Here you can remove unwanted charactors like commas or question marks. 
    part3Text += "Index: " + i.toString() + " = " + word + newLine; 
}
printOut(part3Text);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function removeNameFromArray(aArray, aName){
    let deleteIndex = -1; //Setter veriden til -1 fordi det finnes ingen verdi i en tabell som er negativ. 
      for(let i = 0; i < aArray.length; i++){ 
        const name = aArray[i];
        if(name === aName){
            //Her kan vi slette elementet for eksempel "Hilde"
            // Dette gjør vi ikke her! Her løper vi igjennom, og må slette senere.
            // Vi må lagre indeksen i en variabel og slette utenfor funksjonen. 
            deleteIndex = i; 
            break; //Avbryter loopen når vi har funnet navnet
        }
    }
    //Teste om jeg kan slette
    if(deleteIndex >= 0){
        printOut(aName + " is found, and deleted.");
        aArray.splice(deleteIndex, 1); //Fjerner ett element på indeksen deleteIndex
    } else { 
        printOut(aName + " is not found!");
    }
}
removeNameFromArray(girls, "Hilde");
printOut(girls);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]
const allNames = [...girls, ...boys];
printOut(allNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor (title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
}
   toString() {
       return this.title + " by " + this.author + " (ISBN: " + this.ISBN + ")";
   }
}
const books = [
    new TBook("The Hobbit", "J.R.R Tolkien", "978-0261103344"),
    new TBook("1984", "George Orwell", "978-0451524935"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "978-0061120084"),
];

for (const book of books) {
    printOut(book.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Monday"},
    WeekDay2: {value: 0x02, name: "Tuesday"},
    WeekDay3: {value: 0x04, name: "Wednesday"},
    WeekDay4: {value: 0x08, name: "Thursday"},
    WeekDay5: {value: 0x10, name: "Friday"},
    WeekDay6: {value: 0x20, name: "Saturday"},
    WeekDay7: {value: 0x40, name: "Sunday"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays"},
    Weekends: {value: 0x20 + 0x40, name: "Weekend"},
};
let keys = Object.keys(EWeekDays);
for (let key of keys) {
    printOut(EWeekDays[key].name + " has value: " + EWeekDays[key].value.toString(16));
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomNumbers = [];

for (let i = 0; i < 35; i++){
    randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}
printOut("Random numbers:");
printOut(randomNumbers.join(", "));

let ascendingNumbers = randomNumbers.slice();
ascendingNumbers.sort(function(a, b){
    return a -b;
})
printOut("Ascending order: ");
printOut(ascendingNumbers.join(", "));

let descendingNumbers = randomNumbers.slice();
descendingNumbers.sort(function(a, b){
    return b - a;
})
printOut("Descending order:");
printOut(descendingNumbers.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let frequencymap = {};
for(let number of randomNumbers){
    frequencymap[number] = (frequencymap[number] || 0) + 1;
}

printOut("Number and their frequencies:");
for (let number of Object.keys(frequencymap).sort((a, b) => a - b)){
    printOut("Number " + number + " appears " + frequencymap[number] + " times.");
}

let freqArray = Object.entries(frequencymap).map(([number, frequency]) => [Number(number), frequency]);

freqArray.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1]; 
    return a[0] - b[0]; 
});

console.log("\nFrequencies and corresponding numbers (most frequent first):");
for (let [number, freq] of freqArray) {
    console.log(`Number ${number} occurs ${freq} times`);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const array2D =[];
let numRows = 5;
let numCols = 9;

for (let row = 0; row < numRows; row++){
    let newRow = [];
    for (let col = 0; col < numCols; col++) {
        newRow.push((row + 1) + ", " + (col + 1));
    }
    array2D.push(newRow);
}

printOut("Array printed sucsessfully");

for (let row = 0; row < array2D.length; row++) {
    printOut(array2D[row].join(" | "));
}
printOut(newLine);
