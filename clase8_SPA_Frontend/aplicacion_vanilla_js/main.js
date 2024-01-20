const contadorLocalStorage36 = localStorage.getItem("contador36");
let contador36 = contadorLocalStorage36 ? Number(contadorLocalStorage36) : 0;

debugger
const contadorSpan36 = document.querySelector("#contador36");
contadorSpan36.innerHTML = contador36;

function aumentarContador36() {
  contador36++;
  contadorSpan36.innerHTML = contador36;
  localStorage.setItem("contador36", contador36);
}

const contadorLocalStorage20 = localStorage.getItem("contador20");
let contador20 = contadorLocalStorage20 ? Number(contadorLocalStorage20) : 0;

const contadorSpan20 = document.querySelector("#contador20");

contadorSpan20.innerHTML = contador20;

function aumentarContador20() {
  contador20++;
  contadorSpan20.innerHTML = contador20;
  localStorage.setItem("contador20", contador20);
}

