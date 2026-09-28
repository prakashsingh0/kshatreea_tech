import React from "react";
import { useNavigate } from "react-router-dom";
import "./Coursecard.css";

const Coursecard = ({
  id,
  slug,
  badge,
  title,
  description,
  duration,
  mode,
  training,
  icon,
}) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/academy/course/${slug}`);
  };

  return (
    <div className="CourseContainer">
      <div className="CourseCard">

        <div className="CourseImage">
          {icon}
        </div>

        <div className="CourseContent">

          <span className="CourseBadge">
            {badge}
          </span>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="CourseInfo">

            <div>
              <span>Duration</span>
              <strong>{duration}</strong>
            </div>

            <div>
              <span>Mode</span>
              <strong>{mode}</strong>
            </div>

            <div>
              <span>Training</span>
              <strong>{training}</strong>
            </div>

          </div>

          <button
            className="CourseButton"
            onClick={handleApply}
          >
            View Details
            <span>→</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Coursecard;