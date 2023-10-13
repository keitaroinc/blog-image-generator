import React, { Fragment } from "react";

type RangeControlProps = {
  min?: any;
  max: any;
  step: any;
  id: any;
  title: string;
  value?: any;
  align?: string;
  onChange: Function;
  onHorizontalAlignChange?: any;
  onVerticalAlignChange?: any;
  className?: any;
  defaultValue?: any;
  labelTitle?: string;
  labelValue?: any;
  labelValueType?: string;
  type?: string;
};

export const RangeControl: React.FC<RangeControlProps> = ({
  min,
  max,
  step,
  id,
  title,
  value,
  onChange,
  align,
  onHorizontalAlignChange,
  onVerticalAlignChange,
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
              value="start"
              checked={align === "start"}
              onChange={(e) => onHorizontalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Align to Left"
              htmlFor={`${type}-${id}-start`}
            >
              <i className="bi bi-align-start"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-center`}
              value="center"
              checked={align === "center"}
              onChange={(e) => onHorizontalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Align to Center"
              htmlFor={`${type}-${id}-center`}
            >
              <i className="bi bi-align-center"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-end`}
              value="end"
              checked={align === "end"}
              onChange={(e) => onHorizontalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Align to Right"
              htmlFor={`${type}-${id}-end`}
            >
              <i className="bi bi-align-end"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-none`}
              value=""
              checked={align === ""}
              onChange={(e) => onHorizontalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Custom Position"
              htmlFor={`${type}-${id}-none`}
            >
              <i className="bi bi-distribute-horizontal"></i>
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
              id={`${type}-${id}-start`}
              value="start"
              checked={align === "start"}
              onChange={(e) => onVerticalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Align to Top"
              htmlFor={`${type}-${id}-start`}
            >
              <i className="bi bi-align-top"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-center`}
              value="center"
              checked={align === "center"}
              onChange={(e) => onVerticalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Align to Middle"
              htmlFor={`${type}-${id}-center`}
            >
              <i className="bi bi-align-middle"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-end`}
              value="end"
              checked={align === "end"}
              onChange={(e) => onVerticalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Align to Bottom"
              htmlFor={`${type}-${id}-end`}
            >
              <i className="bi bi-align-bottom"></i>
            </label>
            <input
              type="radio"
              className="btn-check"
              name={`${type}-${id}`}
              id={`${type}-${id}-none`}
              value=""
              checked={align === ""}
              onChange={(e) => onVerticalAlignChange(e)}
            />
            <label
              className="btn btn-outline-secondary"
              title="Custom Position"
              htmlFor={`${type}-${id}-none`}
            >
              <i className="bi bi-distribute-vertical"></i>
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
          disabled={align && align !== "" ? true : false}
        />
        <span className="ms-3 badge bg-primary">
          {align && align !== "" ? align : `${labelValue}${labelValueType}`}
        </span>
      </div>
    </Fragment>
  );
};
