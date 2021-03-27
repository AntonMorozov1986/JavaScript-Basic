'use strict';
//Считывание хода игрока
let readerPlayerTurn = {

  /**
   * Запрашивает у пользователя направление движения
   * @returns {null|number} - Возвращает направление движения
   */
  getDirection() {
    const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
    while (true) {
      let playerDirection = parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместится, "Отмена" - завершает игру'));
      if (isNaN(playerDirection)) {
        return null;
      }
      if (!availableDirection.includes(playerDirection)) {
        alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8\nПовторите ввод');
        continue;
      }
      return playerDirection;
    }
  }
}