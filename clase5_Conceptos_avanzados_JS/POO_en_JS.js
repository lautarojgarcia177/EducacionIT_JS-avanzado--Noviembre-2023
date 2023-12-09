// Funcion constructora
function Carro(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.velocidad = 0;
  this.acelerar = function () {
    if (this.velocidad < 130) {
      this.velocidad++;
    }
  };
  this.frenar = function () {
    this.velocidad--;
  };
}

const fiatCronos = new Carro("Fiat", "Cronos", 2024);
const volkswagenUp = new Carro("Volkswagen", "UP", 2015);
const fiatUno = new Carro("Fiat", "uno", 2005);
const gol = new Carro("Volkswagen", "Gol", 2010);
const doscientosOcho = new Carro("Peugeot", "208", 2020);

const flota = {
  fiatCronos,
  volkswagenUp,
  fiatUno,
  gol,
  doscientosOcho,
};

// Clases (sugar syntax)
class Moto {
  // Campos de la clase
  marca = "Honda";
  modelo;
  anio;
  velocidad;
  // Constructor de la clase (Es la funcion que se invoca con new)
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.velocidad = 0;
  }
  // Metodos de la clase
  acelerar() {
    if (this.velocidad < 130) {
      this.velocidad++;
    }
  }
  frenar() {
    this.velocidad--;
  }
}

const susukiGN = new Moto("Susuki", "GN", 2014);

console.log(susukiGN);

/*
 HERENCIA
*/

/* Con prototipos */
// Creo el objeto padre
const Lautaro = {
  nombre: "Lautaro",
  apellido: "Garcia",
  sexo: "M",
};
// Creo el objeto hijo con Object.create pasandole el padre como parametro
const lautaro_alumno = Object.create(Lautaro);
// Asigno propiedades al objeto nuevo
lautaro_alumno.legajo = 64785;
// Tests
console.log(lautaro_alumno.nombre);
lautaro_alumno.hasOwnProperty("legajo");
lautaro_alumno.hasOwnProperty("cursos");

/* Con clases */
class Persona {
  constructor(nombre, apellido, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
  }
}
class Profesor extends Persona {
  constructor(nombre, apellido, sexo, legajo) {
    super(nombre, apellido, sexo);
    this.legajo = legajo;
  }
}
const profe_lauti = new Profesor("Lautaro", "Garcia", "M", 64785);

console.log('Profeeee', profe_lauti);