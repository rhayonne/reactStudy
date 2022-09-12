// Renderização condicional, vai imprimir ou mostrar algo baseado em uma condição

import { useState } from "react";

function ConditionalRender() {
  const [x] = useState(true);

  const [name, setName] = useState("Matheus");

  return (
    <div>
      <h1>Isso vai ser Exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}{" "}
      {/* OPERADOR NOT   !x essa conversao " negacao" de x então: !false => true  */}
      {name === "Joao" ? (<div>O nome é {name}</div>) : (<div>O nome é {name}</div>)}  {/* IF ternario */}
      <button onClick={() => setName("Joao")}>Clique Joao</button>
      <button onClick={() => setName("Matheus")}>Clique Matheus</button>
    </div>
  );
}

export default ConditionalRender;
