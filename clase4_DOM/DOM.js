// Hay dos metodos para manipular elementos del DOM:

// Obtiene el primer elemento que satisface la busqueda
const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("#subtitulo");
const cancion = document.querySelector(".song");
const lista_canciones = document.querySelector("ul");
console.log("Query Selector", titulo, subtitulo, cancion);
// Obtiene todos los elementos que satisfacen la busqueda
const canciones = document.querySelectorAll(".song");
console.log("Query Selector All", canciones);

// Manipular el contenido de los elementos
titulo.innerHTML = `Red hot chili peppers`;
subtitulo.innerHTML = `Listado de canciones`;
lista_canciones.innerHTML = `
<li class="song">Snow</li>
<li class="song">Dani California</li>
<li class="song">By the way</li>
<li class="song">Give it away</li>
<li class="song">Dark Necessities</li>
`;

// Eventos
function callback_ustedClickeoElElemento($event) {
  console.log("Usted ha clickeado el elemento", $event);
  alert("Usted ha clickeado el elemento");
}
titulo.addEventListener("click", callback_ustedClickeoElElemento);

subtitulo.addEventListener("click", function ($event) {
  alert("Usted ha clickeado en el subtitulo");
});

function callback_change() {
  console.log("Change event!");
}
function callback_blur() {
  console.log("Blur event!");
}
function callback_mouseover() {
  console.log("Mouseover event!");
}

// Crear elementos
const anchorTag = document.createElement("a");
anchorTag.innerHTML = "Link a la pagina de los red hot";
anchorTag.href = "https://redhotchilipeppers.com/";

document.querySelector("body").appendChild(anchorTag);
