"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, menu} from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite{ //EKSAMENS OPPGAVE hvordan funker arv
    #gravity;
    #speed;
    #wave;
    #sfFood;
    #sfHeroIsDead;
    #sfGameOver; 
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 100, 100); // kall til superklasse konstruktør
        this.animationSpeed = 17; // hastighet på animasjon
        this.#gravity = 9.81 / 100; // tyngdekraft akselerasjon
        this.#speed = 0; // start hastighet
        // this.debug = true;
        this.#wave = new TSineWave(1, 1);
        this.y += this.#wave.value;
        this.#sfFood = null;
        this.#sfHeroIsDead = null;
        this.#sfGameOver = null;
    }

  eat() {
    if (this.#sfFood === null) {
      this.#sfFood = new TSoundFile(fnFood);
    } else {
      this.#sfFood.stop();
    }
    this.#sfFood.play();
  }
    
    animate(){
      const hasGravity = 
      EGameStatus.state === EGameStatus.gaming || 
      EGameStatus.state === EGameStatus.heroIsDead;;
        if(hasGravity){
        if(this.y < 400 - this.height){
         this.#speed += this.#gravity; // akselerasjon pga tyngdekraft
         this.y += this.#speed; // oppdater posisjon
         if(this.rotation < 90){ // maks rotasjon nedover
         this.rotation = this.#speed*25; // roterer fuglen nedover basert på hastighet
        }
     } else {
      EGameStatus.state = EGameStatus.gameOver;
      menu.stopSound();
      this.animationSpeed = 0;
      this.#sfGameOver = new TSoundFile(fnGameOver);
      this.#sfGameOver.play();
     }
    } else if(EGameStatus.state === EGameStatus.idle){
       this.y += this.#wave.value;
    }
  } //End of animate

  dead(){
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
  }

  flap(){
    this.#speed = -4; // gi en oppover hastighet
    this.rotation = 0; 
  }
}