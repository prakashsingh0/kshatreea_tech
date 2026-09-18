import React from "react";

import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import About from "./components/About";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Home from "./Academy/Home"
import { Route, Routes } from "react-router-dom";
import Login from "./Academy/Login";
import Register from "./Academy/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/"
          element={
            <>
              <Nav />

              <HeroBanner />

              <Services />


              <Training />
              <About />
              <Contact />
            </>} />
        <Route path="/academy/login" element={<Login />} />
        <Route path="/academy/signup" element={<Register />} />
        <Route path="/academy" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;