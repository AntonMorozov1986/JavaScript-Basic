'use strict';

function NumberObject(number) {
  if (!Number.isInteger(number) || number < 0 || number > 999) {
    console.log('Вы ввели не соответствующее число');
    return {};
  }
  this.units = number % 10;
  this.dozens = (Math.floor(number / 10)) % 10;
  this.hundreds = (Math.floor(number / 100) % 10);
}

let userNumber = +prompt('введите 3-х значное число (от 0 до 999) в цифровом виде');
const userObject = new NumberObject(userNumber);
console.log(userObject);