import React from "react";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
}

export default PageLayout;
