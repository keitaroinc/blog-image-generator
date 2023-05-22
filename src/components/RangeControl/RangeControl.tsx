import React, { Fragment } from "react";

type RangeControlProps = {
  min?: any;
  max: any;
  step: any;
  id: any;
  value?: any;
  onChange: Function;
  className?: any;
  defaultValue?: any;
  labelTitle?: string;
  labelValue?: any;
  labelValueType?: string;
};

export const RangeControl: React.FC<RangeControlProps> = ({
  min,
  max,
  step,
  id,
  value,
  onChange,
  defaultValue,
  className,
  labelTitle,
  labelValue,
  labelValueType = '',
}) => {
  return (
    <Fragment>
      <label htmlFor={id} className="form-label d-flex flex-wrap align-items-center justify-content-between m-3">
        <span>{labelTitle}</span>
        <span className="badge bg-primary">{`${labelValue}${labelValueType}`}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        id={id}
        data-testid="rangeSliderInput"
        value={value}
        onChange={(e) => onChange(e)}
        className={`form-range ${className}`}
        defaultValue={defaultValue && defaultValue}
      />
    </Fragment>
  );
};
