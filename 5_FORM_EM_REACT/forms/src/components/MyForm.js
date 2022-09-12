import "./Myform.css";
import { useState } from "react";

function MyForm({ user }) {
  // gerenciamento de dados
  //controlled inputs
  const [name, setName] = useState(user ? user.name : ""); //fazendo um condicional usando o props que vem do app.js
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    // Resgata o valor dentro do evento *e* Se for colocado somente e, dentro do inspecionar do bronwser, da para ver o que podemos pegar
    //nesse caso, ele esta atribuindo no setName o valor digitado no campo name
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //ao clicar no enviar (submit) o formulario nao recarrega a pagina mais
    console.log("Enviando o Formulario");
    console.log(name, email, bio, role);

    // Limpar formulario
    setEmail("");
    setName("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 5 ENVIO DE FORM */}

      {/* Craiçao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* Label envolvendo Input / maneira sugerida para criar formularios, na documentação do React*/}
        <span>E-mail</span>
        {/* Simplificação de manipulação de state */}
        {/* OUTRA FORMA de  manipular input com setmail dentro do onchange direto no input. Assim não necessitando do hadle para o input */}
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* 8 TEXT AREA */}
        <label>
          <span>Bio</span>*
          <textarea
            name="bio"
            placeholder="Descrição do Usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 SELECT */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value='escolha'>Escolha uma Função</option>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>

          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;
