import React from 'react'
import Coursecard from "./Coursecard";
import courseData from "./data/course.json";
const Courses = () => {
  return (
    <div className="CourseList">
        {courseData.courses.map((course) => (
          <Coursecard
            key={course.id}
            {...course}
          />
        ))}
      </div>
  )
}

export default Courses
