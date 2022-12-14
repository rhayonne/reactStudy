import "./App.css";

import { useState, useEffect } from "react";

// 4 - Custom hook
import { useFetch, httpConfig } from "./hooks/useFetch";

function App() {
  const [pdt, setPdt] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "http://localhost:3000/products";

  //4 - Custom hook
  const { data: items, httpConfig, loading, erro } = useFetch(url);

  // 1 - Resgatando dados

  // async function fecthData() {
  //   //fazendo conexao com o BD
  //   const res = await fetch(url);

  //   //transformando os dados em obj json
  //   const data = await res.json();
  //   setPdt(data);
  // }

  // useEffect(() => {
  //   fecthData();
  // }, []);

  //2 - adiçao de produtos

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pdt = {
      name,
      price,
    };
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // 3 - Carregamento dinamico
    // const addedProduct = await res.json();
    // setPdt((prevProducts) => [...prevProducts, addedProduct]);

    //5 - refatorando post
    httpConfig(pdt, "POST");
    setName("");
    setPrice("");
  };
//8 - desafio 6 - removendo produto
const handleDelete = (id) =>{
  httpConfig(id, "DELETE");
}
  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando dados...</p>}
      {/* tendo erro deve-se exibir o erro */}
      {erro && <p>{erro}</p>}
      {/* se nao tiver erro exibe a ul */}
      {!erro &&(
        <ul>
          {/* se houver item, ele vai criar o array (map) */}
          {items &&
            items.map((pd) => (
              <li key={pd.id}>
                {pd.name} - R$: {pd.price}{" "} <button type="submit" onClick={() => handleDelete(pd.id)}>Deletar</button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-prod">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:{" "}
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - Loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
