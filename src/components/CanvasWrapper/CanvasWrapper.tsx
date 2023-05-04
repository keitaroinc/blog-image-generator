import * as React from "react";
import "./CanvasWrapper.scss";

export const CanvasWrapper: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className="canvas grid flex-grow-1">
        <h1 className="title w-75 ps-5">
          Headline text goes here and it can get pretty long
        </h1>
        <div className="icon">
          <img
            className="w-25 h-25 justify-self-end"
            src="/image-generator/static/media/keitaro-logo-full-color.44775c6e1a17ea7494df1b4c93c5dd09.svg"
            alt="Keitaro logo"
          />
        </div>
        <img
          className="align-self-end logo"
          src="/image-generator/static/media/keitaro-logo-full-color.44775c6e1a17ea7494df1b4c93c5dd09.svg"
          alt="Keitaro logo"
        />
      </div>
      <button className="btn btn-success">Download</button>
    </div>
  );
};
