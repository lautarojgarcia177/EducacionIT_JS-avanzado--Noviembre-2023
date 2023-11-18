// Objeto built-in en JS: Object

const terreneitor = {
  bateria: true,
  canales_de_traccion: 4,
  color: "rojo",
  costo: 35,
  material: "ABS",
  terreno: "todos",
  velocidad: 15,
};

// Obtener las claves (nombres de las properties de un objeto)
Object.keys(terreneitor);
// Obtener los valores
Object.values(terreneitor);
// Freezar un objeto para que no se pueda extender ni modificar sus propiedades (El verdadero const). Esta operacion es irreversible
Object.freeze(terreneitor);
// Sellar un objeto para que no se pueda extender. Pero si permite modificar sus propiedades
const nerf = {
  dardos: 10,
  distancia: 17,
  automatico: true,
};
Object.seal(nerf);

// Verificar si un objeto cuenta con la propiedad enviada por parametro (Devuelve true o false)
terreneitor.hasOwnProperty("bateria");

// En js, los objetos se asignan por referencia, por lo tanto
const terreneitorCopy = terreneitor; // Estos dos objetos apuntan al mismo, OJO 👁️!!!!!!!!!!!!!!!!!!!!!!!
// Por lo que si queremos hacer una copia verdadera de un objeto, lo que hacemos es utilizar la spread sintax:
const trueTerreneitorCopy = { ...terreneitor };
