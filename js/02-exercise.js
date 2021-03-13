'use strict';

function variables() {
  let name = null,
      admin = null;
  name = document.getElementById("exercise-variables-input").value;
  admin = name;
  console.log(admin);
  document.getElementById("exercise-variables-result").innerHTML = `Значение переменной "name": ${name}. Значение переменной "admin": ${admin}.`;
}