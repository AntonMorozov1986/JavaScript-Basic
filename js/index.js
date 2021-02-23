'use strict';

function temperature() {
    let tempCelsius = document.getElementById("exercise-temperature-input").value;
    let tempFahrenheit = 9999;
    if (isNaN(tempCelsius)){
        document.getElementById("exercise-temperature-result").innerHTML = 'Необходимо ввести число в цифровом виде.';
    } else {
        tempFahrenheit = ((9 / 5) * tempCelsius) + 32;
        document.getElementById("exercise-temperature-result").innerHTML = `Температура ${tempCelsius} градусов Цельсия равна ${tempFahrenheit} градуса Фаренгейта`;
    }
}

function variables() {
    let name = document.getElementById("exercise-variables-input").value;
    let admin = null;
    admin = name;
    document.getElementById("exercise-variables-result").innerHTML = `Значение переменной "admin": ${admin}.`;
}

function typeData() {
    let a = 1000;
    let b = '108'
    let c = a + b;
    let type_c = typeof c;
    document.getElementById("exercise-data-result").innerHTML = `Значение выражение 1000 + "108" = ${c}.<br> Тип данных: ${type_c}` + '<br><br>' + 'Т.к. один из операндов строковый, то в этом случае будет выполнятся не арифметическое сложение, а конкатенация, т.е. операция склеивания строк. Арифметическое сложение будет выполнятся только в том случае если все операнды будут иметь тип данных NUMBER.';
}