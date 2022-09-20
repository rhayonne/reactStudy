import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Produtos from "./Pages/Produtos";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
