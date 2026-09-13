import React from "react";

import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />

      <HeroBanner />

      <Services />

      {/* Later */}
      {/* <Training /> */}
      <About />
      {/* <Contact /> */}
    </>
  );
}

export default App;