import { useEffect, useState } from "react";

//4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        //cria a resposta da api
      const res = await fetch(url);
      //transforma a resposta em um objeto json
      const json = await res.json();
      //set data recebe o obj json
      setData(json);
    };
    fetchData();
  }, [url]);
  //retorna os dados que vamos utilizar no app
  return {data}
};
