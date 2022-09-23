import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";


function Register() {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuarioe compartilhe suas historias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="Nome do usuario"></input>
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail do usuario"></input>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Insira sua senha"></input>
        </label>
        <label>
          <span>Confirmacao de senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha"></input>
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
