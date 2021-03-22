'use strict';

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];



products.forEach(function (product) {
  const discountPercent = 15;
  return product.price = product.price * ((100 - discountPercent)/100);
});
console.log(products);