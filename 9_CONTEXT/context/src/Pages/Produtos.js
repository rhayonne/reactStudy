import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

function Produtos() {
  // const {counter } = useContext(CounterContext) // aula 4, refatorando o context
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
}

export default Produtos;
