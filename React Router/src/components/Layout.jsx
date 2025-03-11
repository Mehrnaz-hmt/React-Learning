import React from "react";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <AppNav />
      <Outlet/>
      <Footer style={{ marginTop: "5rem" }}/>
    </div>
  );
}

export default Layout;
