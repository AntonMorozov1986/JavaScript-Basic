'use strict';

function temperature() {
    let tempCelsius = document.getElementById("exercise-temperature-input").value;
    if (isNaN(tempCelsius)){
        document.getElementById("exercise-temperature-result").innerHTML = 'Необходимо ввести число в цифровом виде.';
        return;
    }
    let tempFahrenheit = (((9 / 5) * tempCelsius) + 32).toFixed(2);
    document.getElementById("exercise-temperature-result").innerHTML = `Температура ${tempCelsius} &deg;C равна ${tempFahrenheit} &deg;F`;
}