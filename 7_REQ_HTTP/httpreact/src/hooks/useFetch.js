import { useEffect, useState } from "react";

//4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callfetch, setCalfetch] = useState(false);

  // 6 - Loading
  const [loading, setLoading] = useState(false);

  //Tratando erros
  const [erro, setErro] = useState(null);

  //8 - desafio 6
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //6 - Loading
      setLoading(true);
      try {
        //cria a resposta da api
        const res = await fetch(url);
        //transforma a resposta em um objeto json
        const json = await res.json();
        //set data recebe o obj json
        setData(json);
      } catch (error) {
        console.log(error.message);
        setErro("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callfetch]);
  //5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();
      } else if (method === "DELETE") {
        const delteUrl = `${url}/${itemId}`;
        const res = await fetch(delteUrl, config);
        json = await res.json();
      }
      setCalfetch(json);
    };
    httpRequest();
  }, [config, method, url]);

  //retorna os dados que vamos utilizar no app
  return { data, httpConfig, loading, erro };
};
