import "./App.css";

// 1 - config react router
import { Routes, Route, BrowserRouter } from "react-router-dom";

// importando paginas
import Home from "./Pages/Home";
import About from "./Pages/About"

//importando os componentes
import NavBar from "./Components/Navbar";
import Produto from "./Components/Produto";


function App() {
  return (
    <div className="App">
      {/* A parte fora do browserRoute vai se repetir sempre. */}
      <h1>React Router</h1>
      <BrowserRouter>
      {/*  Aula 2, criaçao e edicao dos links com react router */}
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          {/* 4 -  Rota dinamica, chamo a rota com o id do produto e utilizo o componente produto dentro do elemento */}
          <Route path="/produtos/:id" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
