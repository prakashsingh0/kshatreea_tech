import React, { useState } from "react";
import "./Contact.css";
import brandlogo from './images/kt.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-section" id="contact">

      {/* Background decoration */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="contact-info">

          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h2>
            Let's Build
            <br />
            <span>Something Great.</span>
          </h2>

          <p className="contact-intro">
            Have a project in mind, need technology support, or want to
            learn a new skill? Let's start a conversation.
          </p>

          <p className="contact-description">
            Whether you're looking for software development, cloud and
            DevOps solutions, IT automation, or practical technology
            training, we're here to understand your requirements.
          </p>


          {/* Contact Details */}

          <div className="contact-details">

            <div className="contact-detail">

              <div className="contact-detail-icon">
                ✉
              </div>

              <div>
                <small>Email</small>
                <strong>
                  kshatreeyaprakashsingh@gmail.com
                </strong>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-detail-icon">
                ☎
              </div>

              <div>
                <small>Let's Talk</small>
                <strong>
                  Start a conversation with us
                </strong>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-detail-icon">
                ◈
              </div>

              <div>
                <small>Services</small>
                <strong>
                  Software • Cloud • DevOps • Training
                </strong>
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            CONTACT FORM
        ========================================= */}

        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <div>
              <span>START A CONVERSATION</span>

              <h3>
                Tell us about your
                <strong> project.</strong>
              </h3>
            </div>

            <div className="contact-form-mark">
              <img src={brandlogo} alt="logo"  style={{height:45, borderRadius:12}}/> 
              
            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name + Email */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* Phone + Subject */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  I'm Interested In
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select an option
                  </option>

                  <option value="software">
                    Software Development
                  </option>

                  <option value="cloud">
                    Cloud Solutions
                  </option>

                  <option value="devops">
                    DevOps & Automation
                  </option>

                  <option value="monitoring">
                    IT Monitoring
                  </option>

                  <option value="training">
                    Technology Training
                  </option>

                  <option value="consulting">
                    IT Consulting
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us a little about your requirement..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="contact-submit"
            >

              Send Message

              <span>→</span>

            </button>


            {/* Success */}

            {submitted && (
              <div className="form-success">
                ✓ Thank you. We'll get back to you soon.
              </div>
            )}

          </form>

        </div>

      </div>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <div className="contact-bottom">

        <div>
          <span>
            KSHATREEYA TECH SOLUTIONS
          </span>

          <p>
            Building solutions. Empowering futures.
          </p>
        </div>

        <div className="contact-bottom-line"></div>

        <p className="copyright">
          © {new Date().getFullYear()} Kshatreeya Tech Solutions.
          All rights reserved.
        </p>

      </div>

    </section>
  );
};

export default Contact;