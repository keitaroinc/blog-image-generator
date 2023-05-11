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
  labelValueType,
}) => {
  return (
    <Fragment>
      <label htmlFor={id} className="form-label m-3">
        {`${labelTitle}(${labelValue}${labelValueType})`}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        className={`form-range ${className}`}
        defaultValue={defaultValue && defaultValue}
      />
    </Fragment>
  );
};
