"use strict";
import { TSprite } from "libSprite";
import { hero, EGameStatus, menu } from "./FlappyBird.mjs";

const EasyFlyerGap = 200;
const HardFlyerGap = 160;
const MinimumProtrusion = 30;

export class TObstacle {
  #spUp;
  #spDown;
  #spi;
  #isDay;
  constructor(aSpcvs, aSPI, aIsDay = true) {
    const x = 600;
    this.#spi = aSPI;
    // Generate random gap height, based on difficulty settings
    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
    const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle
    // Generate random top position for upper obstacle
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
    let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top
    if (topWithGap > minBottom) {
      // The top with gap is too low, adjust top and keep the gap constant
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
    }

    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);
    if (this.#isDay) {
      this.#spDown.index = 0;
      this.#spUp.index = 1;
    } else {
      this.#spDown.index = 2;
      this.#spUp.index = 3;
    }
    this.#isDay = aIsDay;
  }

  // Properties

  setDayNight(aIsDay) {
    //dynamic changing of day/night for existing obstacles
    this.#isDay = aIsDay;

    if (this.#isDay) {
      this.#spDown.index = 0;
      this.#spUp.index = 1;
    } else {
      this.#spDown.index = 2;
      this.#spUp.index = 3;
    }
  }

  get x() {
    return this.#spDown.x;
  }

  get width() {
    return this.#spDown.width;
  }

  draw() {
    this.#spDown.draw();
    this.#spUp.draw();
  }

  animate() {
    this.#spDown.x--;
    this.#spUp.x--;
    let hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp);

    if (hasCollided) {
      console.log("Collision with Hero!");
      EGameStatus.state = EGameStatus.heroIsDead;
      hero.animationSpeed = 0;
      menu.stopSound();
      hero.flap(); // Last flap of death!
      hero.dead();
    }
  }
} // End of class TObstacle
