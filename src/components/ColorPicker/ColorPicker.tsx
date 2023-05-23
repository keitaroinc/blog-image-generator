type ColorPickerProps = {
  inputId?: string;
  inputDefaultVaule?: string;
  inputTitle?: string;
  onChange: Function;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  inputDefaultVaule,
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
      defaultValue={inputDefaultVaule}
      title={inputTitle}
      onChange={(e) => onChange(e)}
    ></input>
  );
};
