import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to={"Home"}>Home</Link></li>
        <li><Link to={"Portfolio"}>Portfolio</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
