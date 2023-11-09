// Tipos de datos primitivos:

const number = 1;
const boolean = false;
const string = "Hola mundo";
const undefined = undefined;
const _null = null;

/*
Ejercicio1: Declara una variable llamada nombre y asígnale tu nombre. Imprime el valor de la variable nombre en la consola.
*/
const nombre = "Lautaro";
console.log(nombre);

/*
Ejercicio2: Crea variables para edad y esEstudiante y asígnales valores apropiados. 
Muestra los tipos de datos de estas variables utilizando el operador typeof.
*/
let edad = 33;
let estudiante = 'Juan';
console.log(typeof edad)
console.log(typeof esEstudiante)

/*
Ejercicio3: Declara una variable constante PI y asígnale el valor de pi (3.14159). 
Intenta reasignar un nuevo valor a PI y observa el resultado.
*/
const PI = Math.PI;
PI = 2;
