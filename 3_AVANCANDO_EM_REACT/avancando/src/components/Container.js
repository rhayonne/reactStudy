import React from "react";



 /*O children é usado para buscar o contéudo que esta dentro da marcaçao conteiner onde ela esta sendo declarada, nesse caso dentro de App.js */
function Container({children, myValue}) {
  return (
    <div>
      <h2>Esse é o titulo do container</h2>
      {children} {/* Invocando children aqui, ele vai mostrar o que esta dentro da marcação em App.js*/}
      <h2>O valor é: {myValue}</h2>
    </div>
  );
}

export default Container;
