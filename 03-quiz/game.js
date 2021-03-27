'use strict';

let game = {

  /**
   *
   */
  play() {
    let playerCorrectAnswer = 0;
    for (let questionCount = 0; questionCount < questions.length; questionCount++) {
      let currentQuestion = questions[questionCount];
      let userAnswer = this.askQuestion(questionCount, currentQuestion);
      let isAnswerCorrect = this.checkingPlayerAnswer(userAnswer, currentQuestion.rightAnswer);
      if (isAnswerCorrect === null) {
        alert('Вы вышли из игры. Количество набранных очков: ' + playerCorrectAnswer);
        return;
      }
      if (isAnswerCorrect) {
        playerCorrectAnswer++;
        alert('Вы ответили правильно. Поздравляю!\n' + 'Количество набранных очков: ' + playerCorrectAnswer);
      } else {
        alert('Сожалею. Вы ответили не верно');
      }
    }
    alert(`Игра окончена! Количество набранных очков: ${playerCorrectAnswer}`)
  },

  //Запуск игры
  /**
   *
   */
  init() {
    alert('Добро пожаловать в Игру\n"Кто хочет стать миллионером?"')
    let playerName = prompt('Давайте познакомимся меня зовут Викторин Викториныч, а как вас зовут?');
    alert(`${playerName}, рад вас приветствовать.\nДавайте начнем!`);
    this.play();
  },

  //Метод задает вопрос игроку
  /**
   *
   * @param questionNumber
   * @param question
   * @return {number}
   */
  askQuestion(questionNumber, question) {
    let answer = parseInt(prompt(`Вопрос №${questionNumber + 1}.\n${question.question}\n` +
      `Варианты ответа:\n1) ${question.answer1}\n2) ${question.answer2}\n` +
    `3) ${question.answer3}\n4) ${question.answer4}\nВведите ваш ответ в цифровом виде\nДля прекращения игры нажмите кнопку "Отмена"`));
    return answer;
  },

  //Метод проверяет ответ пользователя
  /**
   *
   * @param answer
   * @param rightAnswer
   * @return {null|boolean}
   */
  checkingPlayerAnswer(answer, rightAnswer) {
    if (isNaN(answer)) {
      return null;
    }
    return answer === rightAnswer;
  }
}

game.init();