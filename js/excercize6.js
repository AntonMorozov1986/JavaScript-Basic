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

function calculate(arg1, arg2,operation) {
    switch (operation) {
        case '+':
            return ('Сумма двух чисел равна ' + getSum(arg1, arg2));
        case '-':
            return ('Разница двух чисел равна ' + getSubtraction(arg1, arg2));
        case '*':
            return ('Произведение двух чисел равно ' + getMultiplication(arg1, arg2));
        case '/':
            return ('Частное двух чисел равно ' + getDivision(arg1, arg2));
        default:
            return 'Вы ввели неправильную операцию.'
    }

}

let varA = +prompt('Введите первое число');
let varB = +prompt('Введите второе число');
let action = prompt('Введите требуемую операцию:\nСложение: +\nВычитание: -\nУмножение: *\nДеление: /')

alert(calculate(varA, varB, action));



