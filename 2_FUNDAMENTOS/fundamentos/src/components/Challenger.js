const Challenger = () => {
  const renderComponet = (n1, n2) => {
    if (true) {
      return <h1> {`O valor de n1: ` + n1  + ` e o valor de n2: ` + n2}</h1>;
    } else {
      return <h1>Os valores não podem ser mostrados</h1>;
    }
  };
let n1 =5;
let n2 =20;

  const sumValue = () => {

    console.log(n1 + n2);
};

  return (
    <div>
      <div>
        {renderComponet(2, 6)} {/* Valores atribuidos na chamada da funcao */}
        <p>Outra forma de mostrar os numeros </p>
        <p>Numero 1: {n1}</p>
        <p>Numero 2: {n2}</p>
      </div>
      <div>
        <button onClick={sumValue}>Calculer </button>
        <button onClick={() => console.log(n1 + n2)}>Autre Façon de calculer</button>
      </div>
      <div></div>
    </div>
  );
};
export default Challenger;
