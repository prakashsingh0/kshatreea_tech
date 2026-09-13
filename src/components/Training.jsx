import React from "react";
import "./Training.css";

const trainingPrograms = [
  {
    number: "01",
    icon: "☁",
    title: "AWS Cloud",
    description:
      "Learn cloud fundamentals, AWS infrastructure, security, networking, deployment, monitoring, and scalable architectures.",
    topics: [
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "CloudWatch",
    ],
  },

  {
    number: "02",
    icon: "⚙",
    title: "DevOps & Automation",
    description:
      "Build practical DevOps skills with Linux, Git, Docker, CI/CD, Kubernetes, Terraform, monitoring, and automation.",
    topics: [
      "Linux",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Terraform",
    ],
  },

  {
    number: "03",
    icon: "</>",
    title: "Python Programming",
    description:
      "Develop strong Python fundamentals and learn how to create automation scripts, APIs, tools, and real-world applications.",
    topics: [
      "Python",
      "OOP",
      "APIs",
      "Automation",
      "Projects",
    ],
  },

  {
    number: "04",
    icon: "◈",
    title: "Full-Stack Development",
    description:
      "Learn how to build modern web applications using frontend, backend, databases, REST APIs, and deployment.",
    topics: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
    ],
  },
];

const Training = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="training-section" id="training">

      {/* Background decoration */}
      <div className="training-glow training-glow-one"></div>
      <div className="training-glow training-glow-two"></div>

      <div className="training-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="training-header">

          <div className="training-label">
            <span></span>
            TRAINING & DEVELOPMENT
            <span></span>
          </div>

          <h2>
            Learn Today.
            <br />
            <span>Build Tomorrow.</span>
          </h2>

          <p>
            Practical technology training designed to help students and
            aspiring professionals build real-world skills and become
            confident in modern software and cloud technologies.
          </p>

        </div>


        {/* =========================================
            TRAINING PROGRAMS
        ========================================= */}

        <div className="training-grid">

          {trainingPrograms.map((program) => (

            <div
              className="training-card"
              key={program.number}
            >

              {/* Card number */}
              <div className="training-number">
                {program.number}
              </div>

              {/* Icon */}
              <div className="training-icon">
                {program.icon}
              </div>

              {/* Content */}
              <h3>{program.title}</h3>

              <p className="training-description">
                {program.description}
              </p>

              {/* Topics */}
              <div className="training-topics">

                {program.topics.map((topic) => (
                  <span key={topic}>
                    {topic}
                  </span>
                ))}

              </div>

              {/* Link */}
              <button
                className="training-link"
                onClick={scrollToContact}
              >
                Enquire Now
                <span>→</span>
              </button>

            </div>

          ))}

        </div>


        {/* =========================================
            LEARNING APPROACH
        ========================================= */}

        <div className="learning-approach">

          <div className="approach-content">

            <div className="training-label approach-label">
              <span></span>
              OUR APPROACH
            </div>

            <h3>
              Learn by
              <span> Building.</span>
            </h3>

            <p>
              We believe technology is best learned through practice.
              Our training approach combines concepts, hands-on labs,
              practical exercises, and projects so learners can apply
              what they learn.
            </p>

          </div>


          <div className="approach-steps">

            <div className="approach-step">

              <div className="step-number">
                01
              </div>

              <div>
                <h4>Learn</h4>
                <p>
                  Understand the fundamentals.
                </p>
              </div>

            </div>


            <div className="approach-step">

              <div className="step-number">
                02
              </div>

              <div>
                <h4>Practice</h4>
                <p>
                  Work with real tools and labs.
                </p>
              </div>

            </div>


            <div className="approach-step">

              <div className="step-number">
                03
              </div>

              <div>
                <h4>Build</h4>
                <p>
                  Create practical projects.
                </p>
              </div>

            </div>


            <div className="approach-step">

              <div className="step-number">
                04
              </div>

              <div>
                <h4>Grow</h4>
                <p>
                  Develop industry-ready skills.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            CTA
        ========================================= */}

        <div className="training-cta">

          <div>

            <div className="cta-small">
              START YOUR JOURNEY
            </div>

            <h3>
              Ready to Build Your
              <span> Technology Career?</span>
            </h3>

            <p>
              Join practical training designed around real-world
              technologies and projects.
            </p>

          </div>

          <button
            className="training-cta-button"
            onClick={scrollToContact}
          >
            Get Training Details
            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Training;