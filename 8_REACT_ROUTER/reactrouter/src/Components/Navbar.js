// Aula 2, criaçao e edicao dos links com react router
import React from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      {/* LINKS com navLink, para barras de navegação */}
      <NavLink to={"/"}>Home </NavLink>

      {/* classe name esta num if usando uma arrowfunction para buscar o css do estilo da navbar */}
      {/* <NavLink to={"/"}className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}>Home </NavLink> */}

      <NavLink to={"/about"}> Sobre </NavLink>

      {/* 
    LINKS ANTIGOS
    <Link to="/">Home</Link>
    <Link to="/about">Sobre</Link>
     */}
    </nav>
  );
}

export default NavBar;
