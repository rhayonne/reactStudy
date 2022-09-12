import React, { useState } from "react";

function ManageData() {
  let someData = 10;
  console.log(someData);

  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
      </div>
      <button onClick={() => (someData = 15)}>Mudar Variavel</button>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  );
}

export default ManageData;
