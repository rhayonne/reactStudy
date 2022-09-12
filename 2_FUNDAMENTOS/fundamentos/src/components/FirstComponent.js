import MyComponent from "./MyComponent";

const FirstComponent = () => {
  //Comentario fora do JSX
  /*
    comentario de linhas no JSX
    */
  return (
    <div>
      {/*Algum comentario  dentro do JSX*/}
      <h1>Meu primeiro componente</h1>
      <MyComponent/>
    </div>
  );
};

export default FirstComponent;
