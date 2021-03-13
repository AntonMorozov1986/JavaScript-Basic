'use strict';

function example1() {
  let result = 10 + 10 + "10";
  console.log(`10 + 10 + "10" = "${result}"`);
  document.getElementById('calcExample1').innerHTML = `10 + 10 + "10" = "${result}"`;
}

function example2() {
  let result = 10 + "10" + 10;
  console.log(`10 + "10" + 10 = "${result}"`);
  document.getElementById('calcExample2').innerHTML = `10 + "10" + 10 = "${result}"`;
}

function example3() {
  let result = 10 + 10 + +"10";
  console.log(`10 + 10 + +"10" = ${result}`);
  document.getElementById('calcExample3').innerHTML = `10 + 10 + +"10" = ${result}`;
}

function example4() {
  let result = 10 / -"";
  console.log(`10 / -"" = ${result}`);
  document.getElementById('calcExample4').innerHTML = `10 / -"" = ${result}`;
}

function example5() {
  let result = 10 / +"2,5";
  console.log(`10 / +"2,5" = ${result}`)
  document.getElementById('calcExample5').innerHTML = `10 / +"2,5" = ${result}`;
}