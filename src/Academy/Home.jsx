import React from "react";
import Navbar from "./Navbar";
import Coursecard from "./Coursecard";
import courseData from "./data/course.json";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="CourseList">
        {courseData.courses.map((course) => (
          <Coursecard
            key={course.id}
            {...course}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;