// Objetos en js.
// Tienen multiples usos,

// Puedo usarlos para modelar objetos del dominio del problema
const monitor2 = {
  marca: "dell",
  precio: 300000,
  panel: "IPS",
};

// Los objetos pueden tener propiedades que sean objetos tambien. Nested property
const monitor1 = {
  marca: "gigabyte",
  precio: 200000,
  panel: "VA",
  codigos: {
    id: "2901380192801294 'entre comillas'kjsakdjalsd' ' \"hola' ",
    url: "wwww.mercadolibre.com.ar/productos/monitores/gigabyte_VA",
  },
};

// Los objetos son dinamicos, puedo agregarles propierdad y tmb modificarselas sobre la marcha.

// Creo un objeto vacio donde voy a estar guardando los errores
const errores = {};
// Supongamos que sucede un error
errores.not_found = "Resource not found";
errores.unauthenticated = "User not authenticated";
// Los objetos son mutables
errores.not_found = "El recurso no fue encontrado";

// Casteo de datos
monitor1.precio = Boolean(monitor1.precio);

console.log(typeof monitor1.precio);
console.log(monitor1.precio);
