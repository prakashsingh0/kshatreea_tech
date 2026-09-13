import React, { useState } from "react";
import logo from "./images/logo.png";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });

    closeMenu();
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <a href="#home" className="brand" onClick={closeMenu}>
        <img
          src={logo}
          alt="Kshatreeya Tech Solutions"
         style={{borderRadius:40}}/>
      </a>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#training" onClick={closeMenu}>
          Training
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      {/* CTA */}
      <button
        className="nav-cta"
        onClick={scrollToContact}
      >
        Let's Work Together
        <span>→</span>
      </button>

      {/* Mobile Menu */}
      <button
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

    </header>
  );
}

export default Nav;