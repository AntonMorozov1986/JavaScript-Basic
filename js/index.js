'use strict';

//Упражнение 3. Сравнение чисел.
function compare() {
    let variableA = +document.getElementById("var-a").value;
    let variableB = +document.getElementById("var-b").value;
    if ((variableA >= 0) && (variableB >= 0)) {
        let result = variableA - variableB;
        document.getElementById("exercise-3-result").innerHTML = `Оба числа положительные. Их разность равна: А - В = ${result}`;
    } else  if ((variableA < 0) && (variableB < 0)) {
        let result = variableA * variableB;
        document.getElementById("exercise-3-result").innerHTML = `Оба числа отрицательные. Их произведение равно: А * В = ${result}`;
    } else {
        let result = variableA + variableB;
        document.getElementById("exercise-3-result").innerHTML = `Числа имеют разные знаки. Их сумма равна: А + В = ${result}`;
    }
}

//Упражнение 4. Вывод чисел начиная с заданного
function getNumberRow() {
    let variableA = +document.getElementById("number").value;
    let result = '';
    switch (variableA) {
        case 0:
            result = '0 ';
        case 1:
            result += '1 ';
        case 2:
            result += '2 ';
        case 3:
            result += '3 ';
        case 4:
            result += '4 ';
        case 5:
            result += '5 ';
        case 6:
            result += '6 ';
        case 7:
            result += '7 ';
        case 8:
            result += '8 ';
        case 9:
            result += '9 ';
        case 10:
            result += '10 ';
        case 11:
            result += '11 ';
        case 12:
            result += '12 ';
        case 13:
            result += '13 ';
        case 14:
            result += '14 ';
        case 15:
            result += '15';
            document.getElementById("exercise-4-result").innerHTML = `Ряд чисел начиная от введенного числа: ${result}`;
            break;
        default:
            document.getElementById("exercise-4-result").innerHTML = `Вы ввели число вне заданного диапазона`;
    }
}