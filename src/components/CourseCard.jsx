import React from "react";
// import { courses } from "./CourseList";

function CourseCard({ course }) {
  return (
    <div key={course.id} className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseCardBody course={course} />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ course }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{course.title}</p>
        <p className="desc">{course.description}</p>
      </div>
      <span className="rate">{course.rate}</span>
    </div>
  );
}

function CourseCardFooter({ course }) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((tag,index) => {
          return (
            <span key={index} className="badge badge--secondary">
              {tag}
            </span>
          );
        })}
      </div>
      <div className="caption">
        <div className="date">
          {new Date(course.start).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </div>
        <span className="badge badge--primary">{course.status}</span>
      </div>
    </div>
  );
}
