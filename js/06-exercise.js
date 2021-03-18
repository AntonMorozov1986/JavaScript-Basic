'use strict';
/*
* Для получения последней цифры в числе можно брать остаток от деления на 10 (a % 10).
* В десятичной системе счисления такой способ будет всегда возвращать последнюю цифру числа*/

/**
 *Функция определяет последнюю цифру в числе
 * @param {number} number - Число в котором необходимо определить последнюю цифру
 * @returns {number} - Возвращает последнюю цифру числа
 */
function findLastNumeral(number) {
  return number % 10;
}

/**
 * Функция создает строку о результате пополнения счета
 * @param {number} deposit - Сумма пополнения счета
 * @returns {string} - Строка с результатом пополнения счета
 */
function refillDeposit(deposit) {
  let lastNumeral = findLastNumeral(deposit);
  switch (lastNumeral) {
    case 1:
      return `Ваша сумма в ${deposit} рубль успешно зачислена.`
    case 2:
    case 3:
    case 4:
      return `Ваша сумма в ${deposit} рубля успешно зачислена.`
    default:
      return `Ваша сумма в ${deposit} рублей успешно зачислена.`
  }
}

let userDeposit = parseInt(prompt('Введите сумму вклада:'));
alert(refillDeposit(userDeposit));