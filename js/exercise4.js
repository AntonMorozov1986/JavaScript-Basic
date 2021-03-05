'use strict';

function showPyramid(height, symbol) {
    for (let i = 0, pyramid = ''; i < height; i++) {
        pyramid += symbol;
        console.log(pyramid);
    }
}


let rowNumberLength = parseInt(prompt('Какую высоту пирамиды сделать?'));
let userSymbol = prompt('Каким символов будем рисовать пирамиду? Выбери на клавиатуре')
showPyramid(rowNumberLength, userSymbol);
alert (`Смотри консоль`);