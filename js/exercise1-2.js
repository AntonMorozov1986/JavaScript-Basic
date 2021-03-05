'use strict';

//Функция проверки простоты числа
function checkNumber(number) {
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//Функция поиска простых чисел до заданного числа
function findPrimeNumber(rowLength) {
    let arrayPrimeNumbers = [];
    for (let i = 2; i <= rowLength; i++) {
        if (checkNumber(i) === true) {
            arrayPrimeNumbers.push(i);
        }
    }
    return arrayPrimeNumbers;
}

let rowNumberLength = parseInt(prompt('Введите число до которого необходимо выполнить поиск простых чисел'));
alert (`Простые числа до ${rowNumberLength} следующие:\n` + findPrimeNumber(rowNumberLength));