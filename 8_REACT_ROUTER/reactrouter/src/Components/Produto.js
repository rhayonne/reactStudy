import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Produto() {
  // 4 - rota dinamica
  //trazendo o id pelo parametro na rota dinamica em app.js
  const { id } = useParams();
  const url = "http://localhost:3000/produtos/" + id;

  // 5 - Carregamento dado individual do produto (detalhes do produto pelo id)
  const { data: pdt, loading, erro } = useFetch(url);
  console.log(pdt);
  return (
    <div>
      <p>Id do Produto: {id}</p>
      {erro && <p>Ocorreu um erro: {erro} </p>}
      {loading && <p>Carregando...</p>}
      {pdt && (
        <div>
          <h1> Produto: {pdt.name}</h1>
          <p>Preço: R${pdt.price} </p>
          {/* 6 - Nested routes */}
          <Link to={`/produtos/${pdt.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  );
}

export default Produto;
