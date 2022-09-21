import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <NavLink to={"/"}> Home</NavLink>
        <NavLink to={"/produtos"}>Produtos</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>

    </nav>
  )
}

export default Navbar