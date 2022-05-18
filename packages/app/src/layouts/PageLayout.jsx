import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function PageLayout() {
  return (
    <div className="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default PageLayout;
