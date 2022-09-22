import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="cotainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
