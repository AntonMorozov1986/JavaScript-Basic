'use strict'

let game = {
  //Этот метод запускает игру
  run() {
    while (true) {
      const direction = readerPlayerTurn.getDirection();
      if (direction === null) {
        return console.log('Игра окончена');
      }
      renderer.clear();
      player.move(direction);
      renderer.render();

    }

  },

  //Этот метод будет выполняься при открытии страницы
  init() {
  console.log('Добро пожаловать в Игру!!!\nВаше местоположение на поле отмечено символом "o"');
  renderer.render();
  console.log('Для начала игры наберите game.run() и нажмите Enter');
  }
}

game.init();