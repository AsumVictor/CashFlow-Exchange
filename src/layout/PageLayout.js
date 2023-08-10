import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function PageLayout() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default PageLayout;
