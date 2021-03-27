'use strict';
/**
 * Объект игрока. Хранит координаты и имеет метод move, который принимает направление движения
 * @type {{positionY: number, move(*): void, positionX: number}}
 */
let player = {
  positionX: parseInt(config.fullWidth / 2),
  positionY: parseInt(config.fullHeight / 2),

  move(direction) {
    switch (direction) {
      case 1:
        if (this.positionY === (config.fullWidth - config.walls) || this.positionX === 1) {
          break;
        }
        this.positionY++;
        this.positionX--;
        break;
      case 2:
        if (this.positionY === (config.fullWidth - config.walls)) {
          break;
        }
        this.positionY++;
        break;
      case 3:
        if (this.positionY === (config.fullWidth - config.walls) || this.positionX === (config.fullWidth - config.walls)) {
          break;
        }
        this.positionY++;
        this.positionX++;
        break;
      case 4:
        if (this.positionX === 1) {
          break;
        }
        this.positionX--;
        break;
      case 6:
        if (this.positionX === (config.fullWidth - config.walls)) {
          break;
        }
        this.positionX++;
        break;
      case 7:
        if (this.positionX === 1 || this.positionY === 1) {
          break;
        }
        this.positionY--;
        this.positionX--;
        break;
      case 8:
        if (this.positionY === 1) {
          break;
        }
        this.positionY--;
        break;
      case 9:
        if (this.positionX === (config.fullWidth - config.walls) || this.positionY === 1) {
          break;
        }
        this.positionY--;
        this.positionX++;
        break;
    }
  }
}