Project on React and json-server api

### instalando o modulo json-server api (esse modulo vai nos ajudar a criar/emular um servidor de dados em json (api) )
```npm i json-server ```

- Depois da instalação, deve-se criar uma pasta com o nome de data e dentro dela um arquivo db.json

- Dentro de package.json, na seção scripts, é preciso inserir o script para inicialização da BD com o caminho da pasta e o nome do arquivo
``` "server": "json-server --watch data/db.json" ```

- Depois da configuração, iniciar o servidor DB (api) antes de inicar o projeto react
``` npm run server ```
