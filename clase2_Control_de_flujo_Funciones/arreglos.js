const listaAlumnos = [
  "Fernando Gonzales",
  "Oscar Marcelo Orrego",
  "Sergio Andam",
  "Caterina Galli",
  "Daniel",
  "Dardo Marcelo Noguera",
  "Emiliano Abal",
  "Sabrina Luciana Borget",
];
console.log(listaAlumnos.length);

listaAlumnos.push("Laura Morello Flores");

console.log(listaAlumnos);

// Tarea: Revisar los metodos de array pop, find, map, filter, indexOf, map, slice, shift
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array\

// Los arreglos tienen metodos. Algunos son funciones puras, y otros no.

// FIND: (Funcion Pura) Devuelve el primer elemento que cumple con la funcion de callback
const primerAlumnnoConC = listaAlumnos.find(function (nombreAlumno) {
  return nombreAlumno.startsWith("C");
});
console.log("PrimerAlumnoConC:", primerAlumnnoConC);

// POP: (Funcion Impura) Remover el ultimo elemento del arreglo
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop();

//shift (Funcion Impura) Remover el primer elemento del arreglo
const array2 = [1, 2, 3];
const firstElement = array2.shift();

// MAP: (Funcion Pura) Retorna un arreglo modificado
const array1 = [1, 4, 9, 16];
const map1 = array1.map(function(x) { return x * 2 });

// FILTER: (Funcion Pura)
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(function (word) { return word.length > 6 });

// indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', { nombre: "alce"}];
indiceDeBison =  beasts.indexOf('bison');
  // Ojo cuando los elementos del array son objetos
indiceDeBison =  beasts.indexOf({ nombre: "alce"}); // Retorna -1 porque no lo encuentra
indiceDeBisonFind = beasts.indexOf(beasts.find(function(x) { return x.nombre === "alce"}))

//slice: (Funcion pura)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
