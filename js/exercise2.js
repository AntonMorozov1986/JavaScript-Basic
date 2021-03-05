'use strict';

let productPrices = [100, 250, 150];
function countCartPrice(cartItems) {
    let cartSum = 0;
    cartItems.forEach(item => {
        cartSum += item;
    });
    return cartSum;
}

console.log('Сумма товаров в корзине - ' + countCartPrice(productPrices) + ' рублей');
alert('Сумма товаров в корзине - ' + countCartPrice(productPrices) + ' рублей');