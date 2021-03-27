'use strict';

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = this.price - (this.price * 0.25);
  }
}

let productName = prompt('Введите название продукта');
let productPrice = +prompt('Введите цену продукта');
let userProduct = new Product(productName, productPrice);
console.log(userProduct);
userProduct.make25PercentDiscount();
console.log(userProduct);
