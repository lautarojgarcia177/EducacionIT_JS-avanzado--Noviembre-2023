// Ejercicio 1
// Crear una promesa que se resolverá con el valor 3.
(async () => console.log(await new Promise((resolve, reject) => resolve(3))))();

// Ejercicio 2
// Crea una promesa que se rechazará con la cadena "¡Bu!"
(async () => {
  let result;
  try {
    result = await new Promise((resolve, reject) => reject("¡Bu!"));
  } catch (err) {
    result = err;
  }
  console.log(result);
})();

// Ejercicio 3
// Utiliza el constructor Promise para crear una promesa que:
// se resuelva si itShouldResolve es verdadero
// se rechace si itShouldResolve es falso
function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
    if (itShouldResolve) {
      return resolve("Resolvio con True!");
      console.log("CONTINUA AQUI!!!!!!!!!!!!!!!!!!!!!!!!"); // Como el resolve tiene return, entonces las lineas que siguen en el bloque no se ejecutan.
    }
    reject("Fallo con False!");
  });
}

makePromiseWithConstructor(true).then(console.log);

// Ejercicio 4
/* Returna una promesa que se resuelvacon el valor
   luego de pasado el tiempo de delayInMs */
function makeDelayPromise(value, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayMs);
  });
}
makeDelayPromise("Hola", 1000).then((resultado) => console.log(resultado));
