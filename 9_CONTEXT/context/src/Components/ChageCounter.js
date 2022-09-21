//3 - Alterando contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChageCounter = () => {
  const {counter, setCounter} = useContext(CounterContext) //como os valores chegam como objetos, usar {} e não []

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Adicionar valor no contador
      </button>
      <button onClick={() => setCounter(null)} >Reiniciar contador</button>
    </div>
  );
};

export default ChageCounter;
