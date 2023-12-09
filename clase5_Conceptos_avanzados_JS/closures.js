/*
  En una funcion:
    Parametros: Es la definicion de las entradas de la funcion (hijo1, hijo2, hijo3)
    Argumentos: Son las entradas actuales que recibe la funcion ("Pedro, "Pablo", "Paola)

    Las funciones en Javascript son First Class => Significa que las funciones se puedan tratar
    como si fueran variables, es decir que se pueden enviar funciones como parametro, se pueden
    asignar a variables, se pueden modificar, etc.
*/

function init() {
  var nombre = "Mozilla"; // name es una variable local
  function mostrarNombre() {
    // mostrarNombre() es la funcion interna, que conforma el closure
    console.log(nombre); // La funcion interna puede usar las variables de la funcion padre
  }
  mostrarNombre();
}
init();

// bloques no generan scope con var
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
// pero si lo hacen con const y let
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined

// Closures chain (cadena)

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// First class Functions:
let contadorDeEjecuciones = 0;
function ejecutarFuncion(f) {
  contadorDeEjecuciones++;
  f();
}

ejecutarFuncion(function () {
  console.log("he sido ejecutada");
});
