// Aula 2, criaçao e edicao dos links com react router
import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function NavBar() {
  return <nav>
    <Link to="/">Home</Link>
    
    <Link to="/about">Sobre</Link>
    
    </nav>;
}

export default NavBar;
