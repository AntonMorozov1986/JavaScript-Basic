function getSum(arg1, arg2) {
    return arg1 + arg2;
}

function getSubtraction(arg1, arg2) {
    return arg1 - arg2;
}

function getMultiplication(arg1, arg2) {
    return arg1 * arg2;
}

function getDivision(arg1, arg2) {
    return arg1 / arg2;
}

let varA = +prompt('Введите первое число');
let varB = +prompt('Введите второе число');

alert('Сумма двух чисел равна ' + getSum(varA, varB));
alert('Разница двух чисел равна ' + getSubtraction(varA, varB));
alert('Произведение двух чисел равно ' + getMultiplication(varA, varB));
alert('Частное двух чисел равно ' + getDivision(varA, varB));


