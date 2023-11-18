/* Ejercicio 1: Suma de elementos
Escribe una función que reciba un arreglo de números y devuelva la suma de todos los elementos. */
function sumaElementos(arr) {
  // funcion reduce o ciclo for
  let acumulador = 0;
  arr.map(function (x) {
    acumulador += x;
    return x;
  });
  return acumulador;
}

/* 
    Ejercicio 2: Encontrar el número mayor
  Escribe una función que encuentre el número más grande en un arreglo de números. */

function encontrarMaximo(arr) {
  // return Math.max(...arr) // Forma simple
  let maximo = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximo) {
      maximo = arr[i];
    }
  }
  return maximo;
}

/*   Ejercicio 3: Filtrar números pares
  Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo que solo contenga los números pares. */

function filtrarPares(arr) {
  return arr.filter((numero) => numero % 2 === 0);
}

/*   Ejercicio 4: Contar elementos
  Escribe una función que cuente cuántas veces aparece un elemento específico en un arreglo. */

function contarElemento(arr, elemento) {
  /* 
    // con map
    let contador = 0;
    arr.map((elementoArra) => {
      if (elementoArra === elemento) {
        contador++;
      }
    });
    return contador;
    */
  return arr.filter((el) => el === elemento).length;
}

/*   Ejercicio 5: Revertir un arreglo
  Escribe una función que invierta el orden de los elementos en un arreglo. */

function invertirArreglo(arr) {
  // const arrInvertido = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   arrInvertido.push(arr[i]);
  // }
  // return arrInvertido;
  return arr.reverse();
}
const arr = ["a", "b", "c"];
console.log(invertirArreglo(arr));

/* Ejercicio 6: Eliminar duplicados
Escribe una función que tome un arreglo como entrada y devuelva un nuevo arreglo que contenga solo los elementos únicos del arreglo original.
 */
function eliminarDuplicados(arr) {
  // Tu código aquí
}

/* Ejercicio 7: Unir arreglos
Escribe una función que tome dos arreglos como entrada y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos, sin duplicados.
 */
function unirArreglos(arr1, arr2) {
  // Tu código aquí
}

/* Ejercicio 8: Encontrar la intersección
Escribe una función que tome dos arreglos como entrada y devuelva un nuevo arreglo que contenga solo los elementos que están presentes en ambos arreglos.
 */
function encontrarInterseccion(arr1, arr2) {
  // Tu código aquí
}

/* Ejercicio 9: Rotar a la derecha
Escribe una función que tome un arreglo y un número como entrada, y devuelva un nuevo arreglo que tenga los elementos del arreglo original rotados a la derecha el número de veces especificado.
 */
function rotarDerecha(arr, veces) {
  // Tu código aquí
}

/* Ejercicio 10: Combinar objetos
Escribe una función que tome dos arreglos de objetos como entrada y devuelva un nuevo arreglo que contenga la combinación de los objetos con el mismo índice.
 */
function combinarObjetos(arr1, arr2) {
  // Tu código aquí
}