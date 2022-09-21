// import {React, useContext} from "react"; //- comentado para refatorar aula 4
import ChageCounter from "../Components/ChageCounter";
import { CounterContext } from "../context/CounterContext";

//4 - Refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";

//Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function Home() {
  // const {counter} = useContext(CounterContext) //- comentado para refatorar aula 4
  const { counter } = useCounterContext();

  // 5 - Context mais complexo -- Alterando cor do texto
  const { color, dispatch } = useTitleColorContext();
  console.log(color);

  //6 - Alterando context complexo
  const setTitleColor = (color) => {
     dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      {console.log(color)}
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando o valor do contexto */}
      <ChageCounter />
      {/* 6 - alterando context complexo  */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
}

export default Home;
