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
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const primerAlumnnoConC = listaAlumnos.find(function (nombreAlumno) {
  return nombreAlumno.startsWith("C");
});
console.log("PrimerAlumnoConC:", primerAlumnnoConC);
