import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Footer } from "./components/footer/Footer";
import { PageNotFound } from "./components/misc/PageNotFound";
import ScrollToTop from "./components/misc/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
