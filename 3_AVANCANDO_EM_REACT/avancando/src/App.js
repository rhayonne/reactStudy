import { useState } from "react";
import "./App.css";
// importar img
import City from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "Rhayonne";

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: true, km: 0 },
    { id: 3, brand: "Renault", color: "Amarela", newCar: true, km: 40 },
  ];

  function showMsg() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoa = [
    { id: 1, idade: 15, nome: "Joao", cidade: "Sao Paulo" },
    { id: 2, idade: 25, nome: "Maria", cidade: "Sao Paulo" },
    { id: 3, idade: 30, nome: "Silva", cidade: "Sao Paulo" },
    { id: 4, idade: 50, nome: "Cris", cidade: "Sao Paulo" },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Imagem na public" />
        {/* Quando a img esta em public, a gente acessa diretamente usando somente a barra / */}
      </div>
      <div>
        {/*Como carregar imagens em Assets ou em outras pastas nao publicas */}
        {/* A imagem foi importada na variavel City */}
        <img src={City} alt="Imagem da cidade em assets" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      {/* destructuring */}
      {/* Para passar numero no props, coloca-se o valor entre chaves se não ele vai ser reconhecido como texto */}
      <CarDetails brand="VW" km={100000} color="Branco" newCar={false} />

      {/* reproveitando um componente */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Azul" km={15} newCar={false} />
      {/* Loop array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          color={car.color}
          brand={car.brand}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propsFragment="Teste de Fragmento" />
      {/* Children props */}
      <Container myValue="Teste">
        <p>Esse é o conteudo do container</p>
      </Container>
      {/* Executando uma funcao passada por props à um componente filho */}
      <ExecuteFunction myFunction={showMsg} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* DESAFIO SECAO 3 */}
      {pessoa.map((pes) => (
        <UserDetails
          key={pes.id}
          nome={pes.nome}
          idade={pes.idade}
          cidade={pes.cidade}
        />
      ))}
    </div>
  );
}

export default App;
