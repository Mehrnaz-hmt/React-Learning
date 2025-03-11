import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">Payments</NavLink>
      </div>
<Outlet/>
    </div>
  );
}

export default Dashboard;

//inside dashboard ==> dashboard/profile  , dashboard/payments
