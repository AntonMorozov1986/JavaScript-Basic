'use strict';

let firstNumber = parseInt(prompt('Введите первое число:'));
let secondNumber = parseInt(prompt('Введите второе число:'));

if (firstNumber >= 0 && secondNumber >= 0) {
  alert(firstNumber - secondNumber);
}
if (firstNumber < 0 && secondNumber < 0) {
  alert(firstNumber * secondNumber);
}
if ((firstNumber < 0 && secondNumber >= 0) || (firstNumber >=0 && secondNumber < 0)) {
  alert(firstNumber + secondNumber);
}

