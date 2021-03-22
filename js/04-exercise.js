'use strict';

const products = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg"
    ]
  },
  {
    id: 8,
    price: 78,
  },
];

let productsWithPhoto = products.filter(function (product) {
  if (product.hasOwnProperty('photos')) {
    //Игорь, уточните, пожалуйста, насколько допустимо неявное приведение на следующей строке?
    //Или лучше явно привести с помощью функции Boolean();
    //Спасибо.
    return product.photos.length;
  }
  return false;
})
console.log(productsWithPhoto);

let sortedProducts = products.sort(function (firstProduct, secondProduct) {
  return firstProduct.price - secondProduct.price;
});
console.log(sortedProducts);

