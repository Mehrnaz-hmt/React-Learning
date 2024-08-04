import React from "react";

const myStatus = ["Upcoming", "Active", "Completed"];

function Header() {
    const count = 0;
  return (
    <div>
      <h1 >My Courses </h1>
      <div className="course-status">
        {myStatus.map((s, index) => (
          <div  key={index}><a href="#">{s}</a></div>
        ))}
      </div>
    </div>
  );
}

export default Header;
