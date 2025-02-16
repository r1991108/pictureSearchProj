import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router";
import "./styles/style.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/pictureSearchProj/" element={<Homepage />} />
        <Route path="/pictureSearchProj/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
