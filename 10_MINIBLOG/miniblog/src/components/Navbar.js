import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
