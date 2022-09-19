import "./App.css";

// 1 - config react router
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// importando paginas
import Home from "./Pages/Home";
import About from "./Pages/About"

//importando os componentes
import NavBar from "./Components/Navbar";
import Produto from "./Components/Produto";
import Info from "./Components/Info";
import Nf from "./Components/Nf";
import SearchForm from "./Components/SearchForm";
import Search from "./Pages/Search";


function App() {
  return (
    <div className="App">
      {/* A parte fora do browserRoute vai se repetir sempre. */}
      <h1>React Router</h1>
      <BrowserRouter>
      {/*  Aula 2, criaçao e edicao dos links com react router */}
      <NavBar />
      {/* 9 - Search  */}
      <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          {/* 4 -  Rota dinamica, chamo a rota com o id do produto e utilizo o componente produto dentro do elemento */}
          <Route path="/produtos/:id" element={<Produto />} />
          {/* 5 - Nested route */}
          <Route path="/produtos/:id/info" element={<Info />} />
          {/* 9 - Pagina de busca Search */}
          <Route path="/search" element={<Search />}/>
          {/* 6 - Pagina não encontrada */}
          <Route path="*" element={<Nf />} />
          {/* Redirecionamento, nada mais é que utilizar um componente navigate no elemento para redirecionar para uma pagina desejada */}
          <Route path="/company" element={<Navigate to="/about"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
