import React from "react";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <>
    <NavLink className="navigation flex" to={"/"}>
      <ul className="">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/"}>About</Link></li>
        <li><Link to={"/portfolio"}>Portfolio</Link></li>
        <li><Link to={"/"}>Contact</Link></li>
      </ul>
    </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
