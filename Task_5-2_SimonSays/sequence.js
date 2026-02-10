"use strict";
import { EGameStatusType, spawnColorButton, gameOver, updateRound} from "./SimonSays.mjs"

let colorButton = null; 
let sequence = [];
let round = 0;
let seqIndex = 0;

export function resetSequence(){
    sequence = [];
    round = 0;
    seqIndex = 0;
}

export function addRandomButton(aColorButtons){
 const index = Math.floor(Math.random() * aColorButtons.length); // Bruker floor siden vi skal ha med 0, ellers bruker vi ceiling. 
 colorButton = aColorButtons[index];
 sequence.push(colorButton);
 seqIndex = 0; 
 colorButton = sequence[0];
 setTimeout(setButtonDown, 500); // This is the wait time before sequence start. 
}
export function testOfUserInput(aColorButton){
    if(aColorButton === colorButton){
        console.log("Yoohoo!");
        seqIndex++;
        if(seqIndex < sequence.length){
            //We have not reached the end of this sequence.
            colorButton = sequence[seqIndex];
        } else {
            //We have reached the end of sequence.
            round++;
            updateRound(round)
            spawnColorButton();
        }
} else {
    gameOver();
}
}
function setButtonDown(){
    colorButton.onMouseDown();
    setTimeout(setButtonUp, 1000);
}

function setButtonUp(){
    colorButton.onMouseUp();
    seqIndex++;
    if(seqIndex < sequence.length){
      colorButton = sequence[seqIndex];
      setTimeout(setButtonDown, 500);
    }else{
    EGameStatusType.state = EGameStatusType.Gamer;
    seqIndex = 0; // NB: If not, the sequence starts to early.
    colorButton = sequence[0];
 }
}


