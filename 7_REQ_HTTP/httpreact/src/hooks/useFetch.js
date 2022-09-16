import { useEffect, useState } from "react";

//4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callfetch, setCalfetch] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data)
      });
      setMethod(method);
    }
  };

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
  }, [url, callfetch]);
  //5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCalfetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]);

  //retorna os dados que vamos utilizar no app
  return { data, httpConfig };
};
