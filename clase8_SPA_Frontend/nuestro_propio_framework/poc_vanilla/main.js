import { Apuesta } from "./components/apuesta/apuesta.js";

const root = document.querySelector("#app");

root.innerHTML = `
<div>
    <div id="apuesta1"></div>
    <div id="apuesta2"></div>
    <div id="apuesta3"></div>
    <div id="apuesta4"></div>
</div>
`;

document.querySelector("#apuesta1").innerHTML = Apuesta(20);
document.querySelector("#apuesta2").innerHTML = Apuesta(27);
document.querySelector("#apuesta3").innerHTML = Apuesta(31);
document.querySelector("#apuesta4").innerHTML = Apuesta(36);
