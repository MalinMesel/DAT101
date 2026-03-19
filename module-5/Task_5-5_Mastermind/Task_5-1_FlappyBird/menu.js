"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, soundMuted, EGameStatus, hero, obstacles, baits } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
  #spGameOver; // The Game Over billboard
  #spMedal; // Medal sprite
  #spFinalScore; // TSpriteNumber for final score
  #spHighScore; // TSpriteNumber for high score

  #spInfoText;
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  constructor(aSpcvs, aSPI) {
    //part 3 -------------------------------
    // Game Over billboard
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 140, 60);
    this.#spGameOver.hidden = true; // Hide initially

    // Medal on top of the billboard
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 164, 104);
    this.#spMedal.index = 0; // Default medal index
    this.#spMedal.hidden = true;

    // Final score number
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 250, 80);
    this.#spFinalScore.hidden = true;

    // High score number
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 250, 115);
    this.#spHighScore.hidden = true;

    //part 3 -------------------------------
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 200, 100);
    this.#spInfoText.index = 0; // 0 = "Get Ready"
    this.#spInfoText.hidden = true;
    this.#spGameScore.visible = false; // Hide in-game score initially
    this.#spFinalScore.hidden = true; // Already hidden, good
    this.#spHighScore.hidden = true; // Already hidden
    this.#spMedal.hidden = true; // Already hidden
  }

  // Getter to safely expose score
  get gameScore() {
    return this.#spGameScore.value;
  }

  showGameOver(currentScore) {
    // Hide in-game score
    this.#spGameScore.visible = false;

    // Stop background music
    if (this.#sfRunning) {
      this.#sfRunning.stop();
    }

    // Show Game Over UI
    this.#spGameOver.hidden = false; // Game Over panel
    this.#spPlayBtn.hidden = false; // Play button
    this.#spMedal.hidden = false; // Medal sprite
    this.#spFinalScore.hidden = false; // Final score
    this.#spHighScore.hidden = false; // High score

    // Update high score
    if (!window.highScores) {
      window.highScores = []; // Initialize if not already
    }
    let highScore = window.highScores.length > 0 ? window.highScores[0] : 0;

    if (currentScore > highScore) {
      highScore = currentScore;
      window.highScores[0] = highScore;
    }

    // Set final score and high score
    this.#spFinalScore.value = currentScore;
    this.#spHighScore.value = highScore;

    // Medal logic
    // Index mapping: 0 = None, 1 = Gold, 2 = Silver, 3 = Bronze
    if (currentScore >= 9) {
      this.#spMedal.index = 1; // Gold
    } else if (currentScore >= 6) {
      this.#spMedal.index = 2; // Silver
    } else if (currentScore >= 3) {
      this.#spMedal.index = 3; // Bronze
    } else {
      this.#spMedal.index = 0; // None
    }
  }

  setSoundMute(aIsMuted) {
    if (this.#sfRunning) {
      if (aIsMuted) {
        this.#sfRunning.pause(); // Pause the running sound
      } else {
        this.#sfRunning.play(); // Resume the running sound
      }
    }
  }

  incGameScore(aScore) {
    this.#spGameScore.value += aScore;
  }

  stopSound() {
    this.#sfRunning.stop();
  }

  draw() {
    // Always draw background UI first
    this.#spTitle.draw();
    this.#spCountDown.draw();
    this.#spInfoText.draw();

    // Draw in-game score ONLY if visible
    if (this.#spGameScore.visible) {
      this.#spGameScore.draw();
    }

    // Draw buttons
    if (!this.#spPlayBtn.hidden) {
      this.#spPlayBtn.draw();
    }

    // Draw Game Over panel and its elements if visible
    if (!this.#spGameOver.hidden) {
      this.#spGameOver.draw();
      if (!this.#spMedal.hidden) this.#spMedal.draw();
      if (!this.#spFinalScore.hidden) this.#spFinalScore.draw();
      if (!this.#spHighScore.hidden) this.#spHighScore.draw();
    }
  }

  countDown() {
    this.#spCountDown.value--;
    if (this.#spCountDown.value > 0) {
      setTimeout(this.countDown.bind(this), 1000);
    } else {
      this.#spCountDown.visible = false;
      this.#spTitle.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);

      if (!soundMuted) {
        this.#sfRunning.play();
      }

      this.#spInfoText.hidden = true;
      this.#spGameScore.visible = true; // Show in-game score
      this.#spFinalScore.hidden = true; // Hide final score
      this.#spHighScore.hidden = true; // Hide high score
      this.#spMedal.hidden = true; // Hide medal

      startGame();
    }
  }

  spPlayBtnClick() {
    EGameStatus.state = EGameStatus.countDown;
    console.log("Click!");

    // Hide Game Over panel
    this.#spGameOver.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.hidden = true;
    this.#spHighScore.hidden = true;

    // 3.3 Restart World
    hero.restart(); // Reset hero
    obstacles.length = 0; // Clear all pipes
    baits.length = 0; // Clear all butterflies/food
    this.#spGameScore.value = 0; // Reset score

    // UI
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;

    // Countdown sound
    this.#sfCountDown = new TSoundFile(fnCountDown);
    this.#sfCountDown.play();

    this.#spInfoText.hidden = false;

    setTimeout(this.countDown.bind(this), 1000);
  }
}
