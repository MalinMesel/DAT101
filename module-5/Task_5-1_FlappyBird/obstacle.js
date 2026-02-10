"use strict";
import { TSprite } from "libSprite";
import { hero, EGameStatus, menu } from "./FlappyBird.mjs";

const EasyFlyerGap = 150;
const HardFlyerGap = 100;
const MinimumProtrusion = 30;


export class TObstacle{
  #spUp;
  #spDown;
  #spi;
  constructor(aSpcvs, aSPI){
    const x = 600;
    this.#spi = aSPI;
    // Generate random gap height, based on difficulty settings
    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
    const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle
    // Genrate random top position for upper obstacle
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
    let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top 
    if(topWithGap > minBottom){
      // The top with gap is too low, adjust top and keep the gap constant
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
    }

    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spDown.index = 0;
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);
    this.#spUp.index = 1;
  }

  // Propperties
  get x(){
    return this.#spDown.x;
  }

  get width(){
    return this.#spDown.width;
  }

  draw(){
    this.#spDown.draw();
    this.#spUp.draw();
  }
  animate(){
      this.#spDown.x--; //Gjør at hindringen beveger seg mot venstre
      this.#spUp.x--; //Gjør at hindringen beveger seg mot venstre
      let hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp);

      if(hasCollided){
        console.log("Collision with Hero!");
        EGameStatus.state = EGameStatus.heroIsDead; 
        hero.animationSpeed = 0; // Stopper animasjonen av helten
        menu.stopSound(); //Stopper meny lyden
        hero.flap(); //Last flap of death
        hero.dead(); // Play death sound
      }

    }
  }
 //End of class
