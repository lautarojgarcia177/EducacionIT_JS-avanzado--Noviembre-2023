export function Apuesta(numero) {
  return `
        <div class="apuesta">
            <h1>${numero}</h1>
            <button onclick="aumentarContador${numero}()">Apostar $1</button>
            <p>Usted ha apostado $<span id="contador${numero}"></span> en el numero ${numero}</p>
        </div> 
    `;
}
