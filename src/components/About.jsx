import React from "react";
import "./About.css";

const About = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section" id="about">

      {/* Background decoration */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="about-content">

          <div className="about-label">
            <span></span>
            ABOUT US
          </div>

          <h2>
            Technology That
            <br />
            <span>Moves Business Forward.</span>
          </h2>

          <p className="about-intro">
            Kshatreeya Tech Solutions is a technology company focused on
            delivering practical, reliable, and scalable digital solutions
            for businesses and individuals.
          </p>

          <p className="about-text">
            We combine software development, cloud technologies, DevOps,
            automation, monitoring, and technical training to help our
            clients build better systems and operate more efficiently.
          </p>

          <p className="about-text">
            Our approach is simple — understand the problem, build the
            right solution, and create technology that delivers real value.
          </p>

          <button
            className="about-button"
            onClick={scrollToContact}
          >
            Let's Work Together
            <span>→</span>
          </button>

        </div>


        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div className="about-visual">

          {/* Main card */}
          <div className="about-main-card">

            <div className="about-card-top">

              <div className="about-shield">
                <span>KT</span>
              </div>

              <div>
                <small>KSHATREEYA</small>
                <strong>TECH SOLUTIONS</strong>
              </div>

            </div>

            <div className="about-card-line"></div>

            <div className="about-card-message">
              <span>BUILD.</span>
              <span>AUTOMATE.</span>
              <span>GROW.</span>
            </div>

          </div>


          {/* Floating stats */}

          <div className="about-stat about-stat-one">
            <strong>100%</strong>
            <span>Client Focused</span>
          </div>

          <div className="about-stat about-stat-two">
            <strong>24/7</strong>
            <span>Technology Mindset</span>
          </div>


          {/* Decorative circles */}

          <div className="about-circle circle-one"></div>
          <div className="about-circle circle-two"></div>

        </div>

      </div>


      {/* =========================================
          VALUES
      ========================================= */}

      <div className="about-values">

        <div className="about-value">

          <div className="value-icon">
            ◈
          </div>

          <div>
            <h3>Innovation</h3>
            <p>
              We explore modern technologies to create smarter solutions.
            </p>
          </div>

        </div>


        <div className="about-value">

          <div className="value-icon">
            ✓
          </div>

          <div>
            <h3>Reliability</h3>
            <p>
              We focus on dependable systems and long-term solutions.
            </p>
          </div>

        </div>


        <div className="about-value">

          <div className="value-icon">
            ⚡
          </div>

          <div>
            <h3>Efficiency</h3>
            <p>
              Automation and optimization help businesses work smarter.
            </p>
          </div>

        </div>


        <div className="about-value">

          <div className="value-icon">
            ↗
          </div>

          <div>
            <h3>Growth</h3>
            <p>
              Technology should create opportunities for continuous growth.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;