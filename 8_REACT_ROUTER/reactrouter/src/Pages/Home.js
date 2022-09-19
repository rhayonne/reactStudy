import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

function Home() {
  //Aula 3, carregamento de dados
  const url = "http://localhost:3000/produtos";
  const { data: items, loading, erro } = useFetch(url);
  return (
    <div>
      <h1>Produtos</h1>
      {erro && <p>{erro}</p>}
      <ul className="produtos">
        {items && items.map((item => (
            <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$: {item.price}</p>
                <Link to={`/produtos/${item.id}`}>Detalhes</Link>
            </li>
        )))}
      </ul>
    </div>
  );
}

export default Home;
