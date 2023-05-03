import React from "react";
import "./assets/scss/style.scss";
import { CanvasWrapper, SideBar } from "./components";

export const App = () => {
  return (
    <div className="row g-0 vh-100 overflow-hidden">
      <SideBar className="col-md-3 col-sm-4 d-flex flex-column bg-gray-light sidebar h-100 overflow-auto" />
      <div className="col-md-9 col-sm-8">
        <CanvasWrapper />
      </div>
    </div>
  );
};