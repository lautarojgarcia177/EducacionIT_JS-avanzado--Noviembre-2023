// JS Conditional Statements

// IF
let a = 12;

if (a > 10) {
  if (a < 20) {
    console.log('a is between 10 and 20');
  } else {
    console.log('a is greater than or equal to 20');
  }
} else {
  console.log('a is 10 or less');
}

// Operador ternario
let b = 8;
let result = b > 5 ? 'b is greater than 5' : 'b is 5 or less';
let result2;
if (b > 5) {
  result2 = 'b is greater than 5';
} else {
  ('b is 5 or less');
}
console.log(result);

// Nullish coalescence operator

const listaDeCompras = {
  papa: 2,
  zanahoria: 2,
  calabacin: 1,
}
const cantidadDeBatata = listaDeCompras.batata ?? 2;

console.log(cantidadDeBatata);

// Logica matematica en condicionales
let aa = true;
let bbb = false;

// ! (Negacion)
console.log("A negado", !aa)
console.log("B negado", !bb)

// && (AND)
if (true && true && false) {
  console.log(true);
} else {
  console.log(false)
}

// || (OR)
if (false || false || true) {
  console.log(true);
} else {
  console.log(false)
}