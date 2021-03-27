'use strict';

let renderer = {
  map: '',

  /**
   * Метод рисует карту и стенки комнаты
   */
  render() {
    for (let row = 0; row < config.fullHeight; row++) {
      for (let col = 0; col < config.fullWidth; col++) {
        //Рисуем стены сверху/снизу
        if (row === 0 || row === (config.fullHeight - 1)) {
          this.map += '==';
          continue;
        }
        //Рисуем стены слева/справа
        if (col === 0 || col === (config.fullWidth - 1)) {
          this.map += '||';
          continue;
        }
        //Рисуем игрока
        if (row === player.positionY && col === player.positionX) {
          this.map +='o ';
        } else {
          this.map += '- '
        }
      }
      this.map += '\n';
    }
    console.log(this.map);
  },

  clear() {
    //очистка консоли
    console.clear();
    //очистка карты
    this.map = '';
  }
}