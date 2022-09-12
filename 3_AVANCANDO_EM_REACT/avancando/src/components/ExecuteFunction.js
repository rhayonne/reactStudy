import React from "react";

function ExecuteFunction({ myFunction }) {
  return (
    <div>
      <button onClick={myFunction}>CLique para executar a funcao</button>
    </div>
  );
}

export default ExecuteFunction;
