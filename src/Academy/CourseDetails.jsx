import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseData from "./data/course.json";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courseData.courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <div className="CourseNotFound">
        <h2>Course Not Found</h2>

        <button onClick={() => navigate("/academy")}>
          Back to Academy
        </button>
      </div>
    );
  }

  return (
    <div className="CourseDetailsPage">

      {/* Hero */}

      <section className="CourseDetailsHero">

        <div className="CourseDetailsIcon">
          {course.icon}
        </div>

        <span className="CourseDetailsBadge">
          {course.badge}
        </span>

        <h1>{course.title}</h1>

        <p>{course.description}</p>

        <div className="CourseMeta">

          <div>
            <span>Duration</span>
            <strong>{course.duration}</strong>
          </div>

          <div>
            <span>Mode</span>
            <strong>{course.mode}</strong>
          </div>

          <div>
            <span>Training</span>
            <strong className="FreeText">
              {course.training}
            </strong>
          </div>

          <div>
            <span>Certificate</span>
            <strong>{course.certificate}</strong>
          </div>

        </div>

        <button
          className="ApplyButton"
          onClick={() => {
            // Add your Google Form URL here later
            window.open(
              "YOUR_GOOGLE_FORM_URL",
              "_blank"
            );
          }}
        >
          Apply for Internship
          <span>→</span>
        </button>

      </section>


      {/* Main Content */}

      <div className="CourseDetailsContent">

        {/* Overview */}

        <section className="CourseSection">

          <h2>About the Internship</h2>

          <p>
            {course.overview}
          </p>

        </section>


        {/* Highlights */}

        <section className="CourseSection">

          <h2>Program Highlights</h2>

          <div className="DetailsGrid">

            {course.highlights.map((item, index) => (
              <div
                className="DetailItem"
                key={index}
              >
                <span>✓</span>
                {item}
              </div>
            ))}

          </div>

        </section>


        {/* Topics */}

        <section className="CourseSection">

          <h2>What You'll Learn</h2>

          <div className="TopicsGrid">

            {course.topics.map((topic, index) => (
              <div
                className="TopicItem"
                key={index}
              >
                <span>{index + 1}</span>
                {topic}
              </div>
            ))}

          </div>

        </section>


        {/* Projects */}

        <section className="CourseSection">

          <h2>Projects</h2>

          <div className="ProjectsGrid">

            {course.projects.map((project, index) => (
              <div
                className="ProjectItem"
                key={index}
              >
                <strong>
                  Project {index + 1}
                </strong>

                <span>
                  {project}
                </span>
              </div>
            ))}

          </div>

        </section>


        {/* Eligibility */}

        <section className="CourseSection">

          <h2>Who Can Apply?</h2>

          <ul className="EligibilityList">

            {course.eligibility.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

        </section>


        {/* Requirements */}

        <section className="CourseSection">

          <h2>Requirements</h2>

          <ul className="EligibilityList">

            {course.requirements.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

        </section>


        {/* Schedule */}

        <section className="CourseSection">

          <h2>Schedule & Platform</h2>

          <p>
            <strong>Batch:</strong>{" "}
            {course.schedule}
          </p>

          <p>
            <strong>Live Classes:</strong>
          </p>

          <div className="PlatformList">

            {course.classPlatform.map(
              (platform, index) => (
                <span key={index}>
                  ✓ {platform}
                </span>
              )
            )}

          </div>

        </section>


        {/* Certificate */}

        <section className="CertificateBox">

          <h2>Certificate</h2>

          <p>
            {course.certificateDetails}
          </p>

        </section>


        {/* Bottom CTA */}

        <section className="BottomCTA">

          <h2>
            Ready to Start Learning?
          </h2>

          <p>
            Apply for the Kshatreeya Python
            Development & Automation Internship.
          </p>

          <button
            className="ApplyButton"
            onClick={() => {
              window.open(
                "YOUR_GOOGLE_FORM_URL",
                "_blank"
              );
            }}
          >
            Apply Now →
          </button>

        </section>

      </div>
    </div>
  );
};

export default CourseDetails;