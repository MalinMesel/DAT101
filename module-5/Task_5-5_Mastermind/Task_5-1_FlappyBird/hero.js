"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, menu } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite {
  #gravity;
  #speed;
  #wave;
  #sfFood;
  #sfHeroIsDead;
  #sfGameOver;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 100, 20);
    this.animationSpeed = 20;
    this.#gravity = 9.81 / 100;
    this.#speed = 0;
    this.#wave = new TSineWave(1, 1);
    this.y += this.#wave.value;
    this.#sfFood = null;
    this.#sfHeroIsDead = null;
    this.#sfGameOver = null;
  }

  // Inside THero class (hero.js)
  restart() {
    this.x = 100; // Reset horizontal position
    this.y = 20; // Reset vertical position
    this.rotation = 0; // Reset rotation
    this.#speed = 0; // Reset speed
    this.animationSpeed = 20; // Restore animation speed
  }

  eat() {
    if (this.#sfFood === null) {
      this.#sfFood = new TSoundFile(fnFood);
    } else {
      this.#sfFood.stop();
    }
    this.#sfFood.play();
  }

  animate() {
    const hasGravity = EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead;

    if (hasGravity) {
      // Apply gravity
      if (this.y + this.height < 400) {
        // playable area height = 400
        this.#speed += this.#gravity; // increase speed due to gravity
        this.y += this.#speed; // update position based on speed

        // Rotate hero down while falling
        if (this.rotation < 90) {
          this.rotation = this.#speed * 25;
        }
      } else {
        // Hero hits the ground → Game Over
        if (EGameStatus.state !== EGameStatus.gameOver) {
          this.y = 400 - this.height; // snap to ground
          EGameStatus.state = EGameStatus.gameOver;
          this.animationSpeed = 0;

          // Stop game sounds
          menu.stopSound();

          // Play Game Over sound
          this.#sfGameOver = new TSoundFile(fnGameOver);
          this.#sfGameOver.play();

          console.log("Game Over triggered!");

          // Call menu to show Game Over UI
          menu.showGameOver(menu.gameScore);
        }
      }
    } else if (EGameStatus.state === EGameStatus.idle) {
      // Idle animation (floating effect)
      this.y += this.#wave.value;
    }
  }
  // End of animate

  dead() {
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
  }

  flap() {
    this.#speed = -3.5;
    this.rotation = 0;
  }
}
