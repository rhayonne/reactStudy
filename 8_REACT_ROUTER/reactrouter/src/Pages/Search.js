import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Search() {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/produtos?" + searchParams;

  const { data: items, load, erro } = useFetch(url);
  return (
    <div>
      <h1>Resultados Disponiveis</h1>
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

export default Search;
