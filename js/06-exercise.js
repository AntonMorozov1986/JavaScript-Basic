'use strict';

function drawSlide() {
  let userSymbol = prompt('Введите символ, которым будет нарисована горка');
  let slideHeight = +prompt('Введите желаемую высоту горки (в числовом виде)');
  for (let i = 0, slide = ''; i < slideHeight; i++) {
    slide = slide + userSymbol;
    console.log(slide);
  }
}

drawSlide();