import React, { Fragment } from "react";

type RangeControlProps = {
  min?: any;
  max: any;
  step: any;
  id: any;
  title: string;
  value?: any;
  onChange: Function;
  className?: any;
  defaultValue?: any;
  labelTitle?: string;
  labelValue?: any;
  labelValueType?: string;
  type: string;
};

export const RangeControl: React.FC<RangeControlProps> = ({
  min,
  max,
  step,
  id,
  title,
  value,
  onChange,
  defaultValue,
  className,
  labelTitle,
  labelValue,
  labelValueType = "",
  type = "",
}) => {
  const additionalControls = () => {
    switch (type) {
      case "horizontal-position":
        return (
          <div className="btn-group ms-3 btn-group-sm" role="group">
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-start`}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`${type}-${id}-start`}
            >
              <i className="bi bi-align-start"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-center`}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`${type}-${id}-center`}
            >
              <i className="bi bi-align-center"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-end`}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`${type}-${id}-end`}
            >
              <i className="bi bi-align-end"></i>
            </label>
          </div>
        );
      case "vertical-position":
        return (
          <div className="btn-group ms-3 btn-group-sm" role="group">
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-top`}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`${type}-${id}-top`}
            >
              <i className="bi bi-align-top"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-middle`}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`${type}-${id}-middle`}
            >
              <i className="bi bi-align-middle"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-bottom`}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`${type}-${id}-bottom`}
            >
              <i className="bi bi-align-bottom"></i>
            </label>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <Fragment>
      <label
        htmlFor={id}
        className="fw-medium form-label d-flex flex-wrap align-items-center justify-content-between mt-4 mb-3"
      >
        <span>{labelTitle}</span>
        {additionalControls()}
      </label>
      <div className="d-flex align-items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          id={id}
          title={title}
          data-testid="rangeSliderInput"
          value={value}
          onChange={(e) => onChange(e)}
          className={`form-range ${className}`}
          defaultValue={defaultValue && defaultValue}
        />
        <span className="ms-3 badge bg-primary">{`${labelValue}${labelValueType}`}</span>
      </div>
    </Fragment>
  );
};
