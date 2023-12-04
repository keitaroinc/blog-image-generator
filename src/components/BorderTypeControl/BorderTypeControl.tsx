import React, { Fragment } from "react";

type BorderTypeControlProps = {
  id: any;
  title: string;
  onChange: Function;
  className?: any;
  defaultValue?: any;
};

export const BorderTypeControl: React.FC<BorderTypeControlProps> = ({
  id,
  title,
  onChange,
  defaultValue,
}) => {
  return (
    <React.Fragment>
      <label
        title="Circle"
        htmlFor={`${id}-solid`}
        className="fw-medium form-label mt-3 mb-3"
      >
        {title}
      </label>
      <div className="btn-group btn-group-sm" role="group">
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-solid`}
          value="solid"
          checked={defaultValue === "solid"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Solid"
          htmlFor={`${id}-solid`}
        >
          Solid
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-dashed`}
          value="dashed"
          checked={defaultValue === "dashed"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Dashed"
          htmlFor={`${id}-dashed`}
        >
          Dashed
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-dotted`}
          value="dotted"
          checked={defaultValue === "dotted"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Dotted"
          htmlFor={`${id}-dotted`}
        >
          Dotted
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-double`}
          value="double"
          checked={defaultValue === "double"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Double"
          htmlFor={`${id}-double`}
        >
          Double
        </label>
        <input
          type="radio"
          className="btn-check"
          name={id}
          id={`${id}-groove`}
          value="groove"
          checked={defaultValue === "groove"}
          onChange={(e) => onChange(e)}
        />
        <label
          className="btn btn-outline-secondary"
          title="Groove"
          htmlFor={`${id}-groove`}
        >
          Groove
        </label>
      </div>
    </React.Fragment>
  );
};
