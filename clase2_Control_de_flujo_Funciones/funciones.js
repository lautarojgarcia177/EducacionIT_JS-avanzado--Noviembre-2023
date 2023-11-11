"use strict"

// Variable declarada en global scope
let resultado = 100;

function suma(numero1, numero2) {
  // Variable declarada en block scope
  const resultado = numero1 + numero2;
  console.log(resultado);
  saludo = "hola mundo";
}

suma(5,5);
console.log(resultado);

console.log(saludo)