'use strict';

function getNumbersRow(number) {
    for (let i = 0; i <= number; console.log(i++));
}

let rowNumberLength = parseInt(prompt('Введите число до которого необходимо вывести список'));
getNumbersRow(rowNumberLength);
alert (`Смотри консоль`);