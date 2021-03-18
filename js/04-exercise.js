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

let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');

alert('Сумма двух чисел равна ' + sum(firstNumber, secondNumber));
alert('Разница двух чисел равна ' + subtraction(firstNumber, secondNumber));
alert('Произведение двух чисел равно ' + multiplication(firstNumber, secondNumber));
alert('Частное двух чисел равно ' + division(firstNumber, secondNumber));

