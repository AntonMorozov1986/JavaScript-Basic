function getExponentiation(number, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return number * getExponentiation(number, exp - 1);
    }
}

let varA = +prompt('Введите число');
let varB = +prompt('Введите  степень, в которую нужно возвести число');

alert(`Число ${varA} в степени ${varB} равно ` + getExponentiation(varA, varB));