import React from "react";
import {Link, NavLink} from "react-router-dom"

function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/app">Home</NavLink>
        </li>
        <li>
          <NavLink to="/app/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/app/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
