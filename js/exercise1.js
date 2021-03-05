'use strict';

function getPrimeNumbers(rowLength) {
    let arrayPrimeNumbers = [];
    if (rowLength < 2) {
        return 'Простое число должно быть больше чем 1'
    }
    let i = 2;
    NextPrimeNumber:
        while (i <= rowLength) {
            let divider = 2;
            while (divider <= Math.floor(Math.sqrt(i))) {
                if (i % divider === 0) {
                    i++
                    continue NextPrimeNumber;
                }
                divider++;
            }
            arrayPrimeNumbers.push(i);
            i++;
        }
    return arrayPrimeNumbers;
}


let rowNumberLength = parseInt(prompt('Введите число до которого необходимо выполнить поиск простых чисел'));
alert (`Простые числа до ${rowNumberLength} следующие:\n` + getPrimeNumbers(rowNumberLength));