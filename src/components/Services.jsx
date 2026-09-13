import React from "react";
import "./Services.css";

const services = [
  {
    icon: "☁",
    title: "Cloud Solutions",
    description:
      "Setup, migrate, and manage your infrastructure on AWS with security, scalability, and cost optimization.",
  },
  {
    icon: "⚙",
    title: "DevOps & Automation",
    description:
      "Streamline development and operations with CI/CD, infrastructure as code, and automation for faster, reliable releases.",
  },
  {
    icon: "▥",
    title: "IT Monitoring & Observability",
    description:
      "Keep your systems healthy with real-time monitoring, alerts, and performance insights.",
  },
  {
    icon: "♢",
    title: "Security & Compliance",
    description:
      "Protect your business with best practices, secure configurations, and compliance-ready infrastructure.",
  },
  {
    icon: "</>",
    title: "Custom Software Development",
    description:
      "Build modern web applications and tools tailored to your business needs using Python, React, and more.",
  },
  {
    icon: "♙",
    title: "IT Consulting & Support",
    description:
      "Get expert guidance and ongoing support to solve your IT challenges and achieve your business goals.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Header */}
        <div className="services-header">
          <div className="section-label">
            <span></span>
            OUR SERVICES
            <span></span>
          </div>

          <h2>
            Solutions for a Stronger
            <br />
            <span>Digital Tomorrow</span>
          </h2>

          <p>
            At Kshatreeya Tech Solutions, we deliver reliable, scalable,
            and innovative IT solutions to help businesses grow, operate
            efficiently, and stay ahead in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="learn-more">
                Learn More
                <span>→</span>
              </a>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">

          <div className="cta-content">
            <div className="cta-label">
              LET'S WORK TOGETHER
            </div>

            <h3>Ready to Transform Your IT Operations?</h3>

            <p>
              Partner with Kshatreeya Tech Solutions and build a more
              resilient, efficient, and innovative business.
            </p>
          </div>

          <a href="#contact" className="cta-button">
            Get in Touch
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;