import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {

  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg" />

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-container">

        <div className="hero-content">

          {/* Eyebrow */}
          <div className="eyebrow">
            <span className="eyebrow-line" />
            BUILDING SOLUTIONS. EMPOWERING FUTURES.
          </div>

          {/* Main Heading */}
          <h1>
            Your Technology
            <br />
            Partner for a{" "}
            <span>Smarter</span>
            <br />
            <span>Tomorrow</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            We deliver innovative software solutions, cloud services,
            and practical technology training to help individuals
            and businesses grow.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToContact}
            >
              Get Started
              <span>→</span>
            </button>

            <button
              className="secondary-btn"
              onClick={scrollToServices}
            >
              Our Services
            </button>

          </div>

          {/* Feature Highlights */}
          <div className="hero-features">

            <Feature
              icon="⚙"
              title="Innovative"
              subtitle="Solutions"
            />

            <Feature
              icon="♢"
              title="Reliable"
              subtitle="Support"
            />

            <Feature
              icon="♙"
              title="Client"
              subtitle="Focused"
            />

            <Feature
              icon="↗"
              title="Future"
              subtitle="Ready"
            />

          </div>

        </div>

        {/* Right-side Visual */}
        <div className="hero-message">

          <span>TECHNOLOGY</span>
          <span>TODAY</span>
          <span>A BRIGHTER</span>
          <span>TOMORROW</span>

          <div className="message-line" />

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="hero-bottom" />

    </section>
  );
};


/* =========================================
   FEATURE COMPONENT
========================================= */

const Feature = ({ icon, title, subtitle }) => {
  return (
    <div className="feature">

      <div className="feature-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>

    </div>
  );
};

export default HeroBanner;