import React, { useState } from "react";
import logo from "../components/images/kt.png";
import "./Navbar.css"
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

//   const scrollToContact = () => {
//     document
//       .getElementById("contact")
//       ?.scrollIntoView({ behavior: "smooth" });

//     closeMenu();
//   };

  return (
    <header className="navbar">

      {/* Logo */}
      <Link to="/academy" className="brand" onClick={closeMenu}>
        <img
          src={logo}
          alt="Kshatreeya Tech Solutions"
         style={{borderRadius:40}}/>
      </Link>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#profile" onClick={closeMenu}>
          Profile
        </a>

        {/* <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#training" onClick={closeMenu}>
          Training
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a> */}

        <Link to="/academy/login" onClick={closeMenu}>
          Log Out
        </Link>

      </nav>

      {/* CTA */}
      {/* <button
        className="navbar-cta"
        onClick={scrollToContact}
      >
        Log Out
        <span>→</span>
      </button> */}

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

export default Navbar;