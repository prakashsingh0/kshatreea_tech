import React from "react";

import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import About from "./components/About";
import Training from "./components/Training";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />

      <HeroBanner />

      <Services />

     
      <Training />
      <About />
      <Contact />
    </>
  );
}

export default App;