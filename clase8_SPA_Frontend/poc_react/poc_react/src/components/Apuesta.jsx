import "./apuesta.css";
import { useState } from "react";

export default function Apuesta(props) {
  const [contador, setContador] = useState(0);
  function aumentarContador() {
    setContador((contador) => contador + 1);
  }
  return (
    <div className="apuesta">
      <h1>{props.numero}</h1>
      <button onClick={aumentarContador}>Apostar $1</button>
      <p>
        Usted ha apostado ${contador} en el numero {props.numero}
      </p>
    </div>
  );
}
