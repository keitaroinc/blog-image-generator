import React, { Fragment } from "react";

type MaskControlProps = {
  id: any;
  title: string;
  onChange: Function;
  className?: any;
  defaultValue?: any;
};

export const MaskControl: React.FC<MaskControlProps> = ({
  id,
  title,
  onChange,
  defaultValue,
}) => {
  return (
    <React.Fragment>
      <label
        title="Circle"
        htmlFor={`${id}-none`}
        className="fw-medium form-label mb-3"
      >
        {title}
      </label>
      <div className="btn-group btn-group-sm" role="group">
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-none`}
          value="none"
          checked={defaultValue === "none"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="None"
          htmlFor={`${id}-none`}
        >
          None
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-rounded`}
          value="rounded"
          checked={defaultValue === "rounded"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Rounded Square"
          htmlFor={`${id}-rounded`}
        >
          Rounded
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-square`}
          value="square"
          checked={defaultValue === "square"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Square"
          htmlFor={`${id}-square`}
        >
          Square
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-triangle`}
          value="triangle"
          checked={defaultValue === "triangle"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Free Form"
          htmlFor={`${id}-triangle`}
        >
          Triangle
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-circle`}
          value="circle"
          checked={defaultValue === "circle"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Circle"
          htmlFor={`${id}-circle`}
        >
          Circle
        </label>
      </div>
    </React.Fragment>
  );
};
