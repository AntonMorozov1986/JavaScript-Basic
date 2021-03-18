'use strict';

/**
 * Функция складывает два числа
 * @param arg1 {number} - Первое число
 * @param arg2 {number} - Второе число
 * @returns {number} - Возвращает сумму двух чисел
 */
function sum(arg1, arg2) {
  return arg1 + arg2;
}

/**
 * Функция вычитает из первого числа второе число
 * @param arg1 {number} - Первое число
 * @param arg2 {number} - Второе число
 * @returns {number} - Возвращает результат вычитания из первого числа второго числа
 */
function subtraction(arg1, arg2) {
  return arg1 - arg2;
}

/**
 * Функция умножает два числа
 * @param arg1 {number} - Первое число
 * @param arg2 {number} - Второе число
 * @returns {number} - Возвращает произведение двух чисел
 */
function multiplication(arg1, arg2) {
  return arg1 * arg2;
}

/**
 * Функция делит два числа
 * @param {number} arg1 - Первое число
 * @param {number} arg2 - Второе число
 * @returns {number} - Возвращает частное от деления первого числа на второе число
 */
function division(arg1, arg2) {
  return arg1 / arg2;
}

/**
 *
 * @param {number} arg1 - Первое число
 * @param {number} arg2 - Второе число
 * @param {string} operation - Знак математической операции в виде строки ('+', '-', '*', '/')
 * @returns {string} - Возвращает строку в виде "Что сделали" + результат
 */
function mathOperation (arg1, arg2, operation) {
  switch (operation) {
    case '+':
      return 'Сумма двух чисел равна ' + sum(arg1, arg2);
    case '-':
      return 'Разница двух чисел равна ' + subtraction(arg1, arg2);
    case '*':
      return 'Произведение двух чисел равно ' + multiplication(arg1, arg2);
    case '/':
      return 'Частное от деления двух чисел равно ' + division(arg1, arg2);
    default:
      return 'Вы ввели не правильный знак операции';
  }
}

do {
  let firstNumber = +prompt('Введите первое число');
  let secondNumber = +prompt('Введите второе число');
  let userOperation = prompt('Введите знак математической операции\n' +
    'Допускается ввод следующих знаков:\nСложение: +\nВычитание: -\n' +
    'Умножение: *\nДеление: /');
  alert(mathOperation(firstNumber, secondNumber, userOperation));
} while (confirm('Выполнить другую операцию?'));


