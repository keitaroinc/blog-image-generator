type ColorPickerProps = {
  inputId?: string;
  inputValue?: string;
  inputTitle?: string;
  onChange: Function;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  inputValue,
  inputId,
  inputTitle,
  onChange,
}) => {
  return (
    <input
      type="color"
      className="form-control form-control-color"
      id={inputId}
      data-testid="colorPicker"
      value={inputValue}
      title={inputTitle}
      onChange={(e) => onChange(e)}
    ></input>
  );
};
