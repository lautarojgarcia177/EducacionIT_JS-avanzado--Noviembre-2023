// Loop

const misElementos = [1, 2, 3, 4, 5, { value: 'elemento final' }];

// 1: For
for (let i = 0; i < misElementos.length; i++) {
  console.log(i);
}
// 1.1 for...in
const person = { name: 'John', age: 30, job: 'developer' };
for (let key in person) {
    console.log(key, person[key]);
}
// 1.2 for...of
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
// 1.3 forEach WARNING/CUIDADO: No funciona con asincronismo
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number);
});

// 2: While
let index = 6;
while (index < misElementos.length) {
  console.log(misElementos[index]);
  index++;
}
// 3: Do while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
