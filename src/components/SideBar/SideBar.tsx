import React from "react";
import {
  CanvasBackground,
  CanvasGradient,
  CanvasIcon,
  CanvasHeadline,
  CanvasLogo,
} from "../";
import keitaroLogo from "../../assets/svg/keitaro-logo-full-color.svg"
import { CanvasBorder } from "../CanvasBorder/CanvasBorder";
import { CanvasTemplates } from "../CanvasTemplates/CanvasTemplates";

export const SideBar: React.FC<{ className?: string }> = ({ className }) => {
    "use no memo"
  console.log("Render Sidebar")
  return (
    <div data-testid="SideBar" className={className}>
      <div className="bg-gray-light sticky-top shadow shadow-lg d-flex justify-content-center flex-column align-items-center py-5 px-3">
        <a href="/blog-image-generator" rel="bookmark">
          <img
            className="img-fluid sidebar-logo p-3"
            src={keitaroLogo}
            alt="Keitaro Logo"
          />
        </a>
        <p className="mb-0 bg-white py-1 px-2 fs-6 fw-bold">
          Blog Image Generator
        </p>
      </div>
      <div className="list-group list-group-flush">
        <div className="list-group-item">
          <p className="text-muted m-4">
            <span className="h4">👋</span> Use the following controls to{" "}
            <strong>adjust the image</strong> and click on{" "}
            <strong>Download</strong> to generate an image file.
          </p>
        </div>
        <CanvasTemplates />
        <CanvasHeadline />
        <CanvasBorder />
        <CanvasBackground />
        <CanvasGradient />
        <CanvasIcon />
        <CanvasLogo />
      </div>
    </div>
  );
};
