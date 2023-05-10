import React from "react";

type RangeControlProps = {
  min?: any;
  max: any;
  step: any;
  id: any;
  value?: any;
  onChange: Function;
  className?: any;
  defaultValue?: any;
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
}) => {
  return (
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
  );
};
