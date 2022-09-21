import React from "react";
// import { useContext } from "react"; // aula 4, refatorando context
import ChageCounter from "../Components/ChageCounter";
// import { CounterContext } from "../context/CounterContext"; // aula 4 refatorando context
import { useCounterContext } from "../hooks/useCounterContext";

//Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function About() {
  // 5 - Context mais complexo -- Alterando cor do texto
  const { color, dispatch } = useTitleColorContext();
  //6 - Alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  console.log("Color do botao color", color);

  // const {counter} = useContext(CounterContext) // Aula 4, refatorando context
  const { counter } = useCounterContext();
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
      <ChageCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
              </div>
    </div>
  );
}

export default About;
